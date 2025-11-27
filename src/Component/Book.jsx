import { motion } from "framer-motion";
import { useState } from "react";

export default function Book() {
  const [form, setForm] = useState({ name: "", email: "", datetime: "", people: "1", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full py-16 px-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="h-96 md:h-full w-full"
        >
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31516.79337484669!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1c09e15db7%3A0xdeb6b5f1f2f4da17!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000" 
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 flex items-center"
        >
          <div className="p-8 w-full text-white">
            <h5 className="text-primary text-lg text-yellow-400 font-medium mb-2">Reservation</h5>
            <h1 className="text-3xl font-bold mb-6">Book A Table Online</h1>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    name="datetime"
                    value={form.datetime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">No. of People</label>
                  <select
                    name="people"
                    value={form.people}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 focus:outline-none"
                  >
                    <option value="1">People 1</option>
                    <option value="2">People 2</option>
                    <option value="3">People 3</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Special Request</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-800 h-28 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary rounded text-white bg-yellow-400 font-semibold hover:opacity-90 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
