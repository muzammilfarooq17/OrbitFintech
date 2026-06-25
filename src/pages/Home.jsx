import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from "react-icons/fa";

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

// ── Pricing data ─────────────────────────────────────────────────
const plans = [
  {
    name: 'Free Plan',
    price: '0$',
    period: 'Month',
    tagline: 'Get started with essentials',
    features: ['Basic transfers', 'Virtual card', 'Spending insights', 'Email support'],
    cta: 'Get Now',
    popular: false,
    highlight: false,
  },
  {
    name: 'Premium Plan',
    price: '$9.99',
    period: 'month',
    tagline: 'Full control, zero limits',
    features: ['Unlimited transfers', 'Physical + virtual cards', 'Advanced analytics', 'Multi-currency accounts', 'No foreign fees', 'Priority support'],
    cta: 'Get Now',
    popular: true,
    highlight: true,
  },
  {
    name: 'Business Plan',
    price: '$29.99',
    period: 'month',
    tagline: 'Built for growing teams',
    features: ['Team access', 'Business analytics', 'Expense management', 'API access', 'No foreign fees', 'Dedicated manager'],
    cta: 'Get Now',
    popular: false,
    highlight: false,
  },
];

const Home = () => {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-between py-8 gap-8 overflow-hidden select-none">

        {/* LEFT CONTENT */}
        <div className="w-[48%]">

          <motion.h1
            className="font-extrabold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="text-[67px] ml-5 font-bold tracking-normal block leading-none text-slate-100 opacity-95">
              All Your Money in
            </span>
            <span className="text-[180px] ml-5 font-black tracking-[-0.03em] block leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#1D4ED8] to-[#1E40AF] drop-shadow-[0_10px_50px_rgba(31,79,216,0.35)]">
              ORBIT
            </span>
          </motion.h1>

          <motion.p
            className="text-[19px] ml-5 text-gray-200 font-normal leading-relaxed max-w-md mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            Send, manage, and grow your money securely with real time insights and zero hidden fees.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
          >
            <Link
              to="/signup"
              className="group px-6 ml-6 py-3 bg-blue-600 text-white font-medium text-[20px] rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              <span>Get Started Free</span>
              <FaRegArrowAltCircleUp className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100" />
            </Link>

            <Link
              to="/demo"
              className="group px-6 ml-6 py-3 bg-transparent text-white border border-gray-700 font-medium text-[20px] rounded-xl hover:bg-white/5 hover:border-gray-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
            >
              <span>Watch Demo</span>
              <FaPlay className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2.5 group-hover:w-3.5 group-hover:opacity-100 text-blue-400" />
            </Link>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="inline-flex items-center gap-10 mt-35 bg-[#0B1224]/80 border border-white/[0.05] rounded-2xl px-8 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-col ml-5 min-w-[90px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-[70%] h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">$5B+</div>
              <div className="text-[12px] text-gray-300 mt-1">Transferred</div>
            </div>
            <div className="flex flex-col ml-5 min-w-[90px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-[85%] h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">150+</div>
              <div className="text-[12px] text-gray-300 mt-1">Countries</div>
            </div>
            <div className="flex flex-col ml-5 min-w-[80px]">
              <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-full h-full bg-blue-600 rounded-full" />
              </div>
              <div className="text-[22px] font-bold text-white">2M+</div>
              <div className="text-[12px] text-gray-300 mt-1">Active Users</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT — Cards (Glass & Blur Effects Removed completely) */}
        <motion.div
          className="w-[50%] relative h-[790px] mr-29 flex items-center justify-center bg-transparent backdrop-blur-none"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          {/* Top Blue Card */}
          <div className="absolute -top-22 left-21 w-[600px] -rotate-[1deg] z-10 transition-all duration-500 hover:-translate-y-4 hover:-rotate-[5deg]">
            <img
              src={card2}
              alt="Orbit Blue Card"
              className="w-full object-contain rounded-[24px] shadow-lg"
            />
          </div>

          {/* Main Black Card */}
          <div className="absolute top-[60px] left-[150px] w-[600px] z-30 transition-all duration-500 hover:-translate-y-6 hover:rotate-2">
            <img
              src={card1}
              alt="Orbit Premium Card"
              className="w-full object-contain rounded-[24px] shadow-xl"
            />
          </div>

          {/* Bottom Blue Card */}
          <div className="absolute -bottom-10 left-20 w-[600px] rotate-[1deg] z-20 transition-all duration-500 hover:translate-y-3 hover:rotate-[14deg]">
            <img
              src={card3}
              alt="Orbit Digital Card"
              className="w-full object-contain rounded-[24px] shadow-lg"
            />
          </div>
        </motion.div>

      </div>

      {/* ─── FEATURES SECTION ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-3">
            Everything You Need in One App
          </h2>
          <p className="text-[20px] text-gray-300">
            Everything you need to manage your money smarter
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-23 mb-23">
          {[
            { title: 'Instant Transfer', desc: 'Understand Your Spending With Smart Insights', img: frame1, alt: 'Instant Transfer' },
            { title: 'Smart Analytics', desc: 'Understand Your Spending With Smart Insights', img: frame2, alt: 'Smart Analytics' },
            { title: 'Bank Level Security', desc: 'Your Payments Protected With Advanced Security', img: frame3, alt: 'Bank Level Security' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-[#0B1224] border border-white/[0.06] rounded-2xl p-10 flex flex-col gap-3 hover:border-blue-600/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            >
              <h3 className="text-[23px] text-center font-semibold text-blue-500">{card.title}</h3>
              <p className="text-[21px] text-gray-300 text-center leading-relaxed">{card.desc}</p>
              <div className="mt-9 mb-6 pb-0 flex items-center justify-center h-[170px]">
                <img src={card.img} alt={card.alt} className="h-full object-contain opacity-90" />
              </div>
            </motion.div>
          ))}
        </div>

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

      {/* ─── PRICING SECTION ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-14">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-3">
            Pay Only for What You Need
          </h2>
          <p className="text-[19px] text-gray-300">
            Choose a plan that fits your needs. Upgrade anytime, no hidden fees.
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300
                ${plan.highlight
                  ? 'bg-[#0d1a3a] border-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.25)]'
                  : 'bg-[#0B1224] border-white/[0.07] hover:border-white/20'
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-[13px] font-semibold px-4 py-1 rounded-full shadow-[0_4px_15px_rgba(37,99,235,0.5)]">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-[26px] font-bold mb-3 text-white">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[28px] font-extrabold text-white">Price: {plan.price}</span>
                <span className="text-[16px] text-gray-400">/ {plan.period}</span>
              </div>

              <p className="text-[15px] text-gray-400 mb-6">{plan.tagline}</p>

              <div className="border-t border-white/[0.07] mb-5" />

              <p className="text-[15px] font-semibold text-white mb-3">Feature List</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-gray-300">
                    <FaCheck className="text-blue-500 mt-[3px] shrink-0 text-[12px]" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className={`w-full py-3 rounded-xl text-center text-[17px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                  ${plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.35)]'
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/5'
                  }`}
              >
                {plan.cta}
              </Link>

              {!plan.popular && i === 0 && (
                <p className="text-center text-[12px] text-gray-500 mt-3">
                  Have an existing plan? See billing help
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;