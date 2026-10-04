import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaLock, FaUserShield, FaShieldAlt } from "react-icons/fa";
import { adminLogin } from "../api/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await adminLogin(formData);

      if (result?.success && result?.user) {
        localStorage.setItem("LoggedInUsers", JSON.stringify(result.user));
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }
        window.dispatchEvent(new Event("authChange"));

        toast.success(`Welcome back Admin, ${result.user.name || "Administrator"}! 🎉`);
        navigate("/admin");
      } else {
        toast.error(result?.message || "Invalid admin credentials");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Invalid admin credentials";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Quick fill default admin credentials for convenience
  const handleFillDemoAdmin = () => {
    setFormData({
      email: "admin@zepto.com",
      password: "admin123",
    });
    toast.success("Admin demo credentials filled");
  };

  const loggedInUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("LoggedInUsers"));
    } catch {
      return null;
    }
  })();

  const handleLogOut = () => {
    localStorage.removeItem("LoggedInUsers");
    localStorage.removeItem("authToken");
    window.dispatchEvent(new Event("authChange"));
    toast.success("Logged out successfully");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side Banner */}
        <div className="hidden md:flex bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-10 flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-4 border-white opacity-50"></div>
          </div>
          <div className="relative z-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png"
              alt="Zepto"
              className="h-9 mb-8 brightness-200"
            />
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FaShieldAlt className="text-yellow-300" />
              <span>Admin Portal</span>
            </div>
            <h1 className="text-4xl font-extrabold mb-4">Admin Sign In</h1>
            <p className="text-purple-100 text-base leading-relaxed">
              Secure control center for managing products, store inventory, categories, and deliveries across the platform.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>Manage store products & categories</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>Upload product images with Multer</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>Real-time inventory status management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {loggedInUser && loggedInUser.role === "admin" ? (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                  <FaUserShield className="text-5xl text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Hello Admin, {loggedInUser.name} 👋
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{loggedInUser.email}</p>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mt-2">
                    Active Admin Session
                  </span>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/admin"
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Go to Admin Dashboard →
                  </Link>
                  <Link
                    to="/"
                    className="block w-full text-center bg-purple-50 text-purple-700 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
                  >
                    View Store as Customer
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition cursor-pointer"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-3xl font-extrabold text-gray-900">Admin Sign In</h2>
                  <button
                    type="button"
                    onClick={handleFillDemoAdmin}
                    className="text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-lg border border-purple-200 transition cursor-pointer"
                  >
                    Fill Demo Admin
                  </button>
                </div>
                <p className="text-gray-500 text-sm mb-8">Enter your administrator credentials to access dashboard.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Admin Email</label>
                    <div className="relative">
                      <FaUserShield className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="admin@zepto.com"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                        className="w-full pl-10 pr-11 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
                      >
                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition cursor-pointer disabled:opacity-50 text-sm"
                  >
                    {loading ? "Verifying..." : "Sign In to Admin Portal"}
                  </button>
                </form>

                {/* Return Links */}
                <div className="text-center mt-6 space-y-2">
                  <p className="text-gray-600 text-sm">
                    Looking for customer shopping?{" "}
                    <Link to="/login" className="text-purple-700 font-bold hover:underline">
                      Customer Login
                    </Link>
                  </p>
                  <p className="text-xs text-gray-400">
                    <Link to="/" className="hover:text-purple-700 transition">
                      ← Back to Store
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
