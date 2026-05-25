import React from "react";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Full Stack News App",

    description:
      "A full-stack news platform with authentication, protected routes, bookmarking, and REST API integration using React, Node.js, Express, and JWT.",

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    tech: ["React", "Node.js", "Express", "JWT"],

    github: "https://github.com/sayonmitra-69/Full-Stack-News-Application",

    demo: "https://full-stack-news-application.vercel.app",
  },

  {
    title: "TextUtils",

    description:
      "React text utility platform with dark/light mode, real-time text manipulation, and responsive component architecture.",

    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

    tech: ["React", "Bootstrap", "React Router"],

    github:
      "https://github.com/sayonmitra-69/TextUtils-Your-Go-To-Text-Utility",

    demo: "https://text-utils-your-go-to-text-utility.vercel.app",
  },

  {
    title: "Stone Paper Scissors",

    description:
      "Interactive browser game with live score tracking, responsive UI, and smooth game logic.",

    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/sayonmitra-69/Stone-Paper-Scissors-Web-Game",

    demo: "https://stone-paper-scissors-web-game.vercel.app",
  },
  {
    title: "Currency Converter",

    description:
      "Real-time currency conversion app using external REST APIs with dynamic exchange rate updates.",

    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",

    tech: ["JavaScript", "REST API", "CSS"],

    github: "https://github.com/sayonmitra-69/Currency-Converter-Web-App",

    demo: "https://currency-converter-web-app-olive.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 md:px-12">
      <div className="max-w-container mx-auto">
        {/* Heading */}

        <div className="mb-20">
          <p className="text-primary font-mono text-sm mb-4">01. PROJECTS</p>

          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Selected Work
          </h2>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface border border-outline rounded-xl overflow-hidden hover:shadow-glow hover:-translate-y-2 transition duration-300 group"
            >
              {/* Image */}

              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-textSecondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#1E1E20] border border-outline text-sm font-mono text-textSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-outline px-5 py-3 text-sm font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition"
                  >
                    GitHub
                  </a>

                  <button
                    disabled
                    className="bg-primary/40 cursor-not-allowed text-black px-5 py-3 text-sm font-mono uppercase tracking-wider"
                  >
                    Live Demo Soon
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
