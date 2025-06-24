import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  COMPANY_SHORT_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  ADDRESS_FULL,
} from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Store contact form data in localStorage
    const contactData = {
      ...formData,
      id: Date.now().toString(),
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const existingContacts = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    existingContacts.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(existingContacts));

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: PHONE_DISPLAY,
      description: "Call us for immediate assistance",
      action: `tel:${PHONE_LINK}`,
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@johnsautomotive.com",
      description: "Send us an email anytime",
      action: "mailto:info@johnsautomotive.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ADDRESS_FULL,
      description: "Based in Lubbock—serving surrounding areas",
      action: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 7AM-7PM",
      description: "Emergency service available 24/7",
      action: null,
    },
  ];

  const serviceAreas = [
    "Downtown District",
    "North Metro Area",
    "South Metro Area",
    "East Metro Area",
    "West Metro Area",
    "Suburban Communities",
    "Business Parks",
    "Shopping Centers",
  ];

  return (
    <>
      <Helmet>
        <title>Contact {COMPANY_SHORT_NAME} | Mobile Mechanic in Lubbock</title>
        <meta
          name="description"
          content={`Contact ${COMPANY_SHORT_NAME} for professional mobile mechanic services. Call ${PHONE_DISPLAY} or send us a message. Serving Lubbock and nearby communities with 24/7 emergency service.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to schedule your mobile mechanic service? Have questions
              about our services? We're here to help and would love to hear from
              you.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-white">4.9/5 Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium text-lg">
                    {info.details}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-1">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-blue-600" />
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your vehicle issue or question..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cta-button text-white font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Service Area Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                  Our Service Area
                </h2>

                {/* OpenStreetMap Integration */}
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-101.9%2C33.55%2C-101.85%2C33.58&layer=mapnik&marker=33.565%2C-101.8749"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${COMPANY_SHORT_NAME} Service Area Map`}
                  ></iframe>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Areas We Serve:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={area} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Not sure if we serve your area?</strong> Give us a
                    call and we'll let you know! We're always expanding our
                    service coverage.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Car trouble can't wait? We offer 24/7 emergency roadside
              assistance.
            </p>
            <a href={`tel:${PHONE_LINK}`}>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line: {PHONE_DISPLAY}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with tips, promotions, and automotive news.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-6 w-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-6 w-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-pink-600 p-4 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-6 w-6 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
