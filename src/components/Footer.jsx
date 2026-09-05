import { Link } from "react-router-dom";
import { Compass, Mail, Globe, Code2, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#07120f] border-t border-white/10 mt-20">
      <div className="page-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-8 h-8 text-[var(--accent)]" />
              <span className="text-xl font-semibold text-white">TravelAI</span>
            </div>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Explore the world with AI-powered travel planning and destination
              discovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow mb-5">Navigate</h3>

            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors"
              >
                Home
              </Link>

              <Link
                to="/destinations"
                className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors"
              >
                Explore Destinations
              </Link>

              <Link
                to="/planner"
                className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors"
              >
                AI Trip Planner
              </Link>

              <Link
                to="/about"
                className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="eyebrow mb-5">Keep exploring</h3>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                title="Explore"
              >
                <Globe className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                title="Code"
              >
                <Code2 className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                title="Community"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="mailto:hello@travelai.com"
                className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TravelAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
