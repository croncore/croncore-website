"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../scrollToSection";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black p-10 md:p-16">
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
              className="inline-block"
            />
          </div>
          <p className="text-gray-600 mt-2">
            AI powered solutions for automation and growth
          </p>
          <button className="mt-4 flex items-center space-x-2 px-4 py-2 bg-[#578CFF] text-white rounded-4xl hover:bg-blue-500 transition">
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
                className="hover:text-black transition"
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-black transition"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-black transition"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="hover:text-black transition"
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="hover:text-black transition"
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
                className="hover:text-black transition"
              >
                Generative AI
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-black transition"
              >
                Conversational Agents
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("llm")}
                className="hover:text-black transition"
              >
                Workflow automations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("llm")}
                className="hover:text-black transition"
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
      <div className="border-t mt-6 pt-4 flex justify-between text-gray-500 text-sm">
        <p>© Neurova template 2025</p>
        <p>Error 404 • Insert Supply</p>
      </div>
    </footer>
  );
};

export default Footer;
