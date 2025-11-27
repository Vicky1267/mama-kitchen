import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Your Cravings, Served Hot & Fresh",
    text: "Experience bold flavors crafted with passion. From sizzling grills to chef-inspired recipes, we bring unforgettable taste straight to your table."
  },
  {
    title: "Delicious Meals, Delivered to Your Door",
    text: "Skip the wait — enjoy premium fast food made from fresh ingredients, prepared fast, and delivered even faster."
  },
  {
    title: "Taste the Difference in Every Bite",
    text: "Our meals are more than food — they’re moments of joy. Perfectly seasoned, perfectly cooked, and made to keep you coming back."
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[index].title}
              </h1>

              <p className="text-white/80 mb-6">
                {slides[index].text}
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
              >
                Order Now
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-yellow-500 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
