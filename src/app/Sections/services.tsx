"use client";

import {
  Search,
  Sparkles,
  MoreHorizontal,
  Gem,
  User,
  Heart,
  BookOpen,
  PlusCircle,
  Database,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="pt-20 max-w-6xl mx-auto text-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div variants={fadeInVariants}>
        <span className="text-blue-500 text-[20px]">
          • <span className="text-black text-[20px] ">Services</span>
        </span>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-[42px] mt-8 mb-24"
        variants={fadeInVariants}
      >
        Explore our AI solutions tailored for your
        <br className="hidden lg:block" />
        business needs
      </motion.h1>

      {/* Cards Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ✅ Content Creation Card (Card 01) */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-lg max-w-[450px] p-8 space-y-6 border border-gray-200 text-left overflow-hidden mx-auto"
          variants={fadeInVariants}
        >
          <div className="flex items-center justify-between">
            <h2 id="generativeai" className="text-xl font-semibold">
              Generative AI
            </h2>
            <div className="flex items-center justify-center w-8 h-8 bg-[#578CFF] text-white rounded-full text-sm font-bold">
              01
            </div>
          </div>
          <p className="text-gray-600">
            Our AI-driven solutions generate high-quality text, images, and
            multimedia on a scale.
          </p>

          {/* Search Box */}
          <div className="shadow-2xl shadow-blue-200">
            <div>
              <div className="relative flex items-center w-full p-3 rounded-3xl border border-gray-200">
                <Search className="absolute left-3 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 bg-transparent focus:outline-none text-gray-700"
                  readOnly
                  placeholder=" "
                />
                <span className="absolute left-10 top-3 text-gray-500">
                  <Typewriter
                    words={[
                      "Search for Insert supply...",
                      "Search for AI tools...",
                      "Search for content solutions...",
                    ]}
                    loop={true}
                    cursor
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1500}
                  />
                </span>
              </div>

              {/* Search Results */}
              <p className="font-medium ml-2 mb-2 mt-5">
                <span className="text-blue-600">• </span>Search Results
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex bg-white p-4 rounded-lg shadow-md space-x-3"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-12 bg-gradient-to-br from-pink-500 via-orange-400 to-purple-700 rounded-lg"></div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="h-[4px] bg-gray-200 rounded w-1/2 mb-2 mt-2"></div>
                      <div className="h-[4px] bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-[4px] bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Icons */}
          <div
            id="llm"
            className="flex justify-center gap-6 items-center p-3 mt-4 border-2 border-gray-100 rounded-2xl"
          >
            <User className="text-gray-500 w-6 h-6" />
            <Database className="text-gray-500 w-6 h-6" />
            <Heart className="text-gray-500 w-6 h-6" />
            <BookOpen className="text-gray-500 w-6 h-6" />
            <PlusCircle className="text-blue-500 w-6 h-6" />
          </div>
        </motion.div>

        {/* ✅ Chatbot Development Card (Card 02 - Fixed) */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 space-y-6 border max-w-[450px] border-gray-200 text-left"
          variants={fadeInVariants}
        >
          <div className="flex items-center justify-between">
            <h2 id="Conversational" className="text-xl font-semibold">
              Conversational Agents
            </h2>
            <div className="flex items-center justify-center w-8 h-8 bg-[#578CFF] text-white rounded-full text-sm font-bold">
              02
            </div>
          </div>
          <p className="text-gray-600">
            Unlock efficiency and supercharge your customer service agents with
            AI.
          </p>

          {/* Chatbot UI Box */}
          <div className=" p-4 rounded-xl border border-gray-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-semibold">Croncore AI</p>
              <MoreHorizontal className="text-gray-500 w-5 h-5" />
            </div>

            {/* Chat Input */}
            <div className="p-10 bg-white rounded-lg border border-gray-300 text-gray-500">
              Just start creating •
            </div>

            {/* Generate AI Button */}
            <button className="w-full mt-4 flex items-center cursor-pointer justify-center space-x-2 px-3 py-3 bg-[#578CFF] text-white rounded-full hover:opacity-90 transition">
              <span>Generate AI</span>
              <Sparkles className="w-5 h-5" />
            </button>

            {/* Credits Left */}
            <div className="flex items-center space-x-2 text-gray-600 mt-8">
              <Gem className="w-4 h-4 text-blue-500" />
              <p>30 credits left</p>
            </div>

            {/* Tags */}
            <div className="flex space-x-2 mt-6">
              <div className="px-3 py-1 text-sm border-1 border-gray-100  rounded-xl">
                Audio & Video File
              </div>
              <div className="px-3 py-1 text-smborder-1 border-gray-100  rounded-xl">
                Logomark
              </div>
              <div className="px-3 py-1 text-sm border-1 border-gray-100  rounded-xl">
                Branding
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
