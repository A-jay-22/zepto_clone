// import React from 'react'

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate("/");
  };
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (signUp.password !== signUp.confirmPassword) {
      // alert("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find((user) => user.email === signUp.email);

    if (existingUser) {
      // alert("Email already registered");
      toast.error("Email already registered");
      return;
    }

    // Create new user object
    const newUser = {
      name: signUp.name,
      email: signUp.email,
      password: signUp.password,
    };

    // Save user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("LoggedInUsers", JSON.stringify(newUser));

    // alert("Sign Up Successful!");
    toast.success("sign up successfull");
    GoToHome();

    // Reset form
    setSignUp({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-12">
          <h1 className="text-5xl font-bold mb-4">Join Our Store</h1>

          <p className="text-lg text-blue-100 mb-8">
            Create an account to save your favorite products, track orders, and
            enjoy exclusive member benefits.
          </p>

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
            alt="Ecommerce"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>

            <p className="text-gray-500 mb-8">
              Fill in your details to get started.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signUp.name}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signUp.email}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-gray-700 mb-2">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={signUp.password}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={handleChange}
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

              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-gray-700 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signUp.confirmPassword}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  onChange={handleChange}
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

              {/* Terms */}
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <hr className="flex-1" />
                <span className="text-gray-400 text-sm">OR</span>
                <hr className="flex-1" />
              </div>

              {/* Google Signup */}
              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
              >
                Continue with Google
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-8">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
