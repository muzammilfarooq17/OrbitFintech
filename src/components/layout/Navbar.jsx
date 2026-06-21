import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full  bg-transparent ">
      <div className="max-w-7xl  mx-auto px-8 md:px-16 h-33 flex items-center justify-between  ">

        {/* 1. LOGO AREA (LEFT) */}
        <Link
          to="/"
          className="   flex items-center gap-2 group transition-transform active:scale-98"
        >
          <img
            src="/src/assets/images/logoo.png"
            alt="Orbit Logo"
            className="h-26 w-auto object-contain rounded-full select-none"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />

          <span className="text-2xl font-medium tracking-wider text-orbit-text hidden">
            ORBIT
          </span> 
        </Link>

        {/* 2. NAVIGATION LINKS (CENTER) */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`text-[23px] font-medium tracking-wide transition-colors duration-200 ${
              isActive('/')
                ? 'text-orbit-text'
                : 'text-slate-400 hover:text-orbit-text'
            }`}
          >
            Home
          </Link>

          <Link
            to="/features"
            className={`text-[23px] font-medium tracking-wide transition-colors duration-200 ${
              isActive('/features')
                ? 'text-orbit-text'
                : 'text-slate-400 hover:text-orbit-text'
            }`}
          >
            Features
          </Link>

          <Link
            to="/pricing"
            className={`text-[23px] font-medium tracking-wide transition-colors duration-200 ${
              isActive('/pricing')
                ? 'text-orbit-text'
                : 'text-slate-400 hover:text-orbit-text'
            }`}
          >
            Pricing
          </Link>

          <Link
            to="/about"
            className={`text-[23px] font-medium tracking-wide transition-colors duration-200 ${
              isActive('/about')
                ? 'text-orbit-text'
                : 'text-slate-400 hover:text-orbit-text'
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* 3. BUTTONS GROUP (RIGHT) */}
        <div className="flex items-center gap-4">
          {/* Sign Up Free Button WITH Hover Arrow-Bracket Icon */}
          <Link
            to="/signup"
            className="group/btn px-6 py-2.5 text-[15px] font-medium bg-orbit-primary text-white rounded-xl hover:bg-opacity-90 active:scale-95 transition duration-200 shadow-lg shadow-blue-600/20 flex items-center gap-2"
          >
            <span>Sign Up Free</span>
            
            {/* Smooth Icon transition wrapper layout */}
            <span className="inline-flex items-center text-[16px] font-light transition-all duration-300 transform group-hover/btn:translate-x-1">
              →]
            </span>
          </Link>

          <Link
            to="/login"
            className="px-6 py-2.5 text-[17px] font-medium bg-transparent text-orbit-text border border-white/20 rounded-md hover:bg-white/5 hover:border-white/40 active:scale-95 transition duration-200"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;