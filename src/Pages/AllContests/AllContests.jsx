import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import ContestCard from "../../Components/ContestCard";
import useTheme from "../../hooks/useTheme";

import AllContestHeader from "./AllContestHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Pagination from "./Pagination";

const AllContests = () => {
  const { theme } = useTheme();

  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["allContest", searchTerm, selectedCategory, sortBy, page],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests/type/approved", {
        params: {
          search: searchTerm,
          category: selectedCategory === "All" ? "" : selectedCategory,
          sort: sortBy,
          page,
          limit,
        },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  const allContest = data?.contests || [];
  const totalPages = data?.totalPages || 1;
  const totalContest = data?.total || 1;

  const { data: categories = ["All"] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contest-categories"); // You'll need this endpoint
      return ["All", ...res.data];
    },
  });

  const getCategoryColor = (category) => {
    const colors = {
      design: "from-pink-500 to-rose-500",
      programming: "from-blue-500 to-cyan-500",
      development: "from-purple-500 to-indigo-500",
      mobile: "from-green-500 to-emerald-500",
      "data science": "from-orange-500 to-red-500",
      security: "from-red-500 to-pink-500",
      devops: "from-cyan-500 to-blue-500",
      "ai/ml": "from-violet-500 to-purple-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  // useEffect(() => {
  //   setPage(1);
  // }, [searchTerm, selectedCategory, sortBy]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div className={`mt-16 min-h-screen transition-colors duration-300 `}>
      {/* Header Section */}
      <AllContestHeader
        theme={theme}
        totalContest={totalContest}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <h1 className="text-xl mt-4">Loading...</h1>
        </div>
      ) : (
        <>
          {" "}
          {/* Main Content */}
          <div className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
            <div className="max-w-7xl mx-auto">
              {allContest.length > 0 ? (
                <>
                  {/* Results Count */}
                  <div className="mb-8">
                    <p
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Showing{" "}
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {allContest.length}
                      </span>{" "}
                      contests
                    </p>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allContest.map((contest, index) => (
                      <ContestCard
                        key={contest._id}
                        contest={contest}
                        index={index}
                        theme={theme}
                        getCategoryColor={getCategoryColor}
                      />
                    ))}
                  </div>
                  <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                  />
                </>
              ) : (
                // in no contest fouund
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    No Contests Found
                  </h3>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Try adjusting your search or filters to find contests
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllContests;
