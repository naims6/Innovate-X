import { useState } from "react";
import {
  MailIcon,
  CheckCircleIcon,
  GiftIcon,
  TrendingUpIcon,
  BellIcon,
} from "lucide-react";
import useTheme from "../../../hooks/useTheme";

const Newsletter = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const benefits = [
    {
      icon: <BellIcon className="w-6 h-6 text-blue-500" />,
      title: "Contest Alerts",
      description: "Get notified about new contests before anyone else",
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6 text-green-500" />,
      title: "Winning Tips",
      description: "Weekly strategies from top performers",
    },
    {
      icon: <GiftIcon className="w-6 h-6 text-purple-500" />,
      title: "Exclusive Offers",
      description: "Special discounts and premium contest access",
    },
  ];

  return (
    <section
      className={`py-16 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-linear-to-r from-blue-900 via-purple-900 to-cyan-900"
          : "bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600"
      }`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MailIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Ahead of the Competition
            </h2>
            <p
              className={`text-xl mb-8 max-w-2xl mx-auto ${
                theme === "dark" ? "text-blue-100" : "text-blue-50"
              }`}
            >
              Join 25,000+ contestants who get exclusive insights, early contest
              notifications, and winning strategies delivered to their inbox.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-blue-100" : "text-blue-50"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition ${
                      theme === "dark"
                        ? "placeholder-blue-200"
                        : "placeholder-blue-100"
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`px-8 py-3 font-medium rounded-xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-white text-blue-900 hover:bg-blue-50"
                      : "bg-white text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  Subscribe
                </button>
              </div>
              <p
                className={`text-sm mt-4 ${
                  theme === "dark" ? "text-blue-200" : "text-blue-100"
                }`}
              >
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-500/20 border border-green-400/30 rounded-xl p-6">
              <div className="flex items-center justify-center gap-3 text-green-300">
                <CheckCircleIcon className="w-6 h-6" />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-green-200 text-sm mt-2">
                Check your email for a confirmation message.
              </p>
            </div>
          )}

          {/* Social Proof */}
          <div
            className={`mt-12 flex items-center justify-center gap-8 ${
              theme === "dark" ? "text-blue-200" : "text-blue-100"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8★</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Weekly</div>
              <div className="text-sm">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
