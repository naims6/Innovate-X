import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router";
import ContestCard from "../../Components/ContestCard";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import AllContestHeader from "./AllContestHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllContests = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const { data: allContest = [], isLoading } = useQuery({
    queryKey: ["allContest"],
    queryFn: async () => {
      const result = await axiosSecure(`/contests?search=${searchTerm}`);
      return result.data;
    },
  });
  console.log(allContest);

  const categories = ["All", ...new Set(allContest.map((c) => c.category))];

  const getCategoryColor = (category) => {
    const colors = {
      Design: "from-pink-500 to-rose-500",
      Programming: "from-blue-500 to-cyan-500",
      Development: "from-purple-500 to-indigo-500",
      Mobile: "from-green-500 to-emerald-500",
      "Data Science": "from-orange-500 to-red-500",
      Security: "from-red-500 to-pink-500",
      DevOps: "from-cyan-500 to-blue-500",
      "AI/ML": "from-violet-500 to-purple-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  const handleContestClick = (contestId) => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/contest/${contestId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className={`mt-16 min-h-screen transition-colors duration-300 `}>
      {/* Header Section */}
      <AllContestHeader
        theme={theme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        contests={allContest}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

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
                    key={contest.id}
                    contest={contest}
                    index={index}
                    theme={theme}
                    getCategoryColor={getCategoryColor}
                    onDetailsClick={() => handleContestClick(contest.id)}
                  />
                ))}
              </div>
            </>
          ) : (
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AllContests;
