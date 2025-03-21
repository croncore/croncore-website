"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/logoipsum1.svg", alt: "Company logo 1" },
  {
    src: "/images/Stripe.svg",
    alt: "Company logo 2",
  },
  // { src: "/images/Croncore.svg", alt: "Company logo 3" },
  { src: "/images/logoipsum4.svg", alt: "Company logo 4" },
  { src: "/images/logoipsum5.svg", alt: "Company logo 5" },
  { src: "/images/Google.svg", alt: "Company logo 6" },
];

const InfiniteLogoSlider: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-10 bg-white">
      <div className="w-[700px] max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full flex overflow-hidden">
          {/* Duplicate the logos to create a seamless loop */}
          <div className="flex gap-10 animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={20}
                  height={20}
                  className="max-w-none object-contain w-20 h-10 md:w-26 md:h-13"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          min-width: max-content;
        }
      `}</style>
    </div>
  );
};

export default InfiniteLogoSlider;
