import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/features/searchSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchProduct, setSearchProduct] = useState("");

  const dispatch = useDispatch();

  // const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems)
  // const search = useSelector((state) => state.search.value);

  // const filteredCart = cartItems.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

  const count = useSelector((state) => state.wishlist.wishlist.length);
  const cart = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="bg-white border-b shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png"
              alt="Logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-semibold">
            <Link to="/" className="hover:text-blue-600 hover:font-bold">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-600 hover:font-bold">
              About
            </Link>

            <Link to="/service" className="hover:text-blue-600 hover:font-bold">
              Services
            </Link>

            <Link to="/contact" className="hover:text-blue-600 hover:font-bold">
              Contact
            </Link>
          </div>

          {/* Desktop Search */}

          <div className="hidden md:flex relative w-64 lg:w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />

            <input
              type="text"
              placeholder="Search here..."
              value={searchProduct}
              onChange={(e) => {
                setSearchProduct(e.target.value);
                dispatch(setSearch(e.target.value));
              }}
              className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="rounded-md ">
              <CgProfile className="w-5 h-auto text-2xl ml-2  " />
              Login
            </Link>

            <Link to={"/addtocart"}>
              <IoCartOutline className="w-5 h-auto text-2xl ml-1 " />
              Cart {cart}
            </Link>

            <Link to={"/whishlist"}>
              <FaRegHeart className="w-5 h-auto text-2xl ml-5 " />
              Whishlist {count}
            </Link>

            {/* <Link
              to="/register"
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
            >
              Register
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t">
            {/* Search */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-3 top-3 text-gray-500" />

              <input
                // onChange={(e)=>setSearchProduct(e.target.value)}
                // value={searchProduct}
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link to="/service" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/addtocart" onClick={() => setMenuOpen(false)}>
                Cart ({cart})
              </Link>
              <Link to="/whishlist" onClick={() => setMenuOpen(false)}>
                Whishlist ({count})
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <Link
                to="/login"
                className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="flex-1 text-center bg-green-600 text-white py-2 rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
