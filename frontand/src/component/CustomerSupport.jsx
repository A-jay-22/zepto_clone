// import React from "react";

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-[#2a004f] text-white">
      {/* Top Section */}
      <div className="text-center px-4 pt-20">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          We're here to help you 24x7 <br />
          on Zepto App
        </h1>

        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-3xl mx-auto">
          Zepto does not have an official customer support phone number. <br />
          <span className="font-semibold text-white">
            Please beware of fake numbers & spam calls!
          </span>
        </p>

        <p className="mt-6 text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          For real time priority chat support, please reach out to us through
          the latest version of the Zepto mobile app.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-16">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://staticweb.zepto.com/customer-support/support.webp"
            alt="help 2"
            className="w-[700px] h-[500px] rounded-xl shadow-lg mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
