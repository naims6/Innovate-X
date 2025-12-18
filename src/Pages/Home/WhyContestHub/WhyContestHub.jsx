import useTheme from "../../../hooks/useTheme";
import ContestHubHeader from "./ContestHubHeader";
import CTASection from "./CTASection";
import FeatureCard from "./FeatureCard";

const WhyContestHub = () => {
  const { theme } = useTheme();

  const features = [
    {
      id: 1,
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Your payment information is encrypted and protected with industry-leading security standards.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: "⚖️",
      title: "Fair Judging",
      description:
        "Transparent evaluation process with experienced judges ensuring fairness and integrity.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      icon: "✅",
      title: "Verified Creators",
      description:
        "All contest creators are thoroughly verified to ensure legitimacy and quality contests.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Fast Announcements",
      description:
        "Quick and transparent winner announcements with instant prize distribution.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      icon: "🌍",
      title: "Global Community",
      description:
        "Connect with talented developers from over 150 countries worldwide.",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      icon: "📊",
      title: "Real-Time Analytics",
      description:
        "Track your progress with detailed statistics and performance insights.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-bg-secondary`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ContestHubHeader theme={theme} />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              theme={theme}
            />
          ))}
        </div>

        {/* Trust Section */}
        <div
          className={`mt-20 rounded-3xl p-8 sm:p-16 text-center border ${
            theme === "dark"
              ? "bg-linear-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/50"
              : "bg-linear-to-r from-indigo-50 to-purple-50 border-indigo-200"
          }`}
        >
          <h3
            className={`text-3xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Trusted by Developers Worldwide
          </h3>

          {/* Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </p>
              <p
                className={`font-semibold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Active Developers
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                $2M+
              </p>
              <p
                className={`font-semibold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Prize Money Awarded
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                150+
              </p>
              <p
                className={`font-semibold ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Countries Represented
              </p>
            </div>
          </div>

          {/* Trust Message */}
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Join thousands of developers who have already found success on
            ContestHub. We're committed to providing a fair, secure, and
            rewarding platform for talent.
          </p>
        </div>

        {/* CTA Section */}
        <CTASection theme={theme} />
      </div>
    </section>
  );
};

export default WhyContestHub;
