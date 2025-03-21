"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Muzamal Hussain",
    role: "Framer Developer",
    image: "/images/tt1.jpg",
  },
  {
    name: "Sophia Carter",
    role: "Head of Customer Experience",
    image: "/images/tt2.jpg",
  },
  {
    name: "Michael Thompson",
    role: "Chief Operating Officer",
    image: "/images/tt3.jpg",
  },
  {
    name: "David Carter",
    role: "Chief Technology Officer",
    image: "/images/tt4.jpg",
  },
  {
    name: "Richard Harris",
    role: "Chief Financial Officer",
    image: "/images/tt5.jpeg",
  },
  {
    name: "Thomas Evans",
    role: "Head of Product Development",
    image: "/images/tt6.jpg",
  },
  {
    name: "Olivia Bennett",
    role: "Chief Innovation Officer",
    image: "/images/tt7.jpeg",
  },
  {
    name: "Jason Clark",
    role: "Marketing Director",
    image: "/images/tt8.jpeg",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
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
    transition: { staggerChildren: 0.15 },
  },
};

const TeamSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-white"
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
          • <span className="text-black text-[20px] mb-8"> Team</span>
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl  text-gray-900 mt-8"
          variants={fadeInVariants}
        >
          Meet the experts behind our <br className="hidden md:block" />
          premium AI solutions
        </motion.h2>

        {/* Team Grid with Staggered Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-4 hover:shadow-lg transition group"
              variants={fadeInVariants}
            >
              {/* Image */}
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900 flex justify-between items-center">
                  {member.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
