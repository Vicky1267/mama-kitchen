// OfferSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const offers = [
  { id: 1, title: "Sharwama Days", discount: 5, img: "/images/o1.jpg" },
  { id: 2, title: "Peppered Snails", discount: 15, img: "/images/o2.jpg" },
  { id: 3, title: "Tasty Fridays", discount: 20, img: "/images/o3.jpg" },
  { id: 4, title: "Barbecue Days", discount: 15, img: "/images/o4.jpg" },
];

const menuItems = [
  { id: 1, title: "Rice & Lamb Stew", category: "rice", price: "₦2,500", img: "/images/f1.png", description: "Steamed white rice served with rich, flavorful lamb stew cooked with Nigerian spices." },
  { id: 2, title: "Ofada Rice & Ayamase", category: "traditional", price: "₦3,000", img: "/images/f2.png", description: "Local Ofada rice paired with spicy ayamase sauce, palm oil, assorted meat, and boiled egg." },
  { id: 3, title: "Amala & Efo Riro", category: "swallow", price: "₦2,000", img: "/images/f3.png", description: "Soft amala served with rich efo riro stew packed with fish, meat, and assorted vegetables." },
  { id: 4, title: "Eba & Okro Soup", category: "swallow", price: "₦1,800", img: "/images/f4.png", description: "Fresh garri (eba) served with deliciously slimy okro soup cooked with fresh ingredients." },
  { id: 5, title: "Noodles (Spaghetti)", category: "pasta", price: "₦1,500", img: "/images/f5.png", description: "Well-seasoned spaghetti noodles stir-fried with vegetables and choice of protein." },
  { id: 6, title: "Jellof Rice", category: "rice", price: "₦5,000", img: "/images/f6.jpg", description: "Well-seasoned Nigeria jellof rice stir-fried with vegetables and grilled chicken." },
];

// Offer Card Component
const OfferCard = ({ title, discount, img }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={img} alt={title} className="w-full md:w-1/2 object-cover" />
    <div className="p-6 flex flex-col justify-center">
      <h5 className="text-xl font-semibold">{title}</h5>
      <h6 className="text-lg font-bold text-red-500">{discount}% Off</h6>
      <a
        href="#"
        className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
      >
        Order Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 12h20M12 2l10 10-10 10" />
        </svg>
      </a>
    </div>
  </motion.div>
);

// Offer Section Component
const OfferSection = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-50">
      {/* Offer Cards */}
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 mb-16">
        {offers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <h6 className="text-lg font-bold text-red-500">{item.price}</h6>
                  <button
                    onClick={() => addToCart(item)}
                    className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="px-8 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
