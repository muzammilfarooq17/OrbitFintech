import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your global layout components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Import your Home page placeholder
import Home from '../pages/Home'; 

const AppRoutes = () => {
  return (
    <Router>
      {/* REMOVED mr-25 and ml-25 from here. 
        The background gradient now displays edge-to-edge beautifully!
      */}
      <div className="bg-orbit-bg   min-h-screen text-orbit-text flex flex-col font-sans">
        
        {/* Navbar sits safely at the top and covers the full viewport width */}
        <Navbar />

        {/* This is where your layout grid lives. 
          max-w-7xl limits the content container width on wide monitors.
          mx-auto centers your layouts on the monitor automatically.
          px-6 md:px-12 ensures the text never touches screen boundaries on mobile screens.
        */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-6 md:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer sits at the bottom matching page grid alignments */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;