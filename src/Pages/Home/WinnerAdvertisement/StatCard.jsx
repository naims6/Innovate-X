import React from "react";

const StatCard = ({ icon, label, value }) => {
  return (
    <div
      className={`rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 border border-border/60 bg-bg-surface/30
       `}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <p className={`text-sm font-medium mb-2 `}>{label}</p>
      <p
        className={`text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatCard;
