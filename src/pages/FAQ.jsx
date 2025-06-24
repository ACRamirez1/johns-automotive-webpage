import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  CreditCard,
  Shield,
  Wrench,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_SHORT_NAME, PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "General Service Questions",
      icon: Wrench,
      faqs: [
        {
          question: "What areas do you serve?",
          answer:
            "We provide mobile mechanic services throughout the greater metropolitan area, including downtown, suburban communities, business districts, and surrounding areas. If you're unsure whether we serve your location, give us a call and we'll let you know!",
        },
        {
          question: "How quickly can you come to my location?",
          answer:
            "For regular appointments, we typically can schedule service within 24-48 hours. For emergency services, we strive to reach you within 1-2 hours, depending on your location and our current service load. Same-day service is often available.",
        },
        {
          question: "Do you work on all types of vehicles?",
          answer:
            "Yes! Our certified technicians work on all makes and models of cars, trucks, SUVs, and vans. Whether you drive a domestic or foreign vehicle, new or older model, we have the expertise and tools to service it.",
        },
        {
          question: "What if you can't fix my car on-site?",
          answer:
            "While we can handle most repairs at your location, some complex issues may require specialized equipment only available at a shop. In such cases, we'll provide a detailed diagnosis, explain your options, and can arrange towing to a trusted partner facility if needed.",
        },
      ],
    },
    {
      title: "Scheduling & Appointments",
      icon: Clock,
      faqs: [
        {
          question: "How do I schedule an appointment?",
          answer: `You can schedule an appointment three ways: online through our booking form, by calling us at ${PHONE_DISPLAY}, or by sending us a message through our contact form. We'll confirm your appointment within 2 hours.`,
        },
        {
          question: "What are your business hours?",
          answer:
            "Our regular business hours are Monday through Saturday, 7:00 AM to 7:00 PM. We also offer 24/7 emergency service for urgent situations like breakdowns, dead batteries, or being stranded.",
        },
        {
          question: "Can I get same-day service?",
          answer:
            "Yes! Same-day service is often available, especially for common services like oil changes, battery replacement, or brake repairs. Emergency services are available 24/7. Call us to check availability.",
        },
        {
          question: "What happens if I need to reschedule?",
          answer:
            "We understand that schedules change. Please call us as soon as possible if you need to reschedule. We ask for at least 2 hours notice when possible to avoid any cancellation fees.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      icon: CreditCard,
      faqs: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing is competitive and transparent. Basic services start at $49 for oil changes, $89 for brake service, and $79 for diagnostics. We provide upfront pricing before any work begins, with no hidden fees or surprises.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept cash, checks, all major credit cards (Visa, Mastercard, American Express), and digital payments including PayPal. Payment is due upon completion of service.",
        },
        {
          question: "Do you charge extra for mobile service?",
          answer:
            "Our mobile service fee is included in our quoted prices. There are no additional charges for coming to your location within our standard service area. Some remote locations may have a small travel fee, which we'll discuss upfront.",
        },
        {
          question: "Do you offer warranties on your work?",
          answer:
            "Absolutely! We stand behind our work with comprehensive warranties. Parts typically come with manufacturer warranties, and our labor is guaranteed. Specific warranty terms vary by service type - we'll explain the coverage for your particular service.",
        },
      ],
    },
    {
      title: "Service Details",
      icon: Car,
      faqs: [
        {
          question: "What tools and equipment do you bring?",
          answer:
            "Our mobile service vehicles are fully equipped with professional-grade tools, diagnostic equipment, lifts, and commonly needed parts. We bring everything necessary to perform quality repairs at your location, just like a traditional shop.",
        },
        {
          question: "How long do typical services take?",
          answer:
            "Service times vary by type: oil changes take 30-45 minutes, brake service 1-2 hours, battery replacement 30 minutes, and diagnostics 45-60 minutes. We'll provide an estimated timeframe when scheduling your appointment.",
        },
        {
          question: "What if you don't have the right parts?",
          answer:
            "We stock common parts for most services, but if we need a specific part for your vehicle, we can usually obtain it the same day or next day. We'll discuss options and timing with you before proceeding.",
        },
        {
          question: "Can I watch while you work on my car?",
          answer:
            "Of course! We encourage customers to observe and ask questions. Our technicians are happy to explain what they're doing and educate you about your vehicle's maintenance needs.",
        },
      ],
    },
    {
      title: "Safety & Credentials",
      icon: Shield,
      faqs: [
        {
          question: "Are your technicians certified?",
          answer:
            "Yes! All our technicians are ASE (Automotive Service Excellence) certified and undergo continuous training. We're also fully licensed, insured, and bonded for your protection and peace of mind.",
        },
        {
          question: "What safety measures do you follow?",
          answer:
            "We follow all industry safety standards and protocols. Our technicians use proper safety equipment, follow environmental regulations for fluid disposal, and maintain clean, professional work practices at your location.",
        },
        {
          question: "Are you insured?",
          answer:
            "Yes, we carry comprehensive general liability insurance, workers' compensation, and garage keeper's liability insurance. This protects both you and us during service calls.",
        },
        {
          question: "How do I know the technician is legitimate?",
          answer:
            "All our technicians carry company identification, wear branded uniforms, and drive clearly marked company vehicles. You can always call our office to verify a technician's identity if you have any concerns.",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Frequently Asked Questions - {COMPANY_SHORT_NAME} | Mobile Mechanic
          FAQ
        </title>
        <meta
          name="description"
          content={`Get answers to common questions about ${COMPANY_SHORT_NAME} mobile mechanic services. Learn about pricing, scheduling, service areas, and more.`}
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our mobile mechanic
              services. Can't find what you're looking for? Contact us directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE_LINK}`}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us: {PHONE_DISPLAY}
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-900 bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-4"
                onClick={() => (window.location.href = "/contact")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive FAQ sections to find answers to your
              questions.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 text-white p-6">
                  <div className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index for each FAQ
                    const isOpen = openItems.has(globalIndex);

                    return (
                      <div key={faqIndex}>
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our friendly team is here to help. Contact us directly for
              personalized assistance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate answers
              </p>
              <a href={`tel:${PHONE_LINK}`}>
                <Button className="cta-button text-white font-semibold">
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Send Message
              </h3>
              <p className="text-gray-600 mb-4">
                Send us your questions and we'll respond quickly
              </p>
              <Button
                variant="outline"
                className="font-semibold"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Form
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with us in real-time during business hours
              </p>
              <Button
                variant="outline"
                className="font-semibold"
                onClick={() => {
                  // This would typically open a chat widget
                  alert(
                    "🚧 Live chat feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  );
                }}
              >
                Start Chat
              </Button>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Emergency Assistance Available 24/7
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Stranded or experiencing a car emergency? We're here to help
              around the clock.
            </p>
            <a href={`tel:${PHONE_LINK}`}>
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Line: {PHONE_DISPLAY}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
