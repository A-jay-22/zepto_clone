// import React from "react";

const deliveryData = [
  {
    city: "Bangalore",
    areas:
      "Hebbal | Koramangala | Peenya | Malleswaram | Jayanagar | Chickpet | Indiranagar | Kr Puram | Ramamurthy Nagar | Bhadrappa Layout | C V Raman Nagar | Bannerghatta | Hennur | Bellandur | Richmond Town | Rn Nagar | Nagarbhavi | Sarjapur | Electronic City | Gunjur | Jp Nagar | Btm Layout | Singasandra | Hsr Layout | Marathahalli | Sonnenahalli | Kothnur | Basavanapura | Brookefield | Whitefield | Kalyan Nagar New | Yeshwantpur | Mico Layout | Raghavendra Layout | Banashankari | Yelahanka New Town | Jakkur | Jalahalli | Vijay Nagar | Shivaji Nagar",
  },
  {
    city: "Chennai",
    areas:
      "Kknagar | Sholinganallur | Nandambakkam | Nungambakkam | T Nagar | Mylapore | Annanagar | Thoraipakkam | Perambur | Otteri | Kelambakkam | Adyar | Mogappair | Madambakkam | Navalur | Medavakkam | Mudichur | Perumbakkam | Velachery | Pallikaranai | Ambattur | Nanganallur | Tambaram | Pammal | Vandalur | Gerugambakkam",
  },
  {
    city: "Delhi",
    areas:
      "Karol Bagh | Dilshad Garden | Mayur Vihar I Model Town I Pitampura | South Extension | Rohini Sector 3 | Rohini Sector 15 | Sector 10 Dwarka | Paschim Vihar | Uttam Nagar | Shakti Nagar | Kalkaji | Kirti Nagar | Rk Puram | Sector 12 Dwarka | New Friends Colony | Vikaspuri | Malviya Nagar | Vasant Kunj | Mahavir Enclave | Janakpuri | Anand Vihar | Ip Extension | East Of Kailash | Rajouri Garden | Wazirpur ",
  },
  {
    city: "Ghaziabad",
    areas:
      "Indirapuram | Vaishali | Gaur City | Rajnagar Extension | Raj Nagar",
  },
  {
    city: "Gurgaon",
    areas:
      "Sector 12 | Sector 66 | Udyog Vihar | Sector 71 | Sector 53 | Sector 39 | Sun City | Sector 63 | Sector 27 | Ardee City | Sector 69",
  },
  {
    city: "Hyderabad",
    areas:
      "Ramanthapur | Madhapur | Secunderabad | Chandanagar | Uppal | Jubleehills | Moosapet | Ecil | Dammaiguda | Begumpet | Musheerabad | Suchitra | Himayathnagar | Sainikpuri | Banjarahills | Kondapur | Bachupally | Kothapet | Gachibowli | Kukatpally | Mehdipatnam | Tarnaka | Bowenpally | Rc Puram | Vivekananda Nagar | Nizampet | Manikonda | Miyapur | Nallagandla",
  },
  {
    city: "Kolkata",
    areas:
      "Rajarhat | New Town | Phoolbagan | Behala | Salt Lake | Lake Town | Bhawanipore | Jadavpur",
  },
  {
    city: "Mumbai",
    areas:
      "Bhandup | Santacruz | Bhayender | Andheri (w) | Matunga | Kharghar | Andheri (e) | Malad | Bandra (w) | Waghle Estate | Vashi Sector 19A | Powai Network | Parel | Bkc | Kothari Compound | Lower Parel | Borivali | Goregaon (e) | Palava | Majiwada | Kandivali (e) | Panvel | Ghatkopar (w) | Kandivali (w) | Chembur | Dombivali (w) | Powai | Marol | Koparkhairne | Waghbil Belapur | Mira Road | Mumbai Central",
  },
];

const DeliveryArea = () => {
  return (
    <div className="min-h-screen bg-[#2a004f] text-white">
      {/* Header */}
      <div className="text-center py-16 border-b border-purple-800">
        <h1 className="text-3xl md:text-4xl font-semibold underline">
          Delivery Areas
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {deliveryData.map((item, index) => (
          <div key={index}>
            {/* City Name */}
            <h2 className="text-2xl font-bold mb-4">{item.city}</h2>

            {/* Areas */}
            <p className="text-gray-200 leading-7 text-sm md:text-base">
              {item.areas}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryArea;
