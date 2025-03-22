"use client";

import React, { useRef, useEffect } from "react";
import {
  Send,
  MessageCircle,
  Shield,
  Database,
  Users,
  RefreshCw,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

// Feature type
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

// Features data
const features = [
  {
    title: "AI for customer service",
    description:
      "Boost efficiency and empower your customer service team with AI.",
    icon: <Send />,
  },
  {
    title: "AI for finance",
    description:
      "Enhance financial success and business growth with data, AI, and automation.",
    icon: <MessageCircle />,
  },
  {
    title: "AI for marketing",
    description:
      "Deliver tailored customer experiences on a large scale with our AI solutions.",
    icon: <Shield />,
  },
  {
    title: "AI for application modernization",
    description:
      "Upgrade your existing apps with AI and hybrid cloud technology.",
    icon: <Database />,
  },
  {
    title: "AI for human resources",
    description:
      "Transform HR with AI at its heart for improved business results.",
    icon: <Users />,
  },
  {
    title: "AI for IT operations",
    description:
      "Improve efficiency and reduce costs in tech operations with AI-driven automation.",
    icon: <RefreshCw />,
  },
];

// Smoother & Faster Animation Variant
const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.3, // faster but smooth
      ease: "easeInOut",
    },
  },
});

// Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(index * 0.1)} // stagger with index
      initial="hidden"
      animate={controls}
      className="bg-gradient-to-b from-blue-50 to-white p-8 border border-blue-100 rounded-2xl shadow-sm text-center hover:shadow-lg transition max-w-sm mx-auto flex flex-col items-center justify-center"
    >
      <span className="inline-flex items-center justify-center w-12 h-12 bg-[#578CFF] text-white rounded-full shadow-md">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <motion.p
          className="text-blue-500 text-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          • <span className="text-black text-[20px] mb-8"> Features</span>
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl text-gray-900 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          Powerful AI features to enhance <br className="hidden md:block" />
          your workflow
        </motion.h2>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
