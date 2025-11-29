"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { teamMembers } from "@/data/team";
import { Linkedin, Twitter, Mail } from "lucide-react";

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

export default function About() {
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
              About <span className="text-[#FF7A00]">Decra Technologies</span>
            </h1>
            <p className="text-lg text-[#666666]">
              We are a leading technology company dedicated to helping
              businesses succeed through innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Our Mission
              </h2>
              <p className="text-[#666666] leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and success. We strive to be the
                trusted partner that helps organizations navigate the digital
                landscape and achieve their strategic objectives.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="text-5xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Our Vision
              </h2>
              <p className="text-[#666666] leading-relaxed">
                To be the global leader in technology innovation, recognized for
                our commitment to excellence, client success, and transformative
                solutions that shape the future of business.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Company History */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-[#666666] leading-relaxed">
            <p>
              Founded in 2015, Decra Technologies began with a simple mission:
              to make cutting-edge technology accessible to businesses of all
              sizes. What started as a small team of passionate developers has
              grown into a full-service technology company serving clients
              across multiple industries.
            </p>
            <p>
              Over the years, we've completed hundreds of successful projects,
              helping startups scale, enterprises modernize, and organizations
              transform their digital presence. Our commitment to quality,
              innovation, and client success has earned us a reputation as a
              trusted technology partner.
            </p>
            <p>
              Today, we continue to push the boundaries of what's possible,
              leveraging the latest technologies and best practices to deliver
              solutions that make a real difference for our clients.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            The talented individuals who make our success possible
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="text-center p-6">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FF7A00] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-[#666666] mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FF7A00] hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FF7A00] hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FF7A00] hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Innovation",
              description: "We embrace new ideas and technologies",
              icon: "💡",
            },
            {
              title: "Excellence",
              description:
                "We strive for the highest quality in everything we do",
              icon: "⭐",
            },
            {
              title: "Integrity",
              description: "We conduct business with honesty and transparency",
              icon: "🤝",
            },
            {
              title: "Client Focus",
              description: "Your success is our success",
              icon: "🎯",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                {value.title}
              </h3>
              <p className="text-[#666666] text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
