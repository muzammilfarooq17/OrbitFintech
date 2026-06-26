import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import DashboardPreloader from './DashboardPreloader';
import { FiSettings, FiBell } from 'react-icons/fi';

const Dashboard = () => {
  const [isLodingDashboard, setIsLoadingDashboard] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

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
        <div className="flex items-center gap-12">
          <div className="text-xl font-black tracking-wider text-white">ORBIT</div>
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
          <h1 className="text-3xl font-semibold tracking-wide">Hello ...</h1>
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

        {/* DATA VISUALIZATION SECTIONS (PIE CHART & LIST) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#060c29] border border-dashed border-blue-500/30 rounded-2xl p-6 lg:col-span-1 flex flex-col items-center">
            <h4 className="text-sm font-semibold text-slate-300 w-full mb-6">Expenses by category</h4>
            <div className="w-44 h-44 relative flex justify-center items-center">
              {/* Doughnut structure layout using raw pure CSS borders alignment matching your pic */}
              <div className="w-full h-full rounded-full border-[24px] border-t-red-500 border-r-purple-500 border-b-cyan-500 border-l-green-600 animate-spin-[spin_10s_linear_infinite]" />
              <div className="absolute text-center">
                <span className="text-xs text-slate-400 block font-medium">Main Area</span>
                <span className="text-lg font-bold">74%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#060c29] border border-dashed border-blue-500/30 rounded-2xl p-6 lg:col-span-2">
            <h4 className="text-sm font-semibold text-slate-300 mb-1">Last transactions</h4>
            <p className="text-xs text-slate-500 mb-6">Check your last transactions</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-white/[0.03] pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex justify-center items-center text-xs font-bold">OR</div>
                  <div>
                    <p className="font-medium">Orlando Rodrigues</p>
                    <p className="text-xs text-slate-500">Bank account • 2024/04/01</p>
                  </div>
                </div>
                <span className="text-green-400 font-semibold">+$750.00</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex justify-center items-center text-[10px] font-bold">N</div>
                  <div>
                    <p className="font-medium">Netflix</p>
                    <p className="text-xs text-slate-500">Credit card • 2024/03/29</p>
                  </div>
                </div>
                <span className="text-white font-semibold">-$9.90</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;