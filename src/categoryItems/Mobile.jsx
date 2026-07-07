// import React from 'react'
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/likeSlice";
import Category from "../component/Category";

const Mobile = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-500-500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/b3d7c571-b105-412b-808d-d0a9e8647e67/Nothing-Phone-3a-Lite-White-128-GB-8-GB-RAM-.jpeg",
      price: "25999",
      oldPrice: "29999",
      discount: "₹4K OFF",
      emi: "₹1261/month EMI",
      title: "Nothing Phone (3a) Lite (White, 128 GB) (8 GB RAM)",
      ram: "8 GB",
      storage: "128 GB",
      rating: "5",
      reviews: "162",
    },
    {
      id: 2,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-455-455,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6f9810d4-07a0-4e4e-b3fb-e6bc5fdefc4d/Motorola-g57-Power-Pantone-Fluidity-8GB-RAM-128GB-Storage.jpeg",
      price: "17999",
      oldPrice: "",
      discount: "",
      emi: "₹873/month EMI",
      title: "Motorola G57 Power Pantone Fluidity 8GB RAM 128GB",
      ram: "8 GB",
      storage: "128 GB",
      rating: "4.9",
      reviews: "180",
    },
    {
      id: 3,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-452-452,pr-true,f-auto,q-40,dpr-2/cms/product_variant/86aaea68-5831-4071-a853-86d4950e4284/Motorola-G96-5G-Pantone-Ashleigh-Blue-128-GB-8-GB-RAM.jpeg",
      price: "19999",
      oldPrice: "20999",
      discount: "₹1K OFF",
      emi: "₹970/month EMI",
      title: "Motorola G96 5G Pantone Ashleigh Blue",
      ram: "8 GB",
      storage: "128 GB",
      rating: "4.8",
      reviews: "115",
    },
    {
      id: 4,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1622-1622,pr-true,f-auto,q-40,dpr-2/cms/product_variant/287c0471-173e-49ba-8cc3-1b3fb84c3665/Nothing-Phone-3a-Lite-Black-128GB-8GB-RAM.jpeg",
      price: "26099",
      oldPrice: "29999",
      discount: "₹3.9K OFF",
      emi: "₹1265/month EMI",
      title: "Nothing Phone 3a Lite Black 128GB",
      ram: "8 GB",
      storage: "128 GB",
      rating: "4.8",
      reviews: "123",
    },
    {
      id: 5,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f10e58ab-48f1-4e6e-82ed-476f05739dea/Oneplus-13S-12-256GB-Green-Silk.jpeg",
      price: "50499",
      oldPrice: "57999",
      discount: "₹7.5K OFF",
      emi: "₹2449/month EMI",
      title: "OnePlus 13S Green Silk",
      ram: "12 GB",
      storage: "256 GB",
      rating: "4.9",
      reviews: "95",
    },
    {
      id: 6,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1920-1920,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7854a3e7-38cb-4923-b4b7-fc3ac7e367e7/Nothing-Phone-4a-5G-256-GB-8-GB-RAM-White-Mobile-Phone.jpeg",
      price: "38599",
      oldPrice: "43999",
      discount: "₹5.4K OFF",
      emi: "₹1872/month EMI",
      title: "Nothing Phone 4a 5G White",
      ram: "8 GB",
      storage: "256 GB",
      rating: "4.8",
      reviews: "33",
    },
    {
      id: 7,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bb9482fb-2a40-41cb-bbbc-69168814a789/Oppo-K14x-5G-Smartphone-Icy-Blue-4GB-RAM-128GB-Storage.jpeg",
      price: "15999",
      oldPrice: "35999",
      discount: "₹20K OFF",
      emi: "₹776/month EMI",
      title: "Oppo K14x 5G Smartphone",
      ram: "4 GB",
      storage: "128 GB",
      rating: "4.9",
      reviews: "169",
    },
    {
      id: 8,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-453-453,pr-true,f-auto,q-40,dpr-2/cms/product_variant/e7115d15-a24e-4191-bcef-8739c1c6ffa5/Motorola-g57-Power-Pantone-Corsair-8GB-RAM-128GB-Storage.jpeg",
      price: "17999",
      oldPrice: "",
      discount: "",
      emi: "₹873/month EMI",
      title: "Motorola G57 Power Pantone Corsair",
      ram: "8 GB",
      storage: "128 GB",
      rating: "4.9",
      reviews: "68",
    },
  ];

  return (
    <div>
      <Category />
      <div className="mx-auto px-5 py-12 w-full">
        {/* Heading */}

        <h3 className="uppercase text-gray-400 tracking-[8px] text-5xl font-light">
          Just Dropped
        </h3>

        <h1 className="text-6xl font-bold mt-5">
          Smartphones & feature phones
        </h1>

        {/* Products */}

        <div className="grid xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl bg-white hover:shadow-xl duration-300 overflow-hidden"
            >
              <div className="relative p-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-36 object-contain"
                />

                <button
                  className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => dispatch(addToWishlist(item))}
                >
                  <FaHeart />
                </button>

                <button
                  className="absolute bottom-3 right-3 border-2 border-pink-500 text-pink-600 bg-white px-5 py-1 rounded-lg font-semibold hover:bg-pink-500 hover:text-white"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  ADD
                </button>
              </div>

              <div className="px-3 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">₹{item.price}</span>

                  {item.oldPrice && (
                    <span className="line-through text-gray-500">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </div>

                {item.discount && (
                  <p className="text-green-700 font-semibold text-xs mt-1">
                    {item.discount}
                  </p>
                )}

                <span className="inline-block bg-green-700 text-white text-xs rounded px-2 py-1 mt-2">
                  {item.emi}
                </span>

                <h2 className="mt-3 text-sm font-medium line-clamp-3 h-14">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2">1 pc</p>

                <div className="flex gap-2 mt-3">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded">
                    {item.ram}
                  </span>

                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded">
                    {item.storage}
                  </span>
                </div>

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

export default Mobile;
