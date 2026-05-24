import React from "react";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "DevOps Intern",
    company: "Internship",

    description:
      "Worked with CI/CD pipelines, Docker containerization, AWS EC2, and deployment workflows while gaining exposure to modern development practices.",
  },

  {
    year: "2023",
    title: "IBM Internship",
    company: "Emerging Technologies in Data Analytics",

    description:
      "Explored enterprise analytics workflows, data pipelines, and modern data processing concepts during IBM internship training.",
  },

  {
    year: "2020 - 2024",
    title: "B.Tech Computer Science",
    company: "S'O'A University",

    description:
      "Completed Computer Science Engineering with focus on frontend development, responsive design, and full-stack web technologies.",
  },
];

const About = () => {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-container mx-auto grid md:grid-cols-12 gap-16">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-5"
        >
          <p className="text-primary font-mono text-sm mb-4">03. ABOUT</p>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            Building modern web experiences with precision & creativity.
          </h2>

          <p className="text-textSecondary text-lg leading-relaxed mb-8">
            I’m Sayon Mitra, an aspiring frontend developer passionate about
            crafting responsive, interactive, and high-performance web
            applications using React, Tailwind CSS, Framer Motion, and modern
            JavaScript technologies.
          </p>

          <div className="bg-surface border border-outline rounded-xl p-6">
            <p className="italic text-lg text-textSecondary leading-relaxed">
              “Code is not just functionality — it’s the experience users feel.”
            </p>
          </div>
        </motion.div>

        {/* Right Side Timeline */}

        <div className="md:col-span-6 md:col-start-7 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-outline"
            >
              {/* Dot */}

              <div className="absolute -left-[6px] top-1 w-3 h-3 bg-primary rounded-full" />

              {/* Content */}

              <p className="font-mono text-sm text-textSecondary mb-2">
                {item.year}
              </p>

              <h3 className="text-2xl font-display font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-primary font-mono text-sm mb-4">
                {item.company}
              </p>

              <p className="text-textSecondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
