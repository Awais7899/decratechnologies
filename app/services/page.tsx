"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
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
              Our <span className="text-[#FF7A00]">Services</span>
            </h1>
            <p className="text-lg text-[#666666]">
              Comprehensive technology solutions tailored to help your business
              grow and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#FF7A00]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-[#FF7A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-[#666666]"
                      >
                        <span className="text-[#FF7A00] mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Our Process
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We understand your needs and goals",
            },
            {
              step: "02",
              title: "Planning",
              description: "We create a detailed project roadmap",
            },
            {
              step: "03",
              title: "Development",
              description: "We build your solution with care",
            },
            {
              step: "04",
              title: "Launch",
              description: "We deploy and support your project",
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FF7A00] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                {process.title}
              </h3>
              <p className="text-[#666666] text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#FF7A00] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Let's discuss how our services can help transform your business.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
