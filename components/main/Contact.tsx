'use client';

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div id="contact" className="bg-gradient-to-br from-gray-900 via-orange-200/20 to-black min-h-screen flex items-center justify-center py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariants}
        className="container mx-auto text-center px-6"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
        Let&apos;s Connect!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
  I&apos;m always open to exciting opportunities. Reach out via email or connect with me on LinkedIn!
</p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition-all duration-300"
            onClick={() => window.location.href = "mailto:uhakruthi1@gmail.com"}
          >
            <FaEnvelope className="text-2xl" />
            <span>Email Me</span>
          </motion.button>

          {/* LinkedIn Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
            onClick={() => window.open("https://www.linkedin.com/in/uhakruthi/", "_blank", "noopener,noreferrer")}
          >
            <FaLinkedin className="text-2xl" />
            <span>Connect on LinkedIn</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
