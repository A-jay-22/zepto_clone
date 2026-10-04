
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../redux/features/cartSlice";
import {
  FaSearch,
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaTimesCircle,
  FaShoppingBag,
  FaChevronRight,
  FaCalendarAlt,
  FaArrowLeft,
  FaRedoAlt,
} from "react-icons/fa";

const sampleOrders = [
  {
    id: "ZEP240901",
    date: "29 Sep 2026, 10:30 AM",
    status: "Delivered",
    total: 245,
    items: [
      {
        name: "Amul Taaza Milk",
        quantity: 2,
        price: 56,
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200",
      },
      {
        name: "Fresh Bananas",
        quantity: 1,
        price: 60,
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200",
      },
      {
        name: "Brown Bread",
        quantity: 1,
        price: 69,
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200",
      },
    ],
  },
  {
    id: "ZEP240902",
    date: "28 Sep 2026, 06:15 PM",
    status: "On the way",
    total: 189,
    items: [
      {
        name: "Fresh Apples",
        quantity: 1,
        price: 120,
        image:
          "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200",
      },
      {
        name: "Lays Classic Chips",
        quantity: 2,
        price: 69,
        image:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200",
      },
    ],
  },
  {
    id: "ZEP240903",
    date: "25 Sep 2026, 01:20 PM",
    status: "Cancelled",
    total: 150,
    items: [
      {
        name: "Fresh Orange Juice",
        quantity: 2,
        price: 75,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200",
      },
    ],
  },
];

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStorageKey = () => {
    try {
      const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
      return user?.email ? `orders_${user.email}` : "orders_guest";
    } catch {
      return "orders_guest";
    }
  };

  // Load user order history merged with initial data
  useEffect(() => {
    const key = getStorageKey();
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setOrders(parsed.length > 0 ? parsed : sampleOrders);
      } catch {
        setOrders(sampleOrders);
      }
    } else {
      // Check universal orders
      const universal = localStorage.getItem("all_orders");
      if (universal) {
        try {
          const parsedUniversal = JSON.parse(universal);
          setOrders(parsedUniversal.length > 0 ? parsedUniversal : sampleOrders);
        } catch {
          setOrders(sampleOrders);
        }
      } else {
        setOrders(sampleOrders);
      }
    }
  }, []);

  const saveOrdersToStorage = (updatedList) => {
    setOrders(updatedList);
    const key = getStorageKey();
    localStorage.setItem(key, JSON.stringify(updatedList));
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id?.toLowerCase().includes(search.toLowerCase()) ||
      order.items?.some((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );

    const matchesFilter = filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  // Reorder items: add each item from the order back to the Redux cart and navigate to cart
  const reorder = (order) => {
    if (!order.items || order.items.length === 0) {
      toast.error("No items found in this order to reorder.");
      return;
    }

    order.items.forEach((item) => {
      // dispatch with appropriate structure for cartSlice
      dispatch(
        addToCart({
          id: item.id || item._id || `${item.name}-${Date.now()}`,
          _id: item._id || item.id || `${item.name}-${Date.now()}`,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity || 1,
          size: item.size || "Standard",
          color: item.color || "Standard",
          category: item.category || "General",
        })
      );
    });

    toast.success(`Items from #${order.id} re-added to your cart! 🎉`);
    navigate("/addtocart");
  };

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Cancelled" } : order
    );
    saveOrdersToStorage(updatedOrders);
    toast("Order has been cancelled", { icon: "ℹ️" });
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: "Cancelled" });
    }
  };

  const getStatusIcon = (status) => {
    if (status === "Delivered") {
      return <FaCheckCircle className="text-green-600" />;
    }
    if (status === "On the way") {
      return <FaTruck className="text-blue-600" />;
    }
    return <FaTimesCircle className="text-red-500" />;
  };

  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-green-50 text-green-700";
    if (status === "On the way") return "bg-blue-50 text-blue-700";
    return "bg-red-50 text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">

      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <FaShoppingBag className="text-purple-600 text-2xl" />
            <h1 className="text-2xl font-extrabold text-purple-600">
              zepto
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-purple-600 bg-gray-100 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Store</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg">
              <FaBox />
              <span className="font-semibold text-sm">
                My Orders
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Page Header */}
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            My Orders
          </h2>
          <p className="text-gray-500 mt-2">
            Track, manage, and reorder your groceries.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-6">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by order ID or product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
            {["All", "Delivered", "On the way", "Cancelled"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                    filter === status
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">
                      ORDER ID
                    </p>
                    <h3 className="font-bold text-gray-900 mt-1">
                      #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                      <FaCalendarAlt />
                      {order.date}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-2 w-fit px-3 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>

                {/* Products */}
                <div className="p-5">
                  <div className="flex flex-col gap-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover bg-gray-100"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="font-bold text-gray-800">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        Total Amount
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">
                        ₹{order.total}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
                      >
                        View Details
                        <FaChevronRight className="text-xs" />
                      </button>

                      <button
                        onClick={() => reorder(order)}
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-sm transition shadow-xs cursor-pointer"
                      >
                        <FaRedoAlt className="text-xs" />
                        <span>Order Again</span>
                      </button>

                      {order.status === "On the way" && (
                        <button
                          onClick={() => cancelOrder(order.id)}
                          className="px-5 py-2.5 bg-red-50 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-100 transition cursor-pointer"
                        >
                          Cancel Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border">
              <FaBox className="text-5xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">
                No orders found
              </h3>
              <p className="text-gray-500 mt-2">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between p-5 border-b">
              <button
                onClick={() => setSelectedOrder(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
              >
                <FaArrowLeft />
                Back
              </button>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 text-2xl hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Details
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Order #{selectedOrder.id}
              </p>

              <div className={`mt-4 p-3 rounded-xl flex items-center gap-2 font-semibold text-sm ${getStatusColor(selectedOrder.status)}`}>
                {getStatusIcon(selectedOrder.status)}
                {selectedOrder.status}
              </div>

              <h3 className="font-bold mt-6 mb-4">
                Items Ordered
              </h3>

              {selectedOrder.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

              <div className="border-t pt-4 mt-5 flex justify-between">
                <span className="font-semibold text-gray-600">
                  Total Paid
                </span>
                <span className="font-bold text-xl">
                  ₹{selectedOrder.total}
                </span>
              </div>

              <button
                onClick={() => {
                  reorder(selectedOrder);
                  setSelectedOrder(null);
                }}
                className="w-full mt-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FaRedoAlt className="text-sm" />
                <span>Order Again (Reorder All Items)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;