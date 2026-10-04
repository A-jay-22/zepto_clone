
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../redux/features/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/features/likeSlice";

const ProductItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const id = product._id || product.id;
  const isWishlisted = wishlist.some((item) => (item._id || item.id) === id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
      toast.success(`Removed from Wishlist`);
    } else {
      dispatch(addToWishlist(product));
      toast.success(`Added ${product.name} to Wishlist ❤️`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    toast.success(`Added ${product.name} to Cart 🛒`);
  };

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? product.oldPrice - product.price
      : 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* Top Image Container */}
      <div className="relative p-3 bg-gray-50/50 flex items-center justify-center h-44 sm:h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-2.5 right-2.5 h-8 w-8 rounded-full border flex items-center justify-center transition cursor-pointer shadow-xs ${
            isWishlisted
              ? "bg-pink-600 border-pink-600 text-white"
              : "bg-white/90 border-gray-200 text-gray-400 hover:text-pink-600 hover:border-pink-500"
          }`}
        >
          {isWishlisted ? <FaHeart className="text-sm" /> : <FaRegHeart className="text-sm" />}
        </button>

        {/* Category Tag */}
        {product.category && (
          <span className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-purple-700 font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-gray-200">
            {product.category}
          </span>
        )}

        {/* ADD Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-2.5 right-2.5 bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-bold text-xs px-3.5 py-1 rounded-xl shadow-xs transition duration-200 cursor-pointer"
        >
          ADD
        </button>
      </div>

      {/* Product Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Price Header */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded-md">
              ₹{product.price}
            </span>
            {product.oldPrice && product.oldPrice > product.price && (
              <span className="line-through text-xs text-gray-400">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Discount / Offer */}
          {discount > 0 ? (
            <p className="text-emerald-600 text-xs font-bold mt-1">
              ₹{discount} OFF
            </p>
          ) : product.offer ? (
            <p className="text-emerald-600 text-xs font-bold mt-1">
              {product.offer}
            </p>
          ) : null}

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 text-sm mt-1.5 line-clamp-2 min-h-[40px]" title={product.name}>
            {product.name}
          </h3>

          {/* Weight (optional) */}
          {product.weight ? (
            <p className="text-xs text-gray-500 mt-1">{product.weight}</p>
          ) : null}
        </div>

        {/* Brand & Footer */}
        <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-[11px] font-medium truncate max-w-[90px]">
            {product.brand || "Zepto"}
          </span>

          {product.rating ? (
            <div className="flex items-center gap-1 text-gray-700 font-medium">
              <FaStar className="text-amber-400 text-xs" />
              <span>{product.rating}</span>
              {product.reviews && (
                <span className="text-gray-400 text-[10px]">
                  ({product.reviews})
                </span>
              )}
            </div>
          ) : (
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              ⚡ 10 MINS
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
