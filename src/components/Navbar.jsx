import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Practice", href: "#practice" },
  { label: "Features", href: "#features" },
  { label: "Live Tests", href: "#live-mock" },
  { label: "Pricing", href: "#pricing" },
  { label: "Leaderboard", href: "#leaderboard" },
];

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="relative text-text2 hover:text-text transition-colors duration-200 text-sm font-medium group"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
    </a>
  );
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-space text-xl font-bold text-accent">
              Crack
            </span>
            <span className="font-space text-xl font-bold text-text">
              Goal
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border text-text2 hover:text-text transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/auth"
              className="text-sm font-medium text-text2 hover:text-text transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg hover:opacity-90 transition-opacity btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border text-text2 hover:text-text transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-text cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-72 bg-surface border-l border-border z-50 md:hidden"
          >
            <div className="flex flex-col p-6 pt-20 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text2 hover:text-text transition-colors text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-border" />
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className="text-text2 hover:text-text transition-colors text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className="text-center bg-accent text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium btn-primary"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
