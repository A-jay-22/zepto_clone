// import React from 'react'

import { Link } from "react-router-dom";
import Items from "../component/Items";

//
const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 py-7">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="bg-purple-100 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-700 mb-6">
                ALL <span className="">NEW ZEPTO</span> EXPERIENCE
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm">
                  <h3 className="text-3xl md:text-5xl font-bold text-purple-700">
                    ₹0 FEES
                  </h3>
                </div>

                <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm">
                  <h3 className="text-xl md:text-4xl font-bold text-purple-700 text-center">
                    EVERYDAY <br /> LOW PRICES
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 text-purple-700 font-semibold text-center">
                <p>✅ ₹0 Handling Fee</p>
                <p>✅ ₹0 Delivery Fee</p>
                <p>✅ ₹0 Rain & Surge Fee</p>
              </div>

              <p className="text-center text-xs text-purple-600 mt-4">
                *T&C Apply. Above specific minimum order value
              </p>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl overflow-hidden relative bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 min-h-[320px]">
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Paan Corner
                </h2>

                <p className="text-white text-lg md:text-2xl max-w-lg mb-8">
                  Get smoking accessories, fresheners & more delivered in
                  minutes.
                </p>
                <Link to={"/"}>
                  <button className="bg-white text-black font-bold text-lg px-8 py-4 rounded-2xl w-fit hover:bg-gray-100 transition">
                    Order Now
                  </button>
                </Link>
              </div>

              {/* Decorative Blocks */}
              <div className="hidden md:block absolute bottom-8 right-8">
                <div className="w-32 rounded-lg shadow-lg">
                  <img
                    src="https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1021-1021,pr-true,f-auto,q-40,dpr-2/cms/product_variant/4c87428b-4815-44ed-a3cb-bfe05d941910/Nicotex-Gums-Fruit-Burst-2mg.jpeg"
                    alt=""
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="hidden md:block absolute bottom-8 right-44">
                <div className="w-24 h-24 rounded-lg">
                  <img
                    src="https://m.media-amazon.com/images/I/61UVHHHJ0-L._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                    className="rounded-lg overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Items />
    </div>
  );
};

export default Home;
