"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutUsSection: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { value: 50, suffix: "K+", label: "Active Projects" },
    { value: 100, suffix: "K+", label: "Successful Conversions" },
    { value: 20, suffix: "K+", label: "Satisfied Clients" },
    { value: 10, suffix: "M+", label: "AI-Powered Decisions" },
  ];

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
              className="rounded-3xl shadow-lg my-16 md:my-0"
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
              Croncore is an AI-powered client acquisition platform{" "}
              <br className="hidden lg:block" />
              designed to help businesses streamline and optimize their{" "}
              <br className="hidden lg:block" />
              growth. With advanced automation, predictive analytics,{" "}
              <br className="hidden lg:block" /> and intelligent lead
              management, Croncore empowers <br className="hidden lg:block" />{" "}
              companies to attract, nurture, and convert into loyal clients.
            </p>

            {/* Call to Action Button */}
            <motion.button
              variants={fadeInVariants}
              className="mt-6 mb-20 flex items-center gap-2 px-6 py-3 cursor-pointer bg-[#578CFF] text-white rounded-4xl font-semibold hover:bg-blue-500 transition"
            >
              Get started <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="md:mt-16 grid grid-cols-2 sm:grid-cols-4 mr-4 md:mr-0 text-center gap-8"
          variants={fadeInVariants}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInVariants}>
              <h3 className="md:text-6xl text-4xl text-gray-900">
                {isInView && (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                )}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsSection;
