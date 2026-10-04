import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { fetchProducts } from "../redux/features/productSlice";
import ProductItemCard from "./ProductItemCard";
import Category from "./Category";

const DynamicCategoryPage = ({ categoryId, title, subtitle, bannerImg, emptyIcon }) => {
  const dispatch = useDispatch();
  const { items: allProducts, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle" || allProducts.length === 0) {
      dispatch(fetchProducts({}));
    }
  }, [dispatch, status, allProducts.length]);

  const products = allProducts.filter(
    (p) => p.category?.toLowerCase() === categoryId.toLowerCase()
  );

  return (
    <div>
      <Category />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        {/* Banner */}
        {bannerImg && (
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={bannerImg}
              alt={`${title} banner`}
              className="w-full h-48 sm:h-64 object-cover rounded-2xl"
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-purple-600 font-semibold hover:underline"
          >
            <FaChevronLeft className="text-xs" /> All Categories
          </Link>
        </div>

        {/* Products Grid */}
        {status === "loading" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {[...Array(8)].map((_, i) => (
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
            <div className="text-6xl mb-4">{emptyIcon || "📦"}</div>
            <h3 className="text-xl font-bold text-gray-800">No {title} products yet</h3>
            <p className="text-gray-500 mt-2 mb-4">
              Use the Admin Panel to add new products under the{" "}
              <strong className="text-purple-700 capitalize">{categoryId}</strong> category.
            </p>
            <Link
              to="/admin"
              className="bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-purple-700 transition text-sm"
            >
              Go to Admin Panel
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCategoryPage;
