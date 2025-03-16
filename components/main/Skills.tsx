"use client";

import React from "react";
import { motion } from "framer-motion";

// Define a category type to manage skill groups
type SkillCategory = {
  title: string;
  skills: string[];
};

// Animation variants for smooth transitions
const animationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

// Main Skills Section
const Skills = () => {
  const skillCategories: SkillCategory[] = [
    { title: "Programming Languages", skills: ["C#", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "Bash"] },
    { title: "Frameworks and Tools", skills: ["FastAPI", "ASP.NET", ".NET Core", "React", "Node.js", "Flask", "Material-UI"] },
    { title: "Database Technologies", skills: ["MySQL", "MongoDB", "Redis", "NoSQL", "SQL Server", "Data Modeling"] },
    { title: "Development Environment", skills: ["Agile Development", "RESTful API Development", "Microservices"] },
    { title: "Core Competencies", skills: ["Problem Solving", "Algorithms", "Data Structures", "Object-Oriented Design"] },
  ];

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-16 text-gray-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mt-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-300">
          My Skills
        </h2>
        <p className="text-lg text-gray-500 mt-4">
          Stay on top of your tasks, goals, and ideas effortlessly.
        </p>
      </div>

      {/* Skill Categories */}
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-400">{category.title}</h3>

            {/* Skills List */}
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center gap-2 text-sm font-medium text-gray-300"
                >
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
