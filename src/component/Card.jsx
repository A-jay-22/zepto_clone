// import React from 'react'

const Card = () => {
  const steps = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      title: "Open the app",
      description:
        "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
      title: "Place an order",
      description:
        "Add your favourite items to the cart & avail the best offers",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      title: "Get free delivery",
      description:
        "Experience lightning-fast delivery and get all your items delivered in minutes",
    },
  ];
  return (
    <div>
      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Reliable delivery to your doorstep.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted transactions.</p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How it Works
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
              >
                {/* Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-20 h-20 mx-auto mb-6 object-contain"
                />

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
