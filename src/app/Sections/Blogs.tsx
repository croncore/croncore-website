"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogData = [
    {
      image: "/images/blog1.jpeg",
      category: "Design",
      readTime: "5 min read",
      title: "Innovative Design Systems for Better User Experiences",
      description:
        "Learn how Croncore's design system can revolutionize the way you create user interfaces.",
      authorImage: "/images/john.png",
      authorName: "John Doe",
      date: "19 Jun, 2024",
    },
    {
      image: "/images/blog2.jpeg",
      category: "Management",
      readTime: "10 min read",
      title: "Bill Walsh Leadership Lessons",
      description:
        "Bill Walsh’s experience as a leader and a coach can help you build better management skills.",
      authorImage: "/images/alex.png",
      authorName: "Alex Doe",
      date: "11 Jul, 2024",
    },
    {
      image: "/images/blog3.jpeg",
      category: "Technology",
      readTime: "7 min read",
      title: "Top 10 Emerging Technologies in 2024",
      description:
        "Explore the top technologies that are making waves in the tech industry this year.",
      authorImage: "/images/john.png",
      authorName: "Alice Smith",
      date: "21 Aug, 2024",
    },
    {
      image: "/images/blog4.jpeg",
      category: "Marketing",
      readTime: "8 min read",
      title: "Effective Marketing Strategies for Ecommerce",
      description:
        "Boost your ecommerce business with these proven marketing strategies from the experts.",
      authorImage: "/images/alex.png",
      authorName: "David Brown",
      date: "29 Sep, 2024",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="mx-auto">
      <div id="blogs" className="container mx-auto py-28 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500">
            •<span className="text-black text-[20px]"> Blogs</span>
          </p>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="p-6 max-w-xs w-full flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={index}
            >
              <Image
                src={blog.image}
                alt="Blog Image"
                width={500}
                height={224}
                className="w-full h-56 rounded-3xl object-cover mb-4"
              />
              <div>
                <span className="text-sm py-1 px-3 rounded-full inline-block">
                  {blog.category} • {blog.readTime}
                </span>
                <h4 className="mt-4 text-xl font-bold">{blog.title}</h4>
                <p className="mt-2">{blog.description}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src={blog.authorImage}
                    alt="Author"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-semibold">
                      {blog.authorName} - <span>{blog.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            className="mt-2 flex items-center cursor-pointer bg-[#578CFF] text-white px-6 py-3 rounded-full text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Show more <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
