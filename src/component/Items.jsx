import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaStar,
  // FaPlus,
  // FaMinus,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/features/likeSlice";
import { addToCart } from "../redux/features/cartSlice";
import CafeHome from "../categoryItems/CafeHome";
import ToysHome from "../categoryItems/ToysHome";
import FreshHome from "../categoryItems/FreshHome";
import ElectronicsHome from "../categoryItems/ElectronicsHome";
import BeautyHome from "../categoryItems/BeautyHome";
import FashionHome from "../categoryItems/FashionHome";
import MobileHome from "../categoryItems/MobileHome";
import HomeItemHome from "../categoryItems/HomeItemHome";
import Card from "./Card";
import Category from "./Category";

const Items = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState({});

  const handleAddToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const totalItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);

  const products = [
    {
      id: 1,
      name: "Surf Excel Matic Top Load Detergent Liquid Refill",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9797e0a8-4ff1-42bd-9c6c-c189795730f3/Surf-Excel-Matic-Top-Load-Detergent-Liquid-Refill-Tough-Dried-Stain-Removal.jpg",
      price: 333,
      oldPrice: 355,
      weight: "1 pack (2 kg)",
      tag: "Stain Removal",
      rating: 5,
      reviews: "15.0k",
    },
    {
      id: 2,
      name: "Rin Matic Top Load Detergent Liquid Pouch",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/14b059a9-b0f1-4016-bf36-98399e86a83b/Rin-Matic-Top-Load-Detergent-Liquid-Pouch.jpg",
      price: 219,
      oldPrice: 260,
      weight: "1 pack (2 kg)",
      tag: "Fresh & Fragrant",
      rating: 4.8,
      reviews: "40.0k",
    },
    {
      id: 3,
      name: "Morelight Extra Power Detergent Powder",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2000-2000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f10df2fd-301c-4760-af1f-b73c91df5a30/Morelight-Extra-Power-Detergent-Powder.jpeg",
      price: 272,
      oldPrice: 540,
      weight: "1 pack (4 kg)",
      tag: "Fabric Protect",
      rating: 4.8,
      reviews: "13.7k",
    },
    {
      id: 4,
      name: "Rin Matic Liquid Top Load",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/45a9c79f-4f58-4c66-a3d0-62650082f6ce/Rin-Matic-Liquid-Top-Load.jpeg",
      price: 376,
      oldPrice: 420,
      weight: "1 pack (4 kg)",
      tag: "Top Rated",
      rating: 4.8,
      reviews: "1.1k",
    },
    {
      id: 5,
      name: "SafeWash Premium Detergent Liquid",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/826a7a32-cb16-4306-89a9-c2a38c52c95d/SafeWash-Top-Load-Matic-Premium-Detergent-Liquid-2X-Stain-Removal.jpg",
      price: 198,
      oldPrice: 430,
      weight: "1 pack (2 L)",
      tag: "Colour Protect",
      rating: 4.8,
      reviews: "6.2k",
    },
    {
      id: 6,
      name: "Ariel Power Gel Liquid Detergent",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/1a39f9f5-1858-4c3f-a6e5-2b3ef959496b/Ariel-Power-Gel-Liquid-Detergent-for-Front-load-washing-machine.jpeg",
      price: 560,
      oldPrice: 855,
      weight: "1 pack (4 kg)",
      tag: "100% Stain Removal",
      rating: 4.7,
      reviews: "1.6k",
    },
    {
      id: 7,
      name: "Surf Excel Liquid Refill",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6e690a7d-e185-48de-915f-b3b318d5b361/Surf-Excel-Matic-Top-Load-Detergent-Liquid-Refill-Tough-Dried-Stain-Removal.jpg",
      price: 232,
      oldPrice: 235,
      weight: "1 pc (1 L)",
      tag: "Stain Removal",
      rating: 4.7,
      reviews: "12.1k",
    },
    {
      id: 8,
      name: "Ariel Liquid Detergent",
      image:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/1aaed251-649d-4120-a1ac-d26cc2aceed8/Ariel-Power-Gel-Liquid-Detergent-for-Top-load-washing-machine.jpeg",
      price: 179,
      oldPrice: 189,
      weight: "1 pc (950 g)",
      tag: "Top Load",
      rating: 4.7,
      reviews: "986",
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6">
      <Category />
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1b1b39]">
          Laundry Care
        </h2>

        <button className="flex items-center gap-2 text-pink-600 font-semibold cursor-pointer">
          See All
          <FaChevronRight />
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4">
        {products.map((item) => {
          const discount = item.oldPrice - item.price;

          return (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-contain bg-gray-50"
                />
                <button
                  className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => dispatch(addToWishlist(item))}
                >
                  <FaHeart />
                </button>

                <button
                  // onClick={() => addToCart(item.id)}
                  className="absolute bottom-3  right-3 bg-white border-2 border-pink-500 text-pink-600 font-bold px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => {
                    handleAddToCart(item.id);
                    dispatch(addToCart(item));
                  }}
                >
                  ADD
                </button>
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex items-center gap-2">
                  <span className="bg-green-700 text-white font-bold px-2 py-1 rounded-lg">
                    ₹{item.price}
                  </span>

                  <span className="line-through text-gray-500">
                    ₹{item.oldPrice}
                  </span>
                </div>

                <p className="text-green-600 text-sm font-semibold mt-1">
                  ₹{discount} OFF
                </p>

                <div className="border-b border-dashed my-2"></div>

                <h3 className="text-[15px] font-medium line-clamp-3 min-h-[70px]">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">{item.weight}</p>

                <span className="inline-block mt-3 bg-cyan-50 text-cyan-700 text-sm px-3 py-1 rounded-md">
                  {item.tag}
                </span>

                <div className="flex items-center gap-1 mt-3 text-sm">
                  <FaStar className="text-green-600" />
                  <span>{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Cart */}
      {totalItems > 0 && (
        <div className="fixed bottom-5 right-5 bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50">
          <Link to="/addtocart">
            <FaShoppingCart />
            {totalItems} Items
          </Link>
        </div>
      )}

      {/* Header */}

      <CafeHome />
      <ToysHome />
      <FreshHome />
      <ElectronicsHome />
      <MobileHome />
      <BeautyHome />
      <FashionHome />
      <HomeItemHome />

      <Card />
    </div>
  );
};

export default Items;
