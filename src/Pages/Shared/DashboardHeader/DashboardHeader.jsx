import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useTheme from "../../../hooks/useTheme";
import toast from "react-hot-toast";

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme } = useTheme();
  const { role, isRoleLoading } = useRole();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
    toast.success("Logout Successful");
  };

  if (isRoleLoading) {
    return <h1 className="text-xl">Loading...</h1>;
  }

  return (
    <div
      className={`h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 rounded-lg transition-colors duration-300 sm:hidden ${
            theme === "dark" ? "hover:bg-slate-700" : "hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1
          className={`text-base md:text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {role?.charAt(0).toUpperCase() + role?.slice(1)} Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className={`relative p-2 rounded-lg transition-colors duration-300 ${
            theme === "dark" ? "hover:bg-slate-700" : "hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
            theme === "dark"
              ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
              : "bg-red-50 text-red-600 hover:bg-red-100"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
