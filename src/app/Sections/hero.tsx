"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 pt-30">
      {/* Stars and avatars */}
      <motion.div
        className="flex items-center justify-center space-x-4 mb-4 pt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
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
            src="/images/t1.png"
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

      {/* Headings */}
      <motion.h1
        className="text-4xl md:text-6xl text-gray-900 text-center leading-tight tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span className="block" variants={fadeUp} custom={1}>
          Make technology your advantage
        </motion.span>
        <motion.span className="block" variants={fadeUp} custom={2}>
          with our AI solutions
        </motion.span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="mt-4 text-gray-600 max-w-2xl text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      >
        Seamlessly integrate AI throughout your organisation to deliver a true
        technology advantage for your business.
      </motion.p>

      {/* Button with smooth scale animation */}
      <motion.button
        className="mt-6 flex items-center gap-2 cursor-pointer bg-[#578CFF] text-white px-6 py-3 rounded-full text-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Schedule a briefing <ArrowRight size={20} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
