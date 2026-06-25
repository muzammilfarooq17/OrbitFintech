import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Preloader from '../components/layout/Preloader';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

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

              <Route
                path="/"
                element={
                  <>
                    {/* Navbar — same max-w + padding as main content */}
                    <Navbar />

                    {/* MAIN — max-w-7xl, px-12 on all sizes, centered */}
                    <main className="flex-grow w-full px-20 pt-[80px]">
                      <Home />
                    </main>

                    <Footer />
                  </>
                }
              />

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