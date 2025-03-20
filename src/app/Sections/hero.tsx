"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  // Animation variants for fade-in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Delay each element by 0.3s
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="flex flex-col items-center text-center px-6 py-16 pt-30">
      {/* Stars and avatars */}
      <motion.div
        className="flex items-center justify-center space-x-4 mb-4 pt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animate only once when in view
        variants={fadeIn}
        custom={0} // First element
      >
        <div className="flex -space-x-2">
          <Image
            src="/images/alex.png"
            alt="Alex"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/john.png"
            alt="John"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <Image
            src="/images/alex.png"
            alt="Alex"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-black text-black" />
            ))}
            <span className="ml-1 text-gray-700 font-medium">4.7 / 5</span>
          </div>
          <span className="text-gray-500 text-sm mt-1">
            200+ businesses scale
          </span>
        </div>
      </motion.div>

      {/* Heading - split into lines */}
      <motion.h1
        className="text-4xl md:text-6xl text-gray-900 text-center leading-tight tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={fadeIn} custom={1} className="block">
          Make technology your advantage
        </motion.span>
        <motion.span variants={fadeIn} custom={2} className="block">
          with our AI solutions
          {/* <span className="inline-flex items-center justify-center bg-white shadow-sm xl:p-3 p-1 rounded-xl align-middle mx-4">
            <Image
              src="/images/icon.png"
              alt="Lightning Icon"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </span> */}
        </motion.span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="mt-4 text-gray-600 max-w-2xl text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={3}
      >
        Seamlessly integrate AI throughout your organisation to deliver a true
        technology advantage for your business.
      </motion.p>

      {/* Button */}
      <motion.button
        className="mt-6 flex items-center gap-2 bg-[#578CFF] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={4}
      >
        Schedule a briefing <ArrowRight size={20} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
