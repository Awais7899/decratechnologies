"use client";

import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF9A33]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#FF9A33]/20 to-[#FF7A00]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF7A00]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 122, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 122, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF7A00]/10 to-[#FF9A33]/10 rounded-full border border-[#FF7A00]/20"
              >
                <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                <span className="text-sm font-semibold text-[#FF7A00]">
                  Innovation at Your Fingertips
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
              >
                <span className="block text-[#1A1A1A]">
                  <span className="text-[#FF7A00]">Decra</span> - Transform Your
                </span>
                <span className="block bg-gradient-to-r from-[#FF7A00] via-[#FF9A33] to-[#FF7A00] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Business Today
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-[#666666] leading-relaxed max-w-xl"
              >
                <strong className="text-[#FF7A00]">Decra Technologies</strong>{" "}
                delivers cutting-edge technology solutions that drive growth,
                innovation, and success for businesses worldwide.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <Button size="md" className="group w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight
                      className="ml-2 inline group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { number: "15+", label: "Decra Projects" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "5+", label: "Decra Experts" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-black text-[#FF7A00]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#666666] font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white to-orange-50/50 p-8 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm">
                  <div className="space-y-6 pt-4">
                    {[
                      { label: "Client Satisfaction", value: 98, icon: Target },
                      {
                        label: "Project Success",
                        value: 95,
                        icon: CheckCircle2,
                      },
                      { label: "On-Time Delivery", value: 92, icon: Zap },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-[#FF9A33] rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-[#1A1A1A]">
                                {item.label}
                              </span>
                              <span className="text-sm font-bold text-[#FF7A00]">
                                {item.value}%
                              </span>
                            </div>
                            <div
                              className="h-3 bg-gradient-to-r from-[#FF7A00]/20 to-[#FF9A33]/20 rounded-full mb-2"
                              style={{ width: `${item.value}%` }}
                            ></div>
                            <div
                              className="h-2 bg-gray-200 rounded-full"
                              style={{ width: `${item.value - 10}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 z-10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FF9A33] rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A]">
                        Success Rate
                      </div>
                      <div className="text-sm text-[#FF7A00] font-semibold">
                        98%
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-orange-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF9A33] to-[#FF7A00] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A]">Growth</div>
                      <div className="text-sm text-[#FF7A00] font-semibold">
                        +250%
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <Section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1A] mb-4">
              Why Choose <span className="text-[#FF7A00]">Decra</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              <strong className="text-[#FF7A00]">Decra Technologies</strong>{" "}
              combines expertise, innovation, and dedication to deliver
              exceptional results for businesses worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Decra Team",
                description:
                  "Decra's team consists of experienced professionals dedicated to your success.",
                icon: Sparkles,
                color: "from-[#FF7A00] to-[#FF9A33]",
              },
              {
                title: "Decra's Innovative Solutions",
                description:
                  "Decra Technologies leverages the latest technologies to deliver cutting-edge solutions.",
                icon: Zap,
                color: "from-[#FF9A33] to-[#FF7A00]",
              },
              {
                title: "Decra's Proven Results",
                description:
                  "Decra has a track record of successful projects and satisfied clients worldwide.",
                icon: CheckCircle2,
                color: "from-[#FF7A00] to-[#E66A00]",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#FF7A00]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 transform hover:-translate-y-2 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Brand Section - New */}
      <Section className="bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1A] mb-6">
              About <span className="text-[#FF7A00]">Decra</span>
            </h2>
            <p className="text-xl text-[#666666] leading-relaxed mb-4">
              <strong className="text-[#FF7A00]">Decra</strong> is a leading
              technology company specializing in innovative IT solutions. When
              you search for <strong>&quot;Decra&quot;</strong>, you&apos;re
              looking for <strong>Decra Technologies</strong> - your trusted
              partner for web development, mobile apps, cloud solutions, and
              cybersecurity services.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed">
              Based in Glasgow, UK, <strong>Decra</strong> has been helping
              businesses worldwide transform their operations through
              cutting-edge technology. Whether you need{" "}
              <strong>Decra software</strong>,{" "}
              <strong>Decra IT services</strong>, or{" "}
              <strong>Decra web development</strong>, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Preview - Redesigned */}
      <Section className="bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#1A1A1A] mb-4">
              <span className="text-[#FF7A00]">Decra</span> Services
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              <strong>Decra Technologies</strong> provides comprehensive
              technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group h-full"
                >
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FF7A00]/30 transform hover:-translate-y-3 overflow-hidden h-full flex flex-col">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-[#FF9A33]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF9A33]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#FF7A00] group-hover:to-[#FF9A33] transition-all duration-500">
                        <Icon
                          size={32}
                          className="text-[#FF7A00] group-hover:text-white transition-colors duration-500"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF7A00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#666666] mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <Link
                        href="/services"
                        className="inline-flex items-center text-[#FF7A00] font-semibold group-hover:gap-2 transition-all mt-auto"
                      >
                        Learn more
                        <ArrowRight
                          size={18}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="secondary" size="md" className="group">
                View All Services
                <ArrowRight
                  className="ml-2 inline group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section - Redesigned */}
      <Section className="relative bg-gradient-to-br from-[#FF7A00] via-[#FF8A1A] to-[#E66A00] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10 py-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            Ready to Transform Your Business with{" "}
            <span className="text-white">Decra</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 text-orange-50 leading-relaxed max-w-2xl mx-auto"
          >
            <strong>Decra Technologies</strong> helps you achieve your goals
            with innovative technology solutions that drive real results.
            Contact Decra today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <Button
                variant="secondary"
                size="md"
                className="group shadow-2xl"
              >
                Get in Touch
                <ArrowRight
                  className="ml-2 inline group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
