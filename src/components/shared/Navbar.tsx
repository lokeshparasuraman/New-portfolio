'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills Stack', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
];

function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.hash = '#home';
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }

      const handleScroll = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          const found = navLinks.find(link => link.href.replace('#', '') === hash);
          if (found) setActive(found.name);
        }
      };

      window.addEventListener('hashchange', handleScroll);
      handleScroll();

      return () => window.removeEventListener('hashchange', handleScroll);
    }
  }, []);

  const handleNavClick = (name: string) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-4xl rounded-2xl bg-black/60 backdrop-blur-lg text-white z-50 shadow-xl border border-white/10"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#64ffda] tracking-widest">LP</Link>

          <div className="hidden md:flex space-x-2 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative px-3 py-1 flex flex-col items-center">
                <Link
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-200 ${active === link.name ? 'text-[#64ffda]' : 'text-gray-300'} hover:text-[#64ffda] focus:outline-none`}
                  onMouseEnter={() => setHovered(link.name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </Link>
                <AnimatePresence>
                  {(hovered === link.name || active === link.name) && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded bg-[#64ffda]"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden flex flex-col mt-4 space-y-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium px-3 py-2 rounded transition-colors duration-200 ${
                    active === link.name ? 'text-[#64ffda]' : 'text-gray-300'
                  } hover:text-[#64ffda]`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
