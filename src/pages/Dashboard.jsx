import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth'; 
import { useNavigate, Link } from 'react-router-dom'; // Link add kiya hai home navigation ke liye
import DashboardPreloader from './DashboardPreloader';
import { FiSettings, FiBell, FiMoreVertical, FiHome, FiCreditCard, FiTruck, FiShoppingBag, FiActivity, FiArrowLeft } from 'react-icons/fi';

const Dashboard = () => {
  const [isLodingDashboard, setIsLoadingDashboard] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

  // Dynamically checking current user details
  const currentUser = auth.currentUser;
  const userName = currentUser?.displayName || currentUser?.email?.split('@')[0] || 'User';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDashboard(false);
    }, 2500); // 2.5 seconds preloader window
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  if (isLodingDashboard) {
    return <DashboardPreloader />;
  }

  return (
    <div className="min-h-screen bg-[#030616] text-white font-sans selection:bg-blue-500/30">
      
      {/* DASHBOARD NAVBAR */}
      <header className="h-20 border-b border-white/[0.04] bg-[#060b24] px-12 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-8">
          
          {/* HOVER BACK TO HOME BUTTON */}
          <Link 
            to="/" 
            className="group flex items-center gap-2 bg-white/5 hover:bg-blue-600/20 border border-white/[0.05] hover:border-blue-500/40 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
            title="Go to Home"
          >
            <FiArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            {/* Yeh text sirf tabhi khulega aur dikhega jab user mouse upar lekar aayega */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-all duration-500 ease-in-out whitespace-nowrap">
              Back Home
            </span>
          </Link>

          <div className="flex items-center">
            {/* ORBIT SVG LOGO */}
        <svg
          className="h-16 w-auto text-white select-none filter drop-shadow-[0_0_10px_rgba(6,182,212,0.15)]"
          viewBox="0 0 240 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="120" cy="60" rx="109" ry="32" stroke="currentColor" strokeWidth="3.5" transform="rotate(-16 120 60)" />
          <circle cx="212" cy="21" r="9" fill="#00f0ff" filter="url(#glow)" className="animate-pulse" />
          <circle cx="20" cy="91" r="13" fill="#00f0ff" filter="url(#glow)" className="animate-pulse" />
          <text x="120" y="72" fill="currentColor" fontSize="46" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="-1">
            ORBIT
          </text>
        </svg>
          </div>
          <nav className="flex items-center gap-8 text-[15px] font-medium text-slate-400">
            <span className="text-white border-b-2 border-blue-500 pb-1 cursor-pointer">Overview</span>
            <span className="hover:text-white transition-colors cursor-pointer">Transactions</span>
            <span className="hover:text-white transition-colors cursor-pointer">Analytics</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accounts</span>
            <span className="hover:text-white transition-colors cursor-pointer">Wallet</span>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <FiSettings className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
          <FiBell className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
            alt="Profile" 
            className="w-9 h-9 rounded-full border border-blue-500/50 cursor-pointer object-cover"
            onClick={handleLogout} 
            title="Click to Logout"
          />
        </div>
      </header>

      {/* DASHBOARD MAIN CONTENT BODY */}
      <main className="p-12 max-w-7xl mx-auto space-y-10">
        
        {/* HEADER GREETING */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold tracking-wide capitalize">Hello {userName}!</h1>
          <div className="bg-[#0b1231] border border-white/[0.05] p-1 rounded-xl flex gap-1 text-[13px] font-medium text-slate-400">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg">This month</button>
            <button className="px-4 py-1.5 rounded-lg hover:text-white">Last month</button>
            <button className="px-4 py-1.5 rounded-lg hover:text-white">This year</button>
            <button className="px-4 py-1.5 rounded-lg hover:text-white">Last 12 months</button>
          </div>
        </div>

        {/* METRICS CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#060c29] border border-white/[0.05] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <p className="text-slate-400 text-sm font-medium mb-2">Balance</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-bold text-blue-500 tracking-wide">$5,502.45</h3>
              <span className="text-[11px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">↑ 12.5%</span>
            </div>
          </div>

          <div className="bg-[#060c29] border border-white/[0.05] rounded-2xl p-6 shadow-2xl">
            <p className="text-slate-400 text-sm font-medium mb-2">Incomes</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-bold text-white tracking-wide">$9,450.00</h3>
              <span className="text-[11px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">↑ 27%</span>
            </div>
          </div>

          <div className="bg-[#060c29] border border-white/[0.05] rounded-2xl p-6 shadow-2xl">
            <p className="text-slate-400 text-sm font-medium mb-2">Expenses</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-bold text-white tracking-wide">$3,945.55</h3>
              <span className="text-[11px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">↓ -15%</span>
            </div>
          </div>
        </div>

        {/* ACTION BUTTON BOXES BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#060c29]/60 border border-white/[0.03] rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex justify-center items-center text-green-400 font-bold text-xl">+</div>
            <div>
              <h4 className="font-semibold text-[15px]">Add income</h4>
              <p className="text-xs text-slate-500">Create an income manually</p>
            </div>
          </div>
          <div className="bg-[#060c29]/60 border border-white/[0.03] rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex justify-center items-center text-red-400 font-bold text-xl">-</div>
            <div>
              <h4 className="font-semibold text-[15px]">Add expense</h4>
              <p className="text-xs text-slate-500">Create an expense manually</p>
            </div>
          </div>
          <div className="bg-[#060c29]/60 border border-white/[0.03] rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex justify-center items-center text-blue-400 text-lg">⇄</div>
            <div>
              <h4 className="font-semibold text-[15px]">Transfer money</h4>
              <p className="text-xs text-slate-500">Select the amount and make a transfer</p>
            </div>
          </div>
        </div>

        {/* DATA VISUALIZATION SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: PIE CHART + CATEGORY LIST */}
          <div className="bg-[#060c29] border border-white/[0.04] rounded-2xl p-6 lg:col-span-1 flex flex-col items-center">
            <h4 className="text-sm font-semibold text-slate-300 w-full mb-6">Expenses by category</h4>
            
            {/* Doughnut Chart Display */}
            <div className="w-44 h-44 relative flex justify-center items-center mb-8">
              <div className="w-full h-full rounded-full border-[22px] border-t-red-500 border-r-purple-500 border-b-cyan-500 border-l-green-600 shadow-[0_0_20px_rgba(59,130,246,0.1)]" />
              <div className="absolute text-center">
                <span className="text-xs text-slate-400 block font-medium">Main Area</span>
                <span className="text-lg font-bold">74%</span>
              </div>
            </div>

            {/* Category Details List */}
            <div className="w-full space-y-3.5 border-t border-white/[0.04] pt-5">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex justify-center items-center text-purple-400">
                    <FiHome className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-medium">House</span>
                </div>
                <span className="font-semibold text-slate-400">41,35%</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 flex justify-center items-center text-red-400">
                    <FiCreditCard className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-medium">Credit card</span>
                </div>
                <span className="font-semibold text-slate-400">21,51%</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex justify-center items-center text-cyan-400">
                    <FiTruck className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-medium">Transportation</span>
                </div>
                <span className="font-semibold text-slate-400">13,47%</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 flex justify-center items-center text-green-400">
                    <FiShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-medium">Groceries</span>
                </div>
                <span className="font-semibold text-slate-400">9,97%</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-yellow-500/10 flex justify-center items-center text-yellow-400">
                    <FiActivity className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300 font-medium">Shopping</span>
                </div>
                <span className="font-semibold text-slate-400">3,35%</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EXPANDED TRANSACTIONS LIST */}
          <div className="bg-[#060c29] border border-white/[0.04] rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-1">Last transactions</h4>
              <p className="text-xs text-slate-500 mb-6">Check your last transactions</p>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-400 flex justify-center items-center text-xs font-bold border border-blue-500/20">OR</div>
                    <div>
                      <p className="font-medium text-slate-200">Orlando Rodrigues</p>
                      <p className="text-xs text-slate-500">Bank account • 2024/04/01</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-green-400 font-semibold">+$750.00</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-600/10 text-red-500 flex justify-center items-center text-xs font-bold border border-red-500/20">NF</div>
                    <div>
                      <p className="font-medium text-slate-200">Netflix</p>
                      <p className="text-xs text-slate-500">Credit card • 2024/03/29</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 font-semibold">-$9.90</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-500/10 text-green-400 flex justify-center items-center text-xs font-bold border border-green-500/20">SP</div>
                    <div>
                      <p className="font-medium text-slate-200">Spotify</p>
                      <p className="text-xs text-slate-500">Credit card • 2024/03/29</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 font-semibold">-$19.90</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex justify-center items-center text-xs font-bold border border-emerald-500/20">CA</div>
                    <div>
                      <p className="font-medium text-slate-200">Carl Andrew</p>
                      <p className="text-xs text-slate-500">Bank account • 2024/03/27</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-green-400 font-semibold">+$400.00</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-400 flex justify-center items-center text-xs font-bold border border-orange-500/20">CM</div>
                    <div>
                      <p className="font-medium text-slate-200">Carrefour Market</p>
                      <p className="text-xs text-slate-500">Credit card • 2024/03/26</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 font-semibold">-$64.33</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-500/10 text-yellow-500 flex justify-center items-center text-xs font-bold border border-yellow-500/20">AM</div>
                    <div>
                      <p className="font-medium text-slate-200">Amazon</p>
                      <p className="text-xs text-slate-500">Credit card • 2024/03/24</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 font-semibold">-$147.90</span>
                    <FiMoreVertical className="text-slate-500 hover:text-white cursor-pointer w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full text-center text-xs text-blue-500 hover:text-blue-400 font-medium pt-4 transition-colors">
              View All Transactions
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;