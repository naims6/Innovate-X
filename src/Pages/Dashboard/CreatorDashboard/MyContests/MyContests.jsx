import React from "react";
import useTheme from "../../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import MyContestsTableRow from "./MyContestsTableRow";
// You can use a standard icon from your library or a simple emoji
import { FiFolderMinus } from "react-icons/fi";

const MyContests = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const axiosSecure = useAxiosSecure();

  const {
    data: myContests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/contests/email/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const statsData = [
    { label: "Total Contests", value: myContests.length, icon: "📊" },
    {
      label: "Active",
      value: myContests.filter((c) => c.status === "approved").length,
      icon: "✅",
    },
    {
      label: "Total Submissions",
      value: myContests.reduce((acc, c) => acc + (c.submissions || 0), 0),
      icon: "📤",
    },
    {
      label: "Total Participants",
      value: myContests.reduce((acc, c) => acc + (c.participants || 0), 0),
      icon: "👥",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h1
          className={`text-xl font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Loading your contests...
        </h1>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          My Contests
        </h1>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Manage and monitor all your contests in one place
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-slate-800 border border-slate-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <p
              className={`text-3xl font-bold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`text-sm font-medium flex items-center gap-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="text-xl">{stat.icon}</span>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Conditional Rendering: Table vs Empty State */}
      {myContests.length > 0 ? (
        <div
          className={`rounded-2xl overflow-hidden transition-colors duration-300 ${
            theme === "dark"
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b ${
                    theme === "dark"
                      ? "border-slate-700 bg-slate-700/50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Contest Name
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Category
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Status
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Participants
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Submissions
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Prize
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y"
                style={{
                  borderColor: theme === "dark" ? "#475569" : "#e5e7eb",
                }}
              >
                {myContests.map((contest) => (
                  <MyContestsTableRow
                    key={contest._id}
                    contest={contest}
                    theme={theme}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State UI */
        <div
          className={`flex flex-col items-center justify-center p-16 rounded-2xl border-2 border-dashed transition-colors duration-300 ${
            theme === "dark"
              ? "bg-slate-800/40 border-slate-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="p-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4 text-indigo-500">
            <FiFolderMinus size={40} />
          </div>
          <h2
            className={`text-2xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            No Contests Created Yet
          </h2>
          <p
            className={`text-center max-w-md ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            You haven't created any contests yet. Once you add a contest, it
            will appear here for management and monitoring.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyContests;
