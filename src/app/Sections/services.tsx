"use client";

import { useState, useEffect } from "react";
import { Search, Sparkles, MoreHorizontal, Gem, User, Heart, BookOpen, PlusCircle, Database } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const ServicesSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section id="services" className="pt-20 max-w-6xl mx-auto text-center px-4">
      {/* Section Title */}
      <p className="text-blue-500 text-sm">• Services</p>
      <h1 className="text-3xl md:text-5xl font-bold mt-2">
        AI solutions tailored for your <br /> business needs
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* ✅ Content Creation Card (Card 01) */}
        <div className="relative bg-white rounded-3xl shadow-lg max-w-[450px] p-8 space-y-6 border border-gray-200 text-left overflow-hidden  mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Content creation</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">01</div>
          </div>
          <p className="text-gray-600">Our AI-driven solutions generate high-quality, brand-aligned content to engage your audience effortlessly.</p>

          {/* Search Box */}
          <div className="relative flex items-center w-full p-3 rounded-xl bg-gray-100 border border-gray-300">
            <Search className="absolute left-3 text-gray-500 w-5 h-5" />
            <input type="text" className="w-full pl-10 pr-3 bg-transparent focus:outline-none text-gray-700" readOnly placeholder=" " />
            <span className="absolute left-10 top-3 text-gray-500">
              <Typewriter words={["Search for Insert supply...", "Search for AI tools...", "Search for content solutions..."]} loop={true} cursor typeSpeed={50} deleteSpeed={30} delaySpeed={1500} />
            </span>
          </div>

          {/* Search Results */}
          <div>
            <p className="text-blue-500 font-medium mb-2">Search Results</p>
            <div className="grid grid-cols-2 gap-4">
              {loading
                ? [...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg animate-pulse">
                      <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                      <p className="w-20 h-4 bg-gray-300 rounded-lg"></p>
                    </div>
                  ))
                : [...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-orange-400 to-cyan-400 rounded-lg"></div>
                      <p className="text-gray-700">Result {i + 1}</p>
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
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">02</div>
          </div>
          <p className="text-gray-600">We create intelligent chatbots powered by advanced NLP to grow customer interactions & operations.</p>

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
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">Audio & Video File</div>
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">Logomark</div>
              <div className="px-3 py-1 text-sm bg-gray-200 rounded-lg">Branding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
