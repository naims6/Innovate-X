import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ContestCard from "../../Components/ContestCard";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import AllContestHeader from "./AllContestHeader";

const AllContests = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Sample contests data
  const contestsData = [
    {
      id: 1,
      name: "Web Design Showdown",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      participants: 1250,
      description:
        "Create stunning and responsive web designs that showcase your creativity and technical skills.",
      category: "Design",
      prize: 5000,
      deadline: "2024-02-15",
      level: "Intermediate",
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
      prize: 3000,
      deadline: "2024-02-20",
      level: "Advanced",
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
      prize: 4000,
      deadline: "2024-02-18",
      level: "Intermediate",
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
      prize: 6000,
      deadline: "2024-02-25",
      level: "Advanced",
    },
    {
      id: 5,
      name: "Mobile App Championship",
      image:
        "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop",
      participants: 640,
      description:
        "Create innovative mobile applications for iOS and Android platforms.",
      category: "Mobile",
      prize: 5500,
      deadline: "2024-02-22",
      level: "Intermediate",
    },
    {
      id: 6,
      name: "Data Science Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      participants: 520,
      description:
        "Analyze datasets and build predictive models to solve real-world problems.",
      category: "Data Science",
      prize: 4500,
      deadline: "2024-02-28",
      level: "Advanced",
    },
    {
      id: 7,
      name: "React Component Masters",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
      participants: 890,
      description:
        "Build reusable and efficient React components with best practices.",
      category: "Development",
      prize: 3500,
      deadline: "2024-02-19",
      level: "Beginner",
    },
    {
      id: 8,
      name: "Cybersecurity Challenge",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b12b?w=400&h=300&fit=crop",
      participants: 450,
      description:
        "Identify vulnerabilities and secure applications against cyber threats.",
      category: "Security",
      prize: 7000,
      deadline: "2024-03-05",
      level: "Advanced",
    },
    {
      id: 9,
      name: "Graphic Design Fusion",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      participants: 620,
      description: "Create visually stunning graphics and brand identities.",
      category: "Design",
      prize: 3000,
      deadline: "2024-02-17",
      level: "Beginner",
    },
    {
      id: 10,
      name: "DevOps Pipeline Master",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      participants: 380,
      description:
        "Design and implement efficient CI/CD pipelines for modern applications.",
      category: "DevOps",
      prize: 5000,
      deadline: "2024-02-23",
      level: "Advanced",
    },
    {
      id: 11,
      name: "Vue.js Sprint Challenge",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
      participants: 560,
      description: "Build amazing applications using Vue.js framework.",
      category: "Development",
      prize: 3200,
      deadline: "2024-02-21",
      level: "Intermediate",
    },
    {
      id: 12,
      name: "AI/ML Innovation",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      participants: 480,
      description: "Develop cutting-edge AI and machine learning models.",
      category: "AI/ML",
      prize: 8000,
      deadline: "2024-03-01",
      level: "Advanced",
    },
  ];

  const categories = ["All", ...new Set(contestsData.map((c) => c.category))];
  //   const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    setTimeout(() => {
      setContests(contestsData);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = contests;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (contest) =>
          contest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (contest) => contest.category === selectedCategory
      );
    }

    // Sort
    if (sortBy === "newest") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.deadline) - new Date(a.deadline)
      );
    } else if (sortBy === "participants") {
      filtered = [...filtered].sort((a, b) => b.participants - a.participants);
    } else if (sortBy === "prize") {
      filtered = [...filtered].sort((a, b) => b.prize - a.prize);
    }

    setFilteredContests(filtered);
  }, [contests, searchTerm, selectedCategory, sortBy]);

  const getCategoryColor = (category) => {
    const colors = {
      Design: "from-pink-500 to-rose-500",
      Programming: "from-blue-500 to-cyan-500",
      Development: "from-purple-500 to-indigo-500",
      Mobile: "from-green-500 to-emerald-500",
      "Data Science": "from-orange-500 to-red-500",
      Security: "from-red-500 to-pink-500",
      DevOps: "from-cyan-500 to-blue-500",
      "AI/ML": "from-violet-500 to-purple-500",
    };
    return colors[category] || "from-indigo-500 to-purple-500";
  };

  const handleContestClick = (contestId) => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/contest/${contestId}`);
  };

  if (loading) {
    return (
      <div
        className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark"
            ? "bg-linear-to-b from-slate-900 to-slate-800"
            : "bg-linear-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl h-96 ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                } animate-pulse`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mt-16 min-h-screen transition-colors duration-300 `}>
      {/* Header Section */}
      <AllContestHeader
        theme={theme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        contests={contests}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          {filteredContests.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Showing{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {filteredContests.length}
                  </span>{" "}
                  contests
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContests.map((contest, index) => (
                  <ContestCard
                    key={contest.id}
                    contest={contest}
                    index={index}
                    theme={theme}
                    getCategoryColor={getCategoryColor}
                    onDetailsClick={() => handleContestClick(contest.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                No Contests Found
              </h3>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Try adjusting your search or filters to find contests
              </p>
            </div>
          )}
        </div>
      </div>

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

export default AllContests;
