import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Sahi path yeh hona chahiye:
import { useAuth } from '../components/context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/'); // Redirect to Core Landing State
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#05091c] bg-gradient-to-tr from-[#05091c] via-[#0b153a] to-[#030712] overflow-hidden flex flex-col text-white font-sans min-w-[1280px]">
      
      {/* FIXED TOP NAVBAR */}
      <header className="w-full max-w-7xl mx-auto px-16 h-[90px] flex items-center justify-between border-b border-white/10 flex-shrink-0">
        <Link to="/">
          <img 
            src="/src/assets/images/Desktop - 1.png" 
            alt="Orbit Logo" 
            className="h-14 w-auto object-contain contrast-200 brightness-150 mix-blend-color-burn"
          />
        </Link>
        <Link 
          to="/signup" 
          className="px-6 py-2.5 text-sm font-medium border border-white/20 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition duration-200"
        >
          Return to Sign Up Page
        </Link>
      </header>

      {/* CENTER INNER BODY FOR DESKTOP VIEWPORTS */}
      <div className="flex-1 flex flex-col items-center justify-center pb-12">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Welcome Back To Orbit
          </h1>
          <p className="text-slate-400 text-[16px] mt-2">
            Access Your Money. Stay In Control. Anytime, Anywhere.
          </p>
        </div>

        {/* LOGIN BOX CONTAINER */}
        <div className="w-[520px] bg-[#0f172a]/90 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60">
          <h2 className="text-2xl font-bold text-center mb-6 tracking-wide text-white">Login</h2>
          
          {/* Error Message Space */}
          {error && <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">{error}</div>}

          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enter Your Email</label>
              <input 
                type="email" 
                required
                placeholder="E-Mail Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-[#1e293b]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition text-[15px]"
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enter Your Password</label>
              <input 
                type="password" 
                required
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl bg-[#1e293b]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition text-[15px]"
              />
            </div>

            <div className="flex items-center justify-between mt-1 select-none text-sm">
              <span className="text-blue-500/80 hover:text-blue-400 cursor-pointer hover:underline transition">
                Forgot Password?
              </span>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="rememberMeLogin"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#1e293b] border-white/20 accent-blue-600 cursor-pointer"
                />
                <label htmlFor="rememberMeLogin" className="text-slate-400 cursor-pointer hover:text-slate-300 transition">
                  Remember Me
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-xl text-[16px] transition active:scale-[0.99] shadow-lg shadow-blue-600/20"
            >
              {loading ? "Verifying..." : "Login"}
            </button>
          </form>

          {/* SOCIAL SEPARATOR */}
          <div className="relative flex py-3 items-center my-3">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-xs text-slate-500 tracking-widest uppercase">Or Connect With</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* STATIC SOCIAL BRAND PLACEMENTS */}
          <div className="flex flex-col gap-3">
            <button 
              type="button"
              onClick={() => alert("Google Provider Disable kiya hua hai.")}
              className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl text-[15px] transition flex items-center justify-center gap-3 active:scale-[0.99]"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="h-5 w-5" />
              <span>Sign in with Google</span>
            </button>

            <button 
              type="button"
              onClick={() => alert("Apple Login Triggered")}
              className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl text-[15px] transition flex items-center justify-center gap-3 active:scale-[0.99]"
            >
              <span className="text-xl pb-1"></span>
              <span>Sign in with Apple</span>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline font-medium">
              Create a free account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;