"use client";

import React from "react";
import { Send, MessageCircle, Shield, Database, Users, RefreshCw } from "lucide-react";

const features = [
  { title: "AI-powered insights", description: "Analyze data in real-time to make smarter decisions faster", icon: <Send /> },
  { title: "AI chatbots", description: "Engage customers with intelligent, human-like chatbot interactions", icon: <MessageCircle /> },
  { title: "Automated workflows", description: "Streamline operations with AI-driven task automation", icon: <Shield /> },
  { title: "Data protection", description: "Ensure security with encrypted AI models and compliance tools", icon: <Database /> },
  { title: "AI-driven collaboration", description: "Enhance teamwork with smart recommendations and automation", icon: <Users /> },
  { title: "Seamless integrations", description: "Connect AI with your favorite tools for a frictionless workflow", icon: <RefreshCw /> },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-blue-500 text-sm font-semibold">• Features</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Powerful AI features to enhance <br className="hidden md:block" />
          your workflow
        </h2>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-50 to-white p-8 border-1 border-blue-200 rounded-2xl shadow-md text-center transition hover:shadow-lg  max-w-sm mx-auto flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md">
                {feature.icon}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
