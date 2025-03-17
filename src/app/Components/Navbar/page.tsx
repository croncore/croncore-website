"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  // ✅ Scroll function (Smooth scroll to section)
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white fixed w-full top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-black font-bold ml-10 text-xl">⚡ CronCode</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-gray-700">
        <button onClick={() => scrollToSection("services")} className="hover:text-black transition">Services</button>
        <button onClick={() => scrollToSection("pricing")} className="hover:text-black transition">Pricing</button>
        <button onClick={() => scrollToSection("testimonial")} className="hover:text-black transition">Testimonial</button>
        <button onClick={() => scrollToSection("process")} className="hover:text-black transition">Process</button>
      </div>

      {/* CTA Button */}
      <button className="flex items-center mr-10 gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Get started <ArrowRight size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
