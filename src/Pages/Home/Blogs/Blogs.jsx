import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import { Link } from "react-router";
import Container from "../../../Components/Container";

const Blogs = () => {
  const { theme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Win Your Next Contest",
      excerpt:
        "Discover proven strategies that successful contestants use to increase their chances of winning.",
      author: "Sarah Johnson",
      date: "Jan 8, 2026",
      category: "Tips & Tricks",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Psychology of Competition",
      excerpt:
        "Understanding the mental aspects of competitive environments and how to leverage them.",
      author: "Dr. Michael Chen",
      date: "Jan 5, 2026",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Building Your Contest Portfolio",
      excerpt:
        "How to showcase your achievements and build a winning reputation in the contest community.",
      author: "Alex Rivera",
      date: "Jan 2, 2026",
      category: "Career",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      readTime: "6 min read",
    },
  ];

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-50 dark:bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Container>
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Latest from Our Blog
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Stay updated with insights, tips, and stories from the contest
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${
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
                  className={`flex items-center justify-between text-sm mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {post.readTime}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
