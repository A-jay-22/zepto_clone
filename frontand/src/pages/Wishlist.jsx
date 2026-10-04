import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/features/likeSlice";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrashAlt, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      try {
        const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
        setLoggedInUser(user);
      } catch {
        setLoggedInUser(null);
      }
    };
    loadUser();
    setAuthChecked(true);

    window.addEventListener("authChange", loadUser);
    window.addEventListener("storage", loadUser);
    return () => {
      window.removeEventListener("authChange", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const handleRemove = (itemId, itemName) => {
    dispatch(removeFromWishlist(itemId));
    toast.success(`Removed "${itemName}" from wishlist`);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`Added "${item.name}" to cart 🛒`);
  };

  // Loading while checking auth
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Guard: unauthenticated user sees login prompt
  if (!loggedInUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
            <FaHeart className="text-4xl text-pink-400" />
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto -mt-4 mb-4 border-2 border-white">
            <FaLock className="text-lg text-amber-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Your Wishlist is Waiting!</h2>
          <p className="text-gray-500 text-sm mb-2">
            You have <span className="font-bold text-pink-600">{wishlist.length} item{wishlist.length !== 1 ? "s" : ""}</span> saved in your wishlist.
          </p>
          <p className="text-gray-400 text-xs mb-8">
            Log in to view your saved items and add them to your cart.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition shadow-md"
            >
              Log In to View Wishlist
            </Link>
            <Link
              to="/register"
              className="w-full border-2 border-pink-200 text-pink-700 font-semibold py-3 rounded-xl hover:bg-pink-50 transition"
            >
              Create an Account
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 underline transition"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/40 to-purple-50/40 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
              <FaHeart className="text-pink-600" />
              My Wishlist
            </h1>
            {loggedInUser && (
              <p className="text-gray-500 text-sm mt-1">
                Saved for{" "}
                <span className="font-semibold text-purple-700">{loggedInUser.name}</span> •{" "}
                {wishlist.length} item{wishlist.length === 1 ? "" : "s"}
              </p>
            )}
          </div>
          <Link to="/">
            <button className="text-purple-700 border border-purple-200 bg-white font-semibold hover:bg-purple-50 transition px-4 py-2 rounded-xl text-sm cursor-pointer">
              Continue Shopping →
            </button>
          </Link>
        </div>

        {/* Wishlist Grid */}
        {wishlist.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {wishlist.map((item) => {
                const id = item._id || item.id;
                const discount =
                  item.oldPrice && item.oldPrice > item.price
                    ? item.oldPrice - item.price
                    : 0;

                return (
                  <div
                    key={id}
                    className="bg-white rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
                  >
                    {/* Product Image */}
                    <div className="relative bg-gray-50 p-3 flex items-center justify-center h-44 sm:h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
                        }}
                      />
                      <button
                        className="absolute top-2.5 right-2.5 bg-white shadow-sm p-2 rounded-full border border-gray-200 hover:bg-red-50 hover:border-red-400 transition cursor-pointer"
                        onClick={() => handleRemove(id, item.name)}
                        title="Remove from Wishlist"
                      >
                        <FaTrashAlt className="text-red-500 text-xs" />
                      </button>

                      {item.category && (
                        <span className="absolute bottom-2.5 left-2.5 bg-white/90 text-purple-700 font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-gray-200">
                          {item.category}
                        </span>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-3.5 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                            ₹{item.price}
                          </span>
                          {item.oldPrice && item.oldPrice > item.price && (
                            <span className="line-through text-xs text-gray-400">
                              ₹{item.oldPrice}
                            </span>
                          )}
                        </div>

                        {discount > 0 && (
                          <p className="text-emerald-600 text-xs font-bold mt-0.5">
                            ₹{discount} OFF
                          </p>
                        )}

                        <h2 className="text-sm font-semibold text-gray-900 mt-1.5 line-clamp-2 min-h-[40px]">
                          {item.name}
                        </h2>
                        <p className="text-xs text-gray-500 mt-0.5">{item.weight}</p>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 space-y-2">
                        <button
                          className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                          onClick={() => handleAddToCart(item)}
                        >
                          <FaShoppingCart />
                          Add to Cart
                        </button>

                        <button
                          className="w-full border border-gray-200 py-1.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition cursor-pointer"
                          onClick={() => handleRemove(id, item.name)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bulk Action Banner */}
            <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Add all to cart?
                </h3>
                <p className="text-xs text-gray-500">
                  Move all {wishlist.length} wishlist items to your cart at once.
                </p>
              </div>
              <button
                onClick={() => {
                  wishlist.forEach((item) => dispatch(addToCart(item)));
                  toast.success(`Added all ${wishlist.length} items to cart!`);
                }}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition text-sm cursor-pointer"
              >
                Add All to Cart
              </button>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 sm:py-28">
            <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
              <FaHeart className="text-4xl text-pink-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Start adding products you love! Tap the heart icon on any product to save it here.
            </p>
            {!loggedInUser && (
              <p className="text-xs text-purple-600 font-semibold mb-5">
                💡 Log in to save your wishlist across sessions
              </p>
            )}
            <Link to="/">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-7 py-3 rounded-xl font-bold hover:opacity-90 transition text-sm cursor-pointer">
                Browse Products
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
