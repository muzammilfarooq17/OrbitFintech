import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';

const Security = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Smooth slide and fade-in container for seamless layout entry
  const blockEffect = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.75, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full min-h-screen  py-1 px-4 overflow-hidden flex flex-col items-center select-none">
      
      {/* HEADER SECTION */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blockEffect}
        className="w-full max-w-4xl flex flex-col items-center text-center mb-20"
      >
        <h2 className="text-white text-[55px] font-bold tracking-tight mb-1">
          Security You Can
        </h2>
        <h1 className="text-[115px] font-black uppercase bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(37,99,235,0.25)] leading-none mb-6">
          Trust
        </h1>
        <p className="text-slate-400 text-[16px] font-medium max-w-2xl leading-relaxed">
          Your money, data, and identity are protected with industry-leading technology and constant monitoring.
        </p>
      </motion.div>

      {/* STAGGERED ALIGNED SECURITY CONTENT BLOCKS */}
      <div className="w-full max-w-5xl flex flex-col gap-10 mb-20">
        
        {/* Block 1: Security Overview (Left Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
          <div className="flex flex-col pl-4">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Security Overview</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              At ORBIT, security isn't an add-on — it's the foundation. Every feature, transaction, and interaction is designed with protection, privacy, and reliability at its core, so you can manage your money with complete confidence.
            </p>
          </div>
        </motion.div>

        {/* Block 2: Data Protection (Right Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-end bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-blue-500" />
          <div className="flex flex-col pr-4 pl-2">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Data Protection</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              Your personal and financial data is encrypted end-to-end using advanced 256-bit encryption. From the moment you sign in to every transaction you make, your information stays private, secure, and inaccessible to unauthorized access.
            </p>
          </div>
        </motion.div>

        {/* Block 3: Account Security (Left Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
          <div className="flex flex-col pl-4">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Account Security</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              Multiple layers of authentication keep your account safe at all times. With secure login methods, device verification, and optional two-factor authentication, only you can access your ORBIT account.
            </p>
          </div>
        </motion.div>

        {/* Block 4: Transaction Safety (Right Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-end bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-blue-500" />
          <div className="flex flex-col pr-4 pl-2">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Transaction Safety</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              Every transaction is monitored in real time by intelligent fraud-detection systems. Suspicious activity is flagged instantly, ensuring your money is protected before issues can occur.
            </p>
          </div>
        </motion.div>

        {/* Block 5: Privacy First (Left Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
          <div className="flex flex-col pl-4">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Privacy First</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              We believe your data belongs to you. ORBIT never sells personal information and follows strict privacy standards to ensure transparency, control, and trust across all regions we operate in.
            </p>
          </div>
        </motion.div>

        {/* Block 6: Global Compliance (Right Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-end bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-blue-500" />
          <div className="flex flex-col pr-4 pl-2">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Global Compliance</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              ORBIT follows international financial regulations and security standards across all supported countries. Our systems are regularly audited to meet global compliance and security requirements.
            </p>
          </div>
        </motion.div>

        {/* Block 7: Real-Time Alerts (Left Aligned) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockEffect}
          className="w-[82%] self-start bg-[#121b33]/70 border border-slate-800/40 rounded-lg p-8 flex text-left relative shadow-xl overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600" />
          <div className="flex flex-col pl-4">
            <h3 className="text-white text-[22px] font-bold mb-3 tracking-wide">Real-Time Alerts</h3>
            <p className="text-slate-300 text-[15px] font-normal leading-relaxed">
              Stay informed with instant notifications for logins, transactions, and security updates. You'll always know what's happening with your account — in real time.
            </p>
          </div>
        </motion.div>

      </div>

      {/* CALL TO ACTION BUTTON WITH SMOOTH SLIDE-IN ICON ON HOVER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blockEffect}
        className="mt-4"
      >
        <Link 
          to="/signup"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-[15px] px-8 py-3.5 rounded-lg transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-0 overflow-hidden relative group"
        >
          <span>Get Started Free</span>
          
          {/* Smooth Dynamic Slider Arrow Box */}
          <div 
            className={`flex items-center justify-center transition-all duration-300 ease-out overflow-hidden ${
              isHovered ? 'w-5 ml-2.5 opacity-100' : 'w-0 ml-0 opacity-0'
            }`}
          >
            <HiArrowUpRight className="text-[16px] stroke-[1px]" />
          </div>
        </Link>
      </motion.div>

    </div>
  );
};

export default Security;