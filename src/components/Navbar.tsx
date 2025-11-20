import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img
                src="/assets/Logo.avif"
                alt="BlueDot Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group overflow-hidden px-4 py-2 rounded-full transition-colors duration-200"
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Animated background pill */}
                  {(hoveredLink === link.path || location.pathname === link.path) && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-gradient-to-r from-golden-400 to-golden-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Rolling Text */}
                  <div className="relative z-10 h-6 overflow-hidden">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                      <span className="block h-6 flex items-center text-[#e8bb49]">
                        {link.label}
                      </span>
                      <span className="block h-6 flex items-center text-[#e8bb49]">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              <Link
                to="/contact"
                className="relative group overflow-hidden px-6 py-2 rounded-full transition-colors duration-200"
                onMouseEnter={() => setHoveredLink('/contact')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Animated background pill */}
                {hoveredLink === '/contact' && (
                  <motion.div
                    layoutId="navbar-pill-contact"
                    className="absolute inset-0 bg-gradient-to-r from-golden-400 to-golden-500 rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Rolling Text */}
                <div className="relative z-10 h-6 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                    <span className="block h-6 flex items-center text-[#e8bb49] font-semibold text-sm">
                      Contact Us
                    </span>
                    <span className="block h-6 flex items-center text-[#e8bb49] font-semibold text-sm">
                      Contact Us
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-forest hover:text-golden-600 focus:outline-none p-2 rounded-lg bg-white/40 backdrop-blur-md border border-white/20"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden pb-4 pt-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 mt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`
                        block px-4 py-3 rounded-xl font-medium transition-all
                        ${location.pathname === link.path
                          ? 'bg-gradient-to-r from-golden-400 to-golden-500 text-white shadow-md'
                          : 'text-forest hover:bg-white/60'
                        }
                      `}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/contact"
                    className="block bg-gradient-to-r from-ocean-500 to-ocean-600 text-white px-4 py-3 rounded-xl text-center font-semibold shadow-lg"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
