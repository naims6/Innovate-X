import {  Link } from "react-router";
import {
  CalendarIcon,
  UserIcon,
  ArrowLeftIcon,
  ClockIcon,
  TagIcon,
  ShareIcon,
  BookmarkIcon,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";
import Container from "../../Components/Container";

const BlogDetail = () => {
  const { theme } = useTheme();


  // Mock blog data - in real app, this would come from API
  const blogPost = {
    id: 1,
    title: "10 Tips to Win Your Next Contest",
    content: `
      <p>Contest success isn't just about luck—it's about strategy, preparation, and the right mindset. After analyzing hundreds of successful contestants and their approaches, we've identified the key factors that separate winners from participants.</p>
      
      <h2>1. Understand the Rules Completely</h2>
      <p>Before diving into any contest, spend time thoroughly reading and understanding all rules and requirements. Many participants lose out simply because they missed a crucial detail in the guidelines.</p>
      
      <h2>2. Research Past Winners</h2>
      <p>Study previous winners and their submissions. What made them stand out? What patterns can you identify in winning entries? This research will give you valuable insights into what judges are looking for.</p>
      
      <h2>3. Start Early, Finish Strong</h2>
      <p>Don't wait until the last minute. Starting early gives you time to refine your approach, test different strategies, and make improvements. The best submissions often go through multiple iterations.</p>
      
      <h2>4. Focus on Quality Over Quantity</h2>
      <p>It's better to submit one exceptional entry than multiple mediocre ones. Put all your effort into creating something truly outstanding rather than spreading yourself thin.</p>
      
      <h2>5. Pay Attention to Presentation</h2>
      <p>How you present your work matters as much as the work itself. Clean formatting, clear explanations, and professional presentation can make the difference between winning and losing.</p>
      
      <h2>6. Network with Other Contestants</h2>
      <p>Building relationships within the contest community can provide valuable insights, feedback, and opportunities for collaboration. Don't see other contestants as just competition—see them as potential allies.</p>
      
      <h2>7. Learn from Failures</h2>
      <p>Not every contest will result in a win, and that's okay. Each participation is a learning opportunity. Analyze what went wrong, what you could improve, and apply those lessons to future contests.</p>
      
      <h2>8. Stay Updated with Trends</h2>
      <p>Contest preferences and trends evolve over time. Stay current with industry developments, new technologies, and changing judging criteria to keep your approach relevant.</p>
      
      <h2>9. Manage Your Time Effectively</h2>
      <p>Create a timeline for your contest preparation and stick to it. Break down the work into manageable chunks and set milestones to track your progress.</p>
      
      <h2>10. Maintain a Positive Mindset</h2>
      <p>Confidence and positivity can significantly impact your performance. Believe in your abilities, stay motivated throughout the process, and don't let setbacks discourage you from pursuing future opportunities.</p>
      
      <p>Remember, winning contests is a skill that improves with practice. The more contests you participate in, the better you'll become at understanding what works and what doesn't. Stay persistent, keep learning, and your efforts will eventually pay off.</p>
    `,
    author: "Sarah Johnson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    authorBio:
      "Sarah is a contest strategist and winner of over 50 programming and design competitions. She helps others achieve success through proven methodologies.",
    date: "Jan 8, 2026",
    category: "Tips & Tricks",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    readTime: "5 min read",
    tags: ["strategy", "winning", "preparation", "tips", "success"],
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Psychology of Competition",
      excerpt:
        "Understanding the mental aspects of competitive environments and how to leverage them.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "Psychology",
    },
    {
      id: 3,
      title: "Building Your Contest Portfolio",
      excerpt:
        "How to showcase your achievements and build a winning reputation in the contest community.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "Career",
    },
    {
      id: 4,
      title: "From Zero to Hero: My Contest Journey",
      excerpt:
        "A personal story of transformation through competitive programming and design contests.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      category: "Success Stories",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Container>
        {/* Back Button */}
        <div className="py-8">
          <Link
            to="/blog"
            className={`inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors`}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <div
                className={`flex items-center gap-4 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </div>

            <h1
              className={`text-4xl lg:text-5xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {blogPost.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blogPost.author}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Contest Strategist
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-400 hover:text-white"
                      : "bg-gray-100 text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <BookmarkIcon className="w-5 h-5" />
                </button>
                <button
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-400 hover:text-white"
                      : "bg-gray-100 text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <ShareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Article Content */}
          <div
            className={`prose prose-lg max-w-none mb-12 ${
              theme === "dark"
                ? "prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white"
                : "prose-gray"
            }`}
          >
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Tags */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
            <TagIcon
              className={`w-5 h-5 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div
            className={`rounded-2xl p-8 mb-12 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-start gap-6">
              <img
                src={blogPost.authorImage}
                alt={blogPost.author}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  About {blogPost.author}
                </h3>
                <p
                  className={`mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {blogPost.authorBio}
                </p>
                <button className="text-cyan-500 hover:text-cyan-600 font-medium transition-colors">
                  Follow Author
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2
            className={`text-3xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <h3
                    className={`text-lg font-bold mt-4 mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetail;
