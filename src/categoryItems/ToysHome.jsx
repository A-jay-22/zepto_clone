// import React from 'react'
// import React from 'react'
import { FaChevronRight, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";

const ToysHome = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "DearJoy Jingle Reindeer - Brown",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/47769228-28fe-406e-bc70-beee37d13946/Dearjoy-Jingle-Reindeer-Brown.jpg",
      price: 265,
      oldPrice: 1000,
      weight: "1 pc",
      rating: 4.5,
      reviews: 87,
      discount: 735,
    },
    {
      id: 2,
      name: "DearJoy Small Cat with Hoodie | Blue",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a8a2ef83-0f98-4686-b7ae-82fa3aa63271/DearJoy-Small-Cat-with-a-Hoodie-Blue-22-cm.jpg",
      price: 195,
      oldPrice: 1000,
      weight: "1 pc",
      rating: 4.4,
      reviews: 35,
      discount: 805,
    },
    {
      id: 3,
      name: "DearJoy Plush Monkey Soft Toy",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a8a2ef83-0f98-4686-b7ae-82fa3aa63271/DearJoy-Small-Cat-with-a-Hoodie-Blue-22-cm.jpg",
      price: 226,
      oldPrice: 1000,
      weight: "1 pc",
      rating: 4.1,
      reviews: 27,
      discount: 774,
    },
    {
      id: 4,
      name: "Toytales Owl Cushion",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/0b353e92-efce-427d-80b2-9fa253c74da4/Toytales-Owl-Cushion-Soft-Toy-Plushie-Stuffed-Bird-Animal-Toys-For-Kids-Birthday-Gift.jpg",
      price: 207,
      oldPrice: 499,
      weight: "1 pc",
      rating: 4.8,
      reviews: 83,
      discount: 292,
    },
    {
      id: 5,
      name: "DearJoy Plush Ball",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1120-1120,pr-true,f-auto,q-40,dpr-2/cms/product_variant/366fa12a-85c4-4079-943b-71083d6bfc33/DearJoy-Plush-Ball-with-Alphabets-Soft-Toy-Multicolor.jpg",
      price: 119,
      oldPrice: 400,
      weight: "1 pc",
      rating: 4.2,
      reviews: 499,
      discount: 281,
    },
    {
      id: 6,
      name: "Baby Soft Ball",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/75328954-9b08-486d-972c-e731e5f4d2fc/DearJoy-Baby-Soft-Ball-With-Rattle-Sound-Multicolour.jpg",
      price: 79,
      oldPrice: 400,
      weight: "1 pc",
      rating: 4.3,
      reviews: 795,
      discount: 321,
    },
    {
      id: 7,
      name: "Pink Teddy Bear",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/ab6c89eb-5bb2-42b6-b729-ad2b8955f033/Toytales-N22-40cm-Stuffed-Teddy-Bear-Soft-Toy-Animal-Toys-For-Kids-Animal-Pink.jpg",
      price: 353,
      oldPrice: 999,
      weight: "1 pc",
      rating: 4.6,
      reviews: 214,
      discount: 646,
    },
    {
      id: 8,
      name: "Yellow Bird Soft Toy",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/816f027d-d18b-4628-82f0-5c55692e4bdd/DearJoy-Canary-Bird-Soft-Toy-Yellow-Soft-Cuddly-.jpg",
      price: 179,
      oldPrice: 1000,
      weight: "1 pc",
      rating: 3.6,
      reviews: "3.1k",
      discount: 821,
    },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Toys & Soft Toys
        </h2>
        <Link to="/toys">
          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </Link>
      </div>

      {/* Product Cards */}

      {/* Product Cards */}

      <div className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden"
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
                  className="absolute bottom-3 right-3 border-2 border-pink-500 text-pink-600 bg-white hover:bg-pink-600 hover:text-white rounded-lg px-3 py-1 text-sm font-semibold transition"
                >
                  ADD
                </button>
              </div>

              {/* Details */}
              <div className="px-3 pb-4">
                {/* Price */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-sm font-semibold">
                    ₹{item.price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>

                {/* Discount */}
                <p className="text-green-700 text-xs font-semibold mt-1">
                  ₹{item.discount} OFF
                </p>

                {/* Name */}
                <h3 className="mt-2 text-sm sm:text-base font-medium leading-5 line-clamp-2 min-h-[48px]">
                  {item.name}
                </h3>

                {/* Weight */}
                <p className="text-gray-500 text-xs mt-1">{item.weight}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-sm">
                  <FaStar className="text-green-600 text-xs" />

                  <span className="text-green-700 font-medium">
                    {item.rating}
                  </span>

                  <span className="text-gray-500">({item.reviews})</span>
                </div>

                {/* Return */}
                <p className="text-green-600 text-xs mt-2">Instant Return</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToysHome;
