"use client";

import React from "react";
import {
  Send,
  MessageCircle,
  Shield,
  Database,
  Users,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI for customer service",
    description:
      " Boost efficiency and empower your customer service team with AI.",
    icon: <Send />,
  },
  {
    title: "AI for finance",
    description:
      " Enhance financial success and business growth with data, AI, and automation.",
    icon: <MessageCircle />,
  },
  {
    title: " AI for marketing",
    description:
      "Deliver tailored customer experiences on alarge scale with our AI solutions.",
    icon: <Shield />,
  },
  {
    title: " AI for application modernization",
    description:
      "Upgrade your existing apps with AI and hybrid cloud technology.",
    icon: <Database />,
  },
  {
    title: "AI for human resources",
    description:
      "Transform HR with AI at its heart for improved business results.",
    icon: <Users />,
  },
  {
    title: "AI for IT operations",
    description:
      "Improve efficiency and reduce costs in techoperations with AI-driven automation.",
    icon: <RefreshCw />,
  },
];

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const FeaturesSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.p
          className="text-blue-500 text-[20px]"
          variants={fadeInVariants}
        >
          • <span className="text-black text-[20px] mb-8"> Features</span>
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl text-gray-900 mt-8"
          variants={fadeInVariants}
        >
          Powerful AI features to enhance <br className="hidden md:block" />
          your workflow
        </motion.h2>

        {/* Features Grid with Staggered Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-blue-50 to-white p-8 border-1 border-blue-200 rounded-2xl shadow-md text-center transition hover:shadow-lg max-w-sm mx-auto flex flex-col items-center justify-center"
              variants={fadeInVariants}
            >
              {/* Icon */}
              <span className="inline-flex items-center justify-center w-12 h-12 bg-[#578CFF] text-white rounded-full shadow-md">
                {feature.icon}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
