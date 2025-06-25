import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import {
  COMPANY_SHORT_NAME,
  COMPANY_NAME,
  PHONE_DISPLAY,
} from "@/lib/constants";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our top priority. We go above and beyond to ensure every customer receives exceptional service.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Licensed, insured, and bonded. We build lasting relationships through honest, transparent service.",
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description:
        "We use only premium parts and follow industry best practices to ensure lasting repairs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Embracing modern technology and techniques to provide efficient, effective automotive solutions.",
    },
  ];

  const team = [
    {
      name: "John",
      role: "Lead Technician & Owner",
      experience: "15+ Years Experience",
      certifications: "ASE Master Certified",
    },
    {
      name: "Sarah Davis",
      role: "Senior Mechanic",
      experience: "12+ Years Experience",
      certifications: "ASE Certified, Hybrid Specialist",
    },
    {
      name: "Carlos Rodriguez",
      role: "Diagnostic Specialist",
      experience: "10+ Years Experience",
      certifications: "ASE Certified, Computer Diagnostics",
    },
    {
      name: "Jennifer Lee",
      role: "Customer Service Manager",
      experience: "8+ Years Experience",
      certifications: "Service Excellence Certified",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Satisfied Customers" },
    { number: "10+", label: "Years in Business" },
    { number: "98%", label: "Customer Retention" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Us - {COMPANY_SHORT_NAME} | Mobile Mechanics in Lubbock
        </title>
        <meta
          name="description"
          content={`Learn about ${COMPANY_NAME}, Lubbock's trusted mobile mechanic team offering on-site maintenance & repair.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
                About {COMPANY_SHORT_NAME}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                John's Automotive Services is your reliable partner for mobile
                auto maintenance and repair—bringing certified expertise
                directly to your location anywhere in Lubbock.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-white">4.9/5 Rating</span>
                </div>
                <div className="text-white">
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                className="w-full h-auto rounded-lg shadow-2xl"
                alt="Mobile mechanic in blue coveralls talking on phone and using laptop in a garage"
                src="/photos/mobile-mechanic.jpg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                alt="Vintage auto repair shop from the early days"
                src="https://images.unsplash.com/photo-1551522435-b2347f669045"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  John's Automotive Services began with a simple vision: provide
                  dependable, on-site automotive care that saves drivers time
                  while keeping them safely on the road.
                </p>
                <p>
                  What began as a one-person operation has grown into a trusted
                  team of certified professionals serving thousands of customers
                  across the metropolitan area. Our commitment to quality,
                  convenience, and customer satisfaction has made us the
                  region's leading mobile mechanic service.
                </p>
                <p>
                  Today, we're proud to offer comprehensive automotive services
                  with the same personal touch and attention to detail that
                  built our reputation. Every member of our team shares our
                  passion for automotive excellence and customer service.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our
              customers every day.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience
              to every service call.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card rounded-lg p-6 text-center hover-lift"
              >
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">
                  {member.experience}
                </p>
                <p className="text-gray-600 text-sm">{member.certifications}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer
              satisfaction.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-blue-100">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest industry standards through continuous
              training and certification.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ASE Certified
              </h3>
              <p className="text-gray-600">
                All our technicians are ASE (Automotive Service Excellence)
                certified, ensuring the highest level of automotive expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed and insured for your protection and peace of
                mind. We carry comprehensive liability and workers' compensation
                coverage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and a
                100% satisfaction guarantee on all services performed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
