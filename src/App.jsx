// import React from 'react'
import { Toaster } from "react-hot-toast";

import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import AddToCard from "./pages/AddToCard";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Category from "./component/Category"
import Footer from "./component/Footer";
// import Card from "./component/Card"
import Items from "./component/Items";
// import All from "./categoryItems/All";
import Beauty from "./categoryItems/Beauty";
import Cafe from "./categoryItems/Cafe";
import Electronics from "./categoryItems/Electronics";
import Fashion from "./categoryItems/Fashion";
import Fresh from "./categoryItems/Fresh";
import Mobile from "./categoryItems/Mobile";
import Toys from "./categoryItems/Toys";
import HomeItem from "./categoryItems/HomeItem";
import CheckOut from "./pages/CheckOut";
import DiliveryArea from "./component/DiliveryArea";
import CustomerSupport from "./component/CustomerSupport";
import PressData from "./component/PressData";
import Recipes from "./component/Recipes";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Term from "./component/Term";
import InvoiceGenerate from "./pages/InvoiceGenerate";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Items />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/addtocart" element={<AddToCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* categoryItems */}
        {/* <Route path="/all" element={<All/>}/>  */}
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/fresh" element={<Fresh />} />

        <Route path="/home-item" element={<HomeItem />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/checkout" element={<CheckOut />} />

        {/* Footer */}
        <Route path="/diliveryarea" element={<DiliveryArea />} />
        <Route path="/CustomerSupport" element={<CustomerSupport />} />
        <Route path="/PressData" element={<PressData />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Term" element={<Term />} />
        {/* invoice */}
        <Route path="/invoiceGenerate" element={<InvoiceGenerate />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
