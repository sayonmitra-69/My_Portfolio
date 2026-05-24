import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "React.js", level: "90%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Framer Motion", level: "75%" },
    { name: "JavaScript", level: "88%" },
    { name: "HTML/CSS", level: "95%" },
  ],

  backend: [
    { name: "Node.js", level: "75%" },
    { name: "Express.js", level: "72%" },
    { name: "REST APIs", level: "80%" },
    { name: "JWT Authentication", level: "70%" },
  ],

  tools: [
    { name: "Git & GitHub", level: "85%" },
    { name: "Postman", level: "78%" },
    { name: "VS Code", level: "92%" },
    { name: "Chrome DevTools", level: "85%" },
    { name: "npm", level: "80%" },
  ],

  concepts: [
    { name: "Responsive Design", level: "95%" },
    { name: "State Management", level: "85%" },
    { name: "Component Architecture", level: "90%" },
    { name: "Cross-browser Compatibility", level: "80%" },
    { name: "Dark/Light Theming", level: "82%" },
  ],
};

const tabs = ["frontend", "backend", "tools", "concepts"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="py-40 px-6 md:px-12">
      <div className="max-w-container mx-auto">
        {/* Heading */}

        <div className="mb-20">
          <p className="text-primary font-mono text-sm mb-4">02. SKILLS</p>

          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Technical Arsenal
          </h2>
        </div>

        {/* Tabs */}

        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 border text-sm uppercase tracking-wider font-mono transition
              
              ${
                activeTab === tab
                  ? "bg-primary text-black border-primary"
                  : "border-outline text-textSecondary hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface border border-outline rounded-xl p-6 hover:shadow-glow transition"
              >
                {/* Skill Header */}

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-display font-semibold">
                    {skill.name}
                  </h3>

                  <span className="font-mono text-primary text-sm">
                    {skill.level}
                  </span>
                </div>

                {/* Progress Bar */}

                <div className="w-full h-2 bg-[#1E1E20] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
