import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import FrameStats from '../assets/frames/FrameStats.png'; 
import FrameStats2 from '../assets/frames/FrameStats.png'; 

// Custom Hook: Jo element scroll ho kar screen par aayega, ye use detect karega
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Jab 10% card dikhega, animation trigger ho jayegi
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isVisible];
};

const StatsSection = () => {
  // Scroll reveal hooks for sections
  const [graph1Ref, graph1Visible] = useScrollReveal();
  const [graph2Ref, graph2Visible] = useScrollReveal();

  const statsData = [
    { title: "Active Users Worldwide", subtitle: "Trusted by users worldwide", value: "1M+" },
    { title: "Total Countries", subtitle: "Wherever you go, Orbit follows", value: "15+" },
    { title: "Total Transfers", subtitle: "Money moved with confidence", value: "5B+" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-center">
      
      {/* Background Gradient/Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* CSS Animation Styles direct code me inject kar di hain taake koi config na chhedni pare */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* ================= 1ST SECTION: INSTANT ENTRANCE ANIMATION ================= */}
        <div className="flex flex-col items-center animate-fade-in-up">
          <span className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Our Growth
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold mt-1 tracking-tight bg-gradient-to-b from-[#3b82f6] via-[#1d4ed8] to-[#1e3a8a] bg-clip-text text-transparent select-none">
            Measured
          </h1>
          <p className="text-gray-400 text-sm md:text-lg mt-6 max-w-xl font-normal leading-relaxed">
            From day one to today — real numbers that show how Orbit is scaling worldwide.
          </p>
          <button className="group mt-8 px-6 py-3 bg-[#1d4ed8] text-white font-medium text-sm rounded-xl hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center gap-0 hover:gap-2 shadow-lg shadow-blue-900/30 cursor-pointer">
            <span>Get Started Free</span>
            <span className="w-0 opacity-0 scale-70 group-hover:w-4 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
              <FaArrowRight className="text-white text-xs" />
            </span>
          </button>
        </div>

        {/* ================= CARDS GRID (Entrance Animation with delay) ================= */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full cursor-pointer max-w-5xl mt-16 animate-fade-in-up" 
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-[#0b122c]/40 border border-white/[0.04] backdrop-blur-md flex flex-col items-center justify-between min-h-[260px] transition-all duration-300 hover:border-blue-500/20 hover:bg-[#0b122c]/60 group"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-[#3b82f6] font-semibold text-lg md:text-xl tracking-wide">
                  {stat.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1.5 opacity-80">
                  {stat.subtitle}
                </p>
              </div>
              <span className="text-white text-6xl md:text-7xl font-bold tracking-tighter mt-8 block transition-transform duration-300 group-hover:scale-[1.02]">
                {stat.value}
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 rounded-full group-hover:w-1/3 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* ================= SCROLLING REVEAL: ACTIVE USERS GRAPH ================= */}
        <div 
          ref={graph1Ref}
          className={`w-full max-w-5xl mt-14 flex flex-col items-center transition-all duration-1000 transform ${
            graph1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Active Users Growth
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 font-normal">
              Growing every single day
            </p>
          </div>
          <div className="w-full rounded-2xl border border-white/[0.06] bg-[#0b122c]/30 backdrop-blur-md p-2 md:p-6 shadow-2xl transition-all duration-300 hover:border-blue-500/10 group overflow-hidden">
            <img 
              src={FrameStats} 
              alt="Active Users Growth Chart" 
              className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.005]"
            />
          </div>
        </div>

        {/* ================= SCROLLING REVEAL: TOTAL MONEY GRAPH ================= */}
        <div 
          ref={graph2Ref}
          className={`w-full max-w-5xl mt-14 flex flex-col items-center transition-all duration-1000 transform ${
            graph2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Active Users Total Money Transferred
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 font-normal">
              Powering billions in transactions
            </p>
          </div>
          <div className="w-full rounded-2xl border border-white/[0.06] bg-[#0b122c]/30 backdrop-blur-md p-2 md:p-6 shadow-2xl transition-all duration-300 hover:border-blue-500/10 group overflow-hidden">
            <img 
              src={FrameStats2} 
              alt="Total Money Chart" 
              className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.005]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;