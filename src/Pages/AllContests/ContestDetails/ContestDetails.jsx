import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import SubmitTaskModal from "./SubmitTaskModal";
import useTheme from "../../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ContestDetails = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { data: contest = {}, isLoading } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const result = await axiosSecure(`/contests/${id}`);
      return result.data;
    },
  });
  console.log(contest);
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 15,
    ended: false,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          return { ...prev, ended: true };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
          : "bg-linear-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Banner Section */}
      <div className="relative h-96 sm:h-[500px] overflow-hidden group">
        <img
          src={contest.banner}
          alt={contest.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/all-contests")}
          className="absolute top-22 left-24 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-lg transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        {/* Banner Text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-linear-to-r from-pink-500 to-rose-500`}
              >
                {contest.category}
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                  contest.level === "Beginner"
                    ? "bg-green-500"
                    : contest.level === "Intermediate"
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
              >
                {contest.level}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {contest.name}
            </h1>
            <p className="text-gray-200 text-lg">
              Created by{" "}
              <span className="font-semibold">{contest.creatorName}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Description Section */}
            <div
              className={`rounded-2xl p-8 mb-8 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                About This Contest
              </h2>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {contest.description}
              </p>

              <div
                className={`prose prose-invert max-w-none ${
                  theme === "dark" ? "prose-dark" : ""
                }`}
              >
                <p
                  className={`text-base leading-relaxed mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {contest.fullDescription}
                </p>
              </div>
            </div>

            {/* Task Details Section */}
            <div
              className={`rounded-2xl p-8 mb-8 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="text-4xl">📋</span>
                Task Details
              </h2>

              <div
                className={`bg-opacity-50 rounded-xl p-6 mb-6 ${
                  theme === "dark"
                    ? "bg-indigo-900/30 border border-indigo-700/50"
                    : "bg-indigo-50 border border-indigo-200"
                }`}
              >
                <p
                  className={`whitespace-pre-line text-base leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {contest.taskDetails}
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  theme === "dark"
                    ? "bg-amber-900/30 border border-amber-700/50"
                    : "bg-amber-50 border border-amber-200"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    theme === "dark" ? "text-amber-300" : "text-amber-900"
                  }`}
                >
                  💡 Tip: Read the task details carefully and ensure you submit
                  all required deliverables before the deadline.
                </p>
              </div>
            </div>

            {/* Winner Section */}
            {contest.winner && (
              <div
                className={`rounded-2xl p-8 mb-8 bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 transition-colors duration-300`}
              >
                <h2
                  className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <span className="text-4xl">🏆</span>
                  Contest Winner
                </h2>

                <div className="flex items-center gap-6">
                  <img
                    src={contest.winnerImage}
                    alt={contest.winner}
                    className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
                  />
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {contest.winner}
                    </h3>
                    <p
                      className={`text-lg ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Winner of this contest
                    </p>
                    <p className="text-xl font-bold bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mt-2">
                      Won ${contest.prize.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Prize Card */}
            <div
              className={`rounded-2xl p-8 mb-6 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-linear-to-br from-slate-800 to-slate-700 border border-slate-700"
                  : "bg-linear-to-br from-white to-gray-50 border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Prize Money
              </p>
              <p className="text-4xl font-bold bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-4">
                ${contest.prize.toLocaleString()}
              </p>
              <div
                className={`flex items-center gap-2 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>👥</span>
                <span>
                  {contest.participants.toLocaleString()} Participants
                </span>
              </div>
            </div>

            {/* Deadline Card */}
            <div
              className={`rounded-2xl p-8 mb-6 transition-colors duration-300 ${
                timeLeft.ended
                  ? theme === "dark"
                    ? "bg-red-900/30 border border-red-700/50"
                    : "bg-red-50 border border-red-200"
                  : theme === "dark"
                  ? "bg-linear-to-br from-slate-800 to-slate-700 border border-slate-700"
                  : "bg-linear-to-br from-white to-gray-50 border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-medium mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {timeLeft.ended ? "Contest Status" : "Time Remaining"}
              </p>

              {timeLeft.ended ? (
                <div className="text-center">
                  <p
                    className={`text-3xl font-bold ${
                      theme === "dark" ? "text-red-400" : "text-red-600"
                    }`}
                  >
                    Contest Ended
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    This contest has concluded
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.minutes },
                    { label: "Secs", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`text-center rounded-lg p-3 ${
                        theme === "dark" ? "bg-slate-700" : "bg-gray-100"
                      }`}
                    >
                      <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        {String(item.value).padStart(2, "0")}
                      </p>
                      <p
                        className={`text-xs font-semibold ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p
                className={`text-xs text-center ${
                  theme === "dark" ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Deadline: {new Date(contest.deadline).toLocaleDateString()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {isRegistered ? (
                <>
                  {/* Submit Task Button */}
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform ${
                      timeLeft.ended
                        ? "bg-gray-400 text-white cursor-not-allowed opacity-50"
                        : "bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 active:scale-95"
                    }`}
                    disabled={timeLeft.ended}
                  >
                    <span>📤</span>
                    Submit Task
                  </button>

                  {/* Registered Status */}
                  <div
                    className={`rounded-lg p-4 text-center ${
                      theme === "dark"
                        ? "bg-green-900/30 border border-green-700/50"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <p
                      className={`font-semibold flex items-center justify-center gap-2 ${
                        theme === "dark" ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      <span>✓</span>
                      You are Registered
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Register / Pay Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform ${
                      timeLeft.ended
                        ? "bg-gray-400 text-white cursor-not-allowed opacity-50"
                        : "bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95"
                    }`}
                    disabled={timeLeft.ended}
                  >
                    <span>💳</span>
                    Register & Pay
                  </button>

                  {timeLeft.ended && (
                    <div
                      className={`rounded-lg p-4 text-center ${
                        theme === "dark"
                          ? "bg-red-900/30 border border-red-700/50"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <p
                        className={`font-semibold flex items-center justify-center gap-2 ${
                          theme === "dark" ? "text-red-400" : "text-red-700"
                        }`}
                      >
                        <span>×</span>
                        Registration Closed
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Creator Card */}
            <div
              className={`rounded-2xl p-6 mt-6 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <p
                className={`text-sm font-medium mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Contest Creator
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={contest.creatorImage}
                  alt={contest.creatorName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h3
                    className={`font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {contest.creatorName}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Contest Organizer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Task Modal */}
      {showSubmitModal && (
        <SubmitTaskModal
          theme={theme}
          contestName={contest.name}
          onClose={() => setShowSubmitModal(false)}
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContestDetails;
