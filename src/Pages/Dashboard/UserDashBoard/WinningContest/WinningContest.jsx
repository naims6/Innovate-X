import React from "react";
import useTheme from "../../../../hooks/useTheme";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";

const MyWinningContests = () => {
  const { theme } = useTheme();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const [winnings, setWinnings] = useState([]);

  const { data: winnings = [], isLoading } = useQuery({
    queryKey: ["winnings"],
    queryFn: async () => {
      const res = await axiosSecure(`/contests/winner/${user?.email}`);
      return res.data;
    },
  });
  console.log(winnings);

  // useEffect(() => {
  //   const fetchWinnings = async () => {
  //     // Simulate API call
  //     const data = [
  //       {
  //         id: 1,
  //         contestName: "Innovative Design Contest",
  //         prize: "$500 Cash Prize",
  //         wonDate: "2025-11-15",
  //         description: "First place for your groundbreaking design.",
  //       },
  //       {
  //         id: 2,
  //         contestName: "Tech Startup Pitch",
  //         prize: "Mentorship Program",
  //         wonDate: "2025-10-20",
  //         description: "Selected for exclusive mentorship.",
  //       },
  //     ];

  //     setWinnings(data);
  //   };
  //   fetchWinnings();
  // }, []);

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="text-xl">Loading winnings...</div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === "dark"
          ? "bg-linear-to-br from-gray-900 to-gray-800 text-white"
          : "bg-linear-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-green-600 to-blue-600">
          My Winning Contests
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winnings.map((win) => (
            <div
              key={win._id}
              className={`relative p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-600 dark:text-green-400">
                  {win.name}
                </h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                  Winner
                </span>
              </div>
              <p
                className={`text-sm mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {win.title}
              </p>
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Prize: {win.prizeMoney}
                </p>
                {/* <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Won:{" "}
                  {new Date(win?.wonDate)?.toLocaleDateString() || "not found"}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWinningContests;
