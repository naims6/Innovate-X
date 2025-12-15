import { FaSearch, FaCreditCard, FaUpload, FaTrophy } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const HowItWorks = () => {
  const { theme } = useTheme();

  const steps = [
    {
      icon: <FaSearch />,
      title: "Explore Contests",
      desc: "Browse admin-approved contests by category, deadline, or popularity. Every contest is verified to ensure fairness and quality.",
    },
    {
      icon: <FaCreditCard />,
      title: "Register & Pay",
      desc: "Join contests securely using our integrated payment system. Your participation is confirmed instantly after payment.",
    },
    {
      icon: <FaUpload />,
      title: "Submit Your Work",
      desc: "Upload your task submission before the deadline. You can track your participation status from your dashboard.",
    },
    {
      icon: <FaTrophy />,
      title: "Winner Announcement",
      desc: "Contest creators review submissions and declare winners. Winners receive prizes and recognition across the platform.",
    },
  ];

  return (
    <div
      className={`mt-16 min-h-screen ${
        theme === "dark"
          ? "bg-slate-900 text-slate-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* HERO */}
      <div
        className={`py-20 ${theme === "dark" ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            How ContestHub Works
          </h1>
          <p
            className={`mt-4 max-w-3xl mx-auto text-lg ${
              theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
          >
            ContestHub is a creative contest platform designed to help talents
            compete, grow, and win rewards in a transparent and fair
            environment.
          </p>
        </div>
      </div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl shadow-sm transition ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600 text-3xl">{step.icon}</div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>
              <p
                className={`leading-relaxed ${
                  theme === "dark" ? "text-slate-400" : "text-gray-600"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className={`py-16 ${theme === "dark" ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Join Your First Contest?
          </h2>
          <p
            className={`mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Explore contests, showcase your talent, and start winning today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
