// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/features/likeSlice";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dishpatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // const wishlistItems = [
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     price: 99,
  //     image:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Watch",
  //     price: 149,
  //     image:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  //   },
  //   {
  //     id: 3,
  //     name: "Running Shoes",
  //     price: 89,
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold">My Wishlist ❤️</h1>
          <Link to={"/"}>
            <button className="text-blue-600 font-semibold hover:underline cursor-pointer">
              Continue Shopping →
            </button>
          </Link>
        </div>

        {/* Wishlist Grid */}
        {wishlist.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover"
                  />

                  <button
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100"
                    onClick={() => dishpatch(removeFromWishlist(item.id))}
                  >
                    ❌
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  <p className="text-blue-600 font-bold mt-2">${item.price}</p>

                  {/* Actions */}
                  <div className="mt-5 space-y-3">
                    <button
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                      onClick={() => dishpatch(addToCart(item))}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                      onClick={() => dishpatch(removeFromWishlist(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-semibold mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 mb-6">
              Start adding products you love!
            </p>
            <Link to={"/"}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
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
