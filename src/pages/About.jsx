import { motion } from "framer-motion";
import {
  Compass,
  Sparkles,
  Globe2,
  Heart,
  MapPin,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI-Powered Planning",
      description:
        "Create personalized travel itineraries based on your destination, interests, budget, and travel style.",
    },
    {
      icon: <Globe2 className="w-7 h-7" />,
      title: "Explore Destinations",
      description:
        "Discover beautiful destinations, attractions, travel information, and experiences from around the world.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Smart Travel Assistant",
      description:
        "Ask questions and get AI-powered travel guidance whenever you need help planning your journey.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="page-shell pt-14 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--surface-3)] bg-[var(--surface-2)] text-[var(--accent)] mb-6">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-medium">About TravelAI</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Travel Smarter.
            <br />
            <span className="text-[var(--accent)]">Explore Further.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            TravelAI is an AI-powered travel planning platform designed to help
            travelers discover destinations, plan personalized journeys, and
            explore the world with confidence.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="page-shell py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-3)] flex items-center justify-center text-[var(--accent)]">
                <Heart className="w-6 h-6" />
              </div>

              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>

            <p className="text-gray-400 leading-relaxed mb-5">
              Planning a trip can sometimes be complicated and time-consuming.
              TravelAI aims to make travel planning simpler by combining useful
              destination information with the power of Artificial Intelligence.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether you are planning a relaxing vacation, an adventure trip,
              or a cultural journey, TravelAI helps you create an experience
              that matches your preferences.
            </p>

            <Link
              to="/planner"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-3xl p-6 md:p-8"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-5 bg-[var(--surface-3)] rounded-2xl">
                <MapPin className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="text-white font-semibold">Destinations</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Discover amazing places
                </p>
              </div>

              <div className="text-center p-4 md:p-5 bg-[var(--surface-3)] rounded-2xl">
                <Bot className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="text-white font-semibold">AI Planning</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Personalized itineraries
                </p>
              </div>

              <div className="text-center p-4 md:p-5 bg-[var(--surface-3)] rounded-2xl">
                <Globe2 className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="text-white font-semibold">Explore</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Travel around the world
                </p>
              </div>

              <div className="text-center p-4 md:p-5 bg-[var(--surface-3)] rounded-2xl">
                <Sparkles className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <h3 className="text-white font-semibold">Smart Travel</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Better travel decisions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-shell py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What TravelAI Offers
          </h2>

          <p className="text-gray-400">
            Everything you need to start planning your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-2xl p-7 hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-3)] flex items-center justify-center text-[var(--accent)] mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="page-shell pt-8 pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-3xl p-8 md:p-12 text-center"
        >
          <Compass className="w-10 h-10 text-[var(--accent)] mx-auto mb-5" />

          <h2 className="text-3xl font-bold text-white mb-4">
            Your Next Adventure Starts Here
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-7">
            Explore destinations, create personalized itineraries, and let AI
            help you plan your perfect journey.
          </p>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Explore Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
