// import React from 'react'
import { FaStar } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import Category from "../component/Category";

const Cafe = () => {
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
    <div>
      <Category />
      <div className="max-w-6xl mx-auto py-6 px-4">
        {/* Banner */}

        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-460,pr-true,f-auto,q-40,dpr-2/inventory/banner/d6d8ff2f-0630-4fd6-a9ca-618b10be761d.png"
            alt=""
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Products */}

        <div className="mt-4 overflow-x-auto mt-10">
          <div className="flex gap-4 min-w-max">
            {products.map((item) => (
              <div key={item.id} className="w-40 bg-white rounded-xl">
                <div className="relative border rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-contain"
                  />
                  <button
                    className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                    onClick={() => dispatch(addToWishlist(item))}
                  >
                    <FaHeart />
                  </button>

                  <button
                    className="absolute bottom-2 right-2 border-2 border-pink-600 text-pink-600 bg-white rounded-lg px-3 font-semibold cursor-pointer hover:bg-pink-700 hover:text-amber-50"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    ADD
                  </button>
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-700 text-white text-sm px-2 rounded">
                      ₹{item.price}
                    </span>

                    <span className="line-through text-xs text-gray-500">
                      ₹{item.oldPrice}
                    </span>
                  </div>

                  <p className="text-green-600 text-xs font-semibold">
                    {item.offer}
                  </p>

                  <h3 className="font-medium text-sm mt-1 line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">{item.weight}</p>

                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded inline-block mt-1">
                    {item.brand}
                  </span>

                  <div className="flex items-center gap-1 mt-2 text-xs">
                    <FaStar className="text-green-600" />
                    <span>{item.rating}</span>
                    <span className="text-gray-500">({item.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src="https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-860,pr-true,f-auto,q-40,dpr-2/inventory/banner/b6df98ee-d571-4926-9c19-1480e48edae3.png"
            alt=""
            className="w-full h-full mt-10 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Cafe;
