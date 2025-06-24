import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  User,
  Calendar,
  MapPin,
  CheckCircle,
  MessageSquare,
  ThumbsUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { COMPANY_SHORT_NAME } from "@/lib/constants";

const Testimonials = () => {
  const { toast } = useToast();
  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    service: "",
    review: "",
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown Metro",
      service: "Brake Repair",
      rating: 5,
      date: "2024-01-15",
      review: `Absolutely fantastic service! Mike came to my office parking lot and fixed my brakes in under 2 hours. Professional, knowledgeable, and saved me so much time. The pricing was fair and transparent. Highly recommend ${COMPANY_SHORT_NAME}!`,
      verified: true,
    },
    {
      id: 2,
      name: "David Chen",
      location: "North Metro Area",
      service: "Oil Change",
      rating: 5,
      date: "2024-01-10",
      review:
        "Best mobile mechanic service I've ever used. They came to my house on a Saturday morning, completed the oil change quickly, and even checked my other fluids. Great communication and professional service. Will definitely use again!",
      verified: true,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "West Metro Area",
      service: "Battery Replacement",
      rating: 5,
      date: "2024-01-08",
      review: `My car wouldn't start in the morning, and I was panicking about getting to work. Called ${COMPANY_SHORT_NAME} and they were at my location within 45 minutes. New battery installed and I was on my way. Excellent emergency service!`,
      verified: true,
    },
    {
      id: 4,
      name: "Robert Thompson",
      location: "South Metro Area",
      service: "Engine Diagnostics",
      rating: 5,
      date: "2024-01-05",
      review:
        "Check engine light had been on for weeks. The technician diagnosed the issue quickly with professional equipment, explained everything clearly, and fixed the problem on the spot. Great value and expertise!",
      verified: true,
    },
    {
      id: 5,
      name: "Jennifer Lee",
      location: "East Metro Area",
      service: "Transmission Service",
      rating: 5,
      date: "2024-01-03",
      review:
        "Outstanding service from start to finish. Scheduled online, received confirmation call, and the technician arrived exactly on time. Transmission service was completed professionally with quality parts. Very impressed!",
      verified: true,
    },
    {
      id: 6,
      name: "Michael Brown",
      location: "Downtown Metro",
      service: "Tire Service",
      rating: 5,
      date: "2023-12-28",
      review:
        "Needed new tires installed and they brought everything to my workplace. Professional installation, proper balancing, and competitive pricing. The convenience factor alone makes this service worth it. Highly recommended!",
      verified: true,
    },
    {
      id: 7,
      name: "Lisa Wilson",
      location: "Suburban Area",
      service: "Air Conditioning Repair",
      rating: 5,
      date: "2023-12-25",
      review: `A/C went out during the summer heat. ${COMPANY_SHORT_NAME} came the same day, diagnosed the issue, and had it fixed within 2 hours. Cool air again! Professional, efficient, and reasonably priced.`,
      verified: true,
    },
    {
      id: 8,
      name: "James Davis",
      location: "Business District",
      service: "Brake Service",
      rating: 5,
      date: "2023-12-20",
      review:
        "Exceptional service! The technician was knowledgeable, professional, and completed the brake service efficiently. Great communication throughout the process. This is how mobile service should be done!",
      verified: true,
    },
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "500+", label: "5-Star Reviews", icon: ThumbsUp },
    { number: "98%", label: "Customer Satisfaction", icon: Award },
    { number: "5000+", label: "Happy Customers", icon: User },
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!reviewForm.name || !reviewForm.review) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and review.",
        variant: "destructive",
      });
      return;
    }

    // Store review in localStorage
    const newReview = {
      ...reviewForm,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      verified: false,
    };

    const existingReviews = JSON.parse(
      localStorage.getItem("customerReviews") || "[]"
    );
    existingReviews.push(newReview);
    localStorage.setItem("customerReviews", JSON.stringify(existingReviews));

    toast({
      title: "Review Submitted!",
      description:
        "Thank you for your feedback. Your review will be published after verification.",
    });

    // Reset form
    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      service: "",
      review: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>
          Customer Reviews & Testimonials - {COMPANY_SHORT_NAME} | 4.9/5 Star
          Rating
        </title>
        <meta
          name="description"
          content={`Read genuine customer reviews and testimonials for ${COMPANY_SHORT_NAME} mobile mechanic services. 4.9/5 star rating with 500+ satisfied customers across Lubbock and surrounding areas.`}
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
            <h1 className="text-4xl md:text-5xlfont-bold text-white mb-6 text-shadow">
              What Our Customers Say
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Read genuine reviews from
              satisfied customers who've experienced our professional mobile
              mechanic services.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-1">
                {renderStars(5)}
                <span className="ml-2 text-white text-lg font-semibold">
                  4.9/5 Rating
                </span>
              </div>
              <div className="text-white">
                <span className="text-2xl font-bold">500+</span>
                <span className="ml-1">Five-Star Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real customers who chose{" "}
              {COMPANY_SHORT_NAME} for their automotive needs.
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="testimonial-card rounded-lg p-6 hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(testimonial.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600">
              Had a great experience with our service? We'd love to hear from
              you!
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={reviewForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={reviewForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <select
                    name="rating"
                    value={reviewForm.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Received
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={reviewForm.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Oil Change, Brake Repair"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={reviewForm.review}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your experience with our mobile mechanic service..."
                  required
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="cta-button text-white font-semibold px-8 py-3"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Submit Review
                </Button>
                <p className="mt-3 text-sm text-gray-600">
                  Your review will be published after verification
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Trusted by Thousands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years of Experience</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Satisfied Customers</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
