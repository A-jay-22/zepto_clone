import { useState, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaTrashAlt,
  FaArrowRight,
  FaTag,
  FaShoppingCart,
  FaLock,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../redux/features/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddToCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
      setCurrentUser(user);
    } catch {
      setCurrentUser(null);
    }
    setAuthChecked(true);

    const handleAuth = () => {
      try {
        const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
        setCurrentUser(user);
      } catch {
        setCurrentUser(null);
      }
    };
    window.addEventListener("authChange", handleAuth);
    window.addEventListener("storage", handleAuth);
    return () => {
      window.removeEventListener("authChange", handleAuth);
      window.removeEventListener("storage", handleAuth);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = cartItems.length ? 15 : 0;
  const total = subtotal + gst + deliveryFee;

  // Show loading while checking auth
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Guard: unauthenticated user sees login prompt
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
            <FaShoppingCart className="text-4xl text-purple-500" />
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto -mt-4 mb-4 border-2 border-white">
            <FaLock className="text-lg text-amber-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Your Cart Awaits!</h2>
          <p className="text-gray-500 text-sm mb-2">
            You have <span className="font-bold text-purple-700">{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</span> saved in your cart.
          </p>
          <p className="text-gray-400 text-xs mb-8">
            Please log in or create an account to view your cart and complete your order.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold py-3 rounded-xl transition shadow-md"
            >
              Log In to View Cart
            </Link>
            <Link
              to="/register"
              className="w-full border-2 border-purple-200 text-purple-700 font-semibold py-3 rounded-xl hover:bg-purple-50 transition"
            >
              Create an Account
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 underline transition"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10  ">
      <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>

      <div className="grid lg:grid-cols-3 gap-8 ">
        {/* Left */}
        <div className=" lg:col-span-2 border rounded-2xl p-6 overflow-y-auto h-[460px]">
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
                  className="cursor-pointer text-red-500 text-lg hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>

                <div className="flex items-center gap-5 bg-gray-100 px-4 py-2 rounded-full">
                  <button className="cursor-pointer" onClick={() => dispatch(decreaseQty(item.id))}>
                    <FaMinus />
                  </button>

                  <span className=" font-bold">{item.quantity}</span>

                  <button className="cursor-pointer" onClick={() => dispatch(increaseQty(item.id))}>
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
          {/* <div className="flex justify-between text-green-600">
            <span>Discount (10%)</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div> */}
          {/* <div className="flex justify-between font-bold text-lg mt-2">
            <span>Grand Total</span>
            <span>₹{(total).toFixed(2)}</span>
          </div> */}

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

            {/* <button
              className="bg-black text-white px-8 rounded-full"
              onClick={applyCoupon}
            >
              Apply
            </button> */}
          </div>
          <Link to="/checkout">
            <button className=" w-full bg-black text-white mt-6 py-4 rounded-full flex justify-center items-center gap-3 text-lg hover:bg-gray-900 duration-300">
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
