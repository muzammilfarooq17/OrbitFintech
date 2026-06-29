import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from 'react';

import card1 from '../assets/images/Card 1 (1).png';
import card2 from '../assets/images/Card 2.png';
import card3 from '../assets/images/Card 3 (1).png';

import frame1 from '../assets/frames/Frame1.png';
import frame2 from '../assets/frames/Frame2.png';
import frame3 from '../assets/frames/Frame3.png';

import securityImg from '../assets/frames/Security.png';
import tickImg from '../assets/frames/Tick.png';
import faceImg from '../assets/frames/Face.png';

import statsImg from '../assets/images/Rectangle 28.png';

// ── Scroll reveal: fade up (default) ────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ── Scroll reveal: fade in from left ─────────────────────────────
const FadeLeft = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ── Scroll reveal: fade in from right ────────────────────────────
const FadeRight = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// ── Scroll reveal: zoom in ────────────────────────────────────────
const ZoomIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
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

// ── Stats section data ────────────────────────────────────────────
const statsData = [
  {
    title: '2M+ Active Users',
    points: [
      'Billions moved with complete confidence',
      'Proven at massive scale',
      'Securely transferring value worldwide',
    ],
  },
  {
    title: '$5B+ Transferred',
    points: [
      'Trusted by millions every day',
      'Chosen by a growing global community',
      'Millions managing money smarter',
    ],
  },
  {
    title: '150+ Countries',
    points: [
      'Seamless payments across borders',
      'Truly global financial access',
      'One app, worldwide reach',
    ],
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ─── 1. HERO SECTION ─── */}
<div
  ref={heroRef}

  className="w-full min-h-[calc(100vh-80px)] flex items-start justify-between pt-8 pb-8 gap-8 overflow-hidden select-none"
>
        {/* LEFT — staggered slide-up on load */}
        <motion.div className="w-[48%]" style={{ y: heroY, opacity: heroOpacity }}>

          {/* "All Your Money in" — slides from left */}
          <motion.h1
            className="font-extrabold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-[67px] ml-5 font-bold tracking-normal block leading-none text-slate-100 opacity-95"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              All Your Money in
            </motion.span>

            {/* "ORBIT" — scales up with glow */}
            <motion.span
              className="text-[180px] ml-5 font-black tracking-[-0.03em] block leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#1D4ED8] to-[#1E40AF] drop-shadow-[0_10px_50px_rgba(31,79,216,0.35)]"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              ORBIT
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-[19px] ml-5 text-gray-200 font-normal leading-relaxed max-w-md mb-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            Send, manage, and grow your money securely with real time insights and zero hidden fees.
          </motion.p>

          {/* Buttons — stagger left-to-right */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/signup"
              className="group px-6 ml-6 py-3 bg-blue-600 text-white font-medium text-[20px] rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:scale-[1.03] hover:shadow-[0_6px_30px_rgba(37,99,235,0.45)] active:scale-[0.97] transition-all duration-300 flex items-center justify-center"
            >
              <span>Get Started Free</span>
              <FaRegArrowAltCircleUp className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100" />
            </Link>

            <Link
  to="/video-demo" // <-- Isko lowercase me /video-demo kar dein taake upar wale route se match kare
  className="group px-6 ml-6 py-3 bg-transparent text-white border border-gray-700 font-medium text-[20px] rounded-xl hover:bg-white/5 hover:border-gray-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center"
>
  <span>Watch Demo</span>
  <FaPlay className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2.5 group-hover:w-3.5 group-hover:opacity-100 text-blue-400" />
</Link>
          </motion.div>

          {/* Stats card — fade up last with animated bars */}
          <motion.div
            className="inline-flex items-center gap-10 mt-35 bg-[#0B1224]/80 border border-white/[0.05] rounded-2xl px-8 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { value: '$5B+', label: 'Transferred', w: '70%', min: '90px' },
              { value: '150+', label: 'Countries',   w: '85%', min: '90px' },
              { value: '2M+',  label: 'Active Users', w: '100%', min: '80px' },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col ml-5" style={{ minWidth: s.min }}>
                <div className="w-20 h-[3px] bg-white/20 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: s.w }}
                    transition={{ duration: 1.1, delay: 0.85 + i * 0.15, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-[22px] font-bold text-white">{s.value}</div>
                <div className="text-[12px] text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — cards fly in from right, each with own delay */}
        <motion.div
          className="w-[50%] relative h-[790px] mr-29 flex items-center justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute -top-22 left-21 w-[600px] -rotate-[1deg] z-10 cursor-pointer"
            initial={{ opacity: 0, y: -40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: -5, y: -14, transition: { duration: 0.35, ease: 'easeOut' } }}
          >
            <img src={card2} alt="Orbit Blue Card" className="w-full object-contain rounded-[24px]" />
          </motion.div>

          <motion.div
            className="absolute top-[60px] left-[150px] w-[600px] z-30 cursor-pointer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 2, y: -18, transition: { duration: 0.35, ease: 'easeOut' } }}
          >
            <img src={card1} alt="Orbit Premium Card" className="w-full object-contain rounded-[24px]" />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 left-5 w-[600px] z-20 cursor-pointer"
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 4, y: 10, transition: { duration: 0.35, ease: 'easeOut' } }}
          >
            <img src={card3} alt="Orbit Digital Card" className="w-full object-contain rounded-[24px]" />
          </motion.div>
        </motion.div>
      </div>

      {/* ─── 2. FEATURES SECTION ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-33">
          <h2 className="text-[48px] mt-8 font-bold text-white tracking-tight mb-3">
            Everything You Need in One App
          </h2>
          <p className="text-[20px] text-gray-300">
            Everything you need to manage your money smarter
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-29 mb-18">
          {[
            { title: 'Instant Transfer',     desc: 'Understand Your Spending With Smart Insights',   img: frame1, alt: 'Instant Transfer' },
            { title: 'Smart Analytics',      desc: 'Understand Your Spending With Smart Insights',   img: frame2, alt: 'Smart Analytics' },
            { title: 'Bank Level Security', desc: 'Your Payments Protected With Advanced Security', img: frame3, alt: 'Bank Level Security' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-[#0B1224] border border-white/[0.06] rounded-2xl p-10 flex flex-col gap-3 hover:border-blue-600/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]"
              initial={{ opacity: 0, y: 60, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-[23px] text-center font-semibold text-blue-500">{card.title}</h3>
              <p className="text-[21px] text-gray-300 text-center leading-relaxed">{card.desc}</p>
              <div className="mt-9 mb-6 flex items-center justify-center h-[170px]">
                <img src={card.img} alt={card.alt} className="h-full object-contain opacity-90" />
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.2} className="flex justify-center">
          <Link
            to="/features" // <-- Fixed matching AppRoutes path
            className="group px-8 py-3 bg-blue-800 text-white font-medium text-[22px] rounded-xl hover:bg-blue-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Learn More</span>
            <FaArrowRight className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 text-sm" />
          </Link>
        </FadeUp>
      </section>

      {/* ─── 3. PRICING SECTION ─── */}
      <section className="w-full py-6">
        <FadeUp className="text-center mb-19">
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
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2
                ${plan.highlight
                  ? 'bg-[#0d1a3a] border-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_50px_rgba(37,99,235,0.38)]'
                  : 'bg-[#0B1224] border-white/[0.07] hover:border-white/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
                }`}
              initial={{ opacity: 0, y: 60, x: i === 0 ? -40 : i === 2 ? 40 : 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="bg-blue-600 text-white text-[13px] font-semibold px-4 py-1 rounded-full shadow-[0_4px_15px_rgba(37,99,235,0.5)]">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <h3 className="text-[26px] font-bold mb-3 text-white">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[28px] font-extrabold text-white">Price: {plan.price}</span>
                <span className="text-[16px] text-gray-400">/ {plan.period}</span>
              </div>
              <p className="text-[15px] text-gray-400 mb-6">{plan.tagline}</p>
              <div className="border-t border-white/[0.07] mb-5" />
              <p className="text-[15px] font-semibold text-white mb-3">Feature List</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                {plan.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    className="flex items-start gap-2.5 text-[15px] text-gray-300"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.13 + fi * 0.05, ease: 'easeOut' }}
                  >
                    <FaCheck className="text-blue-500 mt-[3px] shrink-0 text-[12px]" />
                    {f}
                  </motion.li>
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

      {/* ─── 4. OUR CURRENT STATS ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-14">
          <h2 className="text-[55px] font-bold text-white tracking-tight">
            Our Current Stats
          </h2>
        </FadeUp>

        <div className="flex items-stretch gap-10">
          <div className="w-[48%] flex flex-col justify-between gap-10">
            {statsData.map((stat, i) => (
              <FadeLeft key={stat.title} delay={i * 0.15}>
                <div className="flex gap-4">
                  <div className="w-[4px] rounded-full bg-blue-600 shrink-0" />
                  <div>
                    <h3 className="text-[35px] font-bold text-white mb-3">{stat.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {stat.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-[22px] text-gray-300">
                          <span className="text-gray-400 mt-[2px]">→</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeLeft>
            ))}
          </div>

          <FadeRight className="w-[52%] relative" delay={0.2}>
            <div className="absolute -top-4 left-4 z-10">
              <span className="bg-blue-600 text-white text-[23px] font-semibold px-5 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.5)]">
                Loved by Millions Worldwide
              </span>
            </div>
            <img src={statsImg} alt="Loved by Millions Worldwide" className="w-full h-full object-cover rounded-2xl" />
          </FadeRight>
        </div>

        <FadeUp delay={0.3} className="flex justify-center mt-14">
          <Link
            to="/stats" // <-- Fixed from '/src/pages/Stats.jsx' to '/stats'
            className="group px-8 py-3 bg-blue-800 text-white font-medium text-[22px] rounded-xl hover:bg-blue-500 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Learn More</span>
            <FaArrowRight className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:opacity-100 text-sm" />
          </Link>
        </FadeUp>
      </section>

      {/* ─── 5. ENTERPRISE SECURITY ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-3">
            Enterprise-Level Security for Everyone
          </h2>
          <p className="text-[20px] text-gray-300">
            Your money and data are protected with industry-leading safeguards.
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { title: 'End-to-End Encryption',   desc: 'All transactions are secured with 256-bit encryption.',             img: securityImg, alt: 'Encryption' },
            { title: 'Multi-Layer Protection',   desc: 'Two-factor authentication for every login and action.',             img: tickImg,     alt: 'Multi-Layer Protection' },
            { title: 'Smart Fraud Monitoring',   desc: 'AI detects suspicious activity in real time.',                      img: faceImg,     alt: 'Fraud Monitoring' },
          ].map((card, i) => (
            <ZoomIn key={card.title} delay={i * 0.13}>
              <div className="bg-[#0B1224] border border-white/[0.06] rounded-2xl p-10 flex flex-col gap-3 hover:border-blue-600/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]">
                <h3 className="text-[22px] text-center font-semibold text-blue-400">{card.title}</h3>
                <p className="text-[17px] text-gray-300 text-center leading-relaxed">{card.desc}</p>
                <div className="mt-8 flex items-center justify-center h-[170px]">
                  <img src={card.img} alt={card.alt} className="h-full object-contain opacity-90" />
                </div>
              </div>
            </ZoomIn>
          ))}
        </div>

        <FadeUp delay={0.25} className="flex justify-center">
          <Link
            to="/security" // <-- Fixed from '/src/pages/Security.jsx' to '/security'
            className="group px-8 py-3 bg-blue-600 text-white font-medium text-[18px] rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Explore Security</span>
            <FiShield className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100" />
          </Link>
        </FadeUp>
      </section>

      {/* ─── 6. GET STARTED STEPS ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-14">
          <h2 className="text-[48px] font-bold text-white tracking-tight mb-1">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-[19px] text-gray-300">
            Get started in minutes — no paperwork, no stress
          </p>
        </FadeUp>

        <div className="flex flex-col gap-10">
          {/* Step 01 */}
          <FadeLeft delay={0}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                <span className="text-[45px] font-bold text-white">Step 01</span>
              </div>
              <div className="w-[72%] bg-[#0B1224] border border-white/[0.06] rounded-2xl p-8 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]">
                <h3 className="text-[30px] font-semibold text-blue-400 mb-3">Sign up</h3>
                <p className="text-[22px] text-gray-300 leading-relaxed">
                  Create your account in minutes with a seamless onboarding experience designed for speed, security, and simplicity.
                </p>
              </div>
            </div>
          </FadeLeft>

          {/* Step 02 */}
          <FadeRight delay={0.1}>
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[45px] font-bold text-white">Step 02</span>
                <div className="w-1 h-8 bg-blue-600 rounded-full" />
              </div>
              <div className="w-[72%] bg-[#0B1224] border border-white/[0.06] rounded-2xl p-8 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]">
                <h3 className="text-[30px] font-semibold text-blue-400 mb-3">Payment Method</h3>
                <p className="text-[22px] text-gray-300 leading-relaxed">
                  Link your card or bank account safely using encrypted, bank-grade technology you can trust.
                </p>
              </div>
            </div>
          </FadeRight>

          {/* Step 03 */}
          <FadeLeft delay={0.2}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-600 rounded-full" />
                <span className="text-[45px] font-bold text-white">Step 03</span>
              </div>
              <div className="w-[72%] bg-[#0B1224] border border-white/[0.06] rounded-2xl p-8 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]">
                <h3 className="text-[30px] font-semibold text-blue-400 mb-3">Start Sending</h3>
                <p className="text-[22px] text-gray-300 leading-relaxed">
                  Send money instantly, track every transaction, and experience banking without delays or limits.
                </p>
              </div>
            </div>
          </FadeLeft>
        </div>

        <FadeUp delay={0.3} className="flex justify-center mt-14">
          <Link
            to="/signup"
            className="group px-8 py-3 bg-blue-600 text-white font-medium text-[18px] rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Get Started Free</span>
            <FiArrowUpRight className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100" />
          </Link>
        </FadeUp>
      </section>

      {/* ─── 7. FAQ SECTION ─── */}
      <section className="w-full py-20">
        <FadeUp className="text-center mb-15">
          <h2 className="text-[46px] font-bold text-white tracking-tight mb-0">
            Frequently Asked Questions
          </h2>
          <p className="text-[22px] text-gray-300">
            Quick answers to common questions about ORBIT
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-x-10 gap-y-33">
          {[
            { num: '01', q: 'Can I change my plan anytime?',                  a: 'Yes, you can upgrade or downgrade your plan at any time directly from your account settings. Changes take effect immediately, so you always stay in control without any interruption to your services.' },
            { num: '02', q: 'Is there a free trial available?',               a: 'Absolutely. We offer a 30-day free trial on our Premium plan so you can explore advanced features like unlimited transfers, analytics, and multi-currency accounts before committing.' },
            { num: '03', q: 'Are there any hidden fees?',                     a: 'No. Transparency is at the core of ORBIT. What you see is what you pay—no hidden charges, no surprise deductions, and no unnecessary fees at any stage.' },
            { num: '04', q: 'How secure is my money and data?',               a: 'Your security is our top priority. ORBIT uses bank-grade encryption, two-factor authentication, and real-time fraud monitoring to keep your funds and personal information fully protected.' },
            { num: '05', q: 'Which countries and currencies are supported?',  a: 'ORBIT supports users in 150+ countries with access to multiple currencies. You can send, receive, and hold money globally with real exchange rates and zero conversion fees on eligible plans.' },
            { num: '06', q: 'What payment methods are supported?',            a: 'We support all major debit and credit cards, as well as bank transfers in supported regions, making it easy to add funds and manage your account seamlessly.' },
            { num: '07', q: 'Can I cancel my subscription anytime?',          a: "Yes. There's no long-term commitment. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing cycle." },
            { num: '08', q: 'Is my money safe with ORBIT?',                   a: 'Yes. ORBIT uses bank-grade encryption, real-time fraud monitoring, and multi-layer security to keep your money fully protected at all times.' },
          ].map((faq, i) => (
            <motion.div
              key={faq.num}
              className="flex gap-5"
              initial={{ opacity: 0, y: 45, x: i % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: (Math.floor(i / 2)) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="shrink-0 w-18 h-18 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[22px] shadow-[0_4px_15px_rgba(37,99,235,0.45)]"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (Math.floor(i / 2)) * 0.12 + 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {faq.num}
              </motion.div>
              <div>
                <h3 className="text-[28px] font-semibold text-white mb-4">{faq.q}</h3>
                <p className="text-[22px] text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.3} className="flex justify-center mt-14">
          <Link
            to="/ask-question" // <-- Verified matching AppRoutes path
            className="group px-8 py-3 mt-11 bg-blue-600 text-white font-medium text-[18px] rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Ask a Question</span>
            <FiMessageCircle className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100" />
          </Link>
        </FadeUp>
      </section>
    </>
  );
};

export default Home;