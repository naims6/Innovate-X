import React from "react";
import { Link } from "react-router";

const Header = ({ theme }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-16">
      <div>
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="text-5xl">🏆</span>
          Popular Contests
        </h2>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Join thousands of developers competing worldwide
        </p>
      </div>

      <Link
        to="/all-contests"
        className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
      >
        Show All Contests
        <svg
          className="w-5 h-5 ml-2"
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
      </Link>
    </div>
  );
};

export default Header;
