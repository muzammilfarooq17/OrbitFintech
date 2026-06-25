import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { HiArrowUpRight } from "react-icons/hi2";

// Card assets matching your uploaded files
import cardBlackAbout from '../assets/images/About us 1.png'; // Black/Dark card
import cardPurpleAbout from '../assets/images/About us 2.png'; // Purple/Blue gradient card

const AboutUs = () => {
  const highlights = [
    "Modern, all-in-one digital banking platform",
    "Built for speed with instant, real-time transactions",
    "Clean, premium, and user-first experience",
    "Zero hidden fees with fully transparent pricing",
    "Advanced security with bank-level encryption",
    "Smart analytics that turn spending into insights",
    "Global-ready with multi-currency support",
    "Designed for individuals, freelancers, and businesses",
    "Reliable, scalable, and always available",
    "Focused on simplicity without sacrificing power"
  ];

  // Team Data parsed exactly from image_9064be.png
  const teamMembers = [
    { role: "Founder & CEO", name: "Habiba Shahzad", responsibility: "Company vision, strategy, leadership" },
    { role: "Co-Founder & CTO", name: "Muzammil Farooq", responsibility: "Technology, security, infrastructure" },
    { role: "Product Manager", name: "Maryam Nasir", responsibility: "Product roadmap, feature planning" },
    { role: "Head of Design", name: "Muhammad Subhan", responsibility: "UI/UX, brand experience" },
    { role: "Engineering Manager", name: "Ali Shakir", responsibility: "Development team, system architecture" },
    { role: "Marketing Manager", name: "Muneeb-ur-Rehman", responsibility: "Growth, campaigns, partnerships" },
    { role: "Customer Success Manager", name: "Daniyal Abdullah", responsibility: "User support, retention, satisfaction" },
    { role: "Finance Manager", name: "Zainab Shahid", responsibility: "Financial planning, compliance" },
    { role: "Operations Manager", name: "Umer Aslam", responsibility: "Daily operations, process optimization" }
  ];

  // Animation configuration for smooth fading transitions
  const faderEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden ">
      
      {/* SECTION 1: HERO / REIMAGINING FINANCE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={faderEffect}
        className="min-h-[90vh] w-full flex items-center justify-between gap-12 py-3 select-none max-w-7xl mx-auto px-4 relative"
      >
        {/* LEFT SIDE: TEXT CONTENT & HIGHLIGHTS */}
        <div className="w-[55%] flex flex-col justify-center text-left z-10">
          <h2 className="text-white text-[56px] font-extrabold tracking-tight leading-[1.1] mb-1">
            We're Reimagining
          </h2>
          <h2 className="text-white text-[56px] font-extrabold tracking-tight leading-[1.1] mb-2">
            Finance for
          </h2>
          <h1 className="text-[115px] font-black uppercase bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(37,99,235,0.25)] mb-8 leading-none">
            Everyone
          </h1>

          <ul className="flex flex-col gap-1 max-w-2xl pl-1">
            {highlights.map((text, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 text-[17px] text-slate-100 font-normal leading-relaxed"
              >
                <span className="text-slate-400 mt-[10px] text-[8px] flex-shrink-0">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: PERFECT OVERLAPPING STATIC CARDS */}
        <div className="w-[45%] relative h-[700px] flex items-center justify-center">
          {/* PURPLE/BLUE CARD (Bottom Layer - Right Side) */}
          <div className="absolute w-[690px] z-10 top-[50px] -right-16 drop-shadow-[-10px_20px_25px_rgba(0,0,0,0.5)]">
            <img 
              src={cardPurpleAbout} 
              alt="Orbit Premium Purple Card" 
              className="w-full h-auto rounded-[28px] pointer-events-none select-none"
            />
          </div>

          {/* BLACK CARD (Top Layer - Left Side Overlap) */}
          <div className="absolute w-[540px] z-20 top-[-140px] -right-11 drop-shadow-[-25px_25px_40px_rgba(0,0,0,0.75)]">
            <img 
              src={cardBlackAbout} 
              alt="Orbit Premium Black Card" 
              className="w-full h-auto rounded-[28px] pointer-events-none select-none"
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: ABOUT ORBIT STAGGERED BLOCKS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={faderEffect}
        className="w-full py-20 px-4 max-w-6xl mx-auto flex flex-col items-center select-none"
      >
        <h2 className="text-white text-[55px] uppercase font-bold tracking-tight mb-16 text-center">
          About ORBIT
        </h2>

        <div className="w-full flex flex-col gap-12">
          {/* Block 1: Who We Are */}
          <div className="w-[78%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-9 flex text-left relative shadow-xl overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
            <div className="flex flex-col pl-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">Who We Are</h3>
              <p className="text-slate-300 text-[18px] font-normal leading-relaxed">
                ORBIT is a modern financial platform built for people who expect more from their money. We simplify everyday banking by combining speed, transparency, and security into one powerful app—so managing finances feels effortless, not overwhelming.
              </p>
            </div>
          </div>

          {/* Block 2: Our Story */}
          <div className="w-[78%] self-end bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-9 flex text-left relative shadow-xl overflow-hidden">
            <div className="flex flex-col px-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">Our Story</h3>
              <p className="text-slate-300 text-[18px] font-normal leading-relaxed mb-4">
                ORBIT was founded with a simple idea: banking should work for people, not against them.
              </p>
              <p className="text-slate-300 text-[16px] font-normal leading-relaxed">
                After experiencing slow transfers, hidden fees, and outdated systems, our founders set out to create a smarter alternative. What started as a small team with a big vision has grown into a global platform trusted by millions.
              </p>
            </div>
          </div>

          {/* Block 3: Our Mission */}
          <div className="w-[78%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-9 flex text-left relative shadow-xl overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
            <div className="flex flex-col pl-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">Our Mission</h3>
              <p className="text-slate-300 text-[18px] font-normal leading-relaxed">
                Our mission is to simplify financial freedom through intuitive design, cutting-edge technology, and user-first thinking. We strive to make everyday banking faster, safer, and more accessible by eliminating hidden fees, reducing friction, and offering powerful tools that help users spend, save, and grow their money wisely.
              </p>
            </div>
          </div>

          {/* Block 4: Our Vision */}
          <div className="w-[78%] self-end bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-9 flex text-left relative shadow-xl overflow-hidden">
            <div className="flex flex-col px-4">
              <h3 className="text-white text-[34px] font-bold mb-4 tracking-wide">Our Vision</h3>
              <p className="text-slate-300 text-[18px] font-normal leading-relaxed">
                At Orbit, we envision a world where managing money feels effortless, transparent, and empowering for everyone. We aim to become a globally trusted financial platform that removes complexity from banking and gives people complete confidence and control over their finances—no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* NEW SECTION 3: OUR LEADERSHIP TEAM */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={faderEffect}
        className="w-full py-20 px-4 max-w-7xl mx-auto flex flex-col items-center select-none"
      >
        {/* Section Heading & Subheading */}
        <h2 className="text-white text-[54px] font-bold tracking-tight text-center mb-2">
          Our Leadership Team
        </h2>
        <p className="text-slate-200 text-[19px] font-medium text-center mb-6">
          Meet the People Behind Orbit
        </p>

        {/* Content Wrapper Container */}
        <div className="w-full bg-[#121b33]/50 border border-slate-800/40 rounded-xl p-11 flex flex-col items-center shadow-2xl relative">
          
          {/* Table Row Structure: Headers */}
          <div className="w-full grid grid-cols-3 pb-4 pl-43 uppercase border-b border-slate-800/60 mb-3 text-left">
            <span className="text-white text-[18px] font-bold tracking-wide">Role / Position</span>
            <span className="text-white text-[18px] pl-9 font-bold tracking-wide">Name</span>
            <span className="text-white text-[18px] font-bold tracking-wide">Responsibility</span>
          </div>

          {/* Table Body Mapping */}
          <div className="w-full flex flex-col gap-3  text-centre ">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full grid grid-cols-3  items-center">
                <span className="text-slate-300 text-[16px] pl-44 font-normal">{member.role}</span>
                <span className="text-white text-[18px] pl-29 font-medium">{member.name}</span>
                <span className="text-slate-400 text-[16px] pl-3 font-normal leading-normal">{member.responsibility}</span>
              </div>
            ))}
          </div>

          {/* Call To Action Button Block */}
<div className="mt-14">
  <Link to="/signup">
    <button className="group bg-[#1d4ed8] hover:bg-blue-700 text-white font-medium text-[15px] px-8 py-3.5 rounded-lg transition-colors shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer">
      <span>Join the Orbit Team</span>

      <FaUserPlus className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300" />
    </button>
  </Link>
</div>

        </div>
      </motion.section>

    </div>
  );
};

export default AboutUs;