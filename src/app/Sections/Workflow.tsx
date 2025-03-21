"use client";

import Image from "next/image";
import { Sparkles, Search } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const WorkflowAutomationAndLLM = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto text-center pt-3 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Cards Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ✅ Workflow Automations Card */}
        <motion.div
          className="relative bg-blue-50 rounded-3xl shadow-lg p-8 max-w-[450px] md:ml-11 space-y-6 border border-gray-200 text-left"
          variants={fadeInVariants}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Workflow Automations</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-[#578CFF] text-white rounded-full text-sm font-bold">
              03
            </div>
          </div>
          <p className="text-gray-600">
            We automate repetitive tasks to improve operational efficiency, grow
            productivity, errors, and save time.
          </p>

          {/* Automation Icons */}
          <div className="flex justify-center items-center space-x-4 relative">
            {["insta.png", "fb.png", "yt.png", "insta.png"].map((img, i) => (
              <div
                key={i}
                className={`w-${i === 2 ? "12" : "10"} h-${
                  i === 2 ? "12" : "10"
                } bg-white border border-gray-300 rounded-full flex items-center justify-center relative ${
                  i === 2 ? "border-2 border-blue-500 shadow-lg" : ""
                }`}
              >
                <Image
                  src={`/images/${img}`}
                  alt="icon"
                  width={i === 2 ? 24 : 20}
                  height={i === 2 ? 24 : 20}
                />
                {i === 2 && (
                  <div className="absolute w-0.5 h-8 bg-[#578CFF] top-full left-1/2 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Automation Connection Box */}
          <div className="bg-white rounded-xl border border-gray-300 p-4 flex space-x-4 items-start">
            <div>
              <p className="text-gray-700 font-semibold mb-2">Connect with:</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Webflow</li>
                <li>• Framer</li>
                <li>• Figma</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <div className="h-1 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-1 bg-gray-200 rounded w-1/2"></div>
              <div className="h-1 bg-gray-200 rounded w-3/4 mt-2"></div>
              <div className="h-1 bg-gray-200 rounded w-1/2 mt-2"></div>
              <div className="mt-2 flex space-x-2">
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full flex items-center justify-center cursor-pointer space-x-2 px-4 py-3 bg-[#578CFF] text-white rounded-full hover:opacity-90 transition">
            <span>Get Started</span>
          </button>
        </motion.div>

        {/* ✅ LLM Development Card */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-lg p-8 space-y-6 border max-w-[450px] border-gray-200 text-left"
          variants={fadeInVariants}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">LLM Integrations</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-[#578CFF] text-white rounded-full text-sm font-bold">
              04
            </div>
          </div>
          <p className="text-gray-600">
            Leverage advanced generative LLMs to improve decision-making,
            streamline operations, and reveal actionable insights.
          </p>

          {/* AI Search Card */}
          <div className="relative bg-white rounded-xl shadow-lg p-4 border border-gray-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#578CFF] rounded-full"></span>
              <p className="text-gray-700 font-semibold">Amsterdam</p>
            </div>
            <div className="flex space-x-2 mt-3">
              {[
                "purple-400 to-pink-500",
                "green-400 to-red-500",
                "purple-300 to-blue-400",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-20 h-14 rounded-lg bg-gradient-to-br from-${bg}`}
                ></div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x- p-3 rounded-lg border border-gray-200">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <p className="text-gray-700">
                What is capital of{" "}
                <span className="font-bold">Netherlands</span>
              </p>
            </div>
          </div>

          {/* Generate AI Button */}
          <button className="w-full flex items-center justify-center cursor-pointer space-x-2 px-4 py-3 bg-[#578CFF] text-white rounded-full hover:opacity-90 transition">
            <span>Generate AI</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WorkflowAutomationAndLLM;
