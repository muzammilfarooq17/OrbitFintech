import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Preloader from '../components/layout/Preloader';

// Import All Your Pages
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Features from '../pages/Features';
import AskQuestion from '../pages/AskQuestion';
import Security from '../pages/Security';
import AboutUs from '../pages/AboutUs';
import Pricing from '../pages/Pricing';
import Stats from '../pages/Stats';

import VideoDemo from '../pages/VideoDemo';


// 1. Define the Layout Component for Public Pages (with Navbar & Footer)
const MainLayout = () => {
  return (
    <>
      {/* Navbar — same max-w + padding as main content */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow w-full px-20 pt-[80px]">
        {/* Outlet acts as a placeholder for whichever child route is matched */}
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <div className="min-h-screen bg-[#05091c] bg-gradient-to-tr from-[#05091c] via-[#0b153a] to-[#030712] text-orbit-text flex flex-col font-sans">
            <Routes>
              
              {/* 2. Routes nested INSIDE MainLayout will render with Navbar & Footer */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/ask-question" element={<AskQuestion />} />
                <Route path="/security" element={<Security />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/video-demo" element={<VideoDemo />} />
              </Route>

              {/* 3. Authentication Routes nested OUTSIDE (No Navbar or Footer) */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              <Route path="/video-demo" element={<VideoDemo />} />
              <Route path="/stats" element={<Stats />} />

            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

export default AppRoutes;