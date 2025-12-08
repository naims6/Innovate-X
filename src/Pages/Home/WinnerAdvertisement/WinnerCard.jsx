import React from "react";

const WinnerCard = ({ winner, index, theme }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 bg-bg-surface/30`}
      style={{
        animation: `slideUpIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      {/* Winner Header with Badge */}
      <div className="relative px-6 pt-6 pb-0">
        <div className="flex items-end justify-between mb-4">
          <div className="flex items-end gap-3">
            <img
              src={winner.avatar}
              alt={winner.name}
              className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover"
            />
            <div className="mb-2">
              <h3 className={`text-lg font-bold whitespace-nowrap`}>
                {winner.name}
              </h3>
              <p
                className={`text-sm font-semibold ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {winner.position}
              </p>
            </div>
          </div>
          <span className="text-5xl">{winner.badge}</span>
        </div>
      </div>

      {/* Prize Money */}
      <div
        className={`px-6 py-4 border-t ${
          theme === "dark" ? "border-slate-700" : "border-gray-200"
        }`}
      >
        <p className={`text-xs font-medium mb-1`}>Prize Money</p>
        <p className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          ${winner.prize.toLocaleString()}
        </p>
      </div>

      {/* Contest Name */}
      <div className={`px-6 py-3 border-t border-border`}>
        <p className={`text-sm font-semibold line-clamp-2`}>
          {winner.contestName}
        </p>
      </div>

      {/* View Profile Button */}
      <button
        className={`w-full py-3 px-4 font-semibold text-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 ${
          theme === "dark"
            ? "text-indigo-400 hover:text-indigo-300"
            : "text-indigo-600 hover:text-indigo-700"
        }`}
      >
        View Profile
        <svg
          className="w-4 h-4 transition-transform duration-300"
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

export default WinnerCard;
