import { useState } from "react";
import { PiCookingPotLight } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";
// import { MdLunchDining } from "react-icons/md";
// import { IoFastFoodOutline } from "react-icons/io5";

const recipes = [
  {
    id: 1,
    name: "Quesadillas",
    category: "Veg",
    meal: "Lunch",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500",
  },
  {
    id: 2,
    name: "Gazpacho",
    category: "Veg",
    meal: "Lunch",
    time: "18 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 3,
    name: "Enchiladas",
    category: "Non-Veg",
    meal: "Dinner",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500",
  },
  {
    id: 4,
    name: "Paella",
    category: "Non-Veg",
    meal: "Lunch",
    time: "60 mins",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=500",
  },
  {
    id: 5,
    name: "Fried Rice",
    category: "Egg",
    meal: "Lunch",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
  },
  {
    id: 6,
    name: "Tortilla Española",
    category: "Egg",
    meal: "Breakfast",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
  },
  {
    id: 7,
    name: "Biryani",
    category: "Non-Veg",
    meal: "Lunch",
    time: "60 mins",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500",
  },
  {
    id: 8,
    name: "Chole",
    category: "Veg",
    meal: "Lunch",
    time: "60 mins",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
  },
  {
    id: 9,
    name: "Quiche Lorraine",
    category: "Egg",
    meal: "Breakfast",
    time: "65 mins",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
  },
  {
    id: 10,
    name: "Spring Rolls",
    category: "Veg",
    meal: "Snacks",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500",
  },
];

const filters = ["All", "Quick Recipe", "Veg", "Egg", "Non-Veg"];

const Recipes = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? recipes
      : active === "Quick Recipe"
        ? recipes.filter((item) => parseInt(item.time) <= 20)
        : recipes.filter((item) => item.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-lg border transition font-medium
            ${
              active === item
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white hover:bg-orange-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filtered.map((recipe) => (
          <div
            key={recipe.id}
            className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Badge */}
              <span
                className={`absolute bottom-3 left-3 px-2 py-1 text-xs rounded-full text-white flex items-center gap-1
                ${
                  recipe.category === "Veg"
                    ? "bg-green-500"
                    : recipe.category === "Egg"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
              >
                <FaLeaf size={10} />
                {recipe.meal}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-semibold text-lg">{recipe.name}</h3>

              <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                <PiCookingPotLight />
                <span>{recipe.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
