// import React from 'react'
import { FaChevronRight, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";

const FreshHome = () => {
  const dispatch = useDispatch();

  return (
    <div className="py-8 px-4">
      {/* // heading */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Fresh Fruits & Vegetables
        </h2>

        <Link to="/fresh">
          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </Link>
      </div>

      {/* Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-6">
        {/* Product 1 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg duration-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=400"
              alt=""
              className="w-full h-36 object-cover"
            />

            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white hover:bg-pink-600 hover:text-white cursor-pointer"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2">
              <span className="bg-green-700 text-white px-2 rounded font-bold">
                ₹82
              </span>

              <span className="line-through text-gray-500">₹187</span>
            </div>

            <p className="text-green-700 text-sm font-semibold mt-1">
              ₹105 OFF
            </p>

            <h3 className="font-semibold mt-2">Mango Banganapalli</h3>

            <p className="text-gray-500 text-sm">2 pcs</p>

            <span className="inline-block mt-2 bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
              Carbide Free
            </span>
          </div>
        </div>

        {/* Product 2 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400"
              alt=""
              className="w-full h-36 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white">
              ADD
            </button>
          </div>

          <div className="p-3">
            <div className="flex gap-2">
              <span className="bg-green-700 text-white px-2 rounded font-bold">
                ₹107
              </span>

              <span className="line-through text-gray-500">₹232</span>
            </div>

            <p className="text-green-700 text-sm font-semibold">₹125 OFF</p>

            <h3 className="font-semibold">Watermelon</h3>

            <p className="text-gray-500 text-sm">1 pc</p>
          </div>
        </div>

        {/* Product 3 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="relative">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-200,ar-1024-1024,pr-true,f-auto,q-40/cms/product_variant/e41a5c97-2675-42b6-acd0-b3fc1d058fd4.jpeg"
              alt=""
              className="w-full h-36 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <div className="flex gap-2">
              <span className="bg-green-700 text-white px-2 rounded font-bold">
                ₹37
              </span>

              <span className="line-through text-gray-500">₹58</span>
            </div>

            <p className="text-green-700 text-sm font-semibold">₹21 OFF</p>

            <h3 className="font-semibold">Muskmelon Diced</h3>

            <p className="text-gray-500 text-sm">200 g</p>
          </div>
        </div>

        {/* Product 4 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400"
              alt=""
              className="w-full h-36 object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <div className="flex gap-2">
              <span className="bg-green-700 text-white px-2 rounded font-bold">
                ₹100
              </span>

              <span className="line-through text-gray-500">₹220</span>
            </div>

            <p className="text-green-700 text-sm font-semibold">₹120 OFF</p>

            <h3 className="font-semibold">Mango Mallika</h3>

            <p className="text-gray-500 text-sm">2 pcs</p>
          </div>
        </div>

        {/* Product 5 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="h-36 flex items-center justify-center relative">
            <img
              src="https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2e4f9c1a-6b0d-45da-aaaf-36c331a688c3/Mango-Raw.jpeg"
              alt=""
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <span className="bg-green-700 text-white px-2 rounded font-bold">
              ₹41
            </span>

            <h3 className="font-semibold mt-2">Mango Raw</h3>

            <p className="text-gray-500 text-sm">500 g</p>
          </div>
        </div>

        {/* Product 6 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="h-36 flex items-center justify-center relative">
            <img
              src="https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1254-1254,pr-true,f-auto,q-40,dpr-2/cms/product_variant/06dd3cb2-b5a6-459d-9a31-5b6091c6c98a/Mango-Dashari-Malihabad-.png"
              alt=""
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <span className="bg-green-700 text-white px-2 rounded font-bold">
              ₹200
            </span>

            <h3 className="font-semibold mt-2">Mango Combo</h3>
          </div>
        </div>

        {/* Product 7 */}

        <div className="border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="h-36 flex items-center justify-center relative ">
            <img
              src="https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1254-1254,pr-true,f-auto,q-40,dpr-2/cms/product_variant/06dd3cb2-b5a6-459d-9a31-5b6091c6c98a/Mango-Dashari-Malihabad-.png"
              alt=""
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <span className="bg-green-700 text-white px-2 rounded font-bold">
              ₹62
            </span>

            <h3 className="font-semibold mt-2">Mango Dashari</h3>
          </div>
        </div>

        {/* Product 8 */}

        <div className=" border rounded-xl overflow-hidden hover:shadow-lg">
          <div className="relative h-36 flex items-center justify-center">
            <img
              src="https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-910-910,pr-true,f-auto,q-40,dpr-2/cms/product_variant/1ffe625d-0dea-46a0-a91d-0bf09bc684b5/Organically-Grown-Muskmelon.jpeg"
              alt=""
            />
            <button
              className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToWishlist())}
            >
              <FaHeart />
            </button>

            <button
              className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-500 px-4 py-1 rounded-lg font-semibold bg-white"
              onClick={() => {
                dispatch(addToCart());
              }}
            >
              ADD
            </button>
          </div>

          <div className="p-3">
            <span className="bg-green-700 text-white px-2 rounded font-bold">
              ₹66
            </span>

            <h3 className="font-semibold mt-2">Organic Muskmelon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshHome;
