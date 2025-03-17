"use client";

import Image from "next/image"; // ✅ Use Next.js Image component
import { Sparkles, Search } from "lucide-react";

const WorkflowAutomationAndLLM = () => {
  return (
    <section className="max-w-6xl mx-auto text-center pt-3 px-4">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* ✅ Workflow Automations Card */}
        <div className="relative bg-blue-50 rounded-3xl shadow-lg p-8 max-w-[450px] md:ml-11 space-y-6 border border-gray-200 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Workflow automations</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">03</div>
          </div>
          <p className="text-gray-600">
            We automate repetitive tasks to improve operational efficiency, grow productivity, errors, and save time.
          </p>

          {/* Automation Icons */}
          <div className="flex justify-center items-center space-x-4 relative">
            <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <Image src="/images/insta.png" alt="OpenAI" width={20} height={20} />
            </div>
            <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <Image src="/images/fb.png" alt="Webflow" width={20} height={20} />
            </div>
            <div className="w-12 h-12 bg-white border-2 border-blue-500 shadow-lg rounded-full flex items-center justify-center relative">
              <Image src="/images/yt.png" alt="Framer" width={24} height={24} />
              <div className="absolute w-0.5 h-8 bg-blue-500 top-full left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <Image src="/images/insta.png" alt="Slack" width={20} height={20} />
            </div>
          </div>

          {/* Automation Connection Box */}
          <div className="bg-white rounded-xl border border-gray-300 p-4 flex space-x-4 items-start">
            <div>
              <p className="text-gray-700 font-semibold mb-2">Connect with:</p>
              <ul className="text-gray-600 space-y-1">
                <li>• Webflow</li>
                <li>• Framer</li>
                <li>• Figma</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-100 p-3 rounded-lg">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="mt-2 flex space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:opacity-90 transition">
            <span>Get Started</span>
          </button>
        </div>

        {/* ✅ LLM Development Card */}
        <div className="relative bg-white rounded-3xl shadow-lg p-8 space-y-6 border max-w-[450px] border-gray-200 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">LLM development</h2>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold">04</div>
          </div>
          <p className="text-gray-600">
            We build Large Language Models to revolutionize business processes data & interacts with customers.
          </p>

          {/* AI Search Card */}
          <div className="relative bg-white rounded-xl shadow-lg p-4 border border-gray-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <p className="text-gray-700 font-semibold">Amsterdam</p>
            </div>
            <div className="flex space-x-2 mt-3">
              <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-green-400 to-red-500"></div>
              <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-purple-300 to-blue-400"></div>
            </div>
            <div className="mt-4 flex items-center space-x-2 bg-gray-100 p-3 rounded-lg border border-gray-300">
              <Search className="w-5 h-5 text-gray-500" />
              <p className="text-gray-700">
                What is capital of <span className="font-bold">Netherland</span>
              </p>
            </div>
          </div>

          {/* Generate AI Button */}
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:opacity-90 transition">
            <span>Generate AI</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowAutomationAndLLM;
