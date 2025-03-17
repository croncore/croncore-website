"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is Neurova?",
    answer:
      "Neurova is an AI-powered platform that helps businesses automate client acquisition and lead management.",
  },
  {
    question: "How does Neurova improve efficiency?",
    answer:
      "Neurova optimizes workflows with AI-driven automation, reducing manual tasks and increasing productivity.",
  },
  {
    question: "Is Neurova suitable for all business sizes?",
    answer:
      "Yes, Neurova is designed for startups, small businesses, and enterprises looking to enhance efficiency.",
  },
  {
    question: "Does Neurova integrate with other tools?",
    answer:
      "Absolutely! Neurova connects with popular CRM, marketing, and business intelligence tools.",
  },
  {
    question: "How can I get started with Neurova?",
    answer:
      "Sign up on our platform, choose a plan, and follow the guided onboarding to set up your AI-powered workflow.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Section Header */}
        <p className="text-blue-500 text-sm font-semibold">• FAQ&apos;s</p>
        <h2 className="text-3xl md:text-4xl  text-gray-900 mt-2">
          Answers to your common <br className="hidden md:block" />
          AI questions
        </h2>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-1 border-gray-50 rounded-lg shadow-md">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer (Collapsible Section) */}
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
