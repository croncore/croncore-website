"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Scroll function (Smooth scroll to section)
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav className="flex items-center justify-center px-6 py-4 bg-white w-full top-0 left-0 z-50">
      {/* Centered Container for Logo, Nav Links, and Button */}
      <div className="flex items-center space-x-48 md:space-x-5 xl:space-x-64 lg:space-x-40">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Croncore.svg"
            alt="Croncore Logo"
            width={150}
            height={150}
            className="inline-block cursor-pointer"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-black transition cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("blogs")}
            className="hover:text-black transition cursor-pointer"
          >
            Blogs
          </button>
          <button
            onClick={() => scrollToSection("testimonial")}
            className="hover:text-black transition cursor-pointer"
          >
            Testimonial
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="hover:text-black transition cursor-pointer"
          >
            Process
          </button>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 cursor-pointer bg-[#578CFF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Get started <ArrowRight size={16} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          <button
            onClick={() => scrollToSection("services")}
            className="py-2 hover:text-black transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="py-2 hover:text-black transition"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("testimonial")}
            className="py-2 hover:text-black transition"
          >
            Testimonial
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="py-2 hover:text-black transition"
          >
            Process
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
