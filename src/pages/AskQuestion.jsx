import { useState } from 'react'; // Input state handle karne ke liye add kiya
import { motion } from 'framer-motion';
import { IoSendSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const AskQuestion = () => {
  // Input field ki value handle karne ke liye state
  const [question, setQuestion] = useState("");

  // Smooth staggered container config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Upward smooth slide-in for elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Submit hone par input clear karne ka function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Yahan aap apna API call ya submit logic daal sakte hain
    console.log("Submitted:", question);

    // Input refresh/clear karne ke liye
    setQuestion("");
  };

  return (
    <div className="w-full min-h-screen pt-3 pb-12 px-4 overflow-hidden relative select-none">
      
      {/* Background radial accent glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[230px] top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Main Animated Wrapper Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10"
      >
        {/* Subtitle / Top Header */}
        <motion.span 
          variants={itemVariants}
          className="text-white text-[52px] font-bold tracking-tight mb-1"
        >
          Ask a
        </motion.span>

        {/* Huge Highlighted QUESTION Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-[120px] font-black uppercase tracking-wider bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(37,99,235,0.25)] leading-none mb-6"
        >
          QUESTION
        </motion.h1>

        {/* Small Descriptive Secondary Text */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-300 text-[19px] font-medium tracking-wide mb-1"
        >
          Have a Question About Our Growth?
        </motion.p>

        {/* Micro Meta Description */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-400 text-[14px] font-normal mb-10 max-w-xl"
        >
          Curious about how Orbit scales across users, countries, and transactions?
        </motion.p>

        {/* PREMIUM INTERACTIVE CHAT CONTAINER */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-2xl bg-[#121b33]/60 border border-slate-800/60 rounded-xl p-4 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus-within:border-blue-500/50 transition-colors duration-300"
        >
          {/* Main Textarea input */}
          <textarea 
            placeholder="Ask a Question....." 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full min-h-[120px] bg-transparent resize-none text-white placeholder-slate-500 font-normal text-[15px] p-2 outline-none border-none border-transparent focus:ring-0"
          />

          {/* Action Footer controls panel inside box */}
          <div className="w-full flex items-center justify-between pt-2 border-t border-slate-800/50">
            
            {/* Left side attachment square utility button */}
            <button 
              type="button"
              className="w-9 h-9 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center rounded-lg transition-all duration-200 border border-slate-700/50 shadow-md active:scale-95 group"
            >
              <FaPlus className="text-[14px] group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Right side Submit message system button */}
            <button 
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-[14px] px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95 group overflow-hidden"
            >
              <span>Submit</span>
              {/* Icon container: Default par width-0 aur hidden rhega, hover par smoothly slide-in hoga */}
              <div className="w-0 opacity-0 max-w-0 scale-70 group-hover:w-4 group-hover:opacity-100 group-hover:max-w-[16px] group-hover:scale-100 transition-all duration-300 ease-out flex items-center justify-center">
                <IoSendSharp className="text-[13px] text-blue-100" />
              </div>
            </button>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AskQuestion;