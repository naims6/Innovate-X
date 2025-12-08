import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Zap, Trophy } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const BannerSection = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search);
  };

  return (
    <div
      className={`relative w-full min-h-[85vh] flex items-center mt-20 justify-center overflow-hidden bg-background`}
    >
      {/* Animated linear Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 dark:bg-blue-600 bg-blue-400`}
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-cyan-400 dark:bg-cyan-600`}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 bg-purple-400 dark:bg-purple-600`}
      />

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "bg-grid-white/5" : "bg-grid-black/5"
        }`}
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-linear(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-linear(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)"
              : "linear-linear(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-linear(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-sm from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold text-text-primary">
            Unleash Your Creativity
          </span>
          <Sparkles className="w-4 h-4" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          <h1
            className={`text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-lg`}
          >
            Discover Creative
            <br />
            <span
              className={`bg-linear-to-r dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400    from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent`}
            >
              Contests & Win Big
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Join thousands of creators competing across{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              article writing, UI design, gaming
            </span>
            , business ideas, and more. Showcase your talent and win amazing
            prizes!
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleSearch}
          className={`mt-10 flex items-center gap-0 rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto backdrop-blur-sm border transition-all duration-300 group ${
            theme === "dark"
              ? "bg-gray-800/60 border-gray-700/60 hover:border-cyan-500/40 focus-within:border-cyan-500/60"
              : "bg-white/80 border-gray-200/60 hover:border-blue-400/40 focus-within:border-blue-400/60"
          }`}
        >
          <Search
            className={`ml-6 w-5 h-5 transition-colors ${
              theme === "dark"
                ? "text-gray-400 group-focus-within:text-cyan-400"
                : "text-gray-500 group-focus-within:text-blue-600"
            }`}
          />

          <input
            type="text"
            placeholder="Search contests... (design, article, gaming, business)"
            className={`flex-1 px-5 py-4 outline-none text-base transition-colors ${
              theme === "dark"
                ? "bg-transparent text-white placeholder-gray-500 focus:text-white"
                : "bg-transparent text-gray-900 placeholder-gray-600 focus:text-gray-900"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className={`px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-2 text-white ${
              theme === "dark"
                ? "bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-cyan-500/20"
                : "bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20"
            }`}
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </motion.form>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`grid grid-cols-3 gap-6 md:gap-10 mt-16 pt-10 border-t ${
            theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center space-y-2"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${
                theme === "dark" ? "bg-blue-950/50" : "bg-blue-50"
              }`}
            >
              <Trophy
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <p
              className={`text-2xl md:text-3xl font-bold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              500+
            </p>
            <p
              className={`text-xs md:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Active Contests
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center space-y-2"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${
                theme === "dark" ? "bg-cyan-950/50" : "bg-cyan-50"
              }`}
            >
              <Zap
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
            </div>
            <p
              className={`text-2xl md:text-3xl font-bold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              50K+
            </p>
            <p
              className={`text-xs md:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Participants
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center space-y-2"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${
                theme === "dark" ? "bg-purple-950/50" : "bg-purple-50"
              }`}
            >
              <Sparkles
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                }`}
              />
            </div>
            <p
              className={`text-2xl md:text-3xl font-bold ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              $1M+
            </p>
            <p
              className={`text-xs md:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Prizes Given
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerSection;
