import { Link } from "react-router-dom";
import { Compass, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--surface-2)] border border-[var(--surface-3)] flex items-center justify-center">
          <Compass className="w-10 h-10 text-[var(--accent)]" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-bold text-[var(--accent)] mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lost in Your Journey?
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          The page you are looking for seems to have disappeared from the map.
          Don't worry — let's get you back to exploring amazing destinations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--surface-3)] bg-[var(--surface-2)] text-gray-300 hover:border-[var(--accent)] hover:text-white transition-all"
          >
            <MapPin className="w-5 h-5" />
            Explore Destinations
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
