import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full  bg-transparent ">
      <div className="max-w-7xl  mx-auto px-8 md:px-16 h-33 flex items-center justify-between  ">
  {/* ORBIT SVG LOGO */}
<svg
  className="h-20 w-auto text-white select-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.15)]" 
  viewBox="0 0 240 120" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Dots ke glow ka effect */}
    <filter id="glow" x="-30%" y="-30%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="7" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  {/* Orbit Ring (Ellipse) - Exact Angle */}
  <ellipse 
    cx="120" 
    cy="60" 
    rx="109" 
    ry="32" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    transform="rotate(-16 120 60)"
  />
  
  {/* Top-Right Glowing Dot */}
  <circle 
    cx="212" 
    cy="21" 
    r="9" 
    fill="#00f0ff" 
    filter="url(#glow)" 
    className="animate-pulse" 
  />
  
  {/* Bottom-Left Glowing Dot */}
  <circle 
    cx="20" 
    cy="91" 
    r="13" 
    fill="#00f0ff" 
    filter="url(#glow)" 
    className="animate-pulse" 
  />

  {/* Main ORBIT Text */}
  <text 
    x="120" 
    y="72" 
    fill="currentColor" 
    fontSize="46" 
    fontWeight="900" 
    fontFamily="system-ui, -apple-system, sans-serif" 
    textAnchor="middle" 
    letterSpacing="-1"
  >
    ORBIT
  </text>

  {/* Small "Your Money" Text */}
  {/* <text 
    x="175" 
    y="90" 
    fill="#94a3b8" 
    fontSize="10" 
    fontWeight="500" 
    fontFamily="system-ui, sans-serif" 
    textAnchor="middle" 
    fontStyle="italic"
  >
    Your Money
  </text> */}
</svg>
        {/* 2. NAVIGATION LINKS (CENTER) */}
<nav className="hidden md:flex items-center gap-10">
  <Link
  to="/"
  className={`relative text-[20px] font-medium tracking-wide transition-colors duration-200 pb-1
    before:absolute before:left-0 before:-top-1 before:h-[3px] before:w-full before:bg-blue-600 before:rounded-full before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100
    ${
      isActive('/')
        ? 'text-orbit-text'
        : 'text-slate-400 hover:text-orbit-text'
    }`}
>
  Home
</Link>

  <Link
    to="/features"
    className={`relative text-[20px] font-medium tracking-wide transition-colors duration-200 pb-1
      before:absolute before:left-0 before:-top-1 before:h-[3px] before:w-full before:bg-blue-600 before:rounded-full before:transition-transform before:duration-300
      ${
        isActive('/features')
          ? 'text-orbit-text before:scale-x-100'
          : 'text-slate-400 hover:text-orbit-text before:scale-x-0 hover:before:scale-x-100'
      }`}
  >
    Features
  </Link>

  <Link
    to="/pricing"
    className={`relative text-[20px] font-medium tracking-wide transition-colors duration-200 pb-1
      before:absolute before:left-0 before:-top-1 before:h-[3px] before:w-full before:bg-blue-600 before:rounded-full before:transition-transform before:duration-300
      ${
        isActive('/pricing')
          ? 'text-orbit-text before:scale-x-100'
          : 'text-slate-400 hover:text-orbit-text before:scale-x-0 hover:before:scale-x-100'
      }`}
  >
    Pricing
  </Link>

  <Link
    to="/about"
    className={`relative text-[20px] font-medium tracking-wide transition-colors duration-200 pb-1
      before:absolute before:left-0 before:-top-1 before:h-[3px] before:w-full before:bg-blue-600 before:rounded-full before:transition-transform before:duration-300
      ${
        isActive('/about')
          ? 'text-orbit-text before:scale-x-100'
          : 'text-slate-400 hover:text-orbit-text before:scale-x-0 hover:before:scale-x-100'
      }`}
  >
    About Us
  </Link>
</nav>


{/* 3. BUTTONS GROUP (RIGHT) */}
<div className="flex items-center gap-4">
  
  {/* Sign Up Free Button WITH PiSignInBold Transition */}
  <Link
    to="/signup"
    className="group px-6 py-2.5 text-[17px] font-medium bg-blue-600 text-white rounded-xl flex items-center transition-all duration-300 hover:bg-blue-500 select-none"
  >
    <span>Sign Up Free</span>
    <PiSignInBold
      className="
        ml-0
        w-0
        opacity-0
        overflow-hidden
        transition-all
        duration-300
        group-hover:ml-2
        group-hover:w-4
        group-hover:opacity-100
      "
    />
  </Link>

  {/* Login Button WITH FaUser Transition */}
  <Link
    to="/login"
    className="group px-6 py-2.5 text-[17px] font-medium bg-transparent text-white border border-blue-500 rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center select-none"
  >
    <span>Login</span>
    <FaUser
      className="
        ml-0 
        w-0 
        opacity-0 
        overflow-hidden
        transition-all 
        duration-300
        group-hover:ml-3
        group-hover:w-4
        group-hover:opacity-100
        text-blue-500
      "
    />
  </Link>
  
</div>
      </div>
    </header>
  );
};

export default Navbar;