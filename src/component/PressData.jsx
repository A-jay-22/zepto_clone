// import React from "react";

const pressData = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/61c19f9dfc4d044bac4f7956_zepto-funding-yc-continuity-p-1080.jpeg",
    source: "Bloomberg",
    date: "December 21, 2021",
    title: "Grocery Startup Founded by Teens Doubles Value to $570 Million",
    description:
      "Zepto, an instant grocery delivery startup founded by two teenagers, has raised $100 million in a funding round led by Y Combinator...",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f748b6ebb03f565ec2092_MPV05128-p-1080.jpeg",
    source: "TechCrunch",
    date: "November 1, 2021",
    title:
      "Zepto, a 10-minute grocery delivery app in India, raises $60 million",
    description:
      "Two 19-year-old entrepreneurs, who previously collaborated on a number of projects including a ride-hailing commute app...",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617f739cbc8062eecea11187_Screenshot%202021-11-01%20at%2010.26.40%20AM-p-500.png",
    source: "Bloomberg",
    date: "November 1, 2021",
    title: "Teenage Stanford Dropouts Raise $60 Million for Grocery Startup",
    description:
      "Zepto, a 10-minute grocery delivery app startup founded by two teenage Stanford University dropouts has raised $60 million...",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee72385abb263598d92dc_groceryrfxl.jpeg",
    source: "VCCIRCLE",
    date: "November 1, 2021",
    title:
      "Grocery delivery app Zepto raises $60 mn led by Glade Brook Capital",
    description:
      "Kiranakart Technologies Pvt Ltd, which runs Zepto, a 10-minute grocery delivery app, said it has raised $60 million (around Rs 444 crore)...",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/612ce9a327af1203dd3b50ef/617ee5a6038328324f618a16_kaivalya-vohra-p-500.jpeg",
    source: "ET",
    date: "November 1, 2021",
    title: "Zepto raises $60 million to deliver groceries in 10 minutes",
    description:
      "Quick commerce grocery delivery app Zepto has raised $60 million led by US investment fund Glade Brook Capital, at a post-money valuation of $225 million....",
  },
];

const PressData = () => {
  return (
    <div className="min-h-screen bg-[#2a004f] text-white">
      {/* Header */}
      <div className="text-center py-16 border-b border-purple-800">
        <h1 className="text-3xl md:text-4xl font-bold underline">Press</h1>

        <p className="mt-4 text-sm text-gray-200 italic">
          For press inquiries, please contact pr@zeptonow.com.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressData.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover h-80"
            />

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span className="font-semibold">{item.source}</span>
                <span>{item.date}</span>
              </div>

              <h2 className="text-lg font-bold leading-snug">{item.title}</h2>

              <p className="text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>

              <button className="text-purple-600 font-semibold hover:underline">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressData;
