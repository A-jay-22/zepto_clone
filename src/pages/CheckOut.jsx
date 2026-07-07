import { useState } from "react";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { removeFromCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";
import { saveAddress } from "../redux/features/addressSlice";
import { useNavigate } from "react-router-dom";
import { createInvoice } from "../redux/features/invoiceSlice";
import { clearCart } from "../redux/features/cartSlice";

const CheckOut = () => {
  const [payment, setPayment] = useState("cod");

  const savedAddress = useSelector((state) => state.address.address);

  //save the address

  const [formData, setFormData] = useState(savedAddress);
  const handleSaveAddress = () => {
    const { name, phone, email, address, city, pincode } = formData;

    if (!name || !phone || !email || !address || !city || !pincode) {
      toast.error("Please fill all required fields.");
      return;
    }

    dispatch(saveAddress(formData));
    toast.success("Address Saved Successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
    const { name, phone, email, address, city, pincode } = formData;

    if (!name || !phone || !email || !address || !city || !pincode) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    // Optional: Clear cart
    // dispatch(clearCart());

    // Optional: Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      pincode: "",
    });

    const orderId = `ORD-${Date.now}`;
    dispatch(
      createInvoice({
        orderId,
        customer: name,
        email,
        phone,
        address: `${address}, ${city} - ${pincode}`,
        paymentMethod: payment,

        items: cartItems,

        subtotal,
        tax,
        shipping: delivery,
        total,
      }),
    );
    toast.success("Order Placed Successfully!");
    dispatch(clearCart());
    navigate("/invoiceGenerate");
  };

  const dispatch = useDispatch();
  // Example ordered products
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0,
  );

  const delivery = 15;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Customer Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-5">Your Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 py-3 outline-pink-600"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full border rounded-lg pl-10 py-3 outline-pink-600"
                />
              </div>

              <div className="relative md:col-span-2">
                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border rounded-lg pl-10 py-3 outline-pink-600"
                />
              </div>

              <div className="relative md:col-span-2">
                <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  rows="4"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete Delivery Address"
                  className="w-full border rounded-lg pl-10 pt-3 outline-pink-600"
                ></textarea>
              </div>

              <input
                type="text"
                name="city"
                placeholder="City"
                required
                value={formData.city}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 outline-pink-600"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 outline-pink-600"
              />
            </div>
            <button
              type="button"
              onClick={handleSaveAddress}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Save Address
            </button>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-5">Payment Method</h2>

            <div className="space-y-4">
              <label className="border rounded-lg p-4 flex justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <FaMoneyBillWave className="text-green-600" />
                  Cash on Delivery
                </div>

                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
              </label>

              <label className="border rounded-lg p-4 flex justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-blue-600" />
                  Credit / Debit Card
                </div>

                <input
                  type="radio"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
              </label>

              <label className="border rounded-lg p-4 flex justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-purple-600" />
                  UPI Payment
                </div>

                <input
                  type="radio"
                  checked={payment === "upi"}
                  onChange={() => setPayment("upi")}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-xl shadow p-6 sticky top-5">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 border-b pb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain border rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>

                    <p className="text-gray-500 text-sm">
                      Qty : {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₹{Number(item.price) * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>₹{delivery}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>₹{tax}</span>
              </div>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

            <Link to="/">
              <button
                onClick={() => dispatch(clearCart())}
                className="w-full mt-2 items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 rounded-lg transition duration-300 cursor-pointer"
              >
                Cancel Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
