"use client";

import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="my-20 flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-300 to-blue-500 p-10 md:p-14 md:rounded-[40px] rounded-[20px] shadow-lg max-w-6xl md:mx-auto mx-2"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {/* Icon Animation */}
      <motion.div
        className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay: 0.2 },
        }}
      >
        <Zap className="text-white opacity-90 w-6 h-6" />
      </motion.div>

      {/* Text Animation */}
      <motion.h1
        className="text-white text-2xl md:text-5xl leading-snug"
        variants={textVariants}
      >
        Transform the way you manage <br />
        <span className="font-bold">AI</span> tasks with Croncore
      </motion.h1>

      {/* Button Animation */}
      <motion.button
        className="mt-6 bg-white text-blue-600 flex items-center px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        variants={buttonVariants}
      >
        Get started <ArrowRight className="ml-2" size={18} />
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
