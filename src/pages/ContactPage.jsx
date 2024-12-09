import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "motion/react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    alert(
      `Message sent! ${formData.name}, ${formData.email}, ${formData.message}`
    );
    // Here you can handle form submission logic
  };

  return (
    <>
      <Navbar />

      {!messageSent && (
        <div>
          <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-7xl font-bold"
            >
              We would love to hear from you!
            </motion.h1>
            <motion.p
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#9B9B9B] text-xl md:text-3xl"
            >
              We are here to provide you with all the support and resources you
              need. Let us know how we can assist!
            </motion.p>
          </div>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center items-center w-[100%] px-4 "
          >
            <div className="flex flex-col w-full max-w-[700px]">
              <label className="" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="focus:outline-2 focus:outline-[#C3DFC4] p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full max-w-[700px]">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="focus:outline-2 focus:outline-[#C3DFC4] p-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full max-w-[700px]">
              <label className="" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
                className="focus:outline-2 focus:outline-[#C3DFC4] p-2 border-2 border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              className="bg-[#C3DFC4] p-4 rounded-lg text-white font-semibold text-2xl w-full max-w-[700px]"
              type="submit"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      )}

      {messageSent && (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-4xl md:text-7xl font-bold">Message sent!</h1>
          <p className="text-[#9B9B9B] text-xl md:text-3xl">
            Thanks for reaching out. We'll get back to you shortly!
          </p>
        </div>
      )}
    </>
  );
}

export default ContactPage;
