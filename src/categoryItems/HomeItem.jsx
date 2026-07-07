// import React from 'react'

import {
  FaHome,
  FaBath,
  FaPrayingHands,
  FaGlassCheers,
  FaBroom,
  FaOilCan,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/likeSlice";
import Category from "../component/Category";

const HomeItem = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Gala No Dust Floor Cleaning Broom",
      price: 170,
      oldPrice: 200,
      offer: 30,
      pack: "1 pack",
      rating: 4.1,
      reviews: "18.6k",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e0c992f8-7c40-487d-b4a0-ba1f218a72ed/Gala-No-Dust-Floor-Cleaning-Broom-Jhadu-90cm-Plastic-Blue-and-Brown.jpeg",
      badge: "30 Bags",
    },
    {
      id: 2,
      name: "Ezee Premium Large Size Garbage Bag",
      price: 75,
      oldPrice: 81,
      offer: 6,
      pack: "1 pack (15 pcs)",
      rating: 4.7,
      reviews: "8.7k",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1080-1080,pr-true,f-auto,q-40,dpr-2/cms/product_variant/4d3ca1b7-9fd2-4738-932f-5ddcd1454496/Ezee-Premium-Large-Size-Garbage-Bag-With-Detachable-Tie-Tape.jpeg",
      badge: "15 Bags",
    },
    {
      id: 3,
      name: "Ezee Biodegradable Garbage Bags",
      price: 75,
      oldPrice: 81,
      offer: 6,
      pack: "1 pack (30 pcs)",
      rating: 4.5,
      reviews: "4.4k",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1080-1080,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9eb03ce3-57ac-478d-9753-8cc592b64812/Ezee-Biodegradable-Medium-Garbage-Bags-19-x-21-Inch.jpeg",
      badge: "30 Bags",
    },
    {
      id: 4,
      name: "Gala Chandra Plastic Bathroom Broom",
      price: 94,
      oldPrice: 145,
      offer: 51,
      pack: "1 pc",
      rating: 4.5,
      reviews: "764",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/8191dda7-8eb1-4a61-9a27-0415424edb49/Gala-Chandra-Kharata-Plastic-Bathroom-Broom-Assorted-color.jpeg",
      badge: "",
    },
    {
      id: 5,
      name: "Beco Biofriendly Large Garbage Bags",
      price: 74,
      oldPrice: 99,
      offer: 25,
      pack: "1 pack (15 pcs)",
      rating: 4.6,
      reviews: "1.7k",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1080-1080,pr-true,f-auto,q-40,dpr-2/cms/product_variant/fe3e8146-d174-4be4-b962-d8e890fbda9b/Beco-Biofriendly-Large-Garbage-Bags-24-x-32-Inch.jpeg",
      badge: "",
    },
    {
      id: 6,
      name: "Gala Kingkong Grass Floor Broom",
      price: 211,
      oldPrice: 235,
      offer: 24,
      pack: "1 pack",
      rating: 4.3,
      reviews: "3.5k",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/0bca534c-d631-4320-b87c-fd6a32fbc67d/Gala-Kingkong-Grass-Floor-Broom-Jhadu-Meghalaya-Grass-and-Plastic-Brown-and-Pink.jpeg",
      badge: "",
    },
  ];

  return (
    <div>
      <Category />
      <div className="bg-white py-10">
        {/* Top Categories */}
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <FaChevronLeft />
          </button>

          {/* Category Card */}
          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaHome className="text-5xl text-gray-700" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Home <br /> Utility
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaBath className="text-5xl text-gray-700" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Bath & <br /> Laundry
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaPrayingHands className="text-5xl text-orange-500" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Pooja & <br /> Festive
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaGlassCheers className="text-5xl text-red-500" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Party <br /> Needs
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaBroom className="text-5xl text-cyan-500" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Cleaning <br /> Aids
            </p>
          </div>

          <div className="text-center">
            <div className="w-28 h-28 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md duration-300">
              <FaOilCan className="text-5xl text-red-600" />
            </div>
            <p className="mt-3 text-gray-700 font-medium">
              Automotive <br /> Needs
            </p>
          </div>

          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <FaChevronRight />
          </button>
        </div>

        {/* Deals Heading */}

        <div className="text-center mt-20">
          <h2 className="text-5xl text-slate-700 font-light">Unbeatable</h2>

          <h1 className="text-7xl font-extrabold text-teal-700 mt-2">
            Deals For You
          </h1>
        </div>

        {/* Offer Cards */}

        <div className="max-w-7xl mx-auto mt-16 flex justify-center gap-8 flex-wrap">
          {/* Card 1 */}
          <div className="w-40 rounded-2xl overflow-hidden bg-orange-50 shadow hover:shadow-lg duration-300">
            <div className="bg-teal-700 text-white text-center py-2 rounded-b-full">
              <p className="text-xs">UP TO</p>
              <h2 className="text-3xl font-bold">65%</h2>
              <p className="font-semibold">OFF</p>
            </div>

            <div className="flex justify-center py-5">
              <FaBath className="text-6xl text-blue-500" />
            </div>

            <h3 className="text-center font-semibold pb-4">Towels</h3>
          </div>

          {/* Card 2 */}
          <div className="w-40 rounded-2xl overflow-hidden bg-orange-50 shadow hover:shadow-lg duration-300">
            <div className="bg-teal-700 text-white text-center py-2 rounded-b-full">
              <p className="text-xs">UP TO</p>
              <h2 className="text-3xl font-bold">60%</h2>
              <p className="font-semibold">OFF</p>
            </div>

            <div className="flex justify-center py-5">
              <FaHome className="text-6xl text-yellow-500" />
            </div>

            <h3 className="text-center font-semibold pb-4">Bedsheets</h3>
          </div>

          {/* Card 3 */}
          <div className="w-40 rounded-2xl overflow-hidden bg-orange-50 shadow hover:shadow-lg duration-300">
            <div className="bg-teal-700 text-white text-center py-2 rounded-b-full">
              <p className="text-xs">UP TO</p>
              <h2 className="text-3xl font-bold">50%</h2>
              <p className="font-semibold">OFF</p>
            </div>

            <div className="flex justify-center py-5">
              <FaBath className="text-6xl text-indigo-500" />
            </div>

            <h3 className="text-center font-semibold pb-4">Blankets</h3>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-5">
          {/* Search */}

          {/* <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 border rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-pink-500"
      /> */}

          {/* Products */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border hover:shadow-lg duration-300"
              >
                {/* Image */}

                <div className="relative bg-gray-50 rounded-t-xl">
                  {item.badge && (
                    <div className="absolute top-2 right-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                      {item.badge}
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-contain p-3"
                  />

                  <button
                    className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                    onClick={() => dispatch(addToWishlist(item))}
                  >
                    <FaHeart />
                  </button>

                  <button
                    className="absolute bottom-2 right-2 bg-white border-2 border-pink-500 text-pink-500 font-semibold px-6 py-2 rounded-xl hover:bg-pink-500 hover:text-white duration-300"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    ADD
                  </button>
                </div>

                {/* Details */}

                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-700 text-white font-bold px-2 py-1 rounded">
                      ₹{item.price}
                    </span>

                    <span className="line-through text-gray-500">
                      ₹{item.oldPrice}
                    </span>
                  </div>

                  <p className="text-green-700 text-sm font-semibold mt-1">
                    ₹{item.offer} OFF
                  </p>

                  <h2 className="font-semibold mt-2 line-clamp-3 h-[72px]">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">{item.pack}</p>

                  <div className="flex items-center gap-1 mt-2 text-sm">
                    <FaStar className="text-green-600" />

                    <span className="text-green-700 font-semibold">
                      {item.rating}
                    </span>

                    <span className="text-gray-500">({item.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
