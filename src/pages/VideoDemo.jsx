import { useState, useRef } from 'react';
import { FaPlay, FaArrowLeft, } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import BlurCard1 from '../assets/BlurCards/Blur Card 1.png'; // Top-Left
import BlurCard2 from '../assets/BlurCards/Blur Card 2.png'; // Bottom-Left
import BlurCard3 from '../assets/BlurCards/Blur Card 3.png'; // Top-Right
import BlurCard4 from '../assets/BlurCards/Blur CArd 4.png'; // Bottom-Right

// 1. Apni video file ko import karein ya public folder ka path use karein
// (Aap assets folder mein video rakh kar import kar sakte hain)
import DemoVideoFile from '../assets/Vedio/VedioDemo.mp4'; 

const VideoDemo = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Video play aur pause handle karne ka function
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:left-20 flex cursor-pointer items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 z-50 text-sm font-medium"
      >
        <FaArrowLeft /> Back to Home
      </button>

      {/* ================= BACKGROUND BLUR CARDS ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Card 1 */}
        <div className="absolute top-[10%] left-[-5%] md:left-[5%] w-[250px] md:w-[380px] rotate-[-15deg] filter blur-[4px] opacity-40 md:opacity-60">
          <img src={BlurCard2} alt="Orbit Card Blur Left" className="w-full h-auto object-contain" />
        </div>

        {/* Card 2 */}
        <div className="absolute bottom-[5%] left-[-10%] md:left-[2%] w-[280px] md:w-[420px] rotate-[25deg] filter blur-[6px] opacity-30 md:opacity-50">
          <img src={BlurCard1} alt="Orbit Card Blur Bottom Left" className="w-full h-auto object-contain" />
        </div>

        {/* Card 3 */}
        <div className="absolute top-[5%] right-[-5%] md:right-[5%] w-[260px] md:w-[400px] rotate-[35deg] filter blur-[5px] opacity-40 md:opacity-55">
          <img src={BlurCard3} alt="Orbit Card Blur Top Right" className="w-full h-auto object-contain" />
        </div>

        {/* Card 4 */}
        <div className="absolute bottom-[8%] right-[-8%] md:right-[3%] w-[270px] md:w-[410px] rotate-[-20deg] filter blur-[7px] opacity-30 md:opacity-50">
          <img src={BlurCard4} alt="Orbit Card Blur Bottom Right" className="w-full h-auto object-contain" />
        </div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] z-0"></div>
      </div>

      {/* ================= MAIN CONTENT (VIDEO PLAYER) ================= */}
      <div 
        onClick={handleVideoClick}
        className="relative cursor-pointer z-10 w-full max-w-4xl aspect-video rounded-2xl border border-white/10 bg-[#0b132b]/60 backdrop-blur-md shadow-2xl overflow-hidden group flex items-center justify-center transition-all duration-300 hover:border-blue-500/30"
      >
        
        {/* Actual HTML5 Video Tag */}
        <video
          ref={videoRef}
          src={DemoVideoFile}
          className="w-full h-full object-cover"
          controls={isPlaying} // Video play hone par default controls (timeline, volume) dikhenge
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        
        {/* Gradient Overlay: Video play hote hi ye transparent ho jayegi */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none transition-opacity duration-300 z-10 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* Custom Play/Pause Floating Button */}
        {!isPlaying && (
          <button className="absolute z-20 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white text-[#05091c] shadow-xl text-2xl md:text-3xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:bg-blue-500 group-hover:text-white cursor-pointer">
            <FaPlay className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        )}

        {/* Border Glow on Hover (Sirf tab dikhega jab video ruki hui ho) */}
        {!isPlaying && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl border border-blue-500/50 scale-[1.01]"></div>
        )}
      </div>

      {/* Text Info Under Video */}
      <div className="relative z-10 text-center mt-8 max-w-lg px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          See how Orbit Card works
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-2">
          Watch this quick 2-minute walkthrough to unlock the power of seamless smart networking.
        </p>
      </div>

    </div>
  );
};

export default VideoDemo;