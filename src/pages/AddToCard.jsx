// import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaTrashAlt,
  FaArrowRight,
  FaTag,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const AddToCard = () => {
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "AJAY") {
      setDiscount(total * 0.1); // 10% Discount
      toast.success("🎉 Coupon Applied! You got 10% OFF.");
    } else {
      setDiscount(0);
      toast.error("❌ Invalid Coupon Code");
    }
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = cartItems.length ? 15 : 0;
  const total = subtotal + gst + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10  ">
      <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>

      <div className="grid lg:grid-cols-3 gap-8 ">
        {/* Left */}
        <div className="lg:col-span-2 border rounded-2xl p-6 overflow-y-auto h-[460px]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b last:border-none py-5"
            >
              <div className="flex gap-5 ">
                <img
                  src={item.image}
                  alt=""
                  className="w-28 h-28 rounded-xl object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  <p className="text-gray-500">Size: {item.size}</p>

                  <p className="text-gray-500">Color: {item.color}</p>

                  <h3 className="text-3xl font-bold mt-2">${item.price}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-between h-28 items-end">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-xl hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>

                <div className="flex items-center gap-5 bg-gray-100 px-4 py-2 rounded-full">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    <FaMinus />
                  </button>

                  <span className="font-bold">{item.quantity}</span>

                  <button onClick={() => dispatch(increaseQty(item.id))}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="text-center py-3 text-xl font-semibold">
              Cart is Empty
            </div>
          )}
          <Link to="/">
            <button className="mt-72 w-full bg-black text-white py-4 rounded-full flex justify-center items-center gap-3 text-lg hover:bg-gray-900 duration-300">
              Go to Browse
            </button>
          </Link>
        </div>

        {/* Right */}

        <div className="border rounded-2xl p-6 h-fit">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>gst (+5%)</span>

              <span className="text-black-500 font-semibold">
                ${gst.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>

              <span className="font-semibold">${deliveryFee}</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>

              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount (10%)</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Grand Total</span>
            <span>₹{(total - discount).toFixed(2)}</span>
          </div>

          <div className="flex mt-8 gap-3">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 flex-1">
              <FaTag className="text-gray-500" />

              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Add promo code"
                className="bg-transparent outline-none py-3 w-full"
              />
            </div>

            <button
              className="bg-black text-white px-8 rounded-full"
              onClick={applyCoupon}
            >
              Apply
            </button>
          </div>
          <Link to="/checkout">
            <button className="w-full bg-black text-white mt-6 py-4 rounded-full flex justify-center items-center gap-3 text-lg hover:bg-gray-900 duration-300">
              Go to Checkout
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
