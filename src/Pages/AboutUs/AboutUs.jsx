import {
  FaUsers,
  FaRocket,
  FaHeart,
  FaGlobe,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const AboutUs = () => {
  const { theme } = useTheme();
  const values = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passion for Excellence",
      description:
        "We believe in fostering creativity and pushing boundaries to achieve exceptional results.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Trust & Transparency",
      description:
        "Building a platform where fairness, security, and transparency are at the core of everything we do.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Global Community",
      description:
        "Connecting talented individuals from around the world to collaborate and compete in meaningful ways.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Innovation First",
      description:
        "Continuously evolving our platform with cutting-edge technology to enhance user experience.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former tech executive with 15+ years in platform development and community building.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack engineer passionate about creating scalable, secure platforms for creative professionals.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Community strategist focused on building inclusive environments where talent thrives.",
    },
    {
      name: "David Kim",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "UX/UI designer with a passion for creating intuitive, beautiful user experiences.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <FaUsers /> },
    { number: "2M+", label: "Prize Money Distributed", icon: <FaAward /> },
    { number: "150+", label: "Countries", icon: <FaGlobe /> },
    { number: "99.9%", label: "Uptime", icon: <FaRocket /> },
  ];

  return (
    <div className="mt-10 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-5xl sm:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              InnovateX
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize creative competitions and connect
            talented individuals with opportunities to showcase their skills,
            grow their careers, and win meaningful rewards.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                ContestHub was born from the belief that talent deserves
                recognition and opportunity. We've created a platform where
                creativity meets competition, where skills are celebrated, and
                where meaningful connections are formed across the globe.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our platform bridges the gap between talented individuals and
                organizations seeking innovative solutions, creating a win-win
                ecosystem that benefits everyone involved.
              </p>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-primary/20 to-blue-600/20 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  Our Vision
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To become the world's leading platform for creative
                  competitions, where every talented individual has the
                  opportunity to shine, grow, and succeed in a fair,
                  transparent, and supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              Our Values
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              These core principles guide everything we do and shape the
              ContestHub experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-bg-surface rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-linear-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              ContestHub by the Numbers
            </h2>
            <p className="text-xl text-text-secondary">
              Our growing community and impact speak for themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-bg-surface rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary text-4xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-text-primary">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The passionate individuals behind ContestHub, dedicated to
              creating the best platform for creative competitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-bg-surface rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
