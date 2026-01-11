import { useState } from "react";
import {
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  SearchIcon,
  TagIcon,
  ClockIcon,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";
import Container from "../../Components/Container";
import { Link } from "react-router";

const Blog = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Tips & Tricks",
    "Psychology",
    "Career",
    "Technology",
    "Success Stories",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Win Your Next Contest",
      excerpt:
        "Discover proven strategies that successful contestants use to increase their chances of winning. From preparation techniques to mindset shifts, learn what separates winners from participants.",
      content:
        "Contest success isn't just about luck—it's about strategy, preparation, and the right mindset...",
      author: "Sarah Johnson",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Jan 8, 2026",
      category: "Tips & Tricks",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      readTime: "5 min read",
      tags: ["strategy", "winning", "preparation"],
      featured: true,
    },
    {
      id: 2,
      title: "The Psychology of Competition",
      excerpt:
        "Understanding the mental aspects of competitive environments and how to leverage them for success. Explore the mindset that drives champions.",
      content:
        "Competition triggers unique psychological responses that can either help or hinder performance...",
      author: "Dr. Michael Chen",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Jan 5, 2026",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      readTime: "8 min read",
      tags: ["psychology", "mindset", "performance"],
      featured: false,
    },
    {
      id: 3,
      title: "Building Your Contest Portfolio",
      excerpt:
        "How to showcase your achievements and build a winning reputation in the contest community. Learn to present your skills effectively.",
      content:
        "A strong contest portfolio is your gateway to bigger opportunities and recognition...",
      author: "Alex Rivera",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Jan 2, 2026",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      readTime: "6 min read",
      tags: ["portfolio", "career", "showcase"],
      featured: false,
    },
    {
      id: 4,
      title: "From Zero to Hero: My Contest Journey",
      excerpt:
        "A personal story of transformation through competitive programming and design contests. Inspiration for beginners starting their journey.",
      content:
        "Three years ago, I had never participated in a single contest. Today, I'm a top performer...",
      author: "Emma Thompson",
      authorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Dec 28, 2025",
      category: "Success Stories",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
      readTime: "7 min read",
      tags: ["journey", "inspiration", "growth"],
      featured: false,
    },
    {
      id: 5,
      title: "AI Tools for Contest Preparation",
      excerpt:
        "Leverage artificial intelligence to enhance your contest preparation and performance. Modern tools that give you a competitive edge.",
      content:
        "The landscape of contest preparation has evolved with AI-powered tools...",
      author: "David Kim",
      authorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "Dec 25, 2025",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      readTime: "9 min read",
      tags: ["AI", "technology", "tools"],
      featured: true,
    },
    {
      id: 6,
      title: "Team vs Solo Contests: Which is Right for You?",
      excerpt:
        "Exploring the benefits and challenges of team-based versus individual contests. Find your optimal competition format.",
      content:
        "The choice between team and solo contests can significantly impact your experience...",
      author: "Lisa Park",
      authorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "Dec 22, 2025",
      category: "Tips & Tricks",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      readTime: "4 min read",
      tags: ["teamwork", "strategy", "choice"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div
      className={`mt-16 min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Container>
        {/* Header Section */}
        <div className="py-16 text-center">
           <h1
            className={`text-5xl sm:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            InnovateX{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
               Blog
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Insights, strategies, and stories from the world of competitive
            programming, design contests, and creative challenges.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500"
                } focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white"
                      : theme === "dark"
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === "All" && !searchTerm && (
          <div className="mb-16">
            <h2
              className={`text-2xl font-bold mb-8 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Article
            </h2>
            <div
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3
                    className={`text-2xl lg:text-3xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {featuredPost.title}
                  </h3>
                  <p
                    className={`text-lg mb-6 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <div
                    className={`flex items-center gap-6 mb-6 text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-16">
          <h2
            className={`text-2xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {searchTerm
              ? `Search Results (${filteredPosts.length})`
              : selectedCategory === "All"
              ? "Latest Articles"
              : `${selectedCategory} Articles`}
          </h2>

          {filteredPosts.length === 0 ? (
            <div
              className={`text-center py-16 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <p className="text-xl mb-4">No articles found</p>
              <p>Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-3 line-clamp-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`mb-4 line-clamp-3 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      className={`flex items-center gap-4 text-sm mb-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ClockIcon
                          className={`w-4 h-4 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <TagIcon
                        className={`w-4 h-4 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-full ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div
          className={`rounded-2xl p-8 text-center mb-16 ${
            theme === "dark"
              ? "bg-linear-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800"
              : "bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Stay Updated with Our Latest Articles
          </h3>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get the latest contest tips, strategies, and success stories
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-xl border transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20`}
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
