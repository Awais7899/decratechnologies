"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Get in <span className="text-[#FF7A00]">Touch</span>
            </h1>
            <p className="text-lg text-[#666666]">
              Have a project in mind? Let's discuss how we can help bring your
              ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message <Send className="ml-2 inline" size={20} />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Contact Information
              </h2>
              <p className="text-[#666666] mb-8">
                We're here to help! Reach out to us through any of the following
                channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#FF7A00]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Address</h3>
                  <p className="text-[#666666]">
                    123 Innovation Drive
                    <br />
                    Tech City, TC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#FF7A00]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-[#666666] hover:text-[#FF7A00] transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#FF7A00]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
                  <a
                    href="mailto:info@decratech.com"
                    className="text-[#666666] hover:text-[#FF7A00] transition-colors"
                  >
                    info@decratech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="font-semibold text-[#1A1A1A] mb-4">Find Us</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-[#666666]">
                  <MapPin size={48} className="mx-auto mb-2 text-[#FF7A00]" />
                  <p>Map Placeholder</p>
                  <p className="text-sm">
                    Integrate Google Maps or Mapbox here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Business Hours */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Business Hours
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#1A1A1A]">
                  Monday - Friday
                </span>
                <span className="text-[#666666]">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#1A1A1A]">Saturday</span>
                <span className="text-[#666666]">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#1A1A1A]">Sunday</span>
                <span className="text-[#666666]">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
