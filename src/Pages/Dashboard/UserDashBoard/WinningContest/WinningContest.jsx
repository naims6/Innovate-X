import React from "react";
import useTheme from "../../../../hooks/useTheme";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router";
import { FaTrophy } from "react-icons/fa";
// Import a trophy icon

const MyWinningContests = () => {
  const { theme } = useTheme();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: winnings = [], isLoading } = useQuery({
    queryKey: ["winnings", user?.email], // Added user email to queryKey for safety
    queryFn: async () => {
      const res = await axiosSecure(`/contests/winner/${user?.email}`);
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
        <div className="text-xl font-medium animate-pulse">
          Loading winnings...
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-green-600 to-blue-600">
          My Winning Contests
        </h1>

        {winnings.length > 0 ? (
          /* Grid showing winners */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winnings.map((win) => (
              <div
                key={win._id}
                className={`relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-green-600 dark:text-green-400">
                    {win.name}
                  </h2>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Winner
                  </span>
                </div>
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {win.title}
                </p>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Prize: {win.prizeMoney}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State UI */
          <div
            className={`flex flex-col items-center justify-center p-16 rounded-2xl border-2 border-dashed transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800/40 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="p-5 rounded-full bg-green-100 dark:bg-green-900/30 mb-6 text-green-600 dark:text-green-400">
              <FaTrophy size={50} />
            </div>
            <h2
              className={`text-2xl font-bold mb-3 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              No Victories Yet
            </h2>
            <p
              className={`text-center max-w-md mb-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't give up! Every great champion started somewhere. Keep
              participating and your first win will be right around the corner.
            </p>
            <Link
              to="/all-contests"
              className="px-8 py-3 bg-linear-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Find Contests to Join
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWinningContests;
