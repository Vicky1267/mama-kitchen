import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/images/about-1.jpg"
              alt="Nigerian cuisine"
              className="rounded-lg w-full h-full object-cover shadow-md"
            />

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src="/images/about-2.jpg"
              alt="Delicious meals"
              className="rounded-lg w-3/4 h-full object-cover mt-10 shadow-md"
            />

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src="/images/about-3.jpg"
              alt="Local dishes"
              className="rounded-lg w-3/4 h-full object-cover ml-auto shadow-md"
            />

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src="/images/about-4.jpg"
              alt="Kitchen vibes"
              className="rounded-lg w-full h-full object-cover shadow-md"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h5
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-500 text-lg font-semibold uppercase"
            >
              About Us
            </motion.h5>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-4"
            >
              Welcome to <span className="text-yellow-500">Mama’s Kitchen</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 mb-4 leading-relaxed"
            >
              At Mama’s Kitchen, we bring the true taste of Nigerian home-cooked 
              meals to your table. From smoky jollof rice to pepper soup, suya, 
              amala, and local soups, we celebrate the rich flavors of Nigeria.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-700 mb-6 leading-relaxed"
            >
              Every recipe is prepared with fresh farm ingredients, authentic spices, 
              and the warm hospitality Nigerians are known for. Whether you're craving 
              something traditional or modern, our meals always hit the spot.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-6"
            >
              <div className="flex items-center border-l-4 border-yellow-500 pl-4">
                <h1 className="text-4xl font-bold text-yellow-500">15</h1>
                <div className="ml-3">
                  <p className="text-gray-600">Years of</p>
                  <h6 className="font-semibold uppercase">Experience</h6>
                </div>
              </div>

              <div className="flex items-center border-l-4 border-yellow-500 pl-4">
                <h1 className="text-4xl font-bold text-yellow-500">50+</h1>
                <div className="ml-3">
                  <p className="text-gray-600">Skilled</p>
                  <h6 className="font-semibold uppercase">Chefs & Cooks</h6>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition inline-block"
            >
              Read More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
