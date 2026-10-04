import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaUserCircle, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartItems } from "../redux/features/cartSlice";
import { setWishlistItems } from "../redux/features/likeSlice";
import { loginUser } from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await loginUser(formData);

      if (result?.success && result?.user) {
        const user = result.user;

        // Save user to localStorage
        localStorage.setItem("LoggedInUsers", JSON.stringify(user));
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }
        window.dispatchEvent(new Event("authChange"));

        // Restore user's cart from their profile
        if (user.cart?.length > 0) {
          dispatch(setCartItems(user.cart));
        } else {
          // Try to restore from user-specific localStorage
          try {
            const savedCart = localStorage.getItem(`cart_${user.email}`);
            if (savedCart) dispatch(setCartItems(JSON.parse(savedCart)));
          } catch (_) {}
        }

        // Restore user's wishlist from their profile
        if (user.wishlist?.length > 0) {
          dispatch(setWishlistItems(user.wishlist));
        } else {
          try {
            const savedWishlist = localStorage.getItem(`wishlist_${user.email}`);
            if (savedWishlist) dispatch(setWishlistItems(JSON.parse(savedWishlist)));
          } catch (_) {}
        }

        toast.success(`Welcome back, ${user.name}! 🎉`);
        navigate("/");
      } else {
        toast.error(result?.message || "Invalid email or password");
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "Invalid email or password";
      toast.error(errorMsg);

      // If backend reports an admin account attempted to log in here, offer quick redirect
      if (error.response?.data?.isAdmin) {
        setTimeout(() => {
          navigate("/admin/login");
        }, 1500);
      }
    } finally {
      setLoading(false);
      setFormData({ email: "", password: "" });
    }
  };

  const loggedInUser = (() => {
    try { return JSON.parse(localStorage.getItem("LoggedInUsers")); } catch { return null; }
  })();

  const handleLogOut = () => {
    localStorage.removeItem("LoggedInUsers");
    localStorage.removeItem("authToken");
    dispatch(setCartItems([]));
    dispatch(setWishlistItems([]));
    toast.success("Logged out successfully");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
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
            <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
            <p className="text-purple-100 text-base leading-relaxed">
              Sign in to access your account, track orders, manage your wishlist, and enjoy a seamless 10-minute shopping experience.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>Your cart & wishlist is saved across sessions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>Access Admin Panel to manage products</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-bold shrink-0">✓</span>
                <span>10-minute delivery, every time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {loggedInUser ? (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                  <FaUserCircle className="text-5xl text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Hello, {loggedInUser.name} 👋
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{loggedInUser.email}</p>
                  {loggedInUser.role === "admin" && (
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mt-2">
                      Admin Account
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <Link
                    to="/"
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Continue Shopping →
                  </Link>
                  <Link
                    to="/profile"
                    className="block w-full text-center bg-purple-50 text-purple-700 py-3 rounded-xl font-semibold hover:bg-purple-100 transition"
                  >
                    View My Profile
                  </Link>
                  {loggedInUser.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block w-full text-center bg-indigo-50 text-indigo-700 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition"
                    >
                      Go to Admin Panel
                    </Link>
                  )}
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
                <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Sign In</h2>
                <p className="text-gray-500 text-sm mb-8">Enter your credentials to continue shopping.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <div className="relative">
                      <FaUserCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
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
                    {loading ? "Signing in..." : "Sign In to Your Account"}
                  </button>
                </form>

                {/* Sign Up & Admin Link */}
                <div className="text-center mt-6 space-y-3">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-purple-700 font-bold hover:underline">
                      Create Account
                    </Link>
                  </p>
                  <p className="text-xs text-gray-500">
                    Administrator?{" "}
                    <Link to="/admin/login" className="text-indigo-600 font-semibold hover:underline">
                      Sign In to Admin Portal →
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

export default Login;
