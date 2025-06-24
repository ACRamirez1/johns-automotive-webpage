import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Wrench,
  Shield,
  Award,
  ArrowRight,
  Users,
  Calendar,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { COMPANY_SHORT_NAME, PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Home = () => {
  const { toast } = useToast();

  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_LINK}`;
  };

  const handleEmergencyService = () => {
    toast({
      title: "🚧 Emergency Service",
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const features = [
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to you - home, office, or roadside",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Same-day service available",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified and protected",
    },
    {
      icon: Award,
      title: "ASE Certified",
      description: "Professional certified technicians",
    },
  ];

  const services = [
    {
      title: "Oil Change Service",
      description: "Complete oil change with filter replacement",
      price: "Starting at $59",
    },
    {
      title: "Brake Repair",
      description: "Brake pad replacement and system inspection",
      price: "Starting at $120",
    },
    {
      title: "Battery Service",
      description: "Battery testing, replacement, and installation",
      price: "Starting at $129",
    },
    {
      title: "Diagnostic Service",
      description: "Computer diagnostics and troubleshooting",
      price: "Starting at $79",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <>
      <Helmet>
        <title>{COMPANY_SHORT_NAME} - Mobile Mechanic in Lubbock, TX</title>
        <meta
          name="description"
          content="Professional mobile mechanic services bringing quality auto repair directly to your location. Licensed, insured, and ASE certified technicians available 24/7."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
              >
                Reliable Mobile Mechanic Services in Lubbock
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-100"
              >
                We bring expert auto repair directly to your location—serving
                Lubbock & nearby communities 24/7.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="cta-button text-white font-semibold text-lg px-6 py-8"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleCallNow}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-7 py-8"
                >
                  <Phone className="mr-6 h-5 w-5" />
                  <div className="flex flex-col items-center">
                    <div>
                      <div>Call Now:</div>
                      <div>{PHONE_DISPLAY}</div>
                    </div>
                  </div>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 flex items-center space-x-6"
              >
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-white">4.9/5 Rating</span>
                </div>
                <div className="text-white">
                  <span className="font-semibold">5000+</span> Happy Customers
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                className="w-full h-auto rounded-lg shadow-2xl animate-float"
                alt="Professional mobile mechanic working on car engine"
                src="https://images.unsplash.com/photo-1630360060246-770df46700de"
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Available Now</p>
                    <p className="text-sm text-gray-600">Same-day service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {COMPANY_SHORT_NAME}?
            </h2>
            <div className="section-divider"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we've got you covered
              with professional mobile services.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card rounded-lg p-6 hover-lift"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-blue-600 font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Emergency Roadside Assistance?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              We're available 24/7 for emergency breakdowns and urgent repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleEmergencyService}
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              >
                <Zap className="mr-2 h-5 w-5" />
                Emergency Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCallNow}
                className="border-gray-300 text-gray-900 bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line: {PHONE_DISPLAY}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Car Fixed?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the convenience of
              professional mobile mechanic services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="cta-button text-white font-semibold text-lg px-8 py-4"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-900 bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-4"
              >
                <Users className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
