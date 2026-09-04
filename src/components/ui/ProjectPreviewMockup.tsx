import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { Terminal, BarChart2, TrendingUp, Sparkles, CheckCircle2, SlidersHorizontal, RefreshCw, Send, Check } from 'lucide-react';

export const ProjectPreviewMockup: React.FC<{ project: Project; isExpanded?: boolean }> = ({ project, isExpanded = false }) => {
  // 1. State for Personal Portfolio Website Interactive Simulator
  const [portfolioTab, setPortfolioTab] = useState<'home' | 'about' | 'skills' | 'contact'>('home');
  const [ajaxStatus, setAjaxStatus] = useState<string | null>(null);
  const [ajaxInput, setAjaxInput] = useState('');

  // 2. State for Blinkit Sales Dashboard Interactive Slicer Simulator
  const [blinkitTier, setBlinkitTier] = useState<'All' | 'Tier 1' | 'Tier 2' | 'Tier 3'>('All');
  const [blinkitFat, setBlinkitFat] = useState<'All' | 'Low Fat' | 'Regular'>('All');
  const [blinkitSize, setBlinkitSize] = useState<'All' | 'High' | 'Medium' | 'Small'>('All');

  // 3. State for Super Store Sales Dashboard Interactive Slicer Simulator
  const [storeCategory, setStoreCategory] = useState<'All' | 'Technology' | 'Furniture' | 'Office Supplies'>('All');
  const [storeRegion, setStoreRegion] = useState<'All' | 'East' | 'West' | 'Central' | 'South'>('All');

  // Dynamic calculations for Blinkit simulation
  const getBlinkitMetrics = () => {
    let sales = 1.20;
    let items = 8523;
    let rating = 3.9;

    if (blinkitTier === 'Tier 1') { sales *= 0.28; items = 2380; rating = 4.1; }
    else if (blinkitTier === 'Tier 2') { sales *= 0.33; items = 2810; rating = 3.9; }
    else if (blinkitTier === 'Tier 3') { sales *= 0.39; items = 3333; rating = 3.8; }

    if (blinkitFat === 'Low Fat') { sales *= 0.64; items = Math.round(items * 0.65); }
    else if (blinkitFat === 'Regular') { sales *= 0.36; items = Math.round(items * 0.35); }

    if (blinkitSize === 'High') { sales *= 0.45; }
    else if (blinkitSize === 'Medium') { sales *= 0.35; }
    else if (blinkitSize === 'Small') { sales *= 0.20; }

    return {
      sales: `$${sales.toFixed(2)}M`,
      items: items.toLocaleString(),
      rating: `${rating.toFixed(1)} ★`
    };
  };

  // Dynamic calculations for Super Store simulation
  const getStoreMetrics = () => {
    let sales = 2.30;
    let profit = 286.4;
    let margin = '12.5%';

    if (storeCategory === 'Technology') { sales = 0.84; profit = 145.2; margin = '17.3%'; }
    else if (storeCategory === 'Furniture') { sales = 0.74; profit = 18.5; margin = '2.5%'; }
    else if (storeCategory === 'Office Supplies') { sales = 0.72; profit = 122.7; margin = '17.0%'; }

    if (storeRegion !== 'All') {
      sales *= 0.25;
      profit *= 0.25;
    }

    return {
      sales: `$${sales.toFixed(2)}M`,
      profit: `$${profit.toFixed(1)}k`,
      margin
    };
  };

  const handleAjaxTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ajaxInput.trim()) return;
    setAjaxStatus('Submitting via FormSubmit AJAX API...');
    setTimeout(() => {
      setAjaxStatus('Success 200 OK — Real-time response received!');
      setTimeout(() => setAjaxStatus(null), 3000);
    }, 700);
  };

  switch (project.uiMockupType) {
    case 'browser-code':
      return (
        <div className={`w-full h-full bg-[#0a0b10] border border-indigo-500/20 rounded-2xl overflow-hidden flex flex-col font-mono select-none ${isExpanded ? 'p-4' : 'p-3'}`}>
          {/* Browser Address Bar & Tab controls */}
          <div className="flex flex-wrap items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10.5px] text-zinc-400 ml-2 hidden sm:inline">dileshwar-portfolio / live-demo</span>
            </div>

            {/* Interactive Tab Switcher in Demo */}
            <div className="flex items-center gap-1 bg-surface/80 p-0.5 rounded-lg border border-white/10 text-[10px]">
              {(['home', 'about', 'skills', 'contact'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPortfolioTab(tab)}
                  className={`px-2 py-0.5 rounded transition-all capitalize ${
                    portfolioTab === tab
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="text-[9.5px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Interactive Demo
            </span>
          </div>

          {/* Interactive Simulation Viewport */}
          <div className="flex-1 bg-gradient-to-br from-indigo-950/30 via-surface to-[#0a0b10] rounded-xl p-3.5 border border-indigo-500/15 flex flex-col justify-between overflow-hidden">
            {portfolioTab === 'home' && (
              <div className="space-y-2 my-auto">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold font-display">
                    DK
                  </div>
                  <div className="text-[9.5px] text-zinc-400 font-mono">HTML • CSS • JavaScript</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-display font-bold text-white">Dileshwar Kumar</div>
                  <div className="text-[11px] text-indigo-300 font-mono flex items-center gap-1">
                    <span>Frontend Developer | Software Engineer</span>
                    <span className="animate-pulse">|</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-sans">
                    Modular multi-section developer portfolio with smooth scroll-spy & AJAX forms.
                  </p>
                </div>
              </div>
            )}

            {portfolioTab === 'about' && (
              <div className="space-y-2 my-auto text-[10.5px]">
                <div className="text-xs font-bold text-white font-display">Panjab University (2023–2027)</div>
                <div className="text-indigo-300 font-mono text-[10px]">B.E. in Computer Science • Oasis Infobyte Intern</div>
                <p className="text-zinc-400 text-[10px] font-sans">
                  Hands-on frontend engineering, WebGL, responsive design, and Oracle Cloud Certified Developer.
                </p>
              </div>
            )}

            {portfolioTab === 'skills' && (
              <div className="space-y-1.5 my-auto text-[10px]">
                <div>
                  <div className="flex justify-between text-zinc-300 mb-0.5">
                    <span>HTML5 / CSS3 / JavaScript</span>
                    <span className="text-indigo-400">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[95%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-zinc-300 mb-0.5">
                    <span>React.js / Next.js</span>
                    <span className="text-cyan-400">90%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-[90%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-zinc-300 mb-0.5">
                    <span>Power BI / DAX / SQL</span>
                    <span className="text-amber-400">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[92%]" />
                  </div>
                </div>
              </div>
            )}

            {portfolioTab === 'contact' && (
              <form onSubmit={handleAjaxTest} className="space-y-2 my-auto">
                <div className="text-[11px] font-bold text-white flex items-center justify-between">
                  <span>AJAX FormSubmit API Simulator</span>
                  <span className="text-[9px] text-emerald-400 font-mono">Live API</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ajaxInput}
                    onChange={(e) => setAjaxInput(e.target.value)}
                    placeholder="Type test message..."
                    className="flex-1 px-2.5 py-1 rounded bg-black/50 border border-white/10 text-[10.5px] text-zinc-200 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10.5px] font-bold flex items-center gap-1"
                  >
                    <Send className="w-3 h-3" />
                    <span>Send</span>
                  </button>
                </div>
                {ajaxStatus && (
                  <p className="text-[9.5px] text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3 h-3" /> {ajaxStatus}
                  </p>
                )}
              </form>
            )}

            {/* Bottom Footer in Demo */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9.5px] text-zinc-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Scroll-spy & Typed.js Integrated
              </span>
              <span className="text-indigo-400 font-mono font-bold">100% Mobile Ready</span>
            </div>
          </div>
        </div>
      );

    case 'dashboard-bi':
      const blinkit = getBlinkitMetrics();
      return (
        <div className={`w-full h-full bg-[#0b0c10] border border-amber-500/20 rounded-2xl overflow-hidden flex flex-col select-none ${isExpanded ? 'p-4' : 'p-3'}`}>
          {/* BI Header with Live Slicers */}
          <div className="flex flex-wrap items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 gap-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-amber-500/20 text-amber-400">
                <BarChart2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-display font-semibold text-zinc-200">Blinkit Executive Power BI</span>
            </div>

            {/* Interactive Slicer Buttons */}
            <div className="flex items-center gap-1 bg-[#12141c] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
              <span className="text-zinc-400 px-1 hidden sm:inline">Tier:</span>
              {(['All', 'Tier 1', 'Tier 2', 'Tier 3'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setBlinkitTier(tier)}
                  className={`px-1.5 py-0.5 rounded transition-all ${
                    blinkitTier === tier
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* Fat Content Slicer */}
            <div className="flex items-center gap-1 bg-[#12141c] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
              {(['All', 'Low Fat', 'Regular'] as const).map((fat) => (
                <button
                  key={fat}
                  onClick={() => setBlinkitFat(fat)}
                  className={`px-1.5 py-0.5 rounded transition-all ${
                    blinkitFat === fat
                      ? 'bg-cyan-500 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {fat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Metric KPI Cards */}
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            <div className="bg-[#12141c] p-2 sm:p-2.5 rounded-xl border border-amber-500/20 transition-all">
              <div className="text-[9.5px] text-zinc-400 font-mono">Total Sales (DAX)</div>
              <div className="text-sm sm:text-base font-display font-bold text-amber-400">{blinkit.sales}</div>
              <div className="text-[8.5px] text-emerald-400 flex items-center gap-0.5">Filter: {blinkitTier}</div>
            </div>
            <div className="bg-[#12141c] p-2 sm:p-2.5 rounded-xl border border-white/5 transition-all">
              <div className="text-[9.5px] text-zinc-400 font-mono">Avg Rating</div>
              <div className="text-sm sm:text-base font-display font-bold text-cyan-400">{blinkit.rating}</div>
              <div className="text-[8.5px] text-zinc-400">8.5k Reviews</div>
            </div>
            <div className="bg-[#12141c] p-2 sm:p-2.5 rounded-xl border border-white/5 transition-all">
              <div className="text-[9.5px] text-zinc-400 font-mono">Items Filtered</div>
              <div className="text-sm sm:text-base font-display font-bold text-indigo-300">{blinkit.items}</div>
              <div className="text-[8.5px] text-zinc-400">{blinkitFat}</div>
            </div>
          </div>

          {/* Dynamic Interactive Chart Bars */}
          <div className="flex-1 bg-[#12141c] rounded-xl p-3 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10.5px] text-zinc-300 mb-1.5 font-mono">
              <span>Outlet Tier Revenue Breakdown</span>
              <span className="text-amber-400 text-[9.5px]">Click Slicers to Recalculate</span>
            </div>
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[9px] text-zinc-400 mb-0.5">
                  <span>Tier 3 (Suburban)</span>
                  <span>{blinkitTier === 'Tier 3' || blinkitTier === 'All' ? '$472k (39%)' : '$0k (Filtered)'}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-500"
                    style={{ width: blinkitTier === 'Tier 3' ? '100%' : blinkitTier === 'All' ? '39%' : '5%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] text-zinc-400 mb-0.5">
                  <span>Tier 2 (Metropolitan)</span>
                  <span>{blinkitTier === 'Tier 2' || blinkitTier === 'All' ? '$393k (33%)' : '$0k (Filtered)'}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: blinkitTier === 'Tier 2' ? '100%' : blinkitTier === 'All' ? '33%' : '5%' }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] text-zinc-400 mb-0.5">
                  <span>Tier 1 (Downtown)</span>
                  <span>{blinkitTier === 'Tier 1' || blinkitTier === 'All' ? '$335k (28%)' : '$0k (Filtered)'}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: blinkitTier === 'Tier 1' ? '100%' : blinkitTier === 'All' ? '28%' : '5%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'analytics-charts':
      const store = getStoreMetrics();
      return (
        <div className={`w-full h-full bg-[#0a0c12] border border-cyan-500/20 rounded-2xl overflow-hidden flex flex-col select-none ${isExpanded ? 'p-4' : 'p-3'}`}>
          {/* Header with Interactive Slicers */}
          <div className="flex flex-wrap items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 gap-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-cyan-500/20 text-cyan-400">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-display font-semibold text-zinc-200">Super Store Retail Power BI</span>
            </div>

            {/* Category Slicers */}
            <div className="flex items-center gap-1 bg-[#10131e] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
              {(['All', 'Technology', 'Furniture', 'Office Supplies'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setStoreCategory(cat)}
                  className={`px-1.5 py-0.5 rounded transition-all ${
                    storeCategory === cat
                      ? 'bg-cyan-500 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat === 'Office Supplies' ? 'Office' : cat}
                </button>
              ))}
            </div>

            {/* Region Slicers */}
            <div className="flex items-center gap-1 bg-[#10131e] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
              {(['All', 'East', 'West', 'Central', 'South'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setStoreRegion(reg)}
                  className={`px-1.5 py-0.5 rounded transition-all ${
                    storeRegion === reg
                      ? 'bg-indigo-500 text-white font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
            {/* KPI Summary Window */}
            <div className="bg-[#05070c] rounded-xl p-3 font-mono text-[10.5px] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-zinc-400 text-[9.5px] mb-1">DAX Calculated Measures</div>
                <div className="space-y-1 text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total Revenue:</span>
                    <span className="text-cyan-400 font-bold">{store.sales}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Net Profit:</span>
                    <span className="text-emerald-400 font-bold">{store.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Profit Margin:</span>
                    <span className="text-amber-400 font-bold">{store.margin}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-[9px] text-zinc-500">
                Active Filter: <span className="text-cyan-300">{storeCategory}</span> | <span className="text-indigo-300">{storeRegion}</span>
              </div>
            </div>

            {/* Category Performance Bars */}
            <div className="bg-[#10131e] rounded-xl p-3 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-[9.5px] font-mono text-zinc-400 mb-1">Profit Margins by Department</div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-zinc-200">Technology</span>
                    <span className="text-cyan-400 font-mono font-bold">17.3% ($145k)</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-zinc-200">Office Supplies</span>
                    <span className="text-indigo-400 font-mono font-bold">17.0% ($122k)</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-zinc-200">Furniture</span>
                    <span className="text-amber-400 font-mono font-bold">2.5% ($18k)</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-zinc-400">
                <span>Power Query ETL Pipeline</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3 h-3" /> 99.9% Accuracy
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'ecommerce-store':
      return (
        <EcommerceSimulator isExpanded={isExpanded} />
      );

    case 'restaurant-food':
      return (
        <RestaurantSimulator isExpanded={isExpanded} />
      );

    default:
      return null;
  }
};

// Interactive E-Commerce Store Simulator Component
const EcommerceSimulator: React.FC<{ isExpanded?: boolean }> = ({ isExpanded = false }) => {
  const [ecomCategory, setEcomCategory] = useState<'All' | 'Tech' | 'Fashion' | 'Audio'>('All');
  const [cartCount, setCartCount] = useState<number>(2);
  const [cartTotal, setCartTotal] = useState<number>(189);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [orderCheckedOut, setOrderCheckedOut] = useState<boolean>(false);

  const products = [
    { id: 'p1', name: 'Wireless ANC Headphones', category: 'Audio', price: 129, rating: '4.9 ★', inStock: true },
    { id: 'p2', name: 'Minimalist Mechanical Keyboard', category: 'Tech', price: 89, rating: '4.8 ★', inStock: true },
    { id: 'p3', name: 'Everyday Tech Backpack', category: 'Fashion', price: 60, rating: '4.7 ★', inStock: true },
    { id: 'p4', name: '4K Ultra-Wide Monitor Arm', category: 'Tech', price: 75, rating: '4.9 ★', inStock: true },
  ];

  const filteredProducts = products.filter(p => ecomCategory === 'All' || p.category === ecomCategory);

  const handleAddToCart = (item: typeof products[0]) => {
    setCartCount(prev => prev + 1);
    setCartTotal(prev => prev + item.price);
    setAddedItem(item.name);
    setOrderCheckedOut(false);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleCheckout = () => {
    if (cartCount === 0) return;
    setOrderCheckedOut(true);
    setCartCount(0);
    setCartTotal(0);
  };

  return (
    <div className={`w-full h-full bg-[#080a0f] border border-emerald-500/20 rounded-2xl overflow-hidden flex flex-col select-none ${isExpanded ? 'p-4' : 'p-3'}`}>
      {/* Top Store Navigation Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-display font-bold text-white">ApexStore Interactive</span>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            Live Storefront
          </span>
        </div>

        {/* Dynamic Interactive Cart Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#10141f] px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono">
            <span className="text-zinc-400">Cart:</span>
            <span className="text-emerald-400 font-bold">{cartCount} items</span>
            <span className="text-zinc-500">•</span>
            <span className="text-white font-bold">${cartTotal}</span>
          </div>

          {cartCount > 0 && (
            <button
              onClick={handleCheckout}
              className="px-2 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[9.5px] font-mono font-bold transition-all"
            >
              Checkout
            </button>
          )}
        </div>
      </div>

      {/* Category Pills & Notification Toast */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1 bg-[#10141f] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
          {(['All', 'Tech', 'Audio', 'Fashion'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setEcomCategory(cat)}
              className={`px-2 py-0.5 rounded transition-all ${
                ecomCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {addedItem && (
          <span className="text-[9px] font-mono text-emerald-400 animate-pulse truncate max-w-[150px]">
            + Added {addedItem}
          </span>
        )}

        {orderCheckedOut && (
          <span className="text-[9.5px] font-mono text-cyan-300 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Order Simulated!
          </span>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
        {filteredProducts.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="p-2.5 rounded-xl bg-[#10141f] border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[9px] text-zinc-400 font-mono mb-1">
                <span className="text-zinc-400">{item.category}</span>
                <span className="text-amber-400">{item.rating}</span>
              </div>
              <div className="text-[11px] font-display font-semibold text-zinc-100 line-clamp-1">
                {item.name}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/5">
              <span className="text-xs font-mono font-bold text-white">${item.price}</span>
              <button
                onClick={() => handleAddToCart(item)}
                className="px-2 py-0.5 rounded bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-zinc-950 text-[9.5px] font-mono font-medium transition-all cursor-pointer"
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
        <span>Instant Client-Side Cart State</span>
        <span className="text-emerald-400">100% Responsive Storefront</span>
      </div>
    </div>
  );
};

// Interactive Restaurant & Table Booking Simulator Component
const RestaurantSimulator: React.FC<{ isExpanded?: boolean }> = ({ isExpanded = false }) => {
  const [activeMenuTab, setActiveMenuTab] = useState<'Starters' | 'Mains' | 'Desserts'>('Starters');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [reservedStatus, setReservedStatus] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const menuItems = [
    { id: 'm1', name: 'Truffle Wild Mushroom Bruschetta', category: 'Starters', price: '$16', tag: 'Chef Special' },
    { id: 'm2', name: 'Charred Burrata & Heritage Tomatoes', category: 'Starters', price: '$18', tag: 'Popular' },
    { id: 'm3', name: 'Smoked Oak Wood-Fired Filet Mignon', category: 'Mains', price: '$38', tag: 'Signature' },
    { id: 'm4', name: 'Pan-Seared Chilean Sea Bass', category: 'Mains', price: '$34', tag: 'Fresh Catch' },
    { id: 'm5', name: 'Valrhona Dark Chocolate Lava Tart', category: 'Desserts', price: '$14', tag: 'House Dessert' },
    { id: 'm6', name: 'Artisan Tahitian Vanilla Panna Cotta', category: 'Desserts', price: '$12', tag: 'Gluten-Free' },
  ];

  const filteredDishes = menuItems.filter(item => item.category === activeMenuTab);

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    setReservedStatus(true);
    setTimeout(() => setReservedStatus(false), 3500);
  };

  return (
    <div className={`w-full h-full bg-[#0d0a07] border border-amber-500/20 rounded-2xl overflow-hidden flex flex-col select-none ${isExpanded ? 'p-4' : 'p-3'}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-display font-bold text-amber-200">Le Gourmet Culinary</span>
          <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
            Interactive Dining UI
          </span>
        </div>

        {/* Menu Tabs */}
        <div className="flex items-center gap-1 bg-[#18120c] p-0.5 rounded-lg border border-white/10 text-[9.5px] font-mono">
          {(['Starters', 'Mains', 'Desserts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveMenuTab(tab)}
              className={`px-2 py-0.5 rounded transition-all ${
                activeMenuTab === tab
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive area: Menu items & Quick Table booking */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-1 overflow-hidden">
        {/* Left: Interactive Menu list */}
        <div className="sm:col-span-7 space-y-1.5 overflow-y-auto pr-1">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish.name)}
              className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedDish === dish.name
                  ? 'bg-amber-500/15 border-amber-500/50'
                  : 'bg-[#15100a] border-white/5 hover:border-white/20'
              }`}
            >
              <div>
                <div className="text-[11px] font-display font-medium text-zinc-200 leading-tight">
                  {dish.name}
                </div>
                <span className="text-[8.5px] font-mono text-amber-400/90">{dish.tag}</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-300">{dish.price}</span>
            </div>
          ))}
        </div>

        {/* Right: Table Reservation Simulator */}
        <div className="sm:col-span-5 bg-[#140e08] rounded-xl p-2.5 border border-white/10 flex flex-col justify-between">
          <form onSubmit={handleBookTable} className="space-y-1.5">
            <div className="text-[10.5px] font-display font-bold text-white flex items-center justify-between">
              <span>Book a Table</span>
              <span className="text-[8.5px] font-mono text-emerald-400">Live Simulator</span>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300 bg-black/40 px-2 py-1 rounded border border-white/5">
              <span>Party Size:</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-4 h-4 rounded bg-white/10 text-white flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="font-bold text-amber-400">{guestCount} Guests</span>
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                  className="w-4 h-4 rounded bg-white/10 text-white flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-bold text-[10px] font-mono transition-all shadow-md cursor-pointer"
            >
              Reserve Table
            </button>
          </form>

          {reservedStatus && (
            <div className="p-1.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[9px] font-mono text-center animate-pulse">
              Table reserved for {guestCount} guests!
            </div>
          )}

          <div className="text-[8.5px] font-mono text-zinc-400 border-t border-white/5 pt-1 text-center">
            Multi-Course Menu & Reservation Flow
          </div>
        </div>
      </div>
    </div>
  );
};
