import { Link } from 'react-router-dom'
import RollingText from './ui/RollingText'

export default function Footer() {
  return (
    <footer className="bg-[#3551B4] text-white transition-colors duration-300 border-t border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-3">
            <img
              src="/assets/footer_logo.png"
              alt="BlueDot Logo"
              className="h-10 w-auto mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = document.createElement('h3')
                fallback.className = 'text-lg font-semibold mb-4'
                fallback.textContent = 'BlueDot'
                e.currentTarget.parentElement?.insertBefore(fallback, e.currentTarget)
              }}
            />
            <p className="text-white/70 text-sm mb-4">
              Reviving India's Blue Ecosystems through hands-on action, scientific research, and community engagement.
            </p>
            <p className="text-white/70 text-sm mb-4">
              A Bangalore-based non-profit organization dedicated to healing Earth's blue ecosystems — rivers, lakes, oceans, and wetlands.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/bluedot.ngo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[rgb(238,185,42)] transition"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/bluedotfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[rgb(238,185,42)] transition"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="group block w-fit">
                  <RollingText text="Home" height={20} className="text-white/70 group-hover:text-[#e8bb49] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="group block w-fit">
                  <RollingText text="About Us" height={20} className="text-white/70 group-hover:text-[#e8bb49] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="group block w-fit">
                  <RollingText text="Our Services" height={20} className="text-white/70 group-hover:text-[#e8bb49] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group block w-fit">
                  <RollingText text="Blog" height={20} className="text-white/70 group-hover:text-[#e8bb49] transition-colors" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group block w-fit">
                  <RollingText text="Contact" height={20} className="text-white/70 group-hover:text-[#e8bb49] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} BlueDot Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-white/70 hover:text-[rgb(238,185,42)] text-sm transition">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-[rgb(238,185,42)] text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
