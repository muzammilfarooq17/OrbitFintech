import { motion } from 'framer-motion';

const DashboardPreloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#05091c] flex flex-col justify-center items-center select-none">
      
      {/* ORBIT GLOWING LOGO */}
      <div className="relative mb-8 w-64 h-32 flex justify-center items-center">
        <svg
          className="h-24 w-auto text-white filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          viewBox="0 0 240 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="loaderGlow" x="-30%" y="-30%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="120" cy="60" rx="109" ry="32" stroke="currentColor" strokeWidth="3.5" transform="rotate(-16 120 60)" />
          <circle cx="212" cy="21" r="9" fill="#00f0ff" filter="url(#loaderGlow)" className="animate-ping" />
          <circle cx="20" cy="91" r="13" fill="#00f0ff" filter="url(#loaderGlow)" className="animate-pulse" />
          <text x="120" y="72" fill="currentColor" fontSize="46" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-1">
            ORBIT
          </text>
        </svg>
      </div>

      {/* TEXT */}
      <h2 className="text-gray-400 text-xl font-normal tracking-wide mb-6">
        Setting things up for <span className="text-blue-500 font-extrabold tracking-widest text-3xl block text-center mt-1">YOU</span>
      </h2>

      {/* PREMIUM PROGRESS BAR LINE */}
      <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default DashboardPreloader;