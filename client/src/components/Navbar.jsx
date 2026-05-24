import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { HiMenuAlt3, HiX } from "react-icons/hi";

import resume from "../assets/Sayon_Mitra_Frontend_CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "skills", "contact"];

      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop;

          if (window.scrollY >= sectionTop - 200) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-outline bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}

        <h1 className="text-2xl font-display font-bold tracking-tight text-white">
          SAYON.DEV
        </h1>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#projects"
            className={`text-sm font-mono uppercase tracking-wider transition

            ${
              activeSection === "projects"
                ? "text-primary"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            Projects
          </a>

          <a
            href="#skills"
            className={`text-sm font-mono uppercase tracking-wider transition

            ${
              activeSection === "skills"
                ? "text-primary"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            Skills
          </a>

          <a
            href="#contact"
            className={`text-sm font-mono uppercase tracking-wider transition

            ${
              activeSection === "contact"
                ? "text-primary"
                : "text-textSecondary hover:text-primary"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          {/* Resume Button */}

          <a
            href={resume}
            download
            className="hidden md:block border border-outline px-5 py-2 text-sm font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-white"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline px-6 py-6 flex flex-col gap-6">
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="font-mono uppercase tracking-wider text-textSecondary hover:text-primary transition"
          >
            Projects
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="font-mono uppercase tracking-wider text-textSecondary hover:text-primary transition"
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono uppercase tracking-wider text-textSecondary hover:text-primary transition"
          >
            Contact
          </a>

          <a
            href={resume}
            download
            className="border border-outline px-4 py-3 text-center font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
