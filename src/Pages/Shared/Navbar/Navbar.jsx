import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ user, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="px-4 py-2 hover:text-blue-600 transition font-medium"
      >
        Home
      </NavLink>

      <NavLink
        to="/all-contests"
        className="px-4 py-2 hover:text-blue-600 transition font-medium"
      >
        All Contests
      </NavLink>

      <NavLink
        to="/extra"
        className="px-4 py-2 hover:text-blue-600 transition font-medium"
      >
        Extra
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="logo"
            className="w-9 h-9 object-cover transition group-hover:scale-105"
          />
          <span className="text-2xl font-bold tracking-wide group-hover:text-blue-600 transition">
            ContestHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          {navLinks}
        </div>

        {/* Profile / Login Button */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500 object-cover"
              />

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-44 py-3 border">
                  <p className="px-4 py-2 font-semibold text-gray-800 border-b">
                    {user.displayName}
                  </p>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-4 text-gray-700 space-y-2">
            {navLinks}

            {user ? (
              <>
                <p className="font-semibold mt-3">{user.displayName}</p>

                <Link
                  to="/dashboard"
                  className="mt-2 px-3 py-2 rounded hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 text-left rounded hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium text-center mt-3"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
