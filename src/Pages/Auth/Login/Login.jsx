import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../../../Components/Logo";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-116">
        {/* Logo & Title */}
        <div className="mb-4 flex items-center justify-center">
          <Logo />
        </div>
        {/* Form Card */}
        <div className=" rounded-3xl shadow-2x">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Sign in to your account
          </h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-placeholder/50 border border-border rounded-xl placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-placeholder/50 border border-border rounded-xl placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* remember me and forgot password */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 rounded bg-gray-800 border-gray-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-gray-900"
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <Link>Fogot Password?</Link>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Google Sign Up */}
          <button className="w-full py-3.5 bg-gray-800 border border-gray-700 text-white font-medium rounded-xl hover:bg-gray-750 flex items-center justify-center gap-3 transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.59 4.418 1.559L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
              />
              <path
                fill="#34A853"
                d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.734-4.856l-4.026 3.115C3.198 21.302 7.27 24 12 24c3.055 0 5.782-1.145 7.91-3l-3.87-3.987z"
              />
              <path
                fill="#4A90E2"
                d="M19.834 21c1.735-1.89 2.91-4.764 2.91-8 0-.54-.05-1.06-.15-1.57h-10.59V15.8h7.73c-.33 1.72-1.29 3.18-2.79 4.2l3.87 3.987z"
              />
              <path
                fill="#FBBC05"
                d="M5.266 14.235A7.077 7.077 0 0 1 4.91 12c0-.776.1-1.53.27-2.235l-4.026-3.115C.222 8.99 0 10.46 0 12c0 1.54.222 3.01.658 4.35l4.608-3.115z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Sign In Link */}
          <p className="text-center mt-6 text-gray-400 text-sm">
            don't have an account?{" "}
            <Link
              to="/signup"
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
