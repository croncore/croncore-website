"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const drawLineVariant = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const HowItWorksSection: React.FC = () => {
  return (
    <motion.section
      id="process"
      className="pt-20 py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 flex flex-col-reverse xl:flex-row gap-32">
        {/* Left Side - Testimonial */}
        <motion.div variants={fadeInUp} className="text-left">
          {/* Star Rating */}
          <div className="flex space-x-1 text-yellow-500 text-3xl">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-4 leading-relaxed">
            The AI-driven automation has <br /> transformed our workflow. It’s
            intuitive, <br /> efficient, and highly customizable.
          </p>

          {/* User Info */}
          <div className="flex items-center mt-6 space-x-4">
            <Image
              src="/images/t1.jpg"
              alt="Sophia Reed"
              width={50}
              height={50}
              className="rounded-full w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Sophia Reed
              </h3>
              <p className="text-gray-600 text-sm">Founder, NexaTech</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Steps with Animated Line */}
        <motion.div variants={fadeInUp}>
          {/* Section Header */}
          <motion.div variants={fadeInUp}>
            <span className="text-blue-500 text-[20px]">
              •{" "}
              <span className="text-black text-[20px] mb-8">How it works</span>
            </span>
            <h2 className="text-3xl md:text-4xl text-gray-900 mt-8">
              How AI solutions work
            </h2>
          </motion.div>

          {/* Steps with Animated Vertical Line */}
          <motion.div className="mt-8 relative" variants={staggerContainer}>
            {/* Animated Vertical Line */}
            <motion.span
              className="absolute w-0.5 bg-blue-500 left-[-13px] top-2 bottom-0"
              variants={drawLineVariant}
            ></motion.span>

            {/* Steps */}
            {[
              {
                title: "Select a plan",
                description:
                  "Tell us exactly what you need. Our AI-powered system starts optimizing right away.",
              },
              {
                title: "Customize your experience",
                description:
                  "Adjust settings to fit your specific workflow and business needs effortlessly.",
              },
              {
                title: "Automate and scale",
                description:
                  "Leverage AI automation to boost productivity, streamline tasks, and drive growth.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-4 mb-8"
                variants={fadeInUp}
              >
                {/* Timeline Indicator (Dot) */}
                <motion.span
                  className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-20px] top-[5px]"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.4, delay: index * 0.3 },
                  }}
                ></motion.span>

                {/* Step Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
