"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Croncore?",
    answer:
      "Croncore is an AI development company providing custom solutions in generative AI, conversational AI, workflow automation, and LLM integrations.",
  },
  {
    question: "How does Croncore improve efficiency?",
    answer:
      "We automate workflows, enhance customer interactions, and reduce manual tasks using advanced AI technologies.",
  },
  {
    question: "Is Croncore suitable for all business sizes?",
    answer:
      "Yes, Croncore offers scalable AI solutions for startups, SMEs, and large enterprises.",
  },
  {
    question: "Does Croncore integrate with other tools?",
    answer:
      "Croncore integrates seamlessly with CRMs, marketing tools, and APIs to fit into your existing systems.",
  },
  {
    question: "How can I get started with Croncore?",
    answer:
      "Reach out to our team or visit our website to explore services and begin your AI journey with us.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first question open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          <p className="text-blue-500">
            •<span className="text-black text-[20px] mb-8"> FAQ&apos;s</span>
          </p>
          <h2 className="text-3xl md:text-4xl text-gray-900 mt-8">
            Answers to your common <br className="hidden md:block" />
            AI questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: index * 0.1 },
              }}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-500 transition-transform transform rotate-180" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer with Smooth Expand/Collapse Animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
