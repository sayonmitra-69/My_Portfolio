import React from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Hero from "./sections/Hero";

import Projects from "./sections/Projects";

import Skills from "./sections/Skills";

import About from "./sections/About";

import Contact from "./sections/Contact";

import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-background min-h-screen text-white">
      <Navbar />
      <ScrollProgress />

      <Hero />

      <Projects />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
