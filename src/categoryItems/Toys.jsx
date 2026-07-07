// import React from 'react'
import { FaChevronRight, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/features/likeSlice";
import Category from "../component/Category";

const Toys = () => {
  const dispatch = useDispatch();

  const categories = [
    {
      id: 1,
      title: "Toys & Games",
      offer: "UPTO 70% OFF",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300",
      bg: "bg-yellow-100",
    },
    {
      id: 2,
      title: "Sports & Activities",
      offer: "UPTO 70% OFF",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300",
      bg: "bg-sky-100",
    },
  ];

  const explore = [
    {
      name: "Soft Toys",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
      name: "Sports",
      image: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
    },
    {
      name: "Board Games",
      image: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
    },
    {
      name: "Art & Craft",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Educational",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
    },
    {
      name: "Electronic",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
    },
  ];

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
    <div>
      <Category />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top Cards */}

        <div className="flex gap-4 overflow-x-auto">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} min-w-[220px] rounded-2xl p-4 flex justify-between items-center`}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-700">
                  {item.title}
                </h2>

                <p className="text-sm mt-2 text-gray-600">{item.offer}</p>
              </div>

              <img
                src={item.image}
                alt=""
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Center Banner */}

        <div className="py-12 text-center">
          <h1 className="text-6xl font-extrabold text-yellow-300 drop-shadow-lg">
            LOWEST PRICES
          </h1>

          <div className="flex justify-center gap-3 mt-4">
            <span className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold">
              ON TOYS
            </span>

            <span className="bg-orange-400 text-white px-5 py-2 rounded-full font-bold">
              UP TO 70% OFF
            </span>
          </div>
        </div>

        {/* See All Deals */}

        <div className="bg-yellow-50 rounded-3xl p-6">
          <button className="w-full bg-sky-400 text-white rounded-2xl py-8 text-4xl font-semibold flex justify-center items-center gap-3 hover:bg-sky-500 transition">
            See All Deals
            <FaChevronRight />
          </button>
        </div>

        {/* Explore */}

        <div className="mt-10">
          <h2 className="font-bold text-lg border-b pb-2">
            Explore a World of Play
          </h2>

          <div className="flex gap-6 mt-5 overflow-x-auto">
            {explore.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[80px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-14 h-14 object-contain"
                />

                <p className="text-xs text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Cards */}

        <div className="mt-8">
          <div className="max-w-7xl mx-auto py-6">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[150px] max-w-[150px] rounded-lg"
                >
                  {/* Image */}

                  <div className="relative border rounded-xl p-2 bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-28 object-contain"
                    />
                    <button
                      className="absolute top-2 right-2 bg-white border-2 border-pink-500 text-pink-600 font-bold  px-2 py-1 rounded-xl cursor-pointer"
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      <FaHeart />
                    </button>

                    <button
                      className="absolute bottom-2 right-2 border-2 border-pink-500 text-pink-600 bg-white rounded-lg px-3 py-1 font-semibold text-sm hover:bg-pink-50"
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                    >
                      ADD
                    </button>
                  </div>

                  {/* Price */}

                  <div className="mt-2 flex items-center gap-2">
                    <span className="bg-green-700 text-white px-2 rounded text-sm font-bold">
                      ₹{item.price}
                    </span>

                    <span className="text-gray-500 line-through text-sm">
                      ₹{item.oldPrice}
                    </span>
                  </div>

                  <p className="text-green-700 text-xs font-semibold">
                    ₹{item.discount} OFF
                  </p>

                  {/* Name */}

                  <h3 className="text-sm mt-2 leading-5 line-clamp-3 min-h-[60px]">
                    {item.name}
                  </h3>

                  {/* Weight */}

                  <p className="text-gray-500 text-xs mt-1">{item.weight}</p>

                  {/* Rating */}

                  <div className="flex items-center gap-1 mt-2 text-sm">
                    <FaStar className="text-green-600 text-xs" />

                    <span className="text-green-700">{item.rating}</span>

                    <span className="text-gray-500">({item.reviews})</span>
                  </div>

                  {/* Return */}

                  <p className="text-green-600 text-xs mt-2">Instant Return</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
