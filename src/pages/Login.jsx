import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import LogOut from "./LogOut";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    const existingUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );

    if (existingUser) {
      localStorage.setItem("LoggedInUsers", JSON.stringify(existingUser));

      toast.success("Logged in successfully");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUsers"));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>

          <p className="text-blue-100 text-lg">
            Sign in to access your account, track orders, manage your wishlist,
            and enjoy a seamless shopping experience.
          </p>

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
            alt="Shopping"
            className="mt-10 rounded-2xl"
          />
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Login</h2>

            <p className="text-gray-500 mb-8">
              Enter your credentials to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div className="relative ">
                <label className="block text-gray-700 mb-2">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className=" w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 mt-6 transform -translate-y-1/2 text-gray-800 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}

              {loggedInUser ? (
                <LogOut />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
                >
                  Sign In
                </button>
              )}

              {/* Divider */}
              <div className="flex items-center gap-4">
                <hr className="flex-1" />
                <span className="text-gray-400 text-sm">OR</span>
                <hr className="flex-1" />
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
              >
                Continue with Google
              </button>
            </form>

            {/* Sign Up */}
            <p className="text-center text-gray-600 mt-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
