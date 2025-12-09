import React, { useState } from "react";
import useTheme from "../../../hooks/useTheme";

const MyContests = () => {
  const { theme } = useTheme();
  const [contests, setContests] = useState([
    {
      id: 1,
      name: "Web Design Showdown",
      category: "Design",
      status: "Confirmed",
      participants: 45,
      prize: 5000,
      deadline: "2024-03-15",
      submissions: 12,
    },
    {
      id: 2,
      name: "Algorithm Challenge",
      category: "Programming",
      status: "Pending",
      participants: 23,
      prize: 3000,
      deadline: "2024-02-20",
      submissions: 5,
    },
    {
      id: 3,
      name: "UI/UX Design",
      category: "Design",
      status: "Rejected",
      participants: 0,
      prize: 4000,
      deadline: "2024-02-10",
      submissions: 0,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Design: "from-pink-500 to-rose-500",
      Programming: "from-blue-500 to-cyan-500",
      Development: "from-purple-500 to-indigo-500",
      Mobile: "from-green-500 to-emerald-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

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
        {[
          { label: "Total Contests", value: contests.length, icon: "📊" },
          {
            label: "Active",
            value: contests.filter((c) => c.status === "Confirmed").length,
            icon: "✅",
          },
          {
            label: "Total Submissions",
            value: contests.reduce((acc, c) => acc + c.submissions, 0),
            icon: "📤",
          },
          {
            label: "Total Participants",
            value: contests.reduce((acc, c) => acc + c.participants, 0),
            icon: "👥",
          },
        ].map((stat, index) => (
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

      {/* Table */}
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
              {contests.map((contest) => (
                <tr
                  key={contest.id}
                  className={`transition-colors duration-300 hover:${
                    theme === "dark" ? "bg-slate-700/50" : "bg-gray-50"
                  }`}
                >
                  <td
                    className={`px-6 py-4 font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {contest.name}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r ${getCategoryColor(
                        contest.category
                      )}`}
                    >
                      {contest.category}
                    </span>
                  </td>
                  <td className={`px-6 py-4`}>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        contest.status
                      )}`}
                    >
                      {contest.status}
                    </span>
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {contest.participants}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold text-indigo-600 dark:text-indigo-400`}
                  >
                    {contest.submissions}
                  </td>
                  <td
                    className={`px-6 py-4 font-bold bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}
                  >
                    ${contest.prize}
                  </td>
                  <td className={`px-6 py-4`}>
                    <div className="flex gap-2">
                      {contest.status === "Pending" && (
                        <>
                          <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                            Edit
                          </button>
                          <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-300">
                            Delete
                          </button>
                        </>
                      )}
                      <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300">
                        See Submissions
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyContests;
