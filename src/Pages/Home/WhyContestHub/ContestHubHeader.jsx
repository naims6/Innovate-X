import React from "react";

const ContestHubHeader = ({ theme }) => {
  return (
    <div className="text-center mb-20">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          ✨ Why Choose Us
        </span>
      </div>

      {/* Main Title */}
      <h2
        className={`text-5xl sm:text-6xl font-bold mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Why{" "}
        <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ContestHub
        </span>
        ?
      </h2>

      {/* Subtitle */}
      <p
        className={`text-xl max-w-3xl mx-auto ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        We've built the most trusted platform for developers to showcase their
        skills, compete fairly, and win amazing prizes. Here's what makes us
        different.
      </p>
    </div>
  );
};

export default ContestHubHeader;
