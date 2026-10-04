// import React from 'react'
import { FaHeart, FaStar, FaChevronRight } from "react-icons/fa";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/features/likeSlice";
import { Link } from "react-router-dom";

const FashionHome = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/5cd8d636-5106-4b51-b326-996af35d7f5f/The-Indian-Garage-Co-Men-s-Slim-Fit-Solid-Casual-Joggers-Black-30.jpg",
      price: 651,
      oldPrice: 2099,
      discount: "₹1.4K OFF",
      title: "The Indian Garage Co Men's Slim Fit Solid Casual Joggers",
      material: "Instant Return",
      rating: "4.2",
      reviews: "210",
    },
    {
      id: 2,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1106-1106,pr-true,f-auto,q-40,dpr-2/cms/product_variant/65ba86b3-20c6-4b19-aa06-2d59df87e7c0/Jockey-9500-Men-s-Super-Combed-Cotton-Rich-Trackpants-Regular-Fit-Side-Pockets-Navy-Grey-Mel-L.jpeg",
      price: 999,
      oldPrice: 0,
      discount: "",
      title: "Jockey 9500 Men's Super Combed Cotton Rich",
      material: "Combed Cotton",
      rating: "3.9",
      reviews: "38",
    },
    {
      id: 3,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/04faa307-fa51-4fb0-aced-846b759dba79/Decathlon-Domyos-Men-s-Cotton-Fitness-Trackpants-Black-XL.jpg",
      price: 803,
      oldPrice: 1109,
      discount: "₹306 OFF",
      title: "Decathlon Domyos Men's Cotton Fitness Trackpants",
      material: "Cotton",
      rating: "3.6",
      reviews: "33",
    },
    {
      id: 4,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-3000-4500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/7221b8fd-e152-41cc-a5bf-60868c93d381/Springman-Men-s-Solid-Cotton-Rich-French-Terry-Baggy-Track-Pant-Black-XL.jpg",
      price: 288,
      oldPrice: 999,
      discount: "₹711 OFF",
      title: "Springman Men's Solid Cotton Rich French Terry",
      material: "Cotton Blend",
      rating: "4.1",
      reviews: "1.1k",
    },
    {
      id: 5,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-3000-4500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/94ae18b4-a81a-42c4-adbb-c84a5abf3aaf/Springman-Men-s-Solid-Cotton-Rich-French-Terry-Baggy-Track-Pant-Blue-XL.jpg",
      price: 309,
      oldPrice: 999,
      discount: "₹690 OFF",
      title: "Springman Men's Cotton Rich Baggy Track Pant",
      material: "Cotton Blend",
      rating: "3.9",
      reviews: "522",
    },
    {
      id: 6,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/a025ca17-8a37-48d8-9940-4298c851985a/Jockey-9500-Men-s-Super-Combed-Cotton-Rich-Trackpants-Regular-Fit-Side-Pockets-Black-Grey-Mel-L.jpeg",
      price: 999,
      oldPrice: 0,
      discount: "",
      title: "Jockey 9500 Men's Cotton Rich Track Pant",
      material: "Combed Cotton",
      rating: "4.3",
      reviews: "107",
    },
    {
      id: 7,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2730-4096,pr-true,f-auto,q-40,dpr-2/cms/product_variant/81429946-d9ee-4475-affc-a9b566b7734d/Springman-Men-s-Solid-Cotton-Rich-French-Terry-Baggy-Track-Pant-Grey-M.jpg",
      price: 303,
      oldPrice: 999,
      discount: "₹696 OFF",
      title: "Springman Men's Cotton Rich French Terry",
      material: "Cotton Blend",
      rating: "3.6",
      reviews: "1.1k",
    },
    {
      id: 8,
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-5335-5335,pr-true,f-auto,q-40,dpr-2/cms/product_variant/179f0bc4-c9de-4411-8b3c-19ecff6838be/Decathlon-Kalenji-Men-s-Back-Pocket-Running-Trackpant-Dark-Blue-S.jpeg",
      price: 1117,
      oldPrice: 1799,
      discount: "₹682 OFF",
      title: "Decathlon Men's Running Track Pant",
      material: "Polyester",
      rating: "4.4",
      reviews: "89",
    },
  ];
  return (
    <div className=" py-12 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Clothing & Fashion
        </h2>

        <Link to="/fashion">
          <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
            See All
            <FaChevronRight />
          </button>
        </Link>
      </div>

      {/* Products */}

      <div className="grid xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl hover:shadow-lg duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-46  overflow-hidden"
              />

              <button
                className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                onClick={() => dispatch(addToWishlist(item))}
              >
                <FaHeart />
              </button>

              <button className="absolute bottom-3 right-3 bg-white border-2 border-pink-500 rounded-xl px-4 py-1 text-pink-600 font-bold leading-none hover:bg-pink-500 hover:text-white">
                <div
                  className=""
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  ADD
                </div>
                {/* <span className="text-[10px]">4 options</span> */}
              </button>
            </div>

            <div className="px-3 pb-4">
              <div className="flex items-center gap-2">
                <span className="bg-green-700 text-white px-2 py-1 mt-1 rounded font-bold">
                  ₹{item.price}
                </span>

                {item.oldPrice > 0 && (
                  <span className="text-gray-500 line-through">
                    ₹{item.oldPrice}
                  </span>
                )}
              </div>

              {item.discount && (
                <p className="text-green-700 text-xs font-semibold mt-1">
                  {item.discount}
                </p>
              )}

              <h3 className="font-medium text-sm mt-2 line-clamp-3 h-14">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">1 pc</p>

              <span className="inline-block bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded mt-2">
                {item.material}
              </span>

              <div className="flex items-center gap-1 mt-3">
                <FaStar className="text-green-600 text-sm" />
                <span className="text-sm">{item.rating}</span>
                <span className="text-gray-500 text-sm">({item.reviews})</span>
              </div>

              <p className="text-green-700 text-sm mt-2">Instant Return</p>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default FashionHome;
