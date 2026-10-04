// import React from 'react'
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely with our trusted logistics partners.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Shop with confidence using encrypted and secure payment methods.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description:
        "Hassle-free returns and refunds within our return policy period.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description:
        "Our customer support team is available whenever you need assistance.",
    },
    {
      icon: "🎁",
      title: "Gift Packaging",
      description:
        "Beautiful gift wrapping options for special occasions and celebrations.",
    },
    {
      icon: "⭐",
      title: "Quality Assurance",
      description:
        "Every product is carefully inspected to meet our quality standards.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We provide premium shopping experiences with reliable services
            designed to make your journey smooth and enjoyable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Browse</h3>
              <p className="text-gray-600">
                Explore our wide range of products.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Order</h3>
              <p className="text-gray-600">
                Add items to your cart and checkout.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Receive your products at your doorstep.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">
                Experience quality products and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-600 text-white rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold">10K+</h3>
                <p className="text-blue-100 mt-2">Satisfied Customers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-blue-100 mt-2">Premium Products</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">99%</h3>
                <p className="text-blue-100 mt-2">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop With Us?</h2>

          <p className="text-gray-600 mb-8">
            Discover quality products, reliable service, and a seamless shopping
            experience.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            <Link to={"/"}>Start Shopping</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;
