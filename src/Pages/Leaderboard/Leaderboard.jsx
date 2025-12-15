import { FaTrophy, FaMedal } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const Leaderboard = () => {
  const { theme } = useTheme();

  const users = [
    { name: "Sarah Ahmed", wins: 12 },
    { name: "John Smith", wins: 9 },
    { name: "Naim Hasan", wins: 7 },
    { name: "Emily Clark", wins: 5 },
    { name: "David Lee", wins: 4 },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-slate-900 text-slate-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* HEADER */}
      <div
        className={`mt-16 py-20 ${
          theme === "dark" ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Global Leaderboard</h1>
          <p
            className={`mt-4 max-w-2xl mx-auto text-lg ${
              theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Top performers ranked by total contest wins across the platform.
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div
          className={`rounded-2xl overflow-hidden shadow-sm ${
            theme === "dark"
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <table className="w-full">
            <thead
              className={`${theme === "dark" ? "bg-slate-700" : "bg-gray-100"}`}
            >
              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">User</th>
                <th className="px-6 py-4 text-left">Total Wins</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    theme === "dark"
                      ? "border-slate-700 hover:bg-slate-700"
                      : "border-gray-200 hover:bg-gray-50"
                  } transition`}
                >
                  <td className="px-6 py-4 font-semibold">
                    {index === 0 ? (
                      <FaTrophy className="text-yellow-400" />
                    ) : index === 1 ? (
                      <FaMedal className="text-gray-400" />
                    ) : index === 2 ? (
                      <FaMedal className="text-orange-400" />
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">
                    {user.wins}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
