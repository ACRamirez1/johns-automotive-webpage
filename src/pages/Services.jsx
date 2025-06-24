import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench,
  Car,
  Battery,
  Gauge,
  Settings,
  Zap,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  AlertTriangle,
  Fuel,
  Wind,
  Thermometer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_SHORT_NAME, PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Oil Change Service",
      description:
        "Complete oil change with premium oil and filter replacement. Includes fluid level check and basic inspection. Price is for most standard vehicles; synthetic oil extra.",
      price: "Starting at $59",
      duration: "30-45 minutes",
      features: [
        "Premium oil options",
        "New oil filter",
        "Fluid level check",
        "Basic inspection",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Brake Service & Repair",
      description:
        "Comprehensive brake system inspection and pad replacement. Price is for front or rear brake pads only; rotors and additional parts extra.",
      price: "Starting at $120",
      duration: "1-2 hours",
      features: [
        "Brake pad replacement (pads only)",
        "Rotor inspection",
        "Brake fluid check",
        "Safety inspection",
      ],
    },
    {
      icon: Battery,
      title: "Battery Service",
      description:
        "Battery testing, replacement, and installation. Price includes standard battery and installation; premium batteries extra.",
      price: "Starting at $129",
      duration: "30 minutes",
      features: [
        "Battery testing",
        "Standard battery included",
        "Professional installation",
        "Disposal of old battery",
      ],
    },
    {
      icon: Gauge,
      title: "Engine Diagnostics",
      description:
        "Advanced computer diagnostics to identify engine problems, check engine lights, and performance issues. Covers scan and basic troubleshooting.",
      price: "Starting at $79",
      duration: "45-60 minutes",
      features: [
        "Computer diagnostics",
        "Error code reading",
        "Performance analysis",
        "Detailed report",
      ],
    },
    {
      icon: Settings,
      title: "Transmission Service",
      description:
        "Transmission fluid change, filter replacement, and system inspection. Price is for standard fluid & filter service; major repairs extra.",
      price: "Starting at $149",
      duration: "1-1.5 hours",
      features: [
        "Fluid replacement",
        "Filter change",
        "System inspection",
        "Performance check",
      ],
    },
    {
      icon: Car,
      title: "Tire Service",
      description:
        "Tire rotation, flat repair, and pressure check. Price is for rotation or flat repair; new tire installation extra.",
      price: "Starting at $25",
      duration: "30-60 minutes",
      features: ["Tire rotation", "Flat repair", "Pressure check"],
    },
    {
      icon: Thermometer,
      title: "Cooling System Service",
      description:
        "Radiator flush, coolant replacement, and leak check. Price is for standard flush and refill; parts and repairs extra.",
      price: "Starting at $99",
      duration: "1-1.5 hours",
      features: ["Coolant flush", "System inspection", "Leak detection"],
    },
    {
      icon: Fuel,
      title: "Fuel System Service",
      description:
        "Fuel injector cleaning, filter replacement, and system diagnostics. Price is for cleaning and filter; major repairs extra.",
      price: "Starting at $89",
      duration: "45-90 minutes",
      features: ["Injector cleaning", "Filter replacement", "System cleaning"],
    },
    {
      icon: Wind,
      title: "Air Conditioning Service",
      description:
        "A/C system diagnostics and refrigerant recharge. Price is for diagnostics and recharge only; parts and major repairs extra.",
      price: "Starting at $99",
      duration: "45-90 minutes",
      features: [
        "System diagnostics",
        "Refrigerant recharge",
        "Leak detection",
      ],
    },
  ];

  const emergencyServices = [
    {
      title: "Jump Start Service",
      description:
        "Dead battery? We'll get you running again. After-hours and holiday rates may be higher.",
      price: "Starting at $70",
    },
    {
      title: "Lockout Service",
      description:
        "Locked out of your car? We can help. After-hours and holiday rates may be higher.",
      price: "Starting at $90",
    },
    {
      title: "Flat Tire Change",
      description:
        "Quick tire change to get you back on the road. After-hours and holiday rates may be higher.",
      price: "Starting at $70",
    },
    {
      title: "Emergency Diagnostics",
      description:
        "On-the-spot problem diagnosis. After-hours and holiday rates may be higher.",
      price: "Starting at $100",
    },
  ];

  const serviceAreas = [
    "Downtown Metro Area",
    "Suburban Communities",
    "Business Districts",
    "Residential Areas",
    "Shopping Centers",
    "Office Complexes",
  ];

  return (
    <>
      <Helmet>
        <title>Services - {COMPANY_SHORT_NAME} | Mobile Mechanic Lubbock</title>
        <meta
          name="description"
          content="Comprehensive mobile mechanic services including oil changes, brake repair, battery service, diagnostics, and more. Professional auto repair at your location."
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
              Expert Mobile Mechanic Services in Lubbock
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we bring professional
              automotive services directly to your location in and around
              Lubbock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="cta-button text-white font-semibold text-lg px-8 py-4"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${PHONE_LINK}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-4"
                >
                  Call Now: {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Service Menu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional automotive services performed at your location with
              the same quality and precision as a traditional shop.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card rounded-lg p-6 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-blue-600 font-semibold text-lg">
                    {service.price}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stranded? We're here to help. Our emergency services are available
              around the clock to get you back on the road.
              <br />
              <span className="text-sm text-red-600">
                After-hours, late-night, and holiday rates may be higher. Call
                for an exact quote.
              </span>
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center hover-lift"
              >
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-red-600 font-bold text-lg">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 mb-6">
              Emergency? Call us now for immediate assistance!
            </p>
            <a href={`tel:${PHONE_LINK}`}>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4"
              >
                <Zap className="mr-2 h-5 w-5" />
                Call Emergency Line: {PHONE_DISPLAY}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Areas We Cover
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide mobile mechanic services throughout the metropolitan
                area. No matter where you are, we'll come to you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-semibold">
                    Check If We Service Your Area
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Service Guarantee
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">
                      100% Satisfaction Guaranteed
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">
                      Licensed & Insured Technicians
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <span className="text-gray-700">
                      On-Time Service Promise
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="h-6 w-6 text-purple-600" />
                    <span className="text-gray-700">
                      Professional Equipment & Tools
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Warranty:</strong> All parts and labor come with our
                    comprehensive warranty. We stand behind our work and your
                    satisfaction is our priority.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Schedule Your Service?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let car troubles slow you down. Book your mobile mechanic
              service today and experience the convenience of professional auto
              repair at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="cta-button text-white font-semibold text-lg px-8 py-4"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${PHONE_LINK}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-4"
                >
                  Call Now: {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
