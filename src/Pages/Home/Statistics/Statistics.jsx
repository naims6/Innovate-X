import { TrophyIcon, UsersIcon, CalendarIcon, StarIcon } from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import Container from "../../../Components/Container";

const Statistics = () => {
  const { theme } = useTheme();

  const stats = [
    {
      icon: <TrophyIcon className="w-8 h-8 text-yellow-500" />,
      number: "10,000+",
      label: "Contests Completed",
      description: "Successfully organized contests",
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-blue-500" />,
      number: "50,000+",
      label: "Active Users",
      description: "Participants worldwide",
    },
    {
      icon: <CalendarIcon className="w-8 h-8 text-green-500" />,
      number: "500+",
      label: "Monthly Events",
      description: "New contests every month",
    },
    {
      icon: <StarIcon className="w-8 h-8 text-purple-500" />,
      number: "4.9/5",
      label: "User Rating",
      description: "Average satisfaction score",
    },
  ];

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-linear-to-br from-gray-100 via-gray-50 to-gray-100"
      }`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Impact in Numbers
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of participants in our thriving contest community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
                  : "bg-white/80 border-gray-200 hover:bg-white/90 shadow-lg"
              }`}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3
                className={`text-3xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                {stat.label}
              </h4>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
