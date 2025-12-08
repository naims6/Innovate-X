import React from "react";

const WinnerHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3`}
      >
        <span className="text-4xl md:text-6xl">🎖️</span>
        Hall of Champions
      </h2>
      <p className={`text-xl max-w-2xl mx-auto `}>
        Celebrate the achievements of our top performers and be inspired to join
        the winning circle
      </p>
    </div>
  );
};

export default WinnerHeader;
