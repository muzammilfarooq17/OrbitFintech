import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely
gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const containerRef = useRef(null);
  const tableWrapperRef = useRef(null);
  const faqWrapperRef = useRef(null);

  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/ month",
      description: "Get started with essentials",
      features: ["Basic transfers", "Virtual card", "Spending insights", "Email support"],
      isPopular: false,
      buttonStyle: "border border-blue-950/80 text-white hover:bg-blue-950/30"
    },
    {
      name: "Premium Plan",
      price: "$9.99",
      period: "/ month",
      description: "Full control, zero limits",
      features: ["Unlimited transfers", "Physical + virtual cards", "Advanced analytics", "Multi-currency accounts", "No foreign fees", "Priority support"],
      isPopular: true,
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700"
    },
    {
      name: "Business Plan",
      price: "$29.99",
      period: "/ month",
      description: "Built for growing teams",
      features: ["Team access", "Business analytics", "Expense management", "API access", "No foreign fees", "Dedicated manager"],
      isPopular: false,
      buttonStyle: "border border-blue-950/80 text-white hover:bg-blue-950/30"
    }
  ];

  const comparisonRows = [
    { free: "$0 / month", premium: "$9.99 / month", business: "$29.99 / month" },
    { free: "Personal use", premium: "Power users", business: "Teams & companies" },
    { free: "1 account", premium: "1 account", business: "Up to 5 team members" },
    { free: "Limited transfers", premium: "Unlimited transfers", business: "Unlimited transfers" },
    { free: "Virtual card", premium: "Virtual + physical card", business: "Cards for team members" },
    { free: "Basic analytics", premium: "Advanced analytics", business: "Business analytics" },
    { free: "Single currency", premium: "Multi-currency support", business: "Multi-currency support" },
    { free: "Standard security", premium: "Enhanced security", business: "Enterprise-grade security" },
    { free: "Email support", premium: "Priority support", business: "Dedicated account manager" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP: Comparison Table Reveal & Sequential Row Stagger
      gsap.fromTo(".comparison-title-animate", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".comparison-title-animate", start: "top 85%" } }
      );

      gsap.fromTo(".table-card-animate",
        { opacity: 0, scale: 0.96, y: 50 },
        { 
          opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".table-card-animate", start: "top 80%" }
        }
      );

      gsap.fromTo(".table-row-gsap", 
        { opacity: 0, x: -15 },
        { 
          opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".table-card-animate", start: "top 60%" }
        }
      );

      // 2. GSAP: FAQ Section Headline and staggered card entries
      gsap.fromTo(".faq-title-animate",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".faq-title-animate", start: "top 85%" } }
      );

      gsap.fromTo(".faq-card-gsap",
        { opacity: 0, y: 50, scale: 0.93 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.12, ease: "back.out(1.1)",
          scrollTrigger: { trigger: ".faq-grid-trigger", start: "top 75%" }
        }
      );

      gsap.fromTo(".faq-btn-animate",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: ".faq-btn-animate", start: "top 90%" } }
      );

    }, containerRef);

    return () => ctx.revert(); // Clean up triggers smoothly
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden ">
      
      {/* 1. HERO & CARDS (Framer Motion For Instant Initial View Load) */}
      <section className="text-gray-300 py-20 flex flex-col justify-center items-center font-sans w-full select-none">
        
        {/* Header Section Animation */}
        <motion.div 
          className="text-center mb-15 w-[1200px]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-white text-[70px] font-semibold tracking-tight leading-none">
            One Platform. Fair
          </h2>
          <h1 className="text-[120px] font-extrabold bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent mt-[-1px] mb-0 uppercase leading-none">
            Pricing
          </h1>
          <p className="text-gray-300 text-[20px] mt-4 tracking-wide">
            Choose a plan that fits your lifestyle — upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Grid Layout Animation */}
        <div className="grid grid-cols-3 gap-8 w-[1200px] px-4 items-stretch mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: plan.isPopular ? -12 : 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col justify-between rounded-xl bg-[#0d1527]/50 backdrop-blur-md p-9 border w-full min-h-[580px] ${
                plan.isPopular 
                  ? 'border-blue-600 shadow-2xl shadow-blue-950/50' 
                  : 'border-slate-800/70 hover:border-slate-700/80'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-white text-2xl font-semibold mb-5">{plan.name}</h3>
                
                <div className="space-y-1.5 mb-6">
                  <p className="text-gray-400 text-sm tracking-wide">
                    Price: <span className="text-white font-semibold text-base">{plan.price}</span>{plan.period}
                  </p>
                  <p className="text-gray-400 text-sm tracking-wide">{plan.description}</p>
                </div>

                <hr className="border-slate-800/60 my-6" />

                <div className="mb-8">
                  <p className="text-white text-xs font-bold tracking-widest uppercase mb-5 opacity-90">
                    Feature List
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300 font-normal tracking-wide">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-3.5 shrink-0 shadow-sm shadow-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/signup">
                  <button
                    className={`group w-full py-3.5 px-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${plan.buttonStyle}`}
                  >
                    <span>Get Now</span>
                    <FaArrowRight className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300" />
                  </button>
                </Link>

                {index === 0 && (
                  <Link to="/signup">
                    <p className="text-center text-xs text-gray-500 mt-4 cursor-pointer hover:underline hover:text-gray-400 transition-colors">
                      Have an existing plan? See billing help
                    </p>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. PRICING COMPARISON TABLE SECTION (GSAP ScrollTrigger Dynamic Effects) */}
        <div ref={tableWrapperRef} className="w-[1200px] px-4 flex flex-col items-center pt-10">
          <h2 className="comparison-title-animate text-white text-5xl font-bold tracking-tight mb-8 text-center opacity-0">
            Pricing Comparison
          </h2>

          <div className="table-card-animate w-full bg-[#0d1527]/100 border border-slate-900/40 rounded-xl p-12 flex flex-col items-center opacity-0">
            <div className="grid grid-cols-3 w-full text-left cursor-pointer ml-43 pb-4 border-b border-slate-800/40">
              <h4 className="text-white text-[34px] font-bold tracking-wide pl-4">Free</h4>
              <h4 className="text-white text-[34px] font-bold tracking-wide pl-4">Premium</h4>
              <h4 className="text-white text-[34px] font-bold tracking-wide pl-4">Business</h4>
            </div>

            <div className="w-full flex flex-col py-6">
              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx} 
                  className="table-row-gsap grid grid-cols-3 w-full py-2 text-left ml-23 cursor-pointer text-gray-300 font-normal text-[15px] tracking-wide hover:bg-slate-800/20 rounded-lg transition-colors opacity-0"
                >
                  <span className="pl-4 py-1 block">{row.free}</span>
                  <span className="pl-4 py-1 block">{row.premium}</span>
                  <span className="pl-4 py-1 block">{row.business}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/signup">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer">
                  <span>Watch Demo</span>
                  <FaArrowRight className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-4 transition-all duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 3. FAQ SECTION (GSAP Advanced Scroll Animations) */}
      <section ref={faqWrapperRef} className="w-full py-20 flex flex-col items-center">
        <div className="faq-title-animate text-center mb-15 opacity-0">
          <h2 className="text-[46px] font-bold text-white tracking-tight mb-0">
            Frequently Asked Questions
          </h2>
          <p className="text-[22px] text-gray-300">
            Quick answers to common questions about ORBIT
          </p>
        </div>

        <div className="faq-grid-trigger grid grid-cols-2 gap-x-10 gap-y-33 w-[1200px] px-4">
          {[
            { num: '01', q: 'Can I change my plan anytime?',                  a: 'Yes, you can upgrade or downgrade your plan at any time directly from your account settings. Changes take effect immediately, so you always stay in control without any interruption to your services.' },
            { num: '02', q: 'Is there a free trial available?',               a: 'Absolutely. We offer a 30-day free trial on our Premium plan so you can explore advanced features like unlimited transfers, analytics, and multi-currency accounts before committing.' },
            { num: '03', q: 'Are there any hidden fees?',                     a: 'No. Transparency is at the core of ORBIT. What you see is what you pay—no hidden charges, no surprise deductions, and no unnecessary fees at any stage.' },
            { num: '04', q: 'How secure is my money and data?',               a: 'Your security is our top priority. ORBIT uses bank-grade encryption, two-factor authentication, and real-time fraud monitoring to keep your funds and personal information fully protected.' },
            { num: '05', q: 'Which countries and currencies are supported?',  a: 'ORBIT supports users in 150+ countries with access to multiple currencies. You can send, receive, and hold money globally with real exchange rates and zero conversion fees on eligible plans.' },
            { num: '06', q: 'What payment methods are supported?',            a: 'We support all major debit and credit cards, as well as bank transfers in supported regions, making it easy to add funds and manage your account seamlessly.' },
            { num: '07', q: 'Can I cancel my subscription anytime?',          a: "Yes. There's no long-term commitment. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing cycle." },
            { num: '08', q: 'Is my money safe with ORBIT?',                   a: 'Yes. ORBIT uses bank-grade encryption, real-time fraud monitoring, and multi-layer security to keep your money fully protected at all times.' },
          ].map((faq) => (
            <div key={faq.num} className="faq-card-gsap flex gap-5 opacity-0">
              <div className="shrink-0 w-18 h-18 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[22px] shadow-[0_4px_15px_rgba(37,99,235,0.45)]">
                {faq.num}
              </div>
              <div>
                <h3 className="text-[28px] font-semibold text-white mb-4">{faq.q}</h3>
                <p className="text-[22px] text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-btn-animate flex justify-center mt-14 opacity-0">
          <Link
            to="/contact"
            className="group px-8 py-3 mt-11 bg-blue-600 text-white font-medium text-[18px] rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] flex items-center justify-center"
          >
            <span>Ask a Question</span>
            <FiMessageCircle className="ml-0 w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PricingSection;