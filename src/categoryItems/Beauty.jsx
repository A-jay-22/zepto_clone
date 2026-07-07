// import React from 'react'

import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import Category from "../component/Category";
const Beauty = () => {
  const dispatch = useDispatch();

  const categories = [
    {
      name: "Lipsticks",
      image:
        "https://images.unsplash.com/photo-1631214540242-1fb1bb0bb7d7?w=200",
      active: true,
    },
    {
      name: "Liquid Lipsticks",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200",
    },
    {
      name: "Kajal & Eyeliner",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200",
    },
    {
      name: "Foundation",
      image:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=200",
    },
    {
      name: "Highlighter & Blush",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Renee Madness PH Stick Lipstick | Long Lasting Colour",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1765-1765,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a63d62c5-30de-4c7c-8f30-29bce36c25cf/Renee-Madness-Ph-Stick-Lipstick-Long-Lasting-Colour.jpeg",
      price: 439,
      oldPrice: 499,
      offer: "₹60 OFF",
      weight: "1 pc (3 g)",
      finish: "Glossy Finish",
      rating: "4.4",
      reviews: "1.1k",
    },
    {
      id: 2,
      name: "Lakme 9to5 Powerplay Priming Matte Lipstick",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/65b61c3a-d129-4ff1-9ba1-be5c36ae23ee/Lakme-9to5-Powerplay-Priming-Matte-Lipstick-Lasts-16hrs-Coral-Date.jpeg",
      price: 535,
      oldPrice: 650,
      offer: "₹115 OFF",
      weight: "1 pc (3.6 g)",
      finish: "Matte Finish",
      rating: "3.1",
      reviews: "136",
    },
    {
      id: 3,
      name: "Lakme Rouge Bloom Powder Matte Bullet Pink Tulip",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c8af1f59-8a27-4689-9ef4-393ece2ade0a/Lakme-Rouge-Bloom-Powder-Matte-Bullet-Pink-Tulip-203.jpeg",
      price: 780,
      oldPrice: 999,
      offer: "₹219 OFF",
      weight: "1 pc (4 g)",
      finish: "Matte Finish",
      rating: "3.7",
      reviews: "32",
    },
    {
      id: 4,
      name: "Faces Canada Weightless Matte Finish Lipstick",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b2a28713-5bf0-436e-a3f1-95dbe63ee6e8/Faces-Canada-Weightless-Matte-Finish-Lipstick-Buff-Nude-05-Hydrating.jpeg",
      price: 260,
      oldPrice: 325,
      offer: "₹65 OFF",
      weight: "1 pc (4.5 g)",
      finish: "Matte Finish",
      rating: "3.5",
      reviews: "290",
    },
    {
      id: 5,
      name: "Lakme Absolute Beyond Matte Lipstick",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b2a28713-5bf0-436e-a3f1-95dbe63ee6e8/Faces-Canada-Weightless-Matte-Finish-Lipstick-Buff-Nude-05-Hydrating.jpeg",
      price: 467,
      oldPrice: 650,
      offer: "₹183 OFF",
      weight: "1 pc (3.6 g)",
      finish: "Matte Finish",
      rating: "3.5",
      reviews: "90",
    },
  ];

  return (
    <div>
      {" "}
      <Category />
      <div className="max-w-7xl mx-auto py-8">
        {/* Categories */}

        <div className="flex gap-8 overflow-x-auto">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  item.active ? "bg-pink-100" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="text-gray-700 text-sm mt-3 text-center">
                {item.name}
              </p>

              {item.active && (
                <div className="w-24 h-1 bg-pink-400 rounded-full mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Products */}

        <div className="flex gap-5 overflow-x-auto mt-10">
          {products.map((item) => (
            <div key={item.id} className="min-w-[190px]">
              <div className="border rounded-xl p-3 relative">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-44 object-contain"
                />
                <button
                  className="ml-1.5 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => dispatch(addToWishlist(item))}
                >
                  <FaHeart />
                </button>

                <button
                  className="absolute bottom-3 right-3 border-2 border-pink-500 text-pink-600 font-bold rounded-xl px-4 py-1 bg-white"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  ADD
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="bg-green-700 text-white px-2 rounded text-xl font-bold">
                  ₹{item.price}
                </span>

                <span className="line-through text-gray-500">
                  ₹{item.oldPrice}
                </span>
              </div>

              <p className="text-green-700 font-semibold text-sm">
                {item.offer}
              </p>

              <div className="border-b border-dashed my-2"></div>

              <h3 className="font-medium text-lg line-clamp-3 h-20">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-2">{item.weight}</p>

              <span className="inline-block mt-3 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-md">
                {item.finish}
              </span>

              <div className="flex items-center gap-1 mt-3">
                <FaStar className="text-green-600" />

                <span>{item.rating}</span>

                <span className="text-gray-500">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauty;
