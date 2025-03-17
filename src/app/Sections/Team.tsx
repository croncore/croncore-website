"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Muzamal Hussain", role: "Framer Developer", image: "/images/tt1.jpg" },
  { name: "Sophia Carter", role: "Head of Customer Experience", image: "/images/tt2.jpg" },
  { name: "Michael Thompson", role: "Chief Operating Officer", image: "/images/tt3.jpg" },
  { name: "David Carter", role: "Chief Technology Officer", image: "/images/tt4.jpg" },
  { name: "Richard Harris", role: "Chief Financial Officer", image: "/images/tt5.jpeg" },
  { name: "Thomas Evans", role: "Head of Product Development", image: "/images/tt6.jpg" },
  { name: "Olivia Bennett", role: "Chief Innovation Officer", image: "/images/tt7.jpeg" },
  { name: "Jason Clark", role: "Marketing Director", image: "/images/tt8.jpeg" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-blue-500 text-sm font-semibold">• Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Meet the experts behind our <br className="hidden md:block" />
          premium AI solutions
        </h2>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-4 hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
