import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DashboardPreloader = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 45; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      Object.assign(star.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: '#ffffff',
        borderRadius: '50%',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.1,
        animation: `starPulse ${Math.random() * 2 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
      });
      container.appendChild(star);
    }
    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return (
    <>
      <style>{`
        @keyframes starPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(0.5); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dotPing {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.8); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(0,240,255,0.5)); }
          50% { filter: drop-shadow(0 0 28px rgba(0,240,255,0.9)); }
        }
        @keyframes shimmerText {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .orbit-svg { animation: glowPulse 2.5s ease-in-out infinite; }
        .orbit-ellipse-group {
          animation: orbitSpin 6s linear infinite;
          transform-origin: 180px 100px;
        }
        .dot-ping { animation: dotPing 1.2s ease-in-out infinite; }
        .dot-pulse { animation: dotPulse 1.8s ease-in-out 0.4s infinite; }
        .shimmer-you {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 2.5s linear infinite;
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#05091c',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Stars background */}
        <div ref={starsRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 36 }}
        >
          <svg
            className="orbit-svg"
            viewBox="0 0 360 210"
            width="420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glowFilter" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
                <stop offset="40%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <g className="orbit-ellipse-group">
              <ellipse
                cx="180" cy="100" rx="155" ry="45"
                stroke="url(#orbitGrad)"
                strokeWidth="2.5"
                opacity="0.85"
              />
            </g>

            <circle cx="330" cy="78" r="7" fill="#00f0ff" filter="url(#glowFilter)" className="dot-ping" />
            <circle cx="32" cy="122" r="10" fill="#00f0ff" filter="url(#glowFilter)" className="dot-pulse" />
            <circle cx="330" cy="78" r="3" fill="#ffffff" />
            <circle cx="32" cy="122" r="4.5" fill="#ffffff" />

            <text
              x="180" y="120"
              fill="white"
              fontSize="72"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
              letterSpacing="-2"
            >
              ORBIT
            </text>
            <text
              x="180" y="148"
              fill="#06b6d4"
              fontSize="13"
              fontWeight="500"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
              letterSpacing="8"
              opacity="0.75"
            >
              DASHBOARD
            </text>
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: '#9ca3af',
            fontSize: 17,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.06em',
            marginBottom: 6,
            textAlign: 'center',
          }}
        >
          Setting things up for
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ marginBottom: 32 }}
        >
          <span
            className="shimmer-you"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              fontSize: 40,
              letterSpacing: '0.22em',
              display: 'block',
              textAlign: 'center',
            }}
          >
            YOU
          </span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ width: 300 }}
        >
          <div
            style={{
              width: '100%',
              height: 4,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 99,
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                borderRadius: 99,
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              color: 'rgba(156,163,175,0.5)',
              fontSize: 12,
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginTop: 14,
            }}
          >
            Loading your workspace
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default DashboardPreloader;