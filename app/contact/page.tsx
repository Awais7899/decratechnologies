"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("data======", data);

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section - Simplified */}
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9A33]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
            >
              Get in <span className="text-[#FF7A00]">Touch</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-xl mx-auto"
            >
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="bg-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                  Send a Message
                </h2>
                <p className="text-[#666666] mb-8">
                  Fill out the form and we&apos;ll get back to you within 24
                  hours.
                </p>
              </motion.div>

              <motion.form
                variants={staggerContainer}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <motion.div
                  variants={contactItemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] outline-none transition-all bg-white hover:border-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1A1A1A] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] outline-none transition-all bg-white hover:border-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] outline-none transition-all bg-white hover:border-gray-400"
                    placeholder="+92 300 1234567"
                  />
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] outline-none transition-all bg-white hover:border-gray-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1A1A1A] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] outline-none transition-all resize-none bg-white hover:border-gray-400"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                <motion.div variants={contactItemVariants}>
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-4 p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 size={20} className="flex-shrink-0" />
                      ) : (
                        <XCircle size={20} className="flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </motion.div>
                  )}
                  <Button
                    type="submit"
                    size="md"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="mr-2 inline animate-spin"
                          size={18}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          className="ml-2 inline group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                  Contact Information
                </h2>
                <p className="text-[#666666]">
                  Reach out to us through any of these channels. We&apos;re here
                  to help.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                {/* Address */}
                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#FF7A00]" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1.5 text-base">
                      Address
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      Ibrox Street, Glasgow, Scotland, UK
                      <br />
                      Office Location
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#FF7A00]" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1.5 text-base">
                      Phone
                    </h3>
                    <a
                      href="tel:+923001234567"
                      className="text-sm text-[#666666] hover:text-[#FF7A00] transition-colors"
                    >
                      +92 312 6719140
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={contactItemVariants}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#FF7A00]" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1.5 text-base">
                      Email
                    </h3>
                    <a
                      href="mailto:info@decratech.com"
                      className="text-sm text-[#666666] hover:text-[#FF7A00] transition-colors"
                    >
                      decratechnologies@gmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
