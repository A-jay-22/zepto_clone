import {
  FaInstagram,
  FaFacebookF,
  FaApple,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
              zepto
            </h1>

            <div className="flex gap-6 text-gray-500 text-3xl mb-6">
              <a href="https://www.instagram.com/zeptonow/?hl=en">
                <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              </a>
              <a href="https://x.com/ZeptoNow?lang=en">
                {" "}
                <FaXTwitter className="cursor-pointer hover:text-black transition" />
              </a>
              <a href="https://www.facebook.com/Zeptonow/">
                <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              </a>
              <a href="https://in.linkedin.com/company/zeptonow">
                {" "}
                <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition" />
              </a>
            </div>

            <p className="text-gray-500">© Zepto Marketplace Private Limited</p>

            <p className="text-gray-500 mt-2">fssai lic no : 11224999000872</p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col space-y-2 text-lg">
            {/* <ul className="space-y-2 text-lg"> */}
            <Link to={"/"} className="hover:text-pink-600 cursor-pointer">
              {" "}
              Home{" "}
            </Link>
            <Link
              to={"/diliveryarea"}
              className="hover:text-pink-600 cursor-pointer"
            >
              Delivery Areas
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">Careers</Link>
            <Link
              to={"/CustomerSupport"}
              className="hover:text-pink-600 cursor-pointer"
            >
              Customer Support
            </Link>
            <Link
              to={"/PressData"}
              className="hover:text-pink-600 cursor-pointer"
            >
              Press
            </Link>

            <Link className="hover:text-pink-600 cursor-pointer">
              Mojo - a Zepto Blog
            </Link>
            <Link
              to={"/Recipes"}
              className="hover:text-pink-600 cursor-pointer"
            >
              Zepto Recipes
            </Link>
            {/* </ul> */}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2 text-lg">
            <Link
              to={"/PrivacyPolicy"}
              className="hover:text-pink-600 cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link to={"/Term"} className="hover:text-pink-600 cursor-pointer">
              Terms of Use
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">
              Responsible Disclosure Policy
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">
              Sell on Zepto
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">
              DeLinkver with Zepto
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">
              Franchise with Zepto
            </Link>
            <Link className="hover:text-pink-600 cursor-pointer">
              Investor Relations
            </Link>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-6 ">Download App</h3>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-white transition">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  alt="Play Store"
                  className="h-6"
                />
                <span className="font-medium">
                  <Link to="https://play.google.com/store/apps/details?id=com.zeptoconsumerapp">
                    Get it on Play Store
                  </Link>
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-white transition">
                <FaApple className="text-2xl" />
                <span className="font-medium">
                  <Link
                    to={
                      "https://apps.apple.com/in/app/zepto-groceries-in-minutes/id1575323645"
                    }
                  >
                    Get it on App Store
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
