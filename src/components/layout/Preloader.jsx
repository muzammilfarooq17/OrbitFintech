import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar ko slowly 100% tak animate karne ke liye timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Thoda sa delay smooth transition feel dene ke liye
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 2; // Incremental speed control
      });
    }, 32); // Speed interval in milliseconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#05091c] bg-gradient-to-tr from-[#05091c] via-[#0b153a] to-[#030712] z-50 flex flex-col items-center justify-center select-none">
      <div className="flex flex-col items-center max-w-xl w-full px-8 text-center">
        
        {/* Glowing Orbit Logo Center Element */}
        <div className="relative mb-8 animate-pulse duration-[2000ms] flex justify-center items-center w-full">
          {/* ORBIT SVG LOGO - (Size increased to h-44 for a bigger look) */}
          <svg
            className="h-44 w-auto text-white select-none filter drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]" 
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
              y="75" 
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
        </div>

        {/* Outer Loading Progress Track */}
        <div className="w-72 h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm mt-4">
          {/* Inner Active Filling Line - NOW MUCH BRIGHTER */}
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(34,211,238,0.9),_0_0_10px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
};

export default Preloader; 