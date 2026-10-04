import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AdminDashboard from "./component/admin/AdminDashboard";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import AddToCard from "./pages/AddToCard";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";
import InvoiceGenerate from "./pages/InvoiceGenerate";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";

import Items from "./component/Items";
import DiliveryArea from "./component/DiliveryArea";
import CustomerSupport from "./component/CustomerSupport";
import PressData from "./component/PressData";
import Recipes from "./component/Recipes";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Term from "./component/Term";

// Dynamic Category Pages
import Beauty from "./categoryItems/Beauty";
import Cafe from "./categoryItems/Cafe";
import Electronics from "./categoryItems/Electronics";
import Fashion from "./categoryItems/Fashion";
import Fresh from "./categoryItems/Fresh";
import Mobile from "./categoryItems/Mobile";
import Toys from "./categoryItems/Toys";
import HomeItem from "./categoryItems/HomeItem";

import { fetchProducts } from "./redux/features/productSlice";
import OrderHistory from "./pages/OrderHistory";

// Pages without footer/navbar (admin)
const NO_FOOTER_PATHS = ["/admin", "/admin/login"];

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // Fetch products on app startup
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  const showFooter = !NO_FOOTER_PATHS.includes(location.pathname);
  const showNavbar = !NO_FOOTER_PATHS.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "14px",
          },
        }}
      />

      {showNavbar && <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Items />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/addtocart" element={<AddToCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/invoiceGenerate" element={<InvoiceGenerate />} />
          <Route path="/orderhistory" element={<OrderHistory />} />

          {/* Admin Panel & Admin Login */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Category Pages (Dynamic from backend) */}
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fresh" element={<Fresh />} />
          <Route path="/home-item" element={<HomeItem />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/toys" element={<Toys />} />

          {/* Footer Pages */}
          <Route path="/diliveryarea" element={<DiliveryArea />} />
          <Route path="/CustomerSupport" element={<CustomerSupport />} />
          <Route path="/PressData" element={<PressData />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Term" element={<Term />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default App;
