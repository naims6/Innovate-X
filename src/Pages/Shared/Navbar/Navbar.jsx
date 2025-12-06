import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Trophy,
  LayoutDashboard,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import Container from "../../../Components/Container";
import useTheme from "../../../hooks/useTheme";
import { Link } from "react-router";
import "./navbar.css";
import ProfileDropdown from "./ProfileDropdown";
import MobileNav from "./MobileNav";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isLoggedIn = true;
  const user = {
    name: "John Doe",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "All Contests", href: "#contests" },
    { name: "Extra Section", href: "#extra" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 min-h-16 py-1.5 transition-all duration-300 bg-background border-b border-border/80`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 cursor-pointer">
            <div className={`p-2 rounded-lg`}>
              <Trophy className={`w-6 h-6`} />
            </div>
            <span className={`text-2xl font-bold tracking-wide`}>
              InnovateX
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-all duration-300 group`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary`}
                />
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-lg transition-all duration-300`}
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Profile or Sign In */}
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-2 p-1 rounded-full transition-all duration-300 cursor-pointer`}
                >
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    className={`w-10 h-10 rounded-full border-2 object-cover transition-all duration-300 border-primary`}
                  />
                </button>

                {isDropdownOpen && (
                  <ProfileDropdown user={user} theme={theme} />
                )}
              </div>
            ) : (
              <div className="flex items-center">
                <Link
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 tracking-wide`}
                >
                  Log in
                </Link>
                <Link
                  className={`px-6 py-2 rounded-3xl font-medium transition-all duration-300 bg-bg-reverse text-text-reverse tracking-wide`}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileNav navLinks={navLinks} />}
    </nav>
  );
}

export default Navbar;
