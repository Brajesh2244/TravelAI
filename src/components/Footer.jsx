import { Link } from 'react-router-dom';
import { Compass, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--surface-2)] border-t border-[var(--surface-3)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="w-8 h-8 text-[var(--accent)]" />
              <span className="text-xl font-semibold text-white">TravelAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Explore the world with AI-powered travel planning and destination discovery.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors">
                Home
              </Link>
              <Link to="/destinations" className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors">
                Explore Destinations
              </Link>
              <Link to="/planner" className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors">
                AI Trip Planner
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-[var(--accent)] text-sm transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--surface-3)] mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TravelAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
