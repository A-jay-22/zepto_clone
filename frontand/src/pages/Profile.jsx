import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaShieldAlt,
  FaSignOutAlt,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaClock,
  FaTruck,
  FaTrashAlt,
} from "react-icons/fa";
import { setCartItems, removeFromCart } from "../redux/features/cartSlice";
import { setWishlistItems, removeFromWishlist } from "../redux/features/likeSlice";
// import OrderHistory from "./OrderHistory";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState(null);
  const [ordersList, setOrdersList] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    const loadUser = () => {
      try {
        const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
        setCurrentUser(user);
        if (!user) {
          navigate("/login");
          return;
        }

        const key = user.email ? `orders_${user.email}` : "orders_guest";
        const savedOrders = JSON.parse(localStorage.getItem(key) || "[]");
        if (savedOrders.length > 0) {
          setOrdersList(savedOrders);
        } else {
          const universal = JSON.parse(localStorage.getItem("all_orders") || "[]");
          setOrdersList(universal);
        }
      } catch {
        setCurrentUser(null);
        navigate("/login");
      }
    };
    loadUser();

    window.addEventListener("authChange", loadUser);
    window.addEventListener("storage", loadUser);
    return () => {
      window.removeEventListener("authChange", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUsers");
    localStorage.removeItem("authToken");
    window.dispatchEvent(new Event("authChange"));
    toast.success("You have been logged out successfully. See you soon! 👋");
    navigate("/");
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const initial = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Button & Page Title */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs transition"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to Store</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-4 py-2 rounded-xl border border-red-200 transition shadow-xs cursor-pointer"
          >
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>

        {/* Profile Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar Pill */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-extrabold text-4xl flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
              {initial}
            </div>

            {/* User Meta */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {currentUser.name}
                </h1>
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentUser.role === "admin" ? "Admin" : "Verified Customer"}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <FaEnvelope className="text-purple-600 text-xs" />
                  <span>{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-pink-600 text-xs" />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaClock className="text-emerald-600 text-xs" />
                  <span className="text-emerald-700 font-semibold">10-Min Delivery Zone</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 pt-1">
                Member ID: <span className="font-mono">{currentUser._id || currentUser.id || "USR-2026"}</span>
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
              <Link
                to="/admin"
                className="flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider border border-purple-200 transition"
              >
                <FaShieldAlt />
                <span>Admin Dashboard</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
              >
                <FaSignOutAlt />
                <span>Sign Out Easily</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl shrink-0">
              <FaShoppingBag />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Cart Items
              </p>
              <h3 className="text-2xl font-bold text-gray-900">{cartItems.length}</h3>
              <Link to="/addtocart" className="text-xs text-purple-600 font-bold hover:underline">
                View Cart →
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl shrink-0">
              <FaShoppingBag />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Total Orders
              </p>
              <h3 className="text-2xl font-bold text-gray-900">{ordersList.length}</h3>
              <Link to="/orderhistory" className="text-xs text-indigo-600 font-bold hover:underline">
                View Orders →
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xl shrink-0">
              <FaHeart />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Wishlist Items
              </p>
              <h3 className="text-2xl font-bold text-gray-900">{wishlistItems.length}</h3>
              <Link to="/wishlist" className="text-xs text-pink-600 font-bold hover:underline">
                View Wishlist →
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
              <FaTruck />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Delivery Priority
              </p>
              <h3 className="text-xl font-bold text-emerald-700">⚡ Instant 10m</h3>
              <span className="text-xs text-gray-500">Free delivery eligible</span>
            </div>
          </div>
        </div>

        {/* Active Cart Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <FaShoppingBag className="text-purple-600 text-lg" />
                <span>Your Cart Items ({cartItems.length})</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                Items currently in your shopping cart ready for instant checkout.
              </p>
            </div>
            {cartItems.length > 0 && (
              <Link
                to="/addtocart"
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition shadow-xs"
              >
                Checkout Now
              </Link>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-3xl mb-2">🛒</p>
              <p className="text-sm font-medium">Your cart is currently empty</p>
              <Link
                to="/"
                className="mt-3 inline-block text-xs bg-purple-100 text-purple-700 px-4 py-1.5 rounded-lg font-bold hover:bg-purple-200 transition"
              >
                Browse Store Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cartItems.slice(0, 6).map((item) => (
                <div
                  key={item._id || item.id}
                  className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded-xl bg-white p-1 border shrink-0"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 capitalize">
                      {item.category}
                    </p>
                    <p className="text-sm font-extrabold text-purple-700 mt-0.5">
                      ₹{item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item._id || item.id))}
                    className="text-gray-400 hover:text-red-500 p-2 cursor-pointer transition"
                    title="Remove from cart"
                  >
                    <FaTrashAlt className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Wishlist Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <FaHeart className="text-pink-600 text-lg" />
                <span>Your Wishlist ({wishlistItems.length})</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                Saved items waiting for you.
              </p>
            </div>
            {wishlistItems.length > 0 && (
              <Link
                to="/wishlist"
                className="bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition shadow-xs"
              >
                View All Wishlist
              </Link>
            )}
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-3xl mb-2">❤️</p>
              <p className="text-sm font-medium">No items saved to your wishlist yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {wishlistItems.slice(0, 6).map((item) => (
                <div
                  key={item._id || item.id}
                  className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded-xl bg-white p-1 border shrink-0"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 capitalize">
                      {item.category}
                    </p>
                    <p className="text-sm font-extrabold text-pink-600 mt-0.5">
                      ₹{item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromWishlist(item._id || item.id))}
                    className="text-gray-400 hover:text-red-500 p-2 cursor-pointer transition"
                    title="Remove from wishlist"
                  >
                    <FaTrashAlt className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order History Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <FaShoppingBag className="text-purple-600 text-lg" />
                <span>My Order History ({ordersList.length})</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                View your past grocery orders, delivery status, and reorder quickly.
              </p>
            </div>
            
            <Link
              to="/orderhistory"
              className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition shadow-xs"
            >
              View All Orders
            </Link>
          </div>

          {ordersList.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p className="text-3xl mb-2">📦</p>
              <p className="text-sm font-medium">You haven't placed any orders yet.</p>
              <Link
                to="/"
                className="mt-3 inline-block text-xs bg-purple-100 text-purple-700 px-4 py-1.5 rounded-lg font-bold hover:bg-purple-200 transition"
              >
                Start Shopping Now
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {ordersList.slice(0, 3).map((order) => (
                <div
                  key={order.id}
                  className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
                      #{order.id.slice(-4)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        Order #{order.id}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {order.date} • {order.items?.length || 0} items • <span className="font-semibold text-gray-800">₹{order.total}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "On the way"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                    <Link
                      to="/orderhistory"
                      className="text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-100 transition"
                    >
                      Order Again
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>




        {/* Big Log Out Banner at Bottom */}
        <div className="bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 border border-red-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Done shopping for now?
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">
              You can log out securely with one click. Your cart and wishlist will be waiting for your next visit!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <FaSignOutAlt />
            <span>Log Out of Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
