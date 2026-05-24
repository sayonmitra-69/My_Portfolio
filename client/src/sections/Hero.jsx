import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/Sayon_Mitra_Frontend_CV.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Available */}
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-mono text-sm mb-8">
            &lt; AVAILABLE FOR HIRE /&gt;
          </span>

          {/* Main Heading */}
          <div className="absolute top-40 right-20 w-72 h-72 bg-primary/20 blur-[120px] rounded-full" />
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            Frontend Developer &
            <span className="text-primary block">Interface Engineer</span>
          </h1>

          {/* Description */}
          <p className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Building responsive, high-performance, and modern web experiences
            using React, Tailwind CSS, Framer Motion, and full-stack
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="bg-primary text-black px-8 py-4 font-mono uppercase tracking-wider text-sm hover:scale-95 active:scale-90 transition inline-block"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="border border-outline px-8 py-4 font-mono uppercase text-sm hover:border-primary hover:text-primary transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
