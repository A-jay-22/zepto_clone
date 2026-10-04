import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaShoppingCart,
  FaRegHeart,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import { setSearch } from "../redux/features/searchSlice";
import ProductItemCard from "./ProductItemCard";
import Category from "./Category";
import Card from "./Card";

const CATEGORY_SECTIONS = [
  { id: "cafe", title: "Cafe & Quick Bites", link: "/cafe" },
  { id: "fresh", title: "Fresh Fruits & Vegetables", link: "/fresh" },
  { id: "laundry", title: "Laundry & Household Care", link: "/item" },
  { id: "electronics", title: "Electronics & Audio", link: "/electronics" },
  { id: "mobile", title: "Mobiles & Accessories", link: "/mobile" },
  { id: "beauty", title: "Beauty & Personal Care", link: "/beauty" },
  { id: "fashion", title: "Fashion & Lifestyle", link: "/fashion" },
  { id: "home-item", title: "Home & Kitchen Needs", link: "/home-item" },
  { id: "toys", title: "Toys & Games", link: "/toys" },
];

const Items = () => {
  const dispatch = useDispatch();

  // Products from Redux store
  const { items: allProducts, status } = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.search?.value || "");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
      {setLoggedInUser}(user);
    } catch {
      {setLoggedInUser}(null);
    }
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts({ category: "", search: "" }));
    }
  }, [dispatch, status]);

  // Filter products when search term is active
  const searchResults = searchTerm.trim()
    ? allProducts.filter(
        (p) =>
          p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const totalCartCount = cartItems.reduce((acc, curr) => acc + (curr.quantity || 1), 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category Pills Header */}
      <div className="bg-white border-b sticky top-16 md:top-20 z-20">
        <Category />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
        {/* LOGGED IN CUSTOMER HIGHLIGHT: Added Products & Wishlist */}
        {loggedInUser && (cartItems.length > 0 || wishlistItems.length > 0) && (
          <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 rounded-3xl p-6 md:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-pink-300 font-semibold text-xs tracking-wider uppercase mb-1">
                  <span>✨ Welcome Back, {loggedInUser.name}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold">
                  Your Active Shopping Hub
                </h2>
                <p className="text-purple-200 text-sm mt-1">
                  You have {cartItems.length} products in your cart and {wishlistItems.length} items in your wishlist.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/addtocart"
                  className="bg-white text-purple-900 font-bold px-4 py-2.5 rounded-xl hover:bg-purple-50 text-sm transition shadow-sm flex items-center gap-2"
                >
                  <FaShoppingCart />
                  <span>View Cart ({cartItems.length})</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="bg-purple-800/80 hover:bg-purple-800 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition border border-purple-500/50 flex items-center gap-2"
                >
                  <FaRegHeart />
                  <span>Wishlist ({wishlistItems.length})</span>
                </Link>
              </div>
            </div>

            {/* Quick Preview of Added Cart Items */}
            {cartItems.length > 0 && (
              <div className="mt-4 pt-4 border-t border-purple-600/40">
                <h4 className="text-xs uppercase tracking-wider text-purple-200 font-bold mb-3">
                  Items in your cart ready for 10-minute delivery:
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {cartItems.map((item) => (
                    <div
                      key={item._id || item.id}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-3 min-w-[200px] border border-white/10"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg bg-white p-1 object-contain shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{item.name}</p>
                        <p className="text-xs text-pink-300 font-semibold">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEARCH RESULTS VIEW */}
        {searchTerm.trim() !== "" ? (
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xs">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaSearch className="text-purple-600 text-lg" />
                  Search Results for "{searchTerm}"
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Found {searchResults.length} product{searchResults.length === 1 ? "" : "s"}
                </p>
              </div>

              <button
                onClick={() => dispatch(setSearch(""))}
                className="flex items-center gap-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3.5 py-1.5 rounded-xl font-semibold transition"
              >
                <FaTimes />
                <span>Clear Search</span>
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
                {searchResults.map((product) => (
                  <ProductItemCard
                    key={product._id || product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800">No items found</h3>
                <p className="text-gray-500 text-sm mt-1 mb-6">
                  We couldn't find any products matching "{searchTerm}". Check for typos or search for general terms like "Cafe", "Apple", "Earbuds", etc.
                </p>
                <button
                  onClick={() => dispatch(setSearch(""))}
                  className="bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-purple-700 transition"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        ) : (
          /* REGULAR CATEGORY-BASED CATALOG */
          <div className="space-y-12">
            {CATEGORY_SECTIONS.map((section) => {
              // Get products for this category from Redux
              const sectionProducts = allProducts.filter(
                (p) => p.category?.toLowerCase() === section.id
              );

              if (sectionProducts.length === 0) return null;

              return (
                <div key={section.id} className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-xs">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1b1b39]">
                        {section.title}
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Delivered in 10 minutes from your nearest dark store
                      </p>
                    </div>

                    <Link
                      to={section.link}
                      className="flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-bold text-sm transition"
                    >
                      <span>See All</span>
                      <FaChevronRight className="text-xs" />
                    </Link>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
                    {sectionProducts.slice(0, 6).map((product) => (
                      <ProductItemCard
                        key={product._id || product.id}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Custom or Other Categories Added by Admin */}
            {(() => {
              const knownCategories = new Set(CATEGORY_SECTIONS.map((s) => s.id));
              const customProducts = allProducts.filter(
                (p) => !knownCategories.has(p.category?.toLowerCase())
              );
              if (customProducts.length === 0) return null;

              return (
                <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-xs">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1b1b39]">
                        More Products & Essentials
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Freshly added products by our store admin
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
                    {customProducts.map((product) => (
                      <ProductItemCard
                        key={product._id || product.id}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Floating Cart Button */}
        {totalCartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-50 animate-bounce">
            <Link
              to="/addtocart"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 transition"
            >
              <FaShoppingCart className="text-lg" />
              <span>{totalCartCount} Items in Cart</span>
            </Link>
          </div>
        )}

        {/* Why Choose Us & How It Works */}
        <Card />
      </div>
    </div>
  );
};

export default Items;
