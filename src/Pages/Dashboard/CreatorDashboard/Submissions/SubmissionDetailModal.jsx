import React, { useState } from "react";

const SubmissionDetailModal = ({ submission, theme, onClose }) => {
  const [declaredWinner, setDeclaredWinner] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        className={`rounded-2xl w-full max-w-2xl transition-colors duration-300 ${
          theme === "dark"
            ? "bg-slate-800 border border-slate-700"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            theme === "dark" ? "border-slate-700" : "border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Submission Details
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              theme === "dark" ? "hover:bg-slate-700" : "hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Participant Info */}
          <div className="flex items-center gap-4">
            <img
              src={submission.participantImage}
              alt={submission.participantName}
              className="w-20 h-20 rounded-full object-cover border-3 border-indigo-500"
            />
            <div>
              <h3
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {submission.participantName}
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {submission.participantEmail}
              </p>
              <p
                className={`text-xs mt-2 font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Submitted on{" "}
                {new Date(submission.submissionDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Contest Info */}
          <div
            className={`rounded-lg p-4 ${
              theme === "dark" ? "bg-slate-700/50" : "bg-gray-50"
            }`}
          >
            <p
              className={`text-sm font-medium mb-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Contest Name
            </p>
            <p
              className={`text-lg font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {submission.contestName}
            </p>
          </div>

          {/* Task Information */}
          <div>
            <label
              className={`block text-sm font-bold mb-3 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              📋 Submitted Work
            </label>
            <div
              className={`rounded-lg p-4 whitespace-pre-wrap text-sm leading-relaxed ${
                theme === "dark"
                  ? "bg-slate-700/50 text-gray-300"
                  : "bg-gray-50 text-gray-700"
              }`}
            >
              {submission.taskInfo}
            </div>
          </div>

          {/* Status */}
          <div
            className={`rounded-lg p-4 border ${
              theme === "dark"
                ? "bg-blue-900/30 border-blue-700/50"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                theme === "dark" ? "text-blue-300" : "text-blue-900"
              }`}
            >
              ℹ️ Status:{" "}
              <span
                className={
                  submission.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }
              >
                {submission.status}
              </span>
            </p>
          </div>

          {!declaredWinner && (
            <div
              className={`rounded-lg p-4 border ${
                theme === "dark"
                  ? "bg-amber-900/30 border-amber-700/50"
                  : "bg-amber-50 border-amber-200"
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-amber-300" : "text-amber-900"
                }`}
              >
                ⚠️ Declare this participant as the winner of this contest?
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-end gap-3 p-6 border-t ${
            theme === "dark" ? "border-slate-700" : "border-gray-200"
          }`}
        >
          <button
            onClick={onClose}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-slate-700 hover:bg-slate-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            Close
          </button>
          {!declaredWinner && (
            <button
              onClick={() => setDeclaredWinner(true)}
              className="px-6 py-2 rounded-lg font-semibold flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-lg"
            >
              <span>🏆</span>
              Declare Winner
            </button>
          )}
          {declaredWinner && (
            <div
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-white bg-linear-to-r from-yellow-500 to-orange-500`}
            >
              <span>✓</span>
              Winner Declared!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetailModal;
