import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 mt-auto">
      <div className="px-20 py-17 grid grid-cols-1 md:grid-cols-5 gap-10 text-left">
        
        {/* COL 1: LOGO, DESCRIPTION & SOCIAL ICONS */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <svg
            className="h-40 w-auto text-white select-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.15)]"
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

            <ellipse
              cx="120"
              cy="60"
              rx="109"
              ry="32"
              stroke="currentColor"
              strokeWidth="3.5"
              transform="rotate(-16 120 60)"
            />

            <circle
              cx="212"
              cy="21"
              r="9"
              fill="#00f0ff"
              filter="url(#glow-footer)"
              className="animate-pulse"
            />

            <circle
              cx="20"
              cy="91"
              r="13"
              fill="#00f0ff"
              filter="url(#glow-footer)"
              className="animate-pulse"
            />

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
          </svg>

          <p className="text-white/80 text-[24px] leading-relaxed pt-0 max-w-sm mt-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
            ORBIT brings <span className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">clarity</span>, <span className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">control</span>, and <span className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">confidence</span> to your finances.
          </p>

          <div className="flex items-center gap-4 mt-3 text-white/70">
            <span className="p-5 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 text-[19px] hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]">
              <FaFacebookF />
            </span>
            <span className="p-5 bg-white/5 rounded-full hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 text-[169x] hover:shadow-[0_0_15px_rgba(14,165,233,0.6)]">
              <FaTwitter />
            </span>
            <span className="p-5 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white cursor-pointer transition-all duration-300 text-[19px] hover:shadow-[0_0_15px_rgba(219,39,119,0.6)]">
              <FaInstagram />
            </span>
            <span className="p-5 bg-white/5 rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-300 text-[19px] hover:shadow-[0_0_15px_rgba(29,78,216,0.6)]">
              <FaLinkedinIn />
            </span>
            <span className="p-5 bg-white/5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300 text-[169x] hover:shadow-[0_0_15px_rgba(220,38,38,0.6)]">
              <FaYoutube />
            </span>
          </div>
        </div>

        {/* COL 2: PRODUCT */}
        <div className="flex flex-col pt-3  gap-6">
          <h4 className="text-white font-bold text-[30px] tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Product</h4>
          <div className="flex flex-col gap-3 text-white/70 text-[24px]">
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Features</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Pricing</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Case studies</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Reviews</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Updates</span>
          </div>
        </div>

        {/* COL 3: COMPANY */}
        <div className="flex flex-col pt-3 gap-6">
          <h4 className="text-white font-bold text-[30px] tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Company</h4>
          <div className="flex flex-col gap-3 text-white/70 text-[24px]">
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">About</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Contact us</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Careers</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Culture</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Blog</span>
          </div>
        </div>

        {/* COL 4: SUPPORT */}
        <div className="flex flex-col pt-3 gap-6">
          <h4 className="text-white font-bold text-[30px] tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Support</h4>
          <div className="flex flex-col gap-3 text-white/70 text-[24px]">
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Getting started</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Help center</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Server status</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Report a bug</span>
            <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Chat support</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-12 py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5 text-[15px] text-white/70">
        <div>Copyright © 2026 Orbit. All Rights Reserved.</div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Terms and Conditions</span>
          <span className="hover:text-white transition-all cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;