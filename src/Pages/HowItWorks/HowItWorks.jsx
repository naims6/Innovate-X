import {
  FaSearch,
  FaCreditCard,
  FaUpload,
  FaTrophy,
  FaUserCheck,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const HowItWorks = () => {
  const { theme } = useTheme();

  const steps = [
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Discover Contests",
      desc: "Browse through hundreds of verified contests across multiple categories. Filter by skill level, prize amount, deadline, and more to find the perfect match for your talents.",
      features: [
        "Advanced filtering",
        "Category browsing",
        "Skill-based matching",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCreditCard className="text-4xl" />,
      title: "Secure Registration",
      desc: "Join contests with confidence using our encrypted payment system. Multiple payment options available with instant confirmation and receipt generation.",
      features: [
        "Secure payments",
        "Instant confirmation",
        "Multiple payment methods",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUpload className="text-4xl" />,
      title: "Submit & Track",
      desc: "Upload your submissions with our intuitive interface. Track progress, receive feedback, and manage multiple contest entries from your personalized dashboard.",
      features: ["Easy uploads", "Progress tracking", "Feedback system"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Win & Celebrate",
      desc: "Winners are announced transparently with detailed judging criteria. Receive prizes instantly and gain recognition in our global community leaderboard.",
      features: ["Transparent judging", "Instant prizes", "Global recognition"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    {
      icon: <FaUserCheck />,
      title: "Verified Creators",
      desc: "All contest creators undergo thorough verification to ensure legitimacy and quality.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Platform",
      desc: "Bank-level security with encrypted transactions and protected intellectual property.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      desc: "Track your progress with detailed analytics and performance insights.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Community",
      desc: "Connect with talented creators from over 150 countries worldwide.",
    },
  ];

  const faqs = [
    {
      question: "How do I know contests are legitimate?",
      answer:
        "All contests undergo rigorous verification. Contest creators must provide valid business information and deposit prize money in escrow before contests go live.",
    },
    {
      question: "What happens if I don't win?",
      answer:
        "Every submission receives valuable feedback. Plus, you'll gain experience, build your portfolio, and connect with potential clients or collaborators.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Winners are chosen based on clearly defined criteria published with each contest. Our transparent judging process ensures fairness and provides detailed feedback.",
    },
  ];

  return (
    <div className="mt-10 min-h-screen bg-background text-text-primary transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1
            className={`text-5xl sm:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            How InnovateX{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
               Works
            </span>
          </h1>
         
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Join the world's most trusted creative contest platform. Compete
            fairly, grow your skills, and win meaningful rewards in a
            transparent environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-text-reverse px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
              Get Started <FaArrowRight />
            </button>
            <button className="border border-border text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-bg-surface transition-colors duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              Your Journey to Success
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Follow these simple steps to start competing and winning on
              ContestHub
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-linear-to-r ${step.color} text-white shadow-lg`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-3xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-primary text-sm" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-bg-surface rounded-3xl p-8 border border-border shadow-lg">
                    <div
                      className={`w-full h-64 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-6xl opacity-20`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              Why Choose ContestHub?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We've built the most trusted and feature-rich platform for
              creative competitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-bg-surface rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-primary text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">
              Get answers to common questions about how ContestHub works
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bg-surface rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-text-primary">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join thousands of creators who are already competing and winning on
            ContestHub
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-primary text-text-reverse px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
              Browse Contests <FaArrowRight />
            </button>
            <button className="border border-border text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-bg-surface transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-text-secondary text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$2M+</div>
              <div className="text-text-secondary text-sm">Prizes Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-text-secondary text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-text-secondary text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
