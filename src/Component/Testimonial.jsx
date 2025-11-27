import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Images
import img1 from "/images/client1.jpg";
import img2 from "/images/client2.jpg";
import img3 from "/images/client3.jpg";
import img4 from "/images/client4.jpg";

const testimonials = [
  {
    text: "Mama Kitchen serves the best homemade Nigerian meals I’ve had in years. The flavours reminded me of my mother’s cooking—absolutely authentic!",
    name: "Chioma Adebanjo",
    role: "Customer",
    img: img1,
  },
  {
    text: "From their jollof rice to their pepper soup, everything tastes fresh and delicious. Mama Kitchen has become my go-to spot for real Nigerian food.",
    name: "Tunde Bayo",
    role: "Regular Diner",
    img: img2,
  },
  {
    text: "I love how they blend traditional flavours with a clean and modern presentation. Their service is fast, friendly, and genuinely welcoming.",
    name: "Zainab Yusuf",
    role: "Food Lover",
    img: img3,
  },
  {
    text: "Mama Kitchen reminds me of home. The pounded yam and egusi soup took me straight back to my childhood. Highly recommended!",
    name: "Ikechukwu Okoro",
    role: "Customer",
    img: img4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  /* ----------------------- AUTOPLAY ----------------------- */
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="
        w-full py-20 
        bg-linear-to-br from-primary/10 via-white to-primary/5 
        bg-[url('/images/food-pattern.png')] bg-cover bg-center bg-opacity-20
        overflow-hidden
      "
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h5 className="text-primary text-lg font-medium tracking-wide">Testimonial</h5>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h1>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-3xl mx-auto select-none">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide(); // swipe left
              if (info.offset.x > 100) prevSlide(); // swipe right
            }}
            className="
              border rounded-2xl p-8 
              bg-white shadow-xl
              min-h-[280px] md:min-h-[250px]
              cursor-grab active:cursor-grabbing
            "
          >
            <i className="fa fa-quote-left text-primary text-3xl mb-5 block"></i>

            <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
              {testimonials[index].text}
            </p>

            <div className="flex items-center gap-4 mt-5">
              <img
                src={testimonials[index].img}
                className="w-14 h-14 rounded-full object-cover shadow"
                alt={testimonials[index].name}
              />
              <div>
                <h5 className="font-semibold text-gray-900 text-lg">{testimonials[index].name}</h5>
                <small className="text-gray-500 text-sm">{testimonials[index].role}</small>
              </div>
            </div>
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="
              absolute top-1/2 -left-4 md:-left-10 
              -translate-y-1/2 
              bg-primary text-white 
              p-3 rounded-full shadow-lg 
              hover:bg-primary/90 transition
            "
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute top-1/2 -right-4 md:-right-10 
              -translate-y-1/2 
              bg-primary text-white 
              p-3 rounded-full shadow-lg 
              hover:bg-primary/90 transition
            "
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
