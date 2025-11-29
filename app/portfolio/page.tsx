"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { portfolioItems } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Our <span className="text-[#FF7A00]">Portfolio</span>
            </h1>
            <p className="text-lg text-[#666666]">
              Showcasing our successful projects and the impact we&apos;ve made
              for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <Section className="bg-white">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#FF7A00] text-white"
                  : "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#FF7A00] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={item.link || "#"}
                    className="text-white font-semibold flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-[#FF7A00] font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A] mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-[#666666] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "5+", label: "Team Members" },
            { number: "3+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FF7A00] mb-2">
                {stat.number}
              </div>
              <div className="text-[#666666] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default function Portfolio() {
  return <PortfolioClient />;
}
