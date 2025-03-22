"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../scrollToSection";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black pt-10 md:pt-16 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div className="">
          <div className="flex items-center">
            {/* Added space-x-2 for spacing between images */}
            <Image
              src="/images/Croncore.svg"
              alt="Croncore Logo"
              width={150}
              height={150}
              className="inline-block cursor-pointer"
            />
          </div>
          <p className="text-gray-600 mt-2">
            AI powered solutions for automation and growth
          </p>
          <button className="mt-4 flex items-center cursor-pointer space-x-2 px-4 py-2 bg-[#578CFF] text-white rounded-4xl hover:bg-blue-500 transition">
            <span>Get started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-4 text-gray-600">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-black transition cursor-pointer"
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-black transition cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-black transition cursor-pointer"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("blogs")}
                className="hover:text-black transition cursor-pointer"
              >
                Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="hover:text-black transition cursor-pointer"
              >
                Testimonial
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-4 text-gray-600">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-black transition cursor-pointer"
              >
                Generative AI
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-black transition cursor-pointer"
              >
                Conversational Agents
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("llm")}
                className="hover:text-black transition cursor-pointer"
              >
                Workflow Automations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("llm")}
                className="hover:text-black transition cursor-pointer"
              >
                LLM Integrations
              </button>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <ul className="space-y-4 text-gray-600">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mx-auto max-w-6xl border-gray-300 mt-6 pt-4 pb-6">
        <div className="  px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 text-center md:text-left">
          <p>© 2025 CRONCORE. All rights reserved</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
