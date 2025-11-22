import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
    { path: '/contact', label: 'Contact Us' }
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
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/40 dark:bg-dark-card/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm transition-colors duration-300">
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
                      <span className={`block h-6 flex items-center ${hoveredLink === link.path || location.pathname === link.path
                        ? 'text-[#e8bb49]'
                        : 'text-[#e8bb49]'
                        }`}>
                        {link.label}
                      </span>
                      <span className={`block h-6 flex items-center ${hoveredLink === link.path || location.pathname === link.path
                        ? 'text-[#e8bb49]'
                        : 'text-[#e8bb49]'
                        }`}>
                        {link.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative z-50 cursor-pointer p-2 rounded-full bg-white/40 dark:bg-dark-card/40 backdrop-blur-md border border-white/20 dark:border-white/10 text-forest dark:text-dark-text-primary hover:scale-110 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative z-50 cursor-pointer p-2 rounded-full bg-white/40 dark:bg-dark-card/40 backdrop-blur-md border border-white/20 dark:border-white/10 text-forest dark:text-dark-text-primary"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <motion.button
              onClick={toggleMobileMenu}
              className="text-forest dark:text-dark-text-primary hover:text-golden-600 focus:outline-none p-2 rounded-lg bg-white/40 dark:bg-dark-card/40 backdrop-blur-md border border-white/20 dark:border-white/10"
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
              <div className="flex flex-col space-y-2 p-3 bg-white/40 dark:bg-dark-card/40 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 mt-2">
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
                          : 'text-[#e8bb49] hover:bg-white/60 dark:hover:bg-white/10'
                        }
                      `}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
