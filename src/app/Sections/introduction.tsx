"use client";

import React from "react";
import { Cpu, Zap, Database, Snowflake } from "lucide-react";

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Small Header */}
        <p className="text-blue-500 text-sm font-semibold">• Introduction</p>

        {/* Main Content (Forcing 4 Lines) */}
        <div className="text-gray-900 text-3xl md:text-3xl mt-3 leading-normal md:leading-relaxed">
          <p className="break-words">
            Neurova delivers{" "}
            <span className="inline-flex items-center justify-center bg-blue-500 text-white px-2 py-1 rounded-lg shadow-md">
              <Cpu className="w-5 h-5" />
            </span>{" "}
            AI solutions, from chatbot <br /> development to workflow{" "}<span className="inline-flex items-center justify-center bg-blue-500 text-white px-2 py-1 rounded-lg shadow-md">
              <Zap className="w-5 h-5" />
            </span>{" "}
            automation.
          </p>

          <p className="">
            We specialize in{" "}
            <span className="inline-flex items-center justify-center bg-blue-500 text-white px-2 py-1 rounded-lg shadow-md">
              <Database className="w-5 h-5" />
            </span>{" "}
            LLM development, AI <br /> consulting, and content to drive{" "}<span className="inline-flex items-center justify-center bg-blue-500 text-white px-2 py-1 rounded-lg shadow-md">
              <Snowflake className="w-5 h-5" />
            </span>{" "}
            innovation.
          </p>

        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
