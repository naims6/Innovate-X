import React from "react";
import { Link } from "react-router";

const MobileNav = ({
  navLinks,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  user,
}) => {
  return (
    <div
      className={`lg:hidden border-b border-border transition-all duration-300 backdrop-blur-sm`}
    >
      <div className="px-4 py-4 space-y-3">
        <>
          {navLinks.map((link) => (
            <Link
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              key={link.name}
              to={link.href}
              className={`block px-4 py-2.5 rounded-lg font-medium transition-all duration-300`}
            >
              {link.name}
            </Link>
          ))}
          {!user && (
            <div className="flex items-center gap-2 px-4">
              <Link
                to="/login"
                className={`px-6 py-2 font-medium transition-all duration-300 tracking-wide bg-bg-reverse text-text-reverse rounded-3xl`}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className={`px-6 py-2 rounded-3xl font-medium transition-all duration-300 bg-bg-reverse text-text-reverse tracking-wide`}
              >
                Sign Up
              </Link>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MobileNav;
