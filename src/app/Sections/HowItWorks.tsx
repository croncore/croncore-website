"use client";

import React from "react";
import Image from "next/image";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="process" className="pt-20 py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Testimonial */}
        <div className="text-left">
          {/* Star Rating */}
          <div className="flex space-x-1 text-yellow-500 text-3xl">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-4 leading-relaxed">
            The AI-driven automation has transformed our workflow. It’s intuitive, 
            efficient, and highly customizable.
          </p>

          {/* User Info */}
          <div className="flex items-center mt-6 space-x-4">
            <Image
              src="/images/t1.jpg" // Place the image in /public/images/
              alt="Sophia Reed"
              width={50}
              height={50}
              className="rounded-full w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sophia Reed</h3>
              <p className="text-gray-600 text-sm">Founder, NexaTech</p>
            </div>
          </div>
        </div>

        {/* Right Side - Steps with Full Vertical Line & Dots */}
        <div>
          {/* Section Header */}
          <p className="text-blue-500 text-sm font-semibold">• How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            How AI solutions work
          </h2>

          {/* Steps with Proper Vertical Line & Dots */}
          <div className="mt-8 relative">
            {/* Continuous Line */}
            <span className="absolute top-0 left-[2] w-[2px] h-full bg-blue-500"></span>

            {[
              {
                title: "Select a plan",
                description:
                  "Tell us exactly what you need. Our AI-powered system starts optimizing right away",
              },
              {
                title: "Customize your experience",
                description:
                  "Adjust settings to fit your specific workflow and business needs effortlessly",
              },
              {
                title: "Automate and scale",
                description:
                  "Leverage AI automation to boost productivity, streamline tasks, and drive growth",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex items-start space-x-4 mb-8">
                {/* Timeline Indicator (Dot) */}
                <div className="relative">
                  <span className="w-4 h-4 bg-blue-500 rounded-full absolute left-[-6px] top-0"></span>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


















// "use client";

// import React from "react";
// import Image from "next/image";

// const HowItWorksSection: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Side - Testimonial */}
//         <div className="text-left">
//           {/* Star Rating */}
//           <div className="flex space-x-1 text-yellow-500 text-3xl">
//             {"★★★★★".split("").map((star, i) => (
//               <span key={i}>{star}</span>
//             ))}
//           </div>

//           {/* Testimonial Text */}
//           <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-4 leading-relaxed">
//             The AI-driven automation has transformed our workflow. It’s intuitive, 
//             efficient, and highly customizable.
//           </p>

//           {/* User Info */}
//           <div className="flex items-center mt-6 space-x-4">
//             <Image
//               src="/images/t1.jpg" // Place the image in /public/avatars/
//               alt="Sophia Reed"
//               width={50}
//               height={50}
//               className="rounded-full w-12 h-12"
//             />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">Sophia Reed</h3>
//               <p className="text-gray-600 text-sm">Founder, NexaTech</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Steps */}
//         <div>
//           {/* Section Header */}
//           <p className="text-blue-500 text-sm font-semibold">• How it works</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             How AI solutions work
//           </h2>

//           {/* Steps */}
//           <div className="mt-8 relative"> {/* Added relative for absolute positioning of line */}
//             <span className="absolute w-1 bg-blue-500" style={{ height: "100%", left: "8px", top: 0 }}></span> {/* Continuous line */}
//             {[
//               {
//                 title: "Select a plan",
//                 description:
//                   "Tell us exactly what you need. Our AI-powered system starts optimizing right away",
//               },
//               {
//                 title: "Customize your experience",
//                 description:
//                   "Adjust settings to fit your specific workflow and business needs effortlessly",
//               },
//               {
//                 title: "Automate and scale",
//                 description:
//                   "Leverage AI automation to boost productivity, streamline tasks, and drive growth",
//               },
//             ].map((step, index) => (
//               <div key={index} className="flex items-start space-x-4 mb-8 relative">
//                 {/* Timeline Indicator */}
//                 <div className="flex-shrink-0">
//                   <span className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></span> {/* Ensure dot is above line */}
//                 </div>

//                 {/* Step Content */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
//                   <p className="text-gray-600 mt-1">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;

















// "use client";

// import React from "react";
// import Image from "next/image";

// const HowItWorksSection: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Side - Testimonial */}
//         <div className="text-left">
//           {/* Star Rating */}
//           <div className="flex space-x-1 text-yellow-500 text-3xl">
//             {"★★★★★".split("").map((star, i) => (
//               <span key={i}>{star}</span>
//             ))}
//           </div>

//           {/* Testimonial Text */}
//           <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-4 leading-relaxed">
//             The AI-driven automation has transformed our workflow. It’s intuitive, 
//             efficient, and highly customizable.
//           </p>

//           {/* User Info */}
//           <div className="flex items-center mt-6 space-x-4">
//             <Image
//               src="/images/t1.jpg" // Place the image in /public/avatars/
//               alt="Sophia Reed"
//               width={50}
//               height={50}
//               className="rounded-full w-12 h-12"
//             />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">Sophia Reed</h3>
//               <p className="text-gray-600 text-sm">Founder, NexaTech</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Steps */}
//         <div>
//           {/* Section Header */}
//           <p className="text-blue-500 text-sm font-semibold">• How it works</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//             How AI solutions work
//           </h2>

//           {/* Steps */}
//           <div className="mt-8 space-y-8">
//             {[
//               {
//                 title: "Select a plan",
//                 description:
//                   "Tell us exactly what you need. Our AI-powered system starts optimizing right away",
//               },
//               {
//                 title: "Customize your experience",
            
//                 description:
//                   "Adjust settings to fit your specific workflow and business needs effortlessly",
//               },
//               {
//                 title: "Automate and scale",
//                 description:
//                   "Leverage AI automation to boost productivity, streamline tasks, and drive growth",
//               },
//             ].map((step, index) => (
//               <div key={index} className="relative flex items-start space-x-4">
//                 {/* Timeline Indicator */}
//                 <div className="flex flex-col  items-center">
//                   <span className="w-4 h-4  bg-blue-500 rounded-full"></span>
//                   {index < 2 && (
//                     <span className="w-1 h-full bg-blue-500 block"></span>
//                   )}
//                 </div>

//                 {/* Step Content */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
//                   <p className="text-gray-600 mt-1">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;
