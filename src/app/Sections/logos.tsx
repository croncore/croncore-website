"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "/images/logoipsum1.svg", alt: "Company logo 1" },
  { src: "/images/logoipsum2.svg", alt: "Company logo 2" },
  { src: "/images/logoipsum3.svg", alt: "Company logo 3" },
  { src: "/images/logoipsum4.svg", alt: "Company logo 4" },
  { src: "/images/logoipsum5.svg", alt: "Company logo 5" },
  { src: "/images/logoipsum6.svg", alt: "Company logo 6" },
];

const InfiniteLogoSlider: React.FC = () => {
  const logoContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = logoContainerRef.current;
    if (ul) {
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.parentElement?.appendChild(clone);
      ul.setAttribute("aria-hidden", "true"); // Hide original from screen readers
    }
  }, []);

  return (
    <div className="relative overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <ul
            ref={logoContainerRef}
            className="flex items-center justify-center md:justify-start space-x-4 md:space-x-12 animate-scroll"
            style={{
              animation: "scroll 30s linear infinite",
            }}
          >
            {logos.map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="max-w-none object-contain w-24 h-12 md:w-36 md:h-18"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteLogoSlider;






// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const logos = [
//   "/images/logoipsum1.svg",
//   "/images/logoipsum2.svg",
//   "/images/logoipsum3.svg",
//   "/images/logoipsum4.svg",
//   "/images/logoipsum5.svg",
//   "/images/logoipsum6.svg",
// ];

// const InfiniteLogoSlider: React.FC = () => {
//   const logoContainerRef = useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     const ul = logoContainerRef.current;
//     if (ul) {
//       const duplicate = ul.cloneNode(true) as HTMLUListElement;
//       duplicate.setAttribute("aria-hidden", "true");
//       ul.parentNode?.appendChild(duplicate);
//     }
//   }, []);

//   return (
//     <div className="relative overflow-hidden py-10">
//       <style jsx global>{`
//         @keyframes infinite-scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-200%);
//           }
//         }
//       `}</style>
//       <div className="w-full max-w-5xl mx-auto px-4 md:px-6 relative">
//         <div
//           className="w-full inline-flex flex-nowrap overflow-hidden"
//           style={{
//             maskImage:
//               "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
//             WebkitMaskImage:
//               "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
//           }}
//         >
//           <ul
//             ref={logoContainerRef}
//             className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll"
//             style={{
//               animation: "infinite-scroll 50s linear infinite",
//             }}
//           >
//             {logos.map((logo, index) => (
//               <li key={index}>
//                 <Image
//                   src={logo}
//                   alt={`logo-${index}`}
//                   width={150}
//                   height={75}
//                   className="max-w-none object-contain"
//                   priority
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteLogoSlider;