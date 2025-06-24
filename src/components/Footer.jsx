import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Wrench,
  CreditCard,
  Shield,
  Award,
} from "lucide-react";
import {
  COMPANY_SHORT_NAME,
  COMPANY_NAME,
  PHONE_DISPLAY,
  ADDRESS_FULL,
} from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Oil Change",
    "Brake Repair",
    "Battery Replacement",
    "Tire Service",
    "Engine Diagnostics",
    "Transmission Service",
  ];

  const paymentMethods = [
    "Visa",
    "Mastercard",
    "American Express",
    "Cash",
    "Check",
    "PayPal",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{COMPANY_SHORT_NAME}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              John's Automotive Services offers reliable, on-site maintenance
              and repairs throughout Lubbock and the surrounding
              communities—saving you the trip to the shop while keeping your
              vehicle running smoothly.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Our Services</span>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">{PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  info@johnsautomotive.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">{ADDRESS_FULL}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Mon-Sat: 7AM-7PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Methods & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-sm font-semibold text-gray-400 mb-3 block">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-400 mb-3 block">
                Certifications & Trust
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-300">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-gray-300">ASE Certified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-gray-300">Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY_SHORT_NAME}. All rights reserved. |
            <span className="ml-1">Mobile Mechanic in Lubbock, TX</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
