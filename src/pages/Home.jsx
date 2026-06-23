import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";

import card1 from '../assets/images/Card 1 (1).png';
import card2 from '../assets/images/Card 2.png';
import card3 from '../assets/images/Card 3 (1).png';

import frame1 from '../assets/frames/Frame1.png';
import frame2 from '../assets/frames/Frame2.png';
import frame3 from '../assets/frames/Frame3.png';

// ── Reusable scroll-reveal wrapper ──────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-between py-8 gap-8 overflow-hidden select-none">

        {/* LEFT CONTENT — staggered fade-up on load */}
        <div className="w-[48%]">

          {/* Heading */}
          <motion.h1
            className="font-extrabold tracking-tight text-white mb-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="text-[63px] font-bold tracking-normal block leading-none text-slate-100 opacity-95">
              All Your Money in
            </span>
            <span className="text-[190px] font-black tracking-[-0.03em] block leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#1D4ED8] to-[#1E40AF] drop-shadow-[0_10px_50px_rgba(31,79,216,0.35)]">
              ORBIT
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[19px] text-gray-200 font-normal leading-relaxed max-w-md mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            Send, manage, and grow your money securely with real time insights and zero hidden fees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
          >
            <Link
              to="/signup"
              className="group px-6 py-3 bg-blue-600 text-white font-medium text-[20px] rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              <span>Get Started Free</span>
              <FaRegArrowAltCircleUp className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100" />
            </Link>

            <Link
              to="/demo"
              className="group px-6 py-3 bg-transparent text-white border border-gray-700 font-medium text-[20px] rounded-xl hover:bg-white/5 hover:border-gray-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              <span>Watch Demo</span>
              <FaPlay className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2.5 group-hover:w-3.5 group-hover:opacity-100 text-blue-400" />
            </Link>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="inline-flex items-center gap-10 bg-[#0B1224]/80 border border-white/[0.05] rounded-2xl px-8 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-col min-w-[90px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-[70%] h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">$5B+</div>
              <div className="text-[12px] text-gray-300 mt-1">Transferred</div>
            </div>

            <div className="flex flex-col min-w-[90px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-[85%] h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">150+</div>
              <div className="text-[12px] text-gray-300 mt-1">Countries</div>
            </div>

            <div className="flex flex-col min-w-[80px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-full h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">2M+</div>
              <div className="text-[12px] text-gray-300 mt-1">Active Users</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT — Cards, fade in from right */}
        <motion.div
          className="w-[46%] relative h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="absolute top-0 left-8 w-[480px] -rotate-12 z-10 transition-all duration-500 hover:-translate-y-4 hover:-rotate-8">
            <img src={card2} alt="Orbit Blue Card" className="w-full object-contain rounded-[24px] shadow-2xl" />
          </div>

          <div className="absolute top-[130px] right-0 w-[450px] z-20 transition-all duration-500 hover:-translate-y-5 hover:rotate-2">
            <img src={card1} alt="Orbit Premium Card" className="w-full object-contain rounded-[24px] shadow-2xl" />
          </div>

          <div className="absolute bottom-0 left-0 w-[400px] rotate-[10deg] z-10 transition-all duration-500 hover:translate-y-2 hover:rotate-[14deg]">
            <img src={card3} alt="Orbit Digital Card" className="w-full object-contain rounded-[24px] shadow-2xl" />
          </div>

          <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[120px] -z-10" />
        </motion.div>
      </div>

      {/* ─── FEATURES SECTION ─── scroll-triggered animations */}
      <section className="w-full py-20">

        {/* Heading — fade up on scroll */}
        <FadeUp className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-3">
            Everything You Need in One App
          </h2>
          <p className="text-[20px] text-gray-300">
            Everything you need to manage your money smarter
          </p>
        </FadeUp>

        {/* 3 Feature Cards — staggered fade up */}
        <div className="grid grid-cols-3 gap-23 mb-23">

          {[
            {
              title: 'Instant Transfer',
              desc: 'Understand Your Spending With Smart Insights',
              img: frame1,
              alt: 'Instant Transfer',
            },
            {
              title: 'Smart Analytics',
              desc: 'Understand Your Spending With Smart Insights',
              img: frame2,
              alt: 'Smart Analytics',
            },
            {
              title: 'Bank Level Security',
              desc: 'Your Payments Protected With Advanced Security',
              img: frame3,
              alt: 'Bank Level Security',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-[#0B1224] border border-white/[0.06] rounded-2xl p-10 flex flex-col gap-3 hover:border-blue-600/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            >
              <h3 className="text-[23px] text-center  font-semibold text-blue-500">{card.title}</h3>
              <p className="text-[21px] text-gray-300 text-center leading-relaxed">{card.desc}</p>
              <div className="mt-9 mb-6 pb-0 flex items-center justify-center h-[170px]">
                <img src={card.img} alt={card.alt} className="h-full object-contain opacity-90" />
              </div>
            </motion.div>
          ))}

        </div>
        {/* Learn More Button — fade up last */}
<FadeUp delay={0.3} className="flex justify-center">
  <Link
    to="/features"
    className="px-8 py-3 bg-blue-800 text-white font-medium text-[22px] rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center gap-2"
  >
    Learn More
    <FaArrowRight className="text-sm" />
  </Link>
</FadeUp>


      </section>
    </>
  );
};

export default Home;