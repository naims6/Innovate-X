import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../../../Components/Logo";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-background border-t border-border mt-10 via-background/60 to-background transition-colors duration-300 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Website Name */}
          <div className="flex flex-col items-start">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Innovate. Create. Compete. Join thousands of innovators and
              showcase your talent.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 ">Platform</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Contests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>
        {/* devider  */}
        <div className="border-t border-border my-5"></div>
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; 2025 InnovateX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:font-semibold transition-all"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
