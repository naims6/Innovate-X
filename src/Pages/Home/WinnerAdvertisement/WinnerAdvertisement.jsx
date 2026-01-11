import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import useTheme from "../../../hooks/useTheme";
import Container from "../../../Components/Container";
import WinnerHeader from "./WinnerHeader";
import StatCard from "./StatCard";
import WinnerCard from "./WinnerCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const WinnerAdvertisement = () => {
  const { theme } = useTheme;

  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState({
    totalWinners: 0,
    totalPrizeMoney: 0,
    activeContests: 0,
  });

  const { data: winners = [], isLoading } = useQuery({
    queryKey: ["winners"],
    queryFn: async () => {
      const res = await axiosSecure(`/winners`);
      return res.data;
    },
  });

  useEffect(() => {
    setStats({
      totalWinners: 50,
      totalPrizeMoney: 12500,
      activeContests: 14,
    });
  }, []);

  if (isLoading) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {winners.slice(0, 4).map((winner, index) => (
            <WinnerCard
              key={winner._id}
              theme={theme}
              winner={winner}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WinnerAdvertisement;
