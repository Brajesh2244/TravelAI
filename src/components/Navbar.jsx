import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/destinations" },
    { name: "AI Planner", path: "/planner" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07120f]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.16)]"
            : "bg-transparent"
        }`}
      >
        <div className="page-shell">
          <div className="h-[5.5rem] flex items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[#07120f] flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
                <Compass className="w-5 h-5" />
              </div>

              <span className="text-xl font-semibold tracking-tight text-white">
                Travel<span className="text-[var(--accent)]">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden md:flex items-center gap-9">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-3 left-0 right-0 h-px bg-[var(--accent)]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}

            <Link
              to="/planner"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[#07120f] text-sm font-semibold hover:-translate-y-0.5"
            >
              Plan a Trip
            </Link>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-white/15 rounded-xl text-white"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[5.5rem] left-0 w-full z-40 bg-[#07120f]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-gray-300 hover:text-[var(--accent)] transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/planner"
                onClick={() => setMobileOpen(false)}
                className="text-center px-5 py-3 rounded-full bg-[var(--accent)] text-[#07120f] font-semibold"
              >
                Plan a Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
