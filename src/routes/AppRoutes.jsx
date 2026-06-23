import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout layers
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Preloader from '../components/layout/Preloader';

// Import Pages
import Home from '../pages/Home'; 
import SignUp from '../pages/SignUp'
import Login from '../pages/Login';   

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Agar loading true hai toh sirf full-screen loader chalega */}
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          {/* Main Container has automatic CSS ease-in fade entrance */}
<div className="min-h-screen bg-[#05091c] bg-gradient-to-tr from-[#05091c] via-[#0b153a] to-[#030712] text-orbit-text flex flex-col font-sans animate-[fadeIn_0.6s_ease-out]">

            <Routes>
              
              {/* LANDING PAGE ROUTE (Contains sequential animations inside) */}
              <Route 
                path="/" 
                element={
                  <>
                    <div className="animate-[slideDown_0.5s_ease-out_forwards]">
                      <Navbar />
                    </div>
                    
                    <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-12 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                      <Home />
                    </main>
                    
                    <div className="animate-[fadeIn_0.8s_ease-out_0.4s_both]">
                      <Footer />
                    </div>
                  </>
                } 
              />

              {/* AUTH STRIPPED DESKTOP PAGES */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

export default AppRoutes;