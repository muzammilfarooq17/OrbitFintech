import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../components/context/AuthContext';

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
import Dashboard from '../pages/Dashboard';

// Route Guard to prevent unauthenticated access
const PrivateGuard = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

// Layout Component for Public Pages (with Navbar & Footer)
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full px-20 pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const AppRoutesContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <div className="min-h-screen bg-[#05091c] bg-gradient-to-tr from-[#05091c] via-[#0b153a] to-[#030712] text-orbit-text flex flex-col font-sans">
            <Routes>
              
              {/* Nested inside MainLayout (Includes Navbar & Footer) */}
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

              {/* Authentication Routes (No Navbar or Footer) */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/video-demo" element={<VideoDemo />} />
              <Route path="/stats" element={<Stats />} />

              {/* Secure Independent Dashboard Route */}
              <Route 
                path="/dashboard" 
                element={
                  <PrivateGuard>
                    <Dashboard />
                  </PrivateGuard>
                } 
              />

            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

// Main App wrapper injecting Context safely globally
const AppRoutes = () => {
  return (
    <AuthProvider>
      <AppRoutesContent />
    </AuthProvider>
  );
};

export default AppRoutes;