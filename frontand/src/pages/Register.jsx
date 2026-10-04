import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaUserCircle, FaLock, FaEnvelope, FaUser } from "react-icons/fa";
import { registerUser } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signUp.password !== signUp.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (signUp.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser({
        name: signUp.name,
        email: signUp.email,
        password: signUp.password,
      });

      if (result?.success && result?.user) {
        const user = result.user;
        localStorage.setItem("LoggedInUsers", JSON.stringify(user));
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }
        window.dispatchEvent(new Event("authChange"));

        toast.success(`Account created! Welcome, ${user.name} 🎉`);
        navigate("/");
      } else {
        toast.error(result?.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
      setSignUp({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-12 w-24 h-24 rounded-full border-4 border-white"></div>
            <div className="absolute bottom-24 right-8 w-44 h-44 rounded-full border-4 border-white opacity-50"></div>
          </div>
          <div className="relative z-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png"
              alt="Zepto"
              className="h-9 mb-8 brightness-200"
            />
            <h1 className="text-4xl font-extrabold mb-4">Join the Store</h1>
            <p className="text-purple-100 text-base leading-relaxed mb-8">
              Create an account to save your favourite products, manage your cart, and enjoy exclusive member benefits.
            </p>
            <div className="space-y-3">
              {[
                "Instant 10-minute delivery, everywhere",
                "Wishlists saved to your account forever",
                "Exclusive member-only offers & discounts",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Create Account</h2>
            <p className="text-gray-500 text-sm mb-8">Fill in your details to get started.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="name"
                    value={signUp.name}
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={signUp.email}
                    placeholder="john@example.com"
                    required
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={signUp.password}
                    placeholder="Min. 6 characters"
                    required
                    onChange={handleChange}
                    className="w-full pl-10 pr-11 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={signUp.confirmPassword}
                    placeholder="Repeat your password"
                    required
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
                {signUp.confirmPassword && signUp.password !== signUp.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 font-medium">Passwords do not match</p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition cursor-pointer disabled:opacity-50 text-sm"
              >
                {loading ? "Creating Account..." : "Create My Account →"}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-700 font-bold hover:underline">
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
