"use client";

import React from "react";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-300 to-blue-500 p-10 md:p-14 md:rounded-[40px] rounded-[20px] shadow-lg max-w-6xl md:mx-auto mx-2  ">
        <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mx-auto mb-4">
          <Zap className="text-white opacity-90 w-6 h-6" />
        </div>

      <h1 className="text-white text-2xl md:text-5xl leading-snug">
        Transform the way you manage <br />
        <span className="font-bold">AI</span> tasks with Neurova
      </h1>
      <button className="mt-6 bg-white text-blue-600 flex items-center px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
        Get started <ArrowRight className="ml-2" size={18} />
      </button>
    </section>
  );
};

export default HeroSection;
