import React from "react";

const CTASection = ({ theme }) => {
  return (
    <div className="mt-16 text-center">
      <p
        className={`text-lg mb-6 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Ready to showcase your skills?
      </p>
      <button className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50">
        Explore Contests
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
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default CTASection;
