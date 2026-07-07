// import React from 'react'
// import React from 'react'
import { FaStar, FaHeart, FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { FaHeart, FaStar } from "react-icons/fa";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

const ElectronicsHome = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-980-980,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7c093dc7-4110-44e7-9eb1-0ead0c55c26d/Lifelong-LLMG300-Power-Pro-LX-Mixer-Grinder-500W-3-Jars-Liquidizing-Grinding-Chutney-Black.jpeg",
      name: "Lifelong LLMG300 Power Pro LX Mixer Grinder",
      price: 1299,
      oldPrice: 4000,
      discount: "₹2.7K OFF",
      watt: "500 W",
      set: "1 set (4 pcs)",
      rating: "4.4",
      reviews: "4.5k",
    },
    {
      id: 2,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7b82605d-ce50-4495-a851-d0a6569dfc08/Lifelong-LLMG202-Mixer-Grinder-500W-2-Jars-for-Wet-Chutney-Grinding-SS-Blades-Black.jpeg",
      name: "Lifelong LLMG202 Mixer Grinder",
      price: 1199,
      oldPrice: 3000,
      discount: "₹1.8K OFF",
      watt: "500 W",
      set: "1 set (3 pcs)",
      rating: "4.4",
      reviews: "2k",
    },
    {
      id: 3,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b1387e49-99e4-4b04-960a-fec1fb8766bb/Super-Dlx-Up-to-750W-Max-Output-Juicer-Mixer-Grinder-2-Years-Warranty-4-Jars-Blue-White.jpg",
      name: "Super Dlx 750W Mixer Grinder",
      price: 1599,
      oldPrice: 3899,
      discount: "₹2.3K OFF",
      watt: "750 W",
      set: "1 set (5 pcs)",
      rating: "4.1",
      reviews: "1.6k",
    },
    {
      id: 4,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-4500-4500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/90d2b9d6-f87d-4545-9737-cc6ef2b1e583/Voltas-Beko-A-Tata-Product-Mixer-Grinder-With-Grindx-Technology-G5003Hp-Wh-500-W-3-Jar-White.jpeg",
      name: "Voltas Beko Mixer Grinder",
      price: 1629,
      oldPrice: 4490,
      discount: "₹2.9K OFF",
      watt: "500 W",
      set: "1 set",
      rating: "4.4",
      reviews: "515",
    },
    {
      id: 5,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/63fd31dd-32b4-4864-9123-3d87b975bb63/Cadlec-JarGenie-4-Jar-750W-Mixer-Grinder-Juicer-Blender-ABS-Body-Black.jpg",
      name: "Cadlec JarGenie 4 Jar Mixer",
      price: 1299,
      oldPrice: 3499,
      discount: "₹2.2K OFF",
      watt: "750 W",
      set: "1 set",
      rating: "4.1",
      reviews: "1k",
    },
    {
      id: 6,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/c580e95b-356c-49cb-b8fd-2c16129e1c06/Longway-Sage-Juicer-Mixer-Grinder-500-Watt-2-Jars-for-Grinding-Mixing-Juicing-with-Powerful-Motor-Gray-Black.jpeg",
      name: "Longway Sage Juicer Mixer",
      price: 1199,
      oldPrice: 2699,
      discount: "₹1.5K OFF",
      watt: "500 W",
      set: "1 set (4 pcs)",
      rating: "4",
      reviews: "2.4k",
    },
    {
      id: 7,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "Cadlec JarSphere Mixer",
      price: 1399,
      oldPrice: 3499,
      discount: "₹2.1K OFF",
      watt: "750 W",
      set: "1 set",
      rating: "4",
      reviews: "400",
    },
    {
      id: 8,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "Agaro Regal Blender",
      price: 2299,
      oldPrice: 3490,
      discount: "₹1.2K OFF",
      watt: "400 W",
      set: "1 set (3 pcs)",
      rating: "5",
      reviews: "57",
    },
  ];
  const bustProduct = [
    {
      id: 9,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "Noise AirBuds 6 Truly Wireless Bluetooth Earbuds",
      price: 2999,
      oldPrice: 3499,
      discount: "₹500 OFF",
      playback: "50 hrs Playback",
      rating: "4.8",
      reviews: "36",
    },
    {
      id: 10,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "boAt Airdopes Drift Truly Wireless Earbuds",
      price: 1499,
      oldPrice: 5990,
      discount: "₹4.5K OFF",
      playback: "40 hrs Playback",
      rating: "4.4",
      reviews: "61",
    },
    {
      id: 11,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "Noise Buds VS102 Elite Truly Wireless Earbuds",
      price: 1299,
      oldPrice: 3499,
      discount: "₹2.2K OFF",
      playback: "50 hrs Playback",
      rating: "4.1",
      reviews: "360",
    },
    {
      id: 12,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "Noise Aura Buds Truly Wireless Earbuds",
      price: 1499,
      oldPrice: 4499,
      discount: "₹3K OFF",
      playback: "60 hrs Playback",
      rating: "4.0",
      reviews: "123",
    },
    {
      id: 13,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/2bb9ea0c-7215-4a78-95b5-c40fe7e68a5e/Cadlec-Jarsphere-4-Jar-750W-Mixer-Grinder-High-Power-Juicer-Blender-Mixer-Durable-ABS-Body-Blue.jpeg",
      name: "boAt Nirvana Crown ANC Earbuds",
      price: 2999,
      oldPrice: 9990,
      discount: "₹7K OFF",
      playback: "40 hrs Playback",
      rating: "4.5",
      reviews: "210",
    },
    {
      id: 14,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/ab9b8f8a-df6c-4865-8ce2-bb315867dfb7/Noise-Buds-Verve-2-Truly-Wireless-Bluetooth-Earbuds-Forest-Green.jpeg",
      name: "Noise Buds Verve 2 Wireless Earbuds",
      price: 1199,
      oldPrice: 3999,
      discount: "₹2.8K OFF",
      playback: "50 hrs Playback",
      rating: "4.0",
      reviews: "52",
    },
    {
      id: 15,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/51435ae0-839e-487c-9dd1-5731eec6687e/Noise-Buds-VS201-V3-Truly-Wireless-Bluetooth-Earbuds-Ivory-White.jpeg",
      name: "Noise Buds VS201 V3 Wireless Earbuds",
      price: 999,
      oldPrice: 2999,
      discount: "₹2K OFF",
      playback: "60 hrs Playback",
      rating: "4.0",
      reviews: "174",
    },
    {
      id: 16,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1024-1024,pr-true,f-auto,q-40,dpr-2/cms/product_variant/51435ae0-839e-487c-9dd1-5731eec6687e/Noise-Buds-VS201-V3-Truly-Wireless-Bluetooth-Earbuds-Ivory-White.jpeg",
      name: "Noise Pop Buds Bluetooth Earbuds",
      price: 1099,
      oldPrice: 3499,
      discount: "₹2.4K OFF",
      playback: "50 hrs Playback",
      rating: "4.0",
      reviews: "515",
    },
  ];

  return (
    // mixer
    <div className="px-4 py-8">
      {/* heading */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Electronics Mixer & Grinders
        </h2>
        <Link to="/electronics">
          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-gray-200 hover:shadow-lg duration-300 bg-white"
          >
            <div className="relative p-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                onClick={() => dispatch(addToWishlist(item))}
              >
                <FaHeart />
              </button>

              <button
                className="absolute bottom-3 right-3 border-2 border-pink-500 text-pink-600 bg-white px-4 py-1 rounded-lg font-semibold hover:bg-pink-500 hover:text-white duration-300"
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                ADD
              </button>
            </div>

            <div className="px-3 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-green-700 text-white px-2 py-1 rounded font-bold">
                  ₹{item.price}
                </span>

                <span className="text-gray-500 line-through">
                  ₹{item.oldPrice}
                </span>
              </div>

              <p className="text-green-700 text-xs font-semibold mt-1">
                {item.discount}
              </p>

              <h3 className="font-medium text-sm mt-2 line-clamp-2 h-10">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">{item.set}</p>

              <span className="inline-block mt-2 bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
                {item.watt}
              </span>

              <div className="flex items-center gap-1 mt-3 text-sm">
                <FaStar className="text-green-600" />
                <span>{item.rating}</span>
                <span className="text-gray-500">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* buds */}
      <br />

      <div className=" py-8 px-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
            Buds & Earphones
          </h2>

          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </div>
        <div className="grid xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {bustProduct.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl hover:shadow-lg duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain"
                />

                {/* Wishlist */}
                <button
                  className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => dispatch(addToWishlist(item))}
                >
                  <FaHeart />
                </button>

                {/* ADD Button */}
                <button
                  className="absolute bottom-3 right-3 px-5 py-1 bg-white border-2 border-pink-500 rounded-lg text-pink-600 font-semibold hover:bg-pink-500 hover:text-white"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  ADD
                </button>
              </div>

              {/* Details */}
              <div className="px-3 pb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-green-700 text-white px-2 py-1 rounded font-bold">
                    ₹{item.price}
                  </span>

                  <span className="line-through text-gray-500 text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>

                <p className="text-green-700 text-xs font-semibold mt-1">
                  {item.discount}
                </p>

                <h2 className="mt-2 text-sm font-medium line-clamp-2 h-10">
                  {item.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2">1 pc</p>

                <span className="inline-block mt-2 bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
                  {item.playback}
                </span>

                <div className="flex items-center gap-1 mt-3 text-sm">
                  <FaStar className="text-green-600" />
                  <span>{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsHome;
