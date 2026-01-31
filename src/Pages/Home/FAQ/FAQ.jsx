import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, HelpCircleIcon } from "lucide-react";
import useTheme from "../../../hooks/useTheme";

const FAQ = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I participate in a contest?",
      answer:
        "Simply browse our available contests, click on one that interests you, and follow the registration process. Most contests require a small entry fee, but we also offer free contests regularly.",
    },
    {
      question: "What types of contests are available?",
      answer:
        "We offer a wide variety of contests including coding challenges, design competitions, writing contests, photography contests, business case studies, and creative challenges. New categories are added regularly based on community interest.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Winners are selected through a combination of peer voting, expert judging, and automated scoring systems depending on the contest type. All judging criteria are clearly outlined in each contest's rules and guidelines.",
    },
    {
      question: "What are the prizes and rewards?",
      answer:
        "Prizes vary by contest and can include cash rewards, gift cards, professional recognition, portfolio features, and exclusive opportunities. Prize details are always specified before you enter any contest.",
    },
    {
      question: "Is there a fee to participate?",
      answer:
        "While some premium contests have entry fees to ensure high-quality participation and better prizes, we also offer many free contests. Entry fees, when applicable, are clearly displayed and help fund the prize pool.",
    },
    {
      question: "How do I track my contest history?",
      answer:
        "Your dashboard provides a complete overview of all your past and current contest participations, including results, rankings, and earned rewards. You can also download certificates for your achievements.",
    },
    {
      question: "Can I organize my own contest?",
      answer:
        "Yes! Our platform allows users to create and host their own contests. You can set the rules, prizes, judging criteria, and timeline. We provide tools and support to help you run successful contests.",
    },
    {
      question: "What if I have technical issues during a contest?",
      answer:
        "Our support team is available 24/7 during active contests. You can reach out through live chat, email, or our help center. We also have detailed troubleshooting guides for common issues.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-white dark:bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              theme === "dark" ? "bg-blue-900/30" : "bg-blue-100"
            }`}
          >
            <HelpCircleIcon
              className={`w-8 h-8 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            />
          </div>
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Find answers to common questions about our contest platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold pr-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <ChevronUpIcon
                        className={`w-5 h-5 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    ) : (
                      <ChevronDownIcon
                        className={`w-5 h-5 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div
                      className={`border-t pt-4 ${
                        theme === "dark" ? "border-gray-600" : "border-gray-200"
                      }`}
                    >
                      <p
                        className={`leading-relaxed ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div
              className={`border rounded-2xl p-8 ${
                theme === "dark"
                  ? "bg-linear-to-r from-blue-900/20 to-cyan-900/20 border-blue-800"
                  : "bg-linear-to-r from-blue-50 to-cyan-50 border-blue-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Still have questions?
              </h3>
              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our support team is here to help you succeed in your contest
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
                  Contact Support
                </button>
                <button
                  className={`border px-6 py-3 rounded-xl font-medium transition-colors ${
                    theme === "dark"
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Browse Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
