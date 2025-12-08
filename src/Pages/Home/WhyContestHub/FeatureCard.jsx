import React from "react";

const FeatureCard = ({ feature, index, theme }) => {
  return (
    <div
      className={`group relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 bg-bg-surface/30 border border-border/60 shadow-sm hover:shadow-lg`}
      style={{
        animation: `slideUpIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.08}s`,
        opacity: 0,
      }}
    >
      {/* Background linear Blur */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-xl bg-linear-to-r ${feature.color}`}
      ></div>

      {/* Icon Container */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 transition-all duration-300 bg-linear-to-r ${feature.color} shadow-lg group-hover:scale-110`}
      >
        <span className="text-3xl">{feature.icon}</span>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-4 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {feature.description}
      </p>

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
        <span>Learn More</span>
        <svg
          className="w-4 h-4"
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
      </div>
    </div>
  );
};

export default FeatureCard;
