"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  const roles = [
    "Fullstack Developer",
    "Software Engineer",
    "Data Analyst",
    "Data Engineer",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/uhakruthi1?tab=repositories",
      icon: <FaGithub size={30} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/uhakruthi/",
      icon: <FaLinkedin size={30} />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/uhakruthi1/",
      icon: <FaCode size={30} />, // Replace with any LeetCode icon you prefer
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      {/* Text Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#f7903c89] opacity-[0.9] flex items-center justify-center lg:justify-start"
        >
          <SparklesIcon className="text-[#ff9ba2] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={500}
            />
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 mt-6 text-xl lg:text-3xl font-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Code, commit, conquer - ready to start!
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromTop}
          className="text-sm lg:text-lg text-gray-400 my-5 max-w-full lg:max-w-[600px]"
        >
          Hi, I&apos;m Uha Kruthi Kommi, a passionate Full Stack Developer with
          hands-on experience in creating engaging, user-friendly applications.
          My expertise spans web and mobile development, database design, and
          deploying scalable solutions. I thrive on tackling complex challenges
          and bringing creative ideas to life through clean, efficient code.
          Let&apos;s collaborate and make something amazing together!
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={slideInFromTop}
          className="flex justify-center lg:justify-start gap-4 mt-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-orange-500 to-pink-400 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromTop}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="/imagw1.png"
          alt="work icons"
          height={400}
          width={400}
          className="lg:h-[650px] lg:w-[650px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
