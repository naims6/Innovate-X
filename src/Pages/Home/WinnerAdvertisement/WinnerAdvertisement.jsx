import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import useTheme from "../../../hooks/useTheme";
import Container from "../../../Components/Container";
import WinnerHeader from "./WinnerHeader";
import StatCard from "./StatCard";
import WinnerCard from "./WinnerCard";

const WinnerAdvertisement = () => {
  const { theme } = useTheme;
  const [winners, setWinners] = useState([]);
  const [stats, setStats] = useState({
    totalWinners: 0,
    totalPrizeMoney: 0,
    activeContests: 0,
  });
  const [loading, setLoading] = useState(true);

  // Sample winner data
  const winnersData = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      prize: 5000,
      contestName: "Web Design Showdown",
      position: "1st Place",
      badge: "🥇",
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      prize: 3000,
      contestName: "Algorithm Master Challenge",
      position: "1st Place",
      badge: "🥇",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      prize: 2000,
      contestName: "UI/UX Innovation",
      position: "1st Place",
      badge: "🥇",
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      prize: 2500,
      contestName: "Full Stack Developer Quest",
      position: "1st Place",
      badge: "🥇",
    },
  ];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setWinners(winnersData.slice(0, 4));
      setStats({
        totalWinners: 1250,
        totalPrizeMoney: 125000,
        activeContests: 24,
      });
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return (
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-linear-to-b from-slate-800 to-slate-900"
            : "bg-linear-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`rounded-xl h-40 ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                } animate-pulse`}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`rounded-xl h-80 ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                } animate-pulse`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-background`}
    >
      <Container>
        {/* Section Header */}
        <WinnerHeader />

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard
            icon="👥"
            label="Total Winners"
            theme={theme}
            value={stats.totalWinners.toLocaleString()}
          />
          <StatCard
            icon="💰"
            label="Prize Pool Distributed"
            theme={theme}
            value={`$${(stats.totalPrizeMoney / 1000).toFixed(0)}K`}
          />
          <StatCard
            icon="🏆"
            label="Active Contests"
            theme={theme}
            value={stats.activeContests}
          />
        </div>

        {/* Winners Section Header */}
        <div className="mb-12">
          <h3 className={`text-3xl font-bold mb-2`}>Recent Champions</h3>
          <p className={`text-lg`}>
            Meet the brilliant minds who conquered our latest contests
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {winners.map((winner, index) => (
            <WinnerCard
              key={winner.id}
              theme={theme}
              winner={winner}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 bg-bg-surface/30`}
        >
          <h3 className={`text-3xl font-bold mb-4 `}>
            Ready to Become a Champion?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto text-text-secondary`}>
            Join thousands of talented developers and compete for amazing
            prizes. Your journey to success starts here!
          </p>
          <Link
            to="/all-contests"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Contests Now
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </Container>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WinnerAdvertisement;
