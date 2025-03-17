"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ryan Carter",
    username: "@ryanc_ai",
    text: "Neurova transformed our workflow with AI automation, saving us countless hours!",
    image: "/images/t1.jpg", // Place in /public/avatars/
    rating: 5,
  },
  {
    name: "Ethan James",
    username: "@ethanj",
    text: "From automating tasks to optimizing workflows, Neurova made our business more efficient than ever by eliminating manual work and reducing errors significantly.",
    image: "/images/t2.jpg",
    rating: 5,
  },
  {
    name: "Jake Mitchell",
    username: "@jakem",
    text: "Neurova our daily tool to bypass averages and reveal true insights, for the whole team!",
    image: "/images/t3.jpg",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    username: "@dbrooks",
    text: "Smart, fast, and intuitive—Neurova simplifies AI automation like no other platform, enhancing scalability, reducing costs, and optimizing everyday operations with ease.",
    image: "/images/t4.jpg",
    rating: 5,
  },
  {
    name: "Liam Foster",
    username: "@liamf",
    text: "The AI chatbot integration is a game-changer—it feels like having a 24/7 assistant!",
    image: "/images/t1.jpg",
    rating: 5,
  },
  {
    name: "Sophia Reed",
    username: "@sophiareed",
    text: "Neurova transformed our workflow with AI automation, saving us countless hours every week and improving overall team efficiency effortlessly.",
    image: "/images/t2.jpg",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonial" className="pt-20 py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-blue-500 text-sm font-semibold">• Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What our happy clients say <br className="hidden md:block" />
          about our services
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md text-left transition hover:shadow-lg"
            >
              {/* User Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.username}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mt-4">{testimonial.text}</p>

              {/* ⭐ Star Rating (Black Stars) */}
              <div className="flex mt-4 text-2xl space-x-1 text-black">
                {Array(testimonial.rating)
                  .fill("★")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
