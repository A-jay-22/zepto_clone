import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaRegHeart,
  FaSignOutAlt,
  FaShieldAlt,
  FaShoppingBag,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setSearch } from "../redux/features/searchSlice";
import { addToCart } from "../redux/features/cartSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const searchBoxRef = useRef(null);
  const profileBoxRef = useRef(null);

  // Redux state
  const wishlistCount = useSelector((state) => state.wishlist.wishlist.length);
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const products = useSelector((state) => state.products?.items || []);

  // Sync logged in user from localStorage
  useEffect(() => {
    const checkUser = () => {
      try {
        const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
        setCurrentUser(user);
      } catch {
        setCurrentUser(null);
      }
    };
    checkUser();

    // Listen for storage events & internal authChange events
    window.addEventListener("storage", checkUser);
    window.addEventListener("authChange", checkUser);
    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("authChange", checkUser);
    };
  }, [location.pathname]);

  // Close search dropdown and profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
      if (profileBoxRef.current && !profileBoxRef.current.contains(e.target)) {
        setProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products for search autocomplete
  const searchSuggestions = searchProduct.trim()
    ? products
        .filter(
          (p) =>
            p.name?.toLowerCase().includes(searchProduct.toLowerCase()) ||
            p.brand?.toLowerCase().includes(searchProduct.toLowerCase()) ||
            p.category?.toLowerCase().includes(searchProduct.toLowerCase())
        )
        .slice(0, 6)
    : [];

  const handleSearchChange = (val) => {
    setSearchProduct(val);
    dispatch(setSearch(val));
    setShowSearchDropdown(val.trim().length > 0);
  };

  const handleSelectProduct = (item) => {
    setShowSearchDropdown(false);
    navigate(item.category ? `/${item.category}` : "/");
  };

  const handleLogOut = () => {
    localStorage.removeItem("LoggedInUsers");
    localStorage.removeItem("authToken");
    setCurrentUser(null);
    setProfileDropdown(false);
    window.dispatchEvent(new Event("authChange"));
    toast.success("Logged out successfully 👋");
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-xs sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo & Delivery Time Pill */}
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png"
                alt="Zepto"
                className="h-7 sm:h-9 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Search Bar with Live Suggestions Dropdown */}
          <div
            ref={searchBoxRef}
            className="hidden md:flex flex-1 max-w-lg lg:max-w-xl relative mx-2"
          >
            <div className="relative w-full">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder='Search for "Milk", "Coffee", "Maggi", "Earbuds"...'
                value={searchProduct}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => {
                  if (searchProduct.trim()) setShowSearchDropdown(true);
                }}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 hover:bg-gray-100/80 focus:bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition"
              />
              {searchProduct && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Autocomplete Dropdown */}
            {showSearchDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <div className="p-3 bg-purple-50/50 border-b flex items-center justify-between text-xs text-purple-800 font-semibold">
                  <span>Search Suggestions</span>
                  <span>{searchSuggestions.length} items found</span>
                </div>

                {searchSuggestions.length > 0 ? (
                  <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                    {searchSuggestions.map((item) => {
                      const id = item._id || item.id;
                      return (
                        <div
                          key={id}
                          onClick={() => handleSelectProduct(item)}
                          className="p-3 flex items-center justify-between hover:bg-purple-50/40 transition cursor-pointer gap-3"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-11 h-11 object-contain rounded-lg bg-gray-50 p-1 shrink-0 border"
                              onError={(e) => {
                                e.target.src =
                                  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
                              }}
                            />
                            <div className="min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 truncate">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500">
                                <span className="capitalize font-medium text-purple-600">
                                  {item.category}
                                </span>{" "}
                                • {item.weight}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <div className="text-right">
                              <span className="font-bold text-gray-900 text-sm">
                                ₹{item.price}
                              </span>
                              {item.oldPrice && item.oldPrice > item.price && (
                                <span className="block text-xs line-through text-gray-400">
                                  ₹{item.oldPrice}
                                </span>
                              )}
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(addToCart(item));
                                toast.success(`Added ${item.name} to cart`);
                              }}
                              className="bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                            >
                              ADD
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-gray-500">
                    No products found matching "<strong>{searchProduct}</strong>"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2.5 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition flex items-center gap-1.5 font-medium text-sm"
              title="Wishlist"
            >
              <FaRegHeart className="text-xl text-pink-600" />
              <span className="hidden xl:inline">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/addtocart"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-bold px-4 py-2.5 rounded-xl shadow-xs transition"
            >
              <IoCartOutline className="text-2xl" />
              <span className="text-sm">
                Cart {cartCount > 0 && `(${cartCount})`}
              </span>
            </Link>

            {/* Customer Authentication State */}
            {currentUser ? (
              <div className="flex items-center gap-1.5" ref={profileBoxRef}>
                <div className="relative">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center gap-2.5 bg-purple-50 hover:bg-purple-100 text-purple-900 font-semibold px-3 py-1.5 rounded-xl text-sm transition cursor-pointer border border-purple-200"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="max-w-[100px] truncate">{currentUser.name}</span>
                    <FaChevronDown className="text-[10px] text-purple-600" />
                  </button>

                  {/* Logged in Profile Menu */}
                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-purple-50/50 to-pink-50/30">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-extrabold text-base flex items-center justify-center shadow-xs shrink-0">
                            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-gray-900 truncate">
                              {currentUser.name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                            {currentUser.role === "admin" ? "Admin" : "Customer"}
                          </span>
                          <span className="text-[11px] text-emerald-600 font-bold">
                            ● Active
                          </span>
                        </div>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/profile"
                          onClick={() => setProfileDropdown(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-purple-700 bg-purple-50/40 hover:bg-purple-50 transition"
                        >
                          <FaUser className="text-purple-600 text-xs" />
                          <span>View My Full Profile</span>
                        </Link>

                        <Link
                          to="/orderhistory"
                          onClick={() => setProfileDropdown(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-purple-50 transition"
                        >
                          <FaShoppingBag className="text-purple-600 text-xs" />
                          <span>My Order</span>
                        </Link>

                        <Link
                          to="/addtocart"
                          onClick={() => setProfileDropdown(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                        >
                          <span className="flex items-center gap-2.5">
                            <FaShoppingBag className="text-gray-400 text-xs" />
                            My Cart Items
                          </span>
                          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">
                            {cartCount}
                          </span>
                        </Link>

                        <Link
                          to="/wishlist"
                          onClick={() => setProfileDropdown(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                        >
                          <span className="flex items-center gap-2.5">
                            <FaRegHeart className="text-gray-400 text-xs" />
                            My Wishlist
                          </span>
                          <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-0.5 rounded-full">
                            {wishlistCount}
                          </span>
                        </Link>

                        {currentUser.role === "admin" && (
                          <Link
                            to="/admin"
                            onClick={() => setProfileDropdown(false)}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-purple-700 hover:bg-purple-50 transition font-medium"
                          >
                            <FaShieldAlt className="text-purple-600 text-xs" />
                            Admin Dashboard
                          </Link>
                        )}
                      </div>

                      <div className="border-t border-gray-100 my-1"></div>

                      <button
                        onClick={handleLogOut}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition cursor-pointer text-left"
                      >
                        <FaSignOutAlt className="text-xs" />
                        <span>Log Out Easily</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Quick 1-Click Logout Button next to Profile */}
                <button
                  onClick={handleLogOut}
                  title="Quick Log Out"
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-purple-700 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-gray-100 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-3.5 py-2 rounded-xl shadow-xs transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger & Cart */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/addtocart"
              className="relative p-2 text-gray-800"
              title="Cart"
            >
              <IoCartOutline className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-pink-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="p-2 text-gray-800 text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchProduct}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 bg-gray-50 rounded-xl hover:bg-purple-50 hover:text-purple-700"
              >
                🏠 Home
              </Link>
              {currentUser?.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 bg-purple-50 text-purple-700 font-bold rounded-xl"
                >
                  ⚙️ Admin Panel
                </Link>
              )}
              <Link
                to="/addtocart"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between"
              >
                <span>🛒 Cart</span>
                <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">
                  {cartCount}
                </span>
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between"
              >
                <span>❤️ Wishlist</span>
                <span className="bg-pink-200 text-pink-800 text-xs px-2 py-0.5 rounded-full font-bold">
                  {wishlistCount}
                </span>
              </Link>
            </div>

            {/* Mobile Auth Button */}
            <div className="pt-2 border-t">
              {currentUser ? (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3.5 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-xs">
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">
                        {currentUser.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 text-center bg-white border border-purple-200 text-purple-700 font-bold py-2 rounded-xl text-xs hover:bg-purple-50 transition"
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogOut();
                        setMenuOpen(false);
                      }}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs py-2 rounded-xl font-bold transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <FaSignOutAlt className="text-[10px]" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 text-center bg-gray-100 font-semibold py-2.5 rounded-xl text-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 text-center bg-purple-600 text-white font-semibold py-2.5 rounded-xl text-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
