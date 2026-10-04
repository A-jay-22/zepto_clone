// import React from 'react'
import { FaChevronRight, FaStar } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";

const CafeHome = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Plain Maggi",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bda5d838-4eda-4990-9032-9fc5d5cc284a/Plain-Maggi-.jpeg",
      price: 79,
      oldPrice: 99,
      offer: "₹20 OFF",
      weight: "250 g",
      brand: "Zepto Cafe",
      rating: 4.2,
      reviews: "165.0k",
    },
    {
      id: 2,
      name: "Veg Puff",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6c2b8332-8ffa-48e2-bac9-74feda4da37c/Veg-Puff-.jpeg",
      price: 69,
      oldPrice: 109,
      offer: "₹40 OFF",
      weight: "100 g",
      brand: "Zepto Cafe",
      rating: 4.3,
      reviews: "144.7k",
    },
    {
      id: 3,
      name: "Chicken Puff",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2048-2048,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e9ad80ca-913d-4851-8d1f-c53c4b805811/Chicken-Puff-.png",
      price: 79,
      oldPrice: 119,
      offer: "₹40 OFF",
      weight: "100 g",
      brand: "Zepto Cafe",
      rating: 4.2,
      reviews: "131k",
    },
    {
      id: 4,
      name: "Garlic Bread",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-4972-4972,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f6990adb-b15d-4190-9c28-799be3b5b812/Garlic-Bread-with-Cheese-Dip.jpeg",
      price: 139,
      oldPrice: 169,
      offer: "₹30 OFF",
      weight: "120 g",
      brand: "Zepto Cafe",
      rating: 4.0,
      reviews: "55k",
    },
    {
      id: 5,
      name: "Hot Chocolate",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2352-2352,pr-true,f-auto,q-40,dpr-2/cms/product_variant/18ad43a8-c575-443c-b2ab-23489cf86ce1/Hot-Chocolate.jpeg",
      price: 135,
      oldPrice: 159,
      offer: "₹24 OFF",
      weight: "250 ml",
      brand: "Zepto Cafe",
      rating: 4.0,
      reviews: "54k",
    },
    {
      id: 6,
      name: "Vada Pav",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7f7b2c34-a8b8-4533-b535-58dca7e6c229/Vada-Pav-.jpeg",
      price: 65,
      oldPrice: 99,
      offer: "₹34 OFF",
      weight: "120 g",
      brand: "Zepto Cafe",
      rating: 4.0,
      reviews: "37k",
    },
    {
      id: 7,
      name: "Choco Lava Cake",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-5198-5198,pr-true,f-auto,q-40,dpr-2/cms/product_variant/66c19f46-fdb7-47f4-a06c-eeaadd27805d/Choco-Lava-Cake.jpeg",
      price: 89,
      oldPrice: 119,
      offer: "₹30 OFF",
      weight: "70 g",
      brand: "Zepto Cafe",
      rating: 4.1,
      reviews: "51k",
    },
    {
      id: 8,
      name: "Protinex Hot Chocolate",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/fccb4aeb-91b5-4c28-8147-4b9c4a254d93/Protinex-Rich-Chocolate-Drink-Mix.jpeg",
      price: 169,
      oldPrice: 199,
      offer: "₹30 OFF",
      weight: "250 ml",
      brand: "Zepto Cafe",
      rating: 4.3,
      reviews: "438",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1b1b39]">
          Cafe & Beverages
        </h2>

        <Link to="/cafe">
          <button className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition duration-300">
            See All
            <FaChevronRight />
          </button>
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative p-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 sm:h-40 md:h-44 object-contain"
              />

              {/* Wishlist */}
              <button
                onClick={() => dispatch(addToWishlist(item))}
                className="absolute top-3 right-3 h-9 w-9 rounded-full border-2 border-pink-500 bg-white text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition"
              >
                <FaHeart />
              </button>

              {/* Add Button */}
              <button
                onClick={() => dispatch(addToCart(item))}
                className="absolute bottom-3 right-3 border-2 border-pink-600 text-pink-600 bg-white rounded-lg px-3 py-1 text-sm font-semibold hover:bg-pink-700 hover:text-white transition"
              >
                ADD
              </button>
            </div>

            {/* Details */}
            <div className="px-3 pb-4">
              {/* Price */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-green-700 text-white text-sm px-2 py-1 rounded font-semibold">
                  ₹{item.price}
                </span>

                <span className="line-through text-xs text-gray-500">
                  ₹{item.oldPrice}
                </span>
              </div>

              {/* Offer */}
              <p className="text-green-600 text-xs font-semibold mt-1">
                {item.offer}
              </p>

              {/* Name */}
              <h3 className="font-medium text-sm sm:text-base mt-2 line-clamp-2 min-h-[48px]">
                {item.name}
              </h3>

              {/* Weight */}
              <p className="text-xs text-gray-500 mt-1">{item.weight}</p>

              {/* Brand */}
              <span className="inline-block mt-2 bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
                {item.brand}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3 text-xs">
                <FaStar className="text-green-600" />
                <span>{item.rating}</span>
                <span className="text-gray-500">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeHome;
