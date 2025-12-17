import React from "react";
import useTheme from "../../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router";

const MyParticipate = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: contests = [], isLoading } = useQuery({
    enabled: !!user,
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/participate-contest/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="text-xl">Loading contests...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-8`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
          My Participated Contests
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <div
              key={contest.contestId}
              className={`relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-103 flex flex-col justify-between ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {contest.name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    contest.paymentStatus === "Paid"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {contest.paymentStatus}
                </span>
              </div>
              <p
                className={`text-sm mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {contest.title}
              </p>
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Deadline: {new Date(contest.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/contests/${contest.contestId}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyParticipate;
