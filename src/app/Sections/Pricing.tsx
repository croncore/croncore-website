"use client";

import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Starter Plan",
    subtitle: "Small businesses or startups",
    price: "$19",
    period: "/ month",
    buttonText: "Get Started",
    features: [
      "1 AI-powered workflow",
      "Basic chatbot integration",
      "Up to 3 automation templates",
      "Email support",
      "30-day data retention",
      "Access to community support",
    ],
    highlight: false,
  },
  {
    title: "Growth Plan",
    subtitle: "For growing businesses",
    price: "$49",
    period: "/ month",
    buttonText: "Get Started",
    features: [
      "Up to 5 AI workflows",
      "Advanced chatbot features",
      "20 automation templates",
      "API access",
      "Priority email support",
      "90-day data retention",
    ],
    highlight: true, // Middle plan highlighted
  },
  {
    title: "Professional Plan",
    subtitle: "Top companies with large teams",
    price: "$149",
    period: "/ month",
    buttonText: "Talk to Support",
    features: [
      "Unlimited AI workflows",
      "Full chatbot customization",
      "Unlimited automation templates",
      "API access & customization",
      "24/7 support (phone, email)",
      "1-year data retention",
    ],
    highlight: false,
  },
];

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
    transition: { staggerChildren: 0.2 },
  },
};

const PricingSection: React.FC = () => {
  return (
    <motion.section
      id="pricing"
      className=" py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <span className="text-blue-500 text-[20px]">
            • <span className="text-black text-[20px] mb-8">Pricing</span>{" "}
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-900 mt-2">
            Flexible pricing plans for <br className="hidden md:block" />
            every business
          </h2>
        </motion.div>

        {/* Pricing Cards with Staggered Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[1200px] gap-8"
          variants={containerVariants}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl shadow-md transition transform ${
                plan.highlight
                  ? "bg-gradient-to-t from-blue-50 to-white"
                  : "bg-white border-gray-50"
              }`}
              variants={fadeInVariants}
            >
              {/* Plan Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>
              <p className="text-gray-600 mt-1">{plan.subtitle}</p>

              {/* Price */}
              <div className="text-4xl font-bold text-gray-900 mt-4">
                {plan.price}
                <span className="text-lg font-medium text-gray-600">
                  {plan.period}
                </span>
              </div>

              {/* Button */}
              <button
                className={`mt-6 w-full py-3 rounded-4xl font-semibold transition ${
                  plan.highlight
                    ? "bg-[#578CFF] text-white hover:bg-blue-500"
                    : "bg-gray-50 border-2 border-gray-100 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <ul className="mt-8 text-left space-y-6 lg:space-y-4 md:space-y-4 sm:space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#578CFF] text-white rounded-full shadow-md">
                      ✓
                    </span>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
