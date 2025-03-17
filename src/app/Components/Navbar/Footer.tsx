"use client";

import { Zap, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black p-10 md:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-black" />
            <h2 className="text-lg font-semibold">Neurova</h2>
          </div>
          <p className="text-gray-600 mt-2">
            AI powered solutions for automation and growth
          </p>
          <button className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <span>Get started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonial</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#">Content Creation</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Automation</a></li>
            <li><a href="#">LLM Development</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <ul className="space-y-4 text-gray-600">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
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
