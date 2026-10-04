// import React from 'react'

import { FaChevronRight, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";
const BeautyHome = () => {
  const dispatch = useDispatch();

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
    <div className=" py-8">
      {/* Categories */}

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Beauty & Personal Care
        </h2>
        <Link to="/beauty">
          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </Link>
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
                className="absolute bottom-3 right-3 border-2 border-pink-500 text-pink-600 font-bold rounded-xl px-4 py-1 bg-white hover:bg-pink-600 hover:text-white"
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

            <p className="text-green-700 font-semibold text-sm">{item.offer}</p>

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
  );
};

export default BeautyHome;
