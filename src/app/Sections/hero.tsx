import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16 pt-40 bg-gray-50">
      <div className="flex items-center space-x-4 mb-4   pt-2">
        <div className="flex -space-x-2">
          <Image src="/images/alex.png" alt="Alex" width={40} height={40} className="rounded-full border-2 border-white" />
          <Image src="/images/john.png" alt="John" width={40} height={40} className="rounded-full border-2 border-white" />
          <Image src="/images/alex.png" alt="Alex" width={40} height={40} className="rounded-full border-2 border-white" />
        </div>
        <div className="flex items-center space-x-1 text-gray-700 font-medium">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-black text-black" />
          ))}
          <span className="ml-1">4.7 / 5</span>
        </div>
        <span className="text-gray-500">200+ businesses scale</span>
      </div>
      <h1 className="text-4xl md:text-6xl text-gray-900 max-w-3xl text-center leading-tight tracking-tight">
        Smart AI 
        <span className="inline-flex items-center justify-center bg-white shadow-md p-3 rounded-xl align-middle mx-4">
          <Image src="/images/icon.png" alt="Lightning Icon" width={30} height={30} />
        </span>
        tools for fast automation & growth
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl text-lg leading-relaxed">
        Automate workflows, streamline processes, and drive growth with intelligent solutions built for the future.
      </p>
      <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-lg">
        Get started <ArrowRight size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
