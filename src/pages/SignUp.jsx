import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signup(email, password);
      // Agar user details save karni hon tou future mein Firestore bhi lag sakta hai
      alert("Sign Up Successful!");
      navigate('/login'); 
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
          to="/" 
          className="px-6 py-2.5 text-sm font-medium border border-white/20 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition duration-200"
        >
          Return to Home Page
        </Link>
      </header>

      {/* CENTER INNER BODY FOR DESKTOP VIEWPORTS */}
      <div className="flex-1 flex flex-col items-center justify-center pb-12">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Create Your Orbit Account
          </h1>
          <p className="text-slate-400 text-[16px] mt-2">
            Start Managing Your Money Smarter, Faster, And Your Way.
          </p>
        </div>

        {/* SIGN UP BOX CONTAINER */}
        <div className="w-[520px] bg-[#0f172a]/90 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60">
          <h2 className="text-2xl font-bold text-center mb-6 tracking-wide text-white">Sign Up</h2>
          
          {/* Error Message Space */}
          {error && <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">{error}</div>}

          <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4 text-left">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="First Name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-[#1e293b]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition text-[15px]"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Last Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Last Name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-[#1e293b]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition text-[15px]"
                />
              </div>
            </div>

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

            <div className="flex items-center justify-end gap-2 mt-1 select-none">
              <input 
                type="checkbox" 
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded bg-[#1e293b] border-white/20 accent-blue-600 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-sm text-slate-400 cursor-pointer hover:text-slate-300 transition">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-xl text-[16px] transition active:scale-[0.99] shadow-lg shadow-blue-600/20"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline font-medium">
              Login Your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;