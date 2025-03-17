"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo 3.jpg",
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo 3.jpg",
];

const InfiniteLogoSlider: React.FC = () => {
  const logoContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = logoContainerRef.current;
    if (ul) {
      const duplicate = ul.cloneNode(true) as HTMLUListElement;
      duplicate.setAttribute("aria-hidden", "true");
      ul.parentNode?.appendChild(duplicate);
    }
  }, []);

  return (
    <div className="relative overflow-hidden py-10 bg-gray-50">
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 relative">
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
          }}
        >
          <ul
            ref={logoContainerRef}
            className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll"
            style={{
              animation: "infinite-scroll 50s linear infinite",
            }}
          >
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  width={100}
                  height={50}
                  className="max-w-none object-contain"
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;