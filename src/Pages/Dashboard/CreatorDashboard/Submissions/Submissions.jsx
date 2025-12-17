import React, { useState } from "react";
import SubmissionDetailModal from "./SubmissionDetailModal";
import useTheme from "../../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
// Import an icon if you use react-icons, or use a plain emoji/SVG
import { FiInbox } from "react-icons/fi";

const Submissions = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data: submissions = [] } = useQuery({
    enabled: !!user,
    queryKey: ["submission"],
    queryFn: async () => {
      const res = await axiosSecure(`/submissions/${user?.email}`);
      return res.data;
    },
  });

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
        {submissions.length > 0 ? (
          submissions.map((submission) => (
            <div
              key={submission._id}
              className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }`}
              onClick={() => setSelectedSubmission(submission)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={submission.submittedBy.image}
                    alt={submission.submittedBy.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-lg font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {submission.submittedBy.name}
                      </h3>
                    </div>

                    <p
                      className={`text-sm mb-3 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {submission?.submittedBy?.email}
                    </p>

                    <div
                      className={`text-sm mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Contest:</span>{" "}
                      {submission.name}
                    </div>

                    <p
                      className={`text-sm line-clamp-2 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {submission.submissionLink}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <span
                    className={`text-xs font-medium ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {new Date(submission.submitTime).toLocaleDateString()}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSubmission(submission);
                    }}
                    className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 active:scale-95"
                  >
                    See Submissions
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty State UI */
          <div
            key="empty state"
            className={`flex flex-col items-center justify-center p-12 rounded-xl border-2 border-dashed ${
              theme === "dark"
                ? "bg-slate-800/50 border-slate-700"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4">
              <FiInbox className="text-4xl text-indigo-500" />
            </div>
            <h2
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              No Submissions Found
            </h2>
            <p
              className={`text-center max-w-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              It looks like there are no entries for your contests yet. Check
              back later!
            </p>
          </div>
        )}
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <SubmissionDetailModal
          submission={selectedSubmission}
          theme={theme}
          user={user}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
};

export default Submissions;
