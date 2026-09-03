import { Link } from 'react-router-dom';
import { Search, MapPin, Sparkles, Calendar, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { useState } from 'react';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  const featuredDestinations = destinations.slice(0, 6);

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to destinations page with search
    window.location.href = `/destinations?search=${searchInput}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-beautiful-resort-island-in-the-maldives-4159/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--surface-1)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Explore the World
            <br />
            <span className="text-[var(--accent)]">Differently</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Discover amazing destinations with AI-powered travel planning and real-time insights
          </motion.p>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full pl-14 pr-4 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-300 text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/destinations"
              className="px-8 py-4 bg-[var(--accent)] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Explore Destinations
            </Link>
            <Link
              to="/planner"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Plan with AI
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Destinations</h2>
          <p className="text-gray-400 text-lg">Discover the world's most incredible places</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/destinations"
            className="inline-block px-8 py-3 bg-[var(--surface-3)] text-white rounded-full font-medium hover:bg-[var(--surface-4)] transition-colors"
          >
            View All Destinations
          </Link>
        </motion.div>
      </section>

      {/* Why TravelAI Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why TravelAI?</h2>
          <p className="text-gray-400 text-lg">Your intelligent travel companion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="w-8 h-8" />,
              title: 'Discover Destinations',
              description: 'Explore curated destinations from around the world with detailed insights'
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: 'Live Weather',
              description: 'Get real-time weather information for any destination you plan to visit'
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: 'AI Assistant',
              description: 'Chat with our AI travel expert for personalized recommendations'
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: 'Smart Itineraries',
              description: 'Generate customized day-by-day travel plans powered by AI'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--surface-2)] p-8 rounded-2xl border border-[var(--surface-3)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="text-[var(--accent)] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--accent)]/20 to-[var(--surface-2)] p-12 rounded-3xl border border-[var(--accent)]/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let AI help you plan the perfect trip tailored to your preferences and budget
          </p>
          <Link
            to="/planner"
            className="inline-block px-10 py-4 bg-[var(--accent)] text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Plan Your Trip Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
