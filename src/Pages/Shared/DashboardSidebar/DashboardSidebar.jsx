import React from "react";
import { Link, useLocation } from "react-router";
import useTheme from "../../../hooks/useTheme";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme } = useTheme();
  const location = useLocation();

  const menuItems = [
    {
      icon: "📊",
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: "➕",
      label: "Add Contest",
      href: "/dashboard/add-contest",
    },
    {
      icon: "🤷‍♂️",
      label: "Manage User",
      href: "/dashboard/manage-user",
    },
    {
      icon: "📋",
      label: "My Contests",
      href: "/dashboard/my-contests",
    },
    {
      icon: "📤",
      label: "Submissions",
      href: "/dashboard/submissions",
    },
    {
      icon: "⚙️",
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 ${
          theme === "dark"
            ? "bg-slate-800 border-r border-slate-700"
            : "bg-white border-r border-gray-200"
        }  flex-col h-screen sticky top-0 sm:flex`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`h-16 flex items-center px-4 border-b ${
            theme === "dark" ? "border-slate-700" : "border-gray-200"
          }`}
        >
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                IX
              </div>
              <span
                className={`font-bold text-lg ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                InnovateX
              </span>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
              IX
            </div>
          )}
        </Link>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : theme === "dark"
                  ? "text-gray-300 hover:bg-slate-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              title={!sidebarOpen ? item.label : ""}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div
          className={`h-16 flex items-center px-4 border-t ${
            theme === "dark" ? "border-slate-700" : "border-gray-200"
          }`}
        >
          {sidebarOpen ? (
            <div className="flex items-center gap-3 w-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-semibold truncate ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  John Doe
                </p>
                <p
                  className={`text-xs truncate ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Creator
                </p>
              </div>
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          )}
        </div>
      </div>

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 sm:hidden bg-black/50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default DashboardSidebar;
