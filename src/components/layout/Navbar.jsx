import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#05091c]/60 border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="px-20 h-35 flex items-center justify-between">

        {/* ORBIT SVG LOGO */}
        <svg
          className="h-18 w-auto text-white select-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.15)]"
          viewBox="0 0 240 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="120" cy="60" rx="109" ry="32" stroke="currentColor" strokeWidth="3.5" transform="rotate(-16 120 60)" />
          <circle cx="212" cy="21" r="9" fill="#00f0ff" filter="url(#glow)" className="animate-pulse" />
          <circle cx="20" cy="91" r="13" fill="#00f0ff" filter="url(#glow)" className="animate-pulse" />
          <text x="120" y="72" fill="currentColor" fontSize="46" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-1">
            ORBIT
          </text>
        </svg>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-13">
          {[
            { to: '/', label: 'Home' },
            { to: '/features', label: 'Features' },
            { to: '/pricing', label: 'Pricing' },
            { to: '/about', label: 'About Us' },
          ].map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
            >
              <Link
                to={link.to}
                className={`relative text-[19px] font-medium tracking-wide transition-colors duration-200 pb-1
                  before:absolute before:left-0 before:-top-1 before:h-[3px] before:w-full before:bg-blue-600 before:rounded-full before:transition-transform before:duration-300
                  ${isActive(link.to)
                    ? 'text-white before:scale-x-100'
                    : 'text-slate-400 hover:text-white before:scale-x-0 hover:before:scale-x-100'
                  }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* BUTTONS */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.42, ease: 'easeOut' }}
        >
          <Link
            to="/signup"
            className="group px-5 py-2 text-[19px] font-medium bg-blue-600 text-white rounded-xl flex items-center transition-all duration-300 hover:bg-blue-500 select-none"
          >
            <span>Sign Up Free</span>
            <PiSignInBold className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100" />
          </Link>

          <Link
            to="/login"
            className="group px-5 py-2 text-[19px] font-medium bg-transparent text-white border border-blue-500 rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center select-none"
          >
            <span>Login</span>
            <FaUser className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-3 group-hover:w-4 group-hover:opacity-100 text-blue-500" />
          </Link>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Navbar;