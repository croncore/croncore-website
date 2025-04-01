"use client";

import React from "react";
import { motion } from "framer-motion";

const textContent = (
  <>
    Unlock the full potential of AI with Croncore
    <br className="hidden lg:block" />
    —leveraging generative AI, natural language
    <br className="hidden lg:block" />
    processing, and machine learning to solve
    <br className="hidden lg:block" />
    real business challenges the right way.
  </>
);

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Staggered effect
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IntroductionSection: React.FC = () => {
  return (
    <motion.section
      className="pb-8 pt-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Small Header - Fixed Nesting Issue */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-blue-500 text-[20px]">
            • <span className="text-black mb-8 text-[20px]"> Introduction</span>
          </span>
        </motion.div>

        {/* Main Content with Staggered Animation - Replaced <p> with <div> */}
        <motion.div
          className="text-gray-900 text-2xl md:text-3xl mt-8 leading-normal md:leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-2" variants={textVariants}>
            {textContent}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroductionSection;
