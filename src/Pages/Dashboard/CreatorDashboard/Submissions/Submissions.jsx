import React, { useState } from "react";
import SubmissionDetailModal from "./SubmissionDetailModal";
import useTheme from "../../../../hooks/useTheme";

const Submissions = () => {
  const { theme } = useTheme();
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      contestName: "Web Design Showdown",
      participantName: "John Smith",
      participantEmail: "john@example.com",
      submissionDate: "2024-02-15",
      status: "Pending",
      taskInfo:
        "https://github.com/john/project\nhttps://demo.example.com\nResponsive design implemented with React and Tailwind CSS",
      participantImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      contestName: "Web Design Showdown",
      participantName: "Sarah Johnson",
      participantEmail: "sarah@example.com",
      submissionDate: "2024-02-14",
      status: "Pending",
      taskInfo:
        "https://github.com/sarah/design\nFull Figma design file with components",
      participantImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      contestName: "Algorithm Challenge",
      participantName: "Mike Davis",
      participantEmail: "mike@example.com",
      submissionDate: "2024-02-13",
      status: "Pending",
      taskInfo:
        "Efficient sorting algorithm implementation\nTime complexity: O(n log n)\nSpace complexity: O(1)",
      participantImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
  ]);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Contest Submissions
        </h1>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Review submissions and declare winners
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8">
        {["All", "Pending", "Winner Declared"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              tab === "All"
                ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                : theme === "dark"
                ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Submissions Grid */}
      <div className="space-y-4">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
              theme === "dark"
                ? "bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                : "bg-white border border-gray-200 hover:shadow-lg"
            }`}
            onClick={() => setSelectedSubmission(submission)}
          >
            <div className="flex items-start justify-between">
              {/* Left Content */}
              <div className="flex items-start gap-4 flex-1">
                <img
                  src={submission.participantImage}
                  alt={submission.participantName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-lg font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {submission.participantName}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        submission.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      }`}
                    >
                      {submission.status}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {submission.participantEmail}
                  </p>

                  <div
                    className={`text-sm mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="font-semibold">Contest:</span>{" "}
                    {submission.contestName}
                  </div>

                  <p
                    className={`text-sm line-clamp-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {submission.taskInfo}
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-end gap-3">
                <span
                  className={`text-xs font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {new Date(submission.submissionDate).toLocaleDateString()}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSubmission(submission);
                  }}
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 active:scale-95"
                >
                  Declare Winner
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <SubmissionDetailModal
          submission={selectedSubmission}
          theme={theme}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
};

export default Submissions;
