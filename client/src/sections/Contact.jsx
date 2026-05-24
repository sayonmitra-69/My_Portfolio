import React, { useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      setStatus("Message sent successfully.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-40 px-6 md:px-12">
      <div className="max-w-container mx-auto text-center">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-sm mb-4">04. CONTACT</p>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Let’s build something exceptional together.
          </h2>

          <p className="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">
            Open to frontend developer opportunities, collaborations,
            internships, and innovative web projects.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-surface border border-outline rounded-2xl p-8 md:p-12 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#121214] border border-outline rounded-lg px-5 py-4 outline-none focus:border-primary transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#121214] border border-outline rounded-lg px-5 py-4 outline-none focus:border-primary transition"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-[#121214] border border-outline rounded-lg px-5 py-4 outline-none focus:border-primary transition mb-6"
          />

          {/* Button */}

          <button
            type="submit"
            className="bg-primary text-black px-8 py-4 font-mono uppercase tracking-wider text-sm hover:scale-95 active:scale-90 transition"
          >
            Send Message
          </button>

          {/* Status */}

          {status && <p className="mt-6 text-primary font-mono">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
