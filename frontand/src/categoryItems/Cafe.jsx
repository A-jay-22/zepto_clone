import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { fetchProducts } from "../redux/features/productSlice";
import ProductItemCard from "../component/ProductItemCard";
import Category from "../component/Category";

const Cafe = () => {
  const dispatch = useDispatch();
  const { items: allProducts, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle" || allProducts.length === 0) {
      dispatch(fetchProducts({}));
    }
  }, [dispatch, status]);

  const products = allProducts.filter((p) => p.category?.toLowerCase() === "cafe");

  return (
    <div>
      <Category />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        {/* Banner */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-460,pr-true,f-auto,q-40,dpr-2/inventory/banner/d6d8ff2f-0630-4fd6-a9ca-618b10be761d.png"
            alt="Cafe Banner"
            className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-2xl"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cafe & Beverages
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Hot meals & cold beverages — delivered in 10 minutes
            </p>
          </div>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-purple-600 font-semibold hover:underline">
            <FaChevronLeft className="text-xs" /> All Categories
          </Link>
        </div>

        {status === "loading" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-64" />
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
            {products.map((product) => (
              <ProductItemCard key={product._id || product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-xl font-bold text-gray-800">No Cafe products yet</h3>
            <p className="text-gray-500 mt-2 mb-4">Admin can add new Cafe items from the Admin Panel.</p>
            <Link to="/admin" className="bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-purple-700 transition text-sm">
              Go to Admin Panel
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cafe;
