// Menu.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import foodData from "../data/foodData";

// Extract unique categories
const categories = ["all", ...new Set(foodData.map((item) => item.category))];

const Menu = () => {
  const { addToCart } = useCart();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(foodData);
  const itemRefs = useRef([]);

  // Read ?search= from URL
  const searchQuery =
    new URLSearchParams(location.search).get("search")?.toLowerCase() || "";

  // Filter whenever category or search changes
  useEffect(() => {
    let result = foodData;

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery) ||
          item.category.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredItems(result);

    // Scroll to first result
    if (result.length > 0) {
      const firstRef = itemRefs.current[0];
      if (firstRef) {
        firstRef.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [searchQuery, activeCategory]);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>

        {/* Show search info */}
        {searchQuery && (
          <p className="text-center text-gray-700 mb-4">
            Search results for:{" "}
            <span className="text-red-500 font-semibold">{searchQuery}</span>
          </p>
        )}

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`capitalize px-5 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FOOD ITEMS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform ${
                searchQuery &&
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ? "ring-4 ring-yellow-500"
                  : ""
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="flex justify-between items-center">
                  <h6 className="text-lg font-bold text-red-500">
                    {item.price}
                  </h6>

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

        {/* EMPTY STATE */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No meals match your search or selected category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Menu;
