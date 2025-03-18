"use client";

import {
  Search,
  Sparkles,
  MoreHorizontal,
  Gem,
  User,
  Heart,
  BookOpen,
  PlusCircle,
  Database,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const ServicesSection = () => {
  return (
    <section id="services" className="pt-20 max-w-6xl mx-auto text-center px-4">
      {/* Section Title */}
      <p className="text-blue-500 text-sm">• Services</p>
      <h1 className="text-3xl md:text-[42px]  mt-8 mb-24">
        Explore our AI solutions tailored for your <br />
        business needs
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* ✅ Content Creation Card (Card 01) */}
        <div className="relative bg-white rounded-3xl shadow-lg max-w-[450px] p-8 space-y-6 border border-gray-200 text-left overflow-hidden  mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generative AI</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">
              01
            </div>
          </div>
          <p className="text-gray-600">
            Our AI-driven solutions generate high-quality text, images, and
            multimedia on a scale.
          </p>

          {/* Search Box */}
          <div className="relative flex items-center w-full p-3 rounded-3xl border border-gray-200">
            <Search className="absolute left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-3 bg-transparent focus:outline-none text-gray-700"
              readOnly
              placeholder=" "
            />
            <span className="absolute left-10 top-3 text-gray-500">
              <Typewriter
                words={[
                  "Search for Insert supply...",
                  "Search for AI tools...",
                  "Search for content solutions...",
                ]}
                loop={true}
                cursor
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>
          </div>

          {/* Search Results */}
          <div>
            <p className="font-medium mb-2">
              <span className="text-blue-600">• </span>Search Results
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex bg-white p-4 rounded-lg shadow-md space-x-3"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-12 bg-gradient-to-br from-pink-500 via-orange-400 to-purple-700 rounded-lg"></div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="h-[4px] bg-gray-200 rounded w-1/2 mb-2 mt-2"></div>
                    <div className="h-[4px] bg-gray-200 rounded w-full mb-2"></div>

                    <div className="h-[4px] bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded-lg">
            <User className="text-gray-500 w-6 h-6" />
            <Database className="text-gray-500 w-6 h-6" />
            <Heart className="text-gray-500 w-6 h-6" />
            <BookOpen className="text-gray-500 w-6 h-6" />
            <PlusCircle className="text-blue-500 w-6 h-6" />
          </div>
        </div>

        {/* ✅ Chatbot Development Card (Card 02 - Fixed) */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6 border max-w-[450px] border-gray-200 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Chatbot development</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">
              02
            </div>
          </div>
          <p className="text-gray-600">
            We create intelligent chatbots powered by advanced NLP to grow
            customer interactions & operations.
          </p>

          {/* Chatbot UI Box */}
          <div className="bg-gray-100 p-4 rounded-xl border border-gray-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-semibold">Neurova AI</p>
              <MoreHorizontal className="text-gray-500 w-5 h-5" />
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white rounded-lg border border-gray-300 text-gray-500">
              Just start creating •
            </div>

            {/* Generate AI Button */}
            <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:opacity-90 transition">
              <span>Generate AI</span>
              <Sparkles className="w-5 h-5" />
            </button>

            {/* Credits Left */}
            <div className="flex items-center space-x-2 text-gray-600 mt-3">
              <Gem className="w-4 h-4 text-blue-500" />
              <p>30 credits left</p>
            </div>

            {/* Tags */}
            <div className="flex space-x-2 mt-3">
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">
                Audio & Video File
              </div>
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">
                Logomark
              </div>
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">
                Branding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
