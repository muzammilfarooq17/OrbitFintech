import { motion } from 'framer-motion';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa6";

// Image assets matching your exact folder tree setup
import cardBlue from '../assets/images/Card 1 Black.png'; 
import cardBlack from '../assets/images/Card 2 Blue.png'; 

// Grid Vector Icons imported based on your folder structure
import vectorBill from '../assets/vectors/Vector 1.png';
import vectorNotify from '../assets/vectors/Vector 2.png';
import vectorSecurity from '../assets/vectors/Vector 3.png';
import vectorSupport from '../assets/vectors/Vector 4.png';
import vectorCurrency from '../assets/vectors/Vector 5.png';
import vectorTransfers from '../assets/vectors/Vector 6.png';
import vectorCards from '../assets/vectors/Vector 7.png';
import vectorBudgeting from '../assets/vectors/Vector 8.png';
import vectorBankLevel from '../assets/vectors/Vector 9.png';

const Features = () => {
  const featureList = [
    "Instant global money transfers with real-time confirmation",
    "Smart spending insights powered by AI analytics",
    "Multi-currency accounts with real exchange rates",
    "Virtual and physical cards with full spending control",
    "Bank-level security with advanced fraud protection",
    "Seamless bill payments and automated scheduling",
    "Real-time notifications for every transaction",
    "24/7 priority support across chat, email, and phone"
  ];

  // Grid Data matching your uploaded layout blueprint
  const topFeaturesGrid = [
    { title: "Bill Payments", desc: "Instant payment confirmations", icon: vectorBill },
    { title: "Real-Time Notifications", desc: "Instant transaction alerts", icon: vectorNotify },
    { title: "Security & Protection", desc: "Two-factor authentication", icon: vectorSecurity },
    { title: "24/7 Support", desc: "Comprehensive help center", icon: vectorSupport },
    { title: "Multi-Currency Accounts", desc: "Hold money in 30+ currencies", icon: vectorCurrency },
    { title: "Instant Transfers", desc: "No waiting periods or delays", icon: vectorTransfers },
    { title: "Virtual & Physical Cards", desc: "Full control over spending limits", icon: vectorCards },
    { title: "Smart Budgeting", desc: "AI-powered spending insights", icon: vectorBudgeting },
    { title: "Bank Level Security", desc: "Payments Protected With Security", icon: vectorBankLevel },
  ];

  // Comparison Matrix Data matching image_3e4a6b.png exactly
  const comparisonData = [
    { feature: "Onboarding Time", orbit: "2 minutes, fully digital", traditional: "Days with paperwork" },
    { feature: "Fees & Charges", orbit: "Zero hidden fees", traditional: "High & unclear fees" },
    { feature: "Transfers Speed", orbit: "Instant, real-time", traditional: "1–3 business days" },
    { feature: "Global Usage", orbit: "150+ countries supported", traditional: "Limited regions" },
    { feature: "Multi-Currency Support", orbit: "30+ currencies in one account", traditional: "Separate accounts" },
    { feature: "User Experience", orbit: "Modern, clean, intuitive", traditional: "Outdated & complex" },
    { feature: "Security", orbit: "Bank-grade + AI fraud detection", traditional: "Standard security" },
    { feature: "Insights & Analytics", orbit: "Smart, AI-powered insights", traditional: "Basic statements" },
    { feature: "Support Availability", orbit: "24/7 real human support", traditional: "Business hours only" },
    { feature: "Transparency", orbit: "Clear pricing, no surprises", traditional: "Complex terms" }
  ];

  return (
    <div className="w-full flex flex-col gap-24">
      
      {/* SECTION 1: HERO CONTAINER (UNTOUCHED SIZING & DESIGN) */}
      <section className="min-h-[85vh] w-full flex items-center justify-between gap-16 py-12 select-none overflow-hidden max-w-7xl mx-auto">
        
        {/* LEFT SIDE: TEXT CONTENT & FEATURES */}
        <motion.div 
          className="w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-white text-[68px] font-extrabold tracking-tight leading-tight ">
            Powerful Features <br />
            for Modern
          </h2>
          <h1 className="text-[110px] font-black uppercase bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(37,99,235,0.3)] mb-4">
            Banking
          </h1>

          <ul className="flex flex-col gap-4 max-w-xl">
            {featureList.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-4 text-[19px] text-slate-300 font-medium leading-relaxed group"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <IoCheckmarkCircleSharp className="text-blue-500 text-2xl mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <span className="transition-colors duration-200 group-hover:text-white">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE: FIXED OVERLAPPING CARDS FOR PC/LAPTOP */}
        <div className="w-1/2 relative h-[750px] flex items-center justify-center">
          
          {/* BLUE CARD (Bottom / Back Layer) */}
          <motion.div 
            className="absolute w-[780px] z-10 filter drop-shadow-[-15px_25px_30px_rgba(0,0,0,0.6)]"
            style={{ transformOrigin: 'center' }}
            initial={{ opacity: 0, x: -100, y: 100, rotate: 0 }}
            animate={{ opacity: 1, x: -80, y: 30, rotate: 3 }} 
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <img 
              src={cardBlack} 
              alt="Orbit Blue Card" 
              className="w-full h-auto rounded-[24px] pointer-events-none select-none"
            />
          </motion.div>

          {/* BLACK CARD (Top / Front Layer) */}
          <motion.div 
            className="absolute w-[630px] z-20 filter drop-shadow-[-25px_25px_35px_rgba(0,0,0,0.8)]"
            style={{ transformOrigin: 'center' }}
            initial={{ opacity: 0, x: 100, y: 0, rotate: 0 }}
            animate={{ opacity: 1, x: 10, y: -220, rotate: 3 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <img 
              src={cardBlue} 
              alt="Orbit Black Card" 
              className="w-full h-auto rounded-[24px] pointer-events-none select-none"
            />
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: OUR TOP FEATURES GRID SECTION  */}
      <section className="w-full py-5 max-w-7xl mx-auto flex flex-col items-center select-none text-center">
        
        <div className="mb-19">
          <h2 className="text-white text-[50px] font-extrabold tracking-tight mb-2">
            Our Top Features
          </h2>
          <p className="text-slate-300 text-[23px] font-medium">
            Powerful Tools for Complete Financial Control
          </p>
        </div>

        {/* 3x3 Grid Matrix for PC/Laptop Viewports */}
        <div className="grid grid-cols-3 gap-9 w-[1100px] px-2">
          {topFeaturesGrid.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b1329]/60 border border-slate-800/40 rounded-2xl p-8 cursor-pointer h-[430px] flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:bg-[#0b1329]/90"
            >
              <div className="h-90 w-90 flex items-center justify-center mb-6">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-blue-500 font-bold text-[30px] mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-400 text-[18px] font-normal px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Action Link Button */}
        <Link
          to="/signup"
          className="group mt-14 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 px-8 rounded-xl tracking-wide shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span>Get Started Free</span>
          <HiArrowUpRight
            className="w-0 h-0 opacity-0 ml-0 overflow-hidden transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:ml-2 group-hover:opacity-100"
          />
        </Link>
      </section>

      {/* SECTION 3: WHY ORBIT IS DIFFERENT (PC & LAPTOP FULL-WIDTH OPTIMIZED) */}
      <section className="w-full py-4 px-2 max-w-[1490px] mx-auto flex flex-col items-center select-none">
        
        {/* Section Heading Setup */}
        <div className="text-center mb-6">
          <h2 className="text-white text-[52px] font-extrabold tracking-tight mb-4">
            Why Orbit Is Different
          </h2>
          <p className="text-slate-400 text-[22px] font-normal tracking-wide">
            Where Finance Meets Clarity
          </p>
        </div>

        {/* Main Clean Comparison Matrix Outer Card Box - Stretches to the white line limits */}
        <div className="w-full bg-[#0c152b] border border-slate-800/60 rounded-2xl p-16 flex flex-col  items-center shadow-2xl">
          
          {/* Table Matrix Header Row */}
          <div className="grid grid-cols-3 w-full pb-5 border-b border-slate-800 text-left font-bold mb-3 text-[29px] gap-35 ml-19">
            <div className="text-white">Features / Experiences</div>
            <div className="text-blue-600 uppercase text-4xl ">Orbit</div>
            <div className="text-slate-400">Traditional Banks</div>
          </div>

          {/* Table Rows Body Content */}
          <div className="w-full flex flex-col divide-y divide-slate-800/40">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-3 w-full py-7 text-left items-center text-[19px] gap-47"
              >
                {/* Feature Column Label */}
                <div className="text-white font-semibold pl-19">{row.feature}</div>
                
                {/* Orbit Column Highlights */}
                <div className="text-white font-medium  pr-4">{row.orbit}</div>
                
                {/* Traditional Banks Column Data */}
                <div className="text-white font-normal pl-5">{row.traditional}</div>
              </div>
            ))}
          </div>

          <Link
            to="/src/pages/VideoDemo.jsx"
            className="group mt-16 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[17px] py-4 px-10 rounded-xl tracking-wide cursor-pointer shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <span>Watch Demo</span>
            <FaPlay
              className="w-0 h-0 opacity-0 ml-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:ml-3 group-hover:opacity-100"
            />
          </Link>
        </div>
      </section>

      {/* NEW SECTION 4: WHY IT WORKS (MATCHING SCREENSHOT 2026-06-25 190810.PNG) */}
      <section className="w-full py-2 px-4 max-w-[1240px] mx-auto flex flex-col items-center select-none">
        
        {/* Section Heading Setup */}
        <div className="text-center mb-10 max-w-2xl">
          <h2 className="text-white text-[48px] font-extrabold tracking-tight mb-4">
            Why It Works
          </h2>
          <p className="text-slate-300 text-[19px] font-normal leading-relaxed tracking-wide">
            Built to adapt to how you earn, spend, and move money — wherever life takes you.
          </p>
        </div>

        {/* Grid Container for Staggered Cards */}
        <div className="w-full flex flex-col gap-9">
          
          {/* Card 1: Freelancers (Left-aligned blue accent) */}
          <div className="w-[85%] self-start bg-[#121b33] border cursor-pointer border-slate-800/40 rounded-xl p-10 flex gap-6 relative shadow-xl overflow-hidden">
            <div className=" left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
            <div className="flex flex-col text-left pl-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">For Freelancers</h3>
              <p className="text-slate-400 text-[17px] font-normal leading-relaxed mb-6 max-w-3xl">
                Orbit is built for independent professionals who need fast access to money, clear insights, and zero friction. It removes the complexity of traditional banking so freelancers can focus on their work, not their finances.
              </p>
              <ul className="flex flex-col gap-3 text-slate-300 text-[16px] font-medium pl-2">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Multi-currency support for international projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Simple, professional cards for client payments
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Travelers (Right-aligned blue accent) */}
          <div className="w-[85%] self-end bg-[#121b33] cursor-pointer border border-slate-800/40 rounded-xl p-10 flex gap-6 relative shadow-xl overflow-hidden">
            <div className=" right-0 top-0 bottom-0 w-[4px] bg-blue-600" />
            <div className="flex flex-col text-left pr-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">For Travelers</h3>
              <p className="text-slate-400 text-[17px] font-normal leading-relaxed mb-6 max-w-3xl">
                Orbit makes managing money across borders effortless. Whether you're exploring new countries or working remotely, your finances move as freely as you do.
              </p>
              <ul className="flex flex-col gap-3 text-slate-300 text-[16px] font-medium pl-2">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Pay and withdraw in 150+ countries with real exchange rates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  One app for all currencies and accounts
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Business (Left-aligned blue accent) */}
          <div className="w-[85%] self-start cursor-pointer bg-[#121b33] border border-slate-800/40 rounded-xl p-10 flex gap-6 relative shadow-xl overflow-hidden">
            <div className=" left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
            <div className="flex flex-col text-left pl-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">For Business</h3>
              <p className="text-slate-400 text-[17px] font-normal leading-relaxed mb-6 max-w-3xl">
                Orbit helps modern businesses move faster with smarter financial tools. From daily expenses to team payments, everything stays transparent, secure, and scalable.
              </p>
              <ul className="flex flex-col gap-3 text-slate-300 text-[16px] font-medium pl-2">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Centralized expense management for teams
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Advanced analytics for better financial decisions
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section Bottom CTA Button */}
        <Link
          to="/signup"
          className="group mt-14 mb-22 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3.5 px-8 rounded-xl tracking-wide shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span>Get Started Free</span>
          <HiArrowUpRight
            className="w-0 h-0 opacity-0 ml-0 overflow-hidden transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:ml-2 group-hover:opacity-100"
          />
        </Link>
        
      </section>

    </div>
  );
};

export default Features;