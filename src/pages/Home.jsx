import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';

import card1 from '../assets/images/Card 1 (1).png';
import card2 from '../assets/images/Card 2.png';
import card3 from '../assets/images/Card 3 (1).png';

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-between py-12 gap-12 overflow-hidden select-none">

      {/* LEFT CONTENT */}
      <div className="w-[50%]">

        {/* Heading */}
        <h1 className="font-extrabold tracking-tight text-white mb-6 uppercase">
          <span className="text-[54px] font-bold tracking-normal block leading-none text-slate-100 opacity-95">
            All Your Money in
          </span>

          <span className="text-[175px] font-black tracking-[-0.03em] block leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#1D4ED8] to-[#1E40AF] drop-shadow-[0_10px_50px_rgba(31,79,216,0.35)]">
            ORBIT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[19px] text-gray-400 font-normal leading-relaxed max-w-xl mb-10">
          Send, manage, and grow your money securely with real time insights and
          zero hidden fees.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5 mb-16">

          <Link
            to="/signup"
            className="group px-8 py-3.5 bg-blue-600 text-white font-medium text-[17px] rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
          >
            <span>Get Started Free</span>

            <FaRegArrowAltCircleUp
              className="
                ml-0
                w-0
                opacity-0
                overflow-hidden
                transition-all
                duration-300
                group-hover:ml-2
                group-hover:w-4
                group-hover:opacity-100
              "
            />
          </Link>

          <Link
            to="/demo"
            className="group px-8 py-3.5 bg-transparent text-white border border-gray-700 font-medium text-[17px] rounded-xl hover:bg-white/5 hover:border-gray-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
          >
            <span>Watch Demo</span>

            <FaPlay
              className="
                ml-0
                w-0
                opacity-0
                overflow-hidden
                transition-all
                duration-300
                group-hover:ml-2.5
                group-hover:w-3.5
                group-hover:opacity-100
                text-blue-400
              "
            />
          </Link>

        </div>

        {/* Stats Card */}
        <div className="inline-flex items-center gap-14 bg-[#0B1224]/80 border border-white/[0.05] rounded-2xl px-12 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md">

          <div className="flex flex-col min-w-[100px]">
            <div className="w-24 h-[4px] bg-white/20 rounded-full overflow-hidden mb-5">
              <div className="w-[70%] h-full bg-blue-600 rounded-full" />
            </div>

            <div className="text-[28px] font-bold text-white">$5B+</div>
            <div className="text-[14px] text-gray-400 mt-2">
              Transferred
            </div>
          </div>

          <div className="flex flex-col min-w-[100px]">
            <div className="w-24 h-[4px] bg-white/20 rounded-full overflow-hidden mb-5">
              <div className="w-[85%] h-full bg-blue-600 rounded-full" />
            </div>

            <div className="text-[28px] font-bold text-white">150+</div>
            <div className="text-[14px] text-gray-400 mt-2">
              Countries
            </div>
          </div>

          <div className="flex flex-col min-w-[100px]">
            <div className="w-24 h-[4px] bg-white/20 rounded-full overflow-hidden mb-5">
              <div className="w-full h-full bg-blue-600 rounded-full" />
            </div>

            <div className="text-[28px] font-bold text-white">2M+</div>
            <div className="text-[14px] text-gray-400 mt-2">
              Active Users
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[50%] relative h-[650px] flex items-center justify-center">

        {/* Top Card */}
        <div className="absolute top-0 left-10 w-[420px] -rotate-12 z-10 transition-all duration-500 hover:-translate-y-4 hover:-rotate-8">
          <img
            src={card2}
            alt="Orbit Blue Card"
            className="w-full object-contain rounded-[24px] shadow-2xl filter brightness-100 contrast-100"
          />
        </div>

        {/* Center Main Card */}
        <div className="absolute top-[150px] right-0 w-[470px] z-20 transition-all duration-500 hover:-translate-y-5 hover:rotate-2">
          <img
            src={card1}
            alt="Orbit Premium Card"
            className="w-full object-contain rounded-[24px] shadow-2xl filter brightness-100 contrast-100"
          />
        </div>

        {/* Bottom Card */}
        <div className="absolute bottom-0 left-0 w-[420px] rotate-[10deg] z-10 transition-all duration-500 hover:translate-y-2 hover:rotate-[14deg]">
          <img
            src={card3}
            alt="Orbit Digital Card"
            className="w-full object-contain rounded-[24px] shadow-2xl filter brightness-100 contrast-100"
          />
        </div>

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] -z-10" />

      </div>

    </div>
  );
};

export default Home;