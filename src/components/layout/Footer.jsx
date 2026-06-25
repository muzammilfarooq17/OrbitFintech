import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#080B11] text-white border-t border-zinc-800/60 mt-auto relative overflow-hidden">
      
      {/* Dynamic Background Mesh / Ambient Aura */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* TOP SECTION: Massive Bold Statement & Socials Linked Cleanly */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-zinc-900">
        
        {/* Left Side: Logo & Modern Grid Paragraph */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div>
            <div className="flex items-center -ml-6 -mt-4">
              <svg
                className="h-24 w-auto text-white select-none filter drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                viewBox="0 0 400 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow-footer" x="-30%" y="-30%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <ellipse cx="120" cy="60" rx="109" ry="32" stroke="currentColor" strokeWidth="3.5" transform="rotate(-16 120 60)" />
                <circle cx="212" cy="21" r="9" fill="#00f0ff" filter="url(#glow-footer)" className="animate-pulse" />
                <circle cx="20" cy="91" r="13" fill="#00f0ff" filter="url(#glow-footer)" className="animate-pulse" />
                <text x="120" y="72" fill="currentColor" fontSize="46" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-1">
                  ORBIT
                </text>
              </svg>
            </div>
            
            {/* Elegant Large Typography */}
            <h2 className="text-2xl md:text-3xl font-normal text-zinc-300 leading-snug mt-4 max-w-md">
              Bringing <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">clarity</span>, control, and confidence to your finances.
            </h2>
          </div>

          {/* Social Links Styled as Modern Cards */}
          <div className="flex gap-2">
            {[
              { icon: <FaFacebookF />, hover: 'hover:border-blue-500 hover:text-blue-500' },
              { icon: <FaTwitter />, hover: 'hover:border-sky-400 hover:text-sky-400' },
              { icon: <FaInstagram />, hover: 'hover:border-pink-500 hover:text-pink-500' },
              { icon: <FaLinkedinIn />, hover: 'hover:border-blue-600 hover:text-blue-600' },
              { icon: <FaYoutube />, hover: 'hover:border-red-500 hover:text-red-500' }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`w-11 h-11 flex items-center justify-center border border-zinc-800 bg-zinc-900/20 backdrop-blur-md rounded-xl text-zinc-400 transition-all duration-300 transform hover:-translate-y-1 ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Clean Interactive Row-Based Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Column - Product */}
          <div className="group">
            <div className="border-b border-zinc-800 pb-3 mb-4 flex justify-between items-center group-hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Product</h3>
              {/* <span className="text-[10px] text-zinc-600 group-hover:text-cyan-400 transition-colors">// 01</span> */}
            </div>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white text-base font-medium flex items-center gap-2 group/item transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 scale-0 group-hover/item:scale-100 transition-transform duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column - Company */}
          <div className="group">
            <div className="border-b border-zinc-800 pb-3 mb-4 flex justify-between items-center group-hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Company</h3>
              {/* <span className="text-[10px] text-zinc-600 group-hover:text-cyan-400 transition-colors">// 02</span> */}
            </div>
            <ul className="space-y-3">
              {['About', 'Contact us', 'Careers', 'Culture', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white text-base font-medium flex items-center gap-2 group/item transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 scale-0 group-hover/item:scale-100 transition-transform duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column - Support */}
          <div className="group">
            <div className="border-b border-zinc-800 pb-3 mb-4 flex justify-between items-center group-hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Support</h3>
              {/* <span className="text-[10px] text-zinc-600 group-hover:text-cyan-400 transition-colors">// 03</span> */}
            </div>
            <ul className="space-y-3">
              {['Getting started', 'Help center', 'Server status', 'Report a bug', 'Chat support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white text-base font-medium flex items-center gap-2 group/item transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 scale-0 group-hover/item:scale-100 transition-transform duration-200"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Full Minimalist Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span>Copyright © 2026 Orbit. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;