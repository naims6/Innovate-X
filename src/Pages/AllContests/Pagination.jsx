import React from "react";
import useTheme from "../../hooks/useTheme";

const Pagination = ({ page, setPage, totalPages }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {/* Prev Button */}
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
          ${
            theme === "dark"
              ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages).keys()].map((num) => {
        const currentPage = num + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={num}
            onClick={() => setPage(currentPage)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : theme === "dark"
                  ? "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {currentPage}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage((prev) => prev + 1)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
          ${
            theme === "dark"
              ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
