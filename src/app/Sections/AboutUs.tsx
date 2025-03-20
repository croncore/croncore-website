"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutUsSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Grid Layout for Image & Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side - Image */}
          <motion.div variants={fadeInVariants}>
            <Image
              src="/images/zalan.jpg"
              alt="Team working on AI project"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={fadeInVariants}>
            <p className="text-blue-500">
              •<span className="text-black text-[20px] mb-8"> About us</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8">
              Learn more about our <br className="hidden md:block" />
              journey and AI expertise
            </h2>
            <p className="text-gray-600 mt-6 text-xl leading-relaxed">
              Neurova is an AI-powered client acquisition platform <br />{" "}
              designed to help businesses streamline and optimize their <br />{" "}
              growth. With advanced automation, predictive analytics, <br /> and
              intelligent lead management, Neurova empowers <br /> companies to
              attract, nurture, and convert into loyal clients.
            </p>

            {/* Call to Action Button */}
            <motion.button
              variants={fadeInVariants}
              className="mt-6 mb-40 flex items-center gap-2 px-6 py-3 bg-[#578CFF] text-white rounded-4xl font-semibold hover:bg-blue-500 transition"
            >
              Get started →
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 text-center gap-8"
          variants={fadeInVariants}
        >
          {[
            { value: "50K+", label: "Active Projects" },
            { value: "100K+", label: "Successful Conversions" },
            { value: "20K", label: "Satisfied Clients" },
            { value: "10M+", label: "AI-Powered Decisions" },
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInVariants}>
              <h3 className="text-6xl text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
