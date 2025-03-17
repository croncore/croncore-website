"use client";

import React from "react";
import Image from "next/image";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Grid Layout for Image & Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Side - Image */}
          <div>
            <Image
              src="/images/zalan.jpg" // Place the image in /public/images/
              alt="Team working on AI project"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-blue-500 text-sm font-semibold mt-5">• About us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Learn more about our <br className="hidden md:block" />
              journey and AI expertise
            </h2>
            <p className="text-gray-600 mt-6 text-xl leading-relaxed">
              Neurova is an AI-powered client acquisition platform <br /> designed to
              help businesses streamline and optimize their <br /> growth. With
              advanced automation, predictive analytics, <br /> and intelligent lead
              management, Neurova empowers <br /> companies to attract, nurture, and
              convert into loyal clients.
            </p>

            {/* Call to Action Button */}
            <button className="mt-6 mb-40 flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
              Get started →
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {[
            { value: "50K+", label: "Active Projects" },
            { value: "100K+", label: "Successful Conversions" },
            { value: "20K", label: "Satisfied Clients" },
            { value: "10M+", label: "AI-Powered Decisions" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-6xl  text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
