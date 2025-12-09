import { useState, useEffect } from "react";
import { Link } from "react-router";

import useTheme from "../../../hooks/useTheme";
import Header from "./Header";
import Container from "../../../Components/Container";
import ContestCard from "../../../Components/ContestCard";
const PopularContest = () => {
  const { theme } = useTheme();

  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample contest data (sorted by participation count)
  const contestData = [
    {
      id: 1,
      name: "Web Design Showdown",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      participants: 1250,
      description:
        "Create stunning and responsive web designs that showcase your creativity and technical skills.",
      category: "Design",
    },
    {
      id: 2,
      name: "Algorithm Master Challenge",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      participants: 980,
      description:
        "Solve complex algorithmic problems and compete with developers worldwide.",
      category: "Programming",
    },
    {
      id: 3,
      name: "UI/UX Innovation",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      participants: 850,
      description:
        "Design beautiful user interfaces with focus on user experience and accessibility.",
      category: "Design",
    },
    {
      id: 4,
      name: "Full Stack Developer Quest",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      participants: 720,
      description:
        "Build complete web applications from frontend to backend using modern technologies.",
      category: "Development",
    },
    // {
    //   id: 6,
    //   name: "Data Science Analytics",
    //   image:
    //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    //   participants: 520,
    //   description:
    //     "Analyze datasets and build predictive models to solve real-world problems.",
    //   category: "Data Science",
    // }
  ];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const sorted = [...contestData].sort(
        (a, b) => b.participants - a.participants
      );
      setContests(sorted.slice(0, 5));
      setLoading(false);
    }, 500);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      Design: "from-pink-500 to-rose-500",
      Programming: "from-blue-500 to-cyan-500",
      Development: "from-purple-500 to-indigo-500",
      Mobile: "from-green-500 to-emerald-500",
      "Data Science": "from-orange-500 to-red-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  if (loading) {
    return (
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-linear-to-b from-slate-900 to-slate-800"
            : "bg-linear-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                } animate-pulse h-96`}
              >
                <div
                  className={`w-full h-48 ${
                    theme === "dark" ? "bg-slate-600" : "bg-gray-300"
                  }`}
                ></div>
                <div className="p-6 space-y-4">
                  <div
                    className={`h-6 rounded ${
                      theme === "dark" ? "bg-slate-600" : "bg-gray-300"
                    }`}
                  ></div>
                  <div
                    className={`h-4 rounded ${
                      theme === "dark" ? "bg-slate-600" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-bg-secondary`}
    >
      <Container>
        {/* Header Section */}
        <Header theme={theme} />

        {/* Contests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {contests.map((contest, index) => (
            <ContestCard
              key={contest.id}
              contest={contest}
              index={index}
              theme={theme}
              getCategoryColor={getCategoryColor}
            />
          ))}
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

export default PopularContest;
