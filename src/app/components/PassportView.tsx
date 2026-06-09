import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Check, ExternalLink, Shield, Clock, Hash, Leaf, Droplets, Zap, Wind, Thermometer } from 'lucide-react';
import QRCode from 'react-qr-code';
const logoImg = '/logo.png';

interface ComponentDPP {
  id: string;
  name: string;
  selected: boolean;
}

interface EnvData {
  co2Emissions: string;
  waterUse: string;
  fossilEnergy: string;
  pefScore: string;
  careInstructions: string[];
  greenPractices: string[];
}

interface PassportData {
  productType: string;
  productName: string;
  userName: string;
  email: string;
  imagePreview: string;
  components: ComponentDPP[];
  envData?: EnvData;
  createdAt: string;
  blockchainHash: string;
}

const careLabels: Record<string, { label: string; icon: string }> = {
  'machine-wash-cold': { label: 'Machine Wash Cold (30°C)', icon: '🌊' },
  'line-dry':          { label: 'Line Dry / Hang to Dry',   icon: '☀️' },
  'no-dry-clean':      { label: 'Do Not Dry Clean',          icon: '🚫' },
  'iron-low':          { label: 'Iron at Low Temperature',   icon: '♨️' },
  'tumble-dry-low':    { label: 'Tumble Dry Low',            icon: '🔄' },
  'no-bleach':         { label: 'Do Not Bleach',             icon: '⚠️' },
};

const greenLabels: Record<string, { label: string; desc: string }> = {
  'composting':  { label: 'Composting (natural fibers)', desc: 'Textiles from natural fibers can be composted into natural fertilizer, though limited to pure fibers without synthetic blends.' },
  'repurposing': { label: 'Repurposing',                  desc: 'Used textiles adapted for different uses like cleaning rags or industrial applications without full reprocessing.' },
  'recycling':   { label: 'Textile Recycling',            desc: 'Fiber-to-fiber recycling to create new textiles and significantly reduce landfill waste.' },
  'donation':    { label: 'Donation / Resale',            desc: 'Extend garment life through second-hand markets and community donation programs.' },
};

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - start) / 1200, 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 500);
    return () => clearTimeout(timer);
  }, [target]);
  return <div ref={ref}>{count}{suffix}</div>;
}

export function PassportView() {
  const { productType } = useParams();
  const navigate = useNavigate();
  const [passportData, setPassportData] = useState<PassportData | null>(null);
  const [showSuccess, setShowSuccess] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('currentPassport');
    if (data) {
      setPassportData(JSON.parse(data));
      setTimeout(() => setShowSuccess(false), 4000);
    }
    setTimeout(() => setMounted(true), 50);
  }, []);

  if (!passportData) {
    return (
      <div className="min-h-screen bg-[#f8fefe] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#6b8fa8]">
          <div className="w-5 h-5 border-2 border-gray-200 border-t-[#1ac8b0] rounded-full animate-spin" />
          <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Loading passport…</span>
        </div>
      </div>
    );
  }

  const passportUrl = window.location.href;
  const blockchainExplorerUrl = `https://etherscan.io/tx/${passportData.blockchainHash}`;
  const productTitle = productType === 'shirt' ? 'T-Shirt' : 'Jeans';
  const shortHash = `${passportData.blockchainHash.substring(0, 10)}…${passportData.blockchainHash.substring(58)}`;
  const hasEnv = passportData.envData && (
    passportData.envData.co2Emissions || passportData.envData.waterUse ||
    passportData.envData.fossilEnergy || passportData.envData.pefScore ||
    passportData.envData.careInstructions.length > 0 || passportData.envData.greenPractices.length > 0
  );

  return (
    <div className="min-h-screen bg-[#f8fefe]" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Success toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-toast-in">
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-gray-100 shadow-xl">
            <div className="w-8 h-8 bg-[#1ac8b0] rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[#0d2340] font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>DPP Created Successfully</p>
              <p className="text-[#6b8fa8] text-xs mt-0.5">Your blockchain-verified passport is ready</p>
            </div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav style={{ background: '#0a1f3c', position: 'sticky', top: 0, zIndex: 20, height: '100px', display: 'flex', alignItems: 'center', boxShadow: '0 1px 0 rgba(26,200,176,0.2), 0 4px 24px rgba(0,0,0,0.2)' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #1ac8b0 25%, #67e8f9 55%, #1ac8b0 75%, transparent)' }} />
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between" style={{ position: 'relative' }}>
          <img src={logoImg} alt="StableDPP" style={{ width: '200px', height: 'auto', display: 'block', background: '#fff', borderRadius: '12px', padding: '8px' }} />
          <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Header — dark navy seamless with nav */}
      <div className="bg-[#0d2340]">

      {/* Header */}
      <div className={`border-b border-white/8 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#67e8f9] text-xs font-semibold tracking-wide uppercase mb-5">
            <Shield className="w-3 h-3" />
            Blockchain-Verified Digital Product Passport
          </div>
          <h1 className="text-5xl mb-3 text-white leading-tight" style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, letterSpacing: '-0.01em' }}>
            Digital{' '}
            <span className="text-[#1ac8b0]">Product</span>{' '}
            Passport
          </h1>
          <p className="text-white/40 text-sm">Powered by StableDPP · {new Date(passportData.createdAt).toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
        </div>
      </div>
      </div>{/* end dark navy block */}

      {/* Stat bar */}
      <div className={`border-b border-gray-100 bg-white transition-all duration-700 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-gray-100">
          {[
            { label: 'Components Tracked', value: passportData.components.length, suffix: '' },
            { label: 'Transparency Score', value: 100, suffix: '%' },
            { label: 'Verification Status', badge: true },
          ].map((stat, i) => (
            <div key={i} className="text-center px-6">
              {stat.badge ? (
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-[#1ac8b0] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1ac8b0] font-bold text-sm">Verified</span>
                </div>
              ) : (
                <div className="text-3xl font-extrabold text-[#0d2340] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <AnimatedCounter target={stat.value!} suffix={stat.suffix} />
                </div>
              )}
              <p className="text-[#6b8fa8] text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className={`max-w-7xl mx-auto px-6 py-10 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="lg:col-span-1 space-y-4">

            {/* Product image */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-50">
                <img src={passportData.imagePreview} alt={passportData.productName} className="w-full aspect-square object-contain" />
              </div>
              <h2 className="text-lg font-bold text-[#0d2340] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{passportData.productName}</h2>
              <p className="text-[#6b8fa8] text-sm mb-3">by {passportData.userName}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#1ac8b0] bg-[#e6faf7] border border-[#b3ede6]">
                {productTitle} DPP
              </span>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center">
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1ac8b0]" />
                </div>
                <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Scan QR Code</h3>
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-xl inline-block shadow-sm">
                <QRCode value={passportUrl} size={160} />
              </div>
              <p className="text-[#6b8fa8] text-xs mt-4">Scan to view this passport</p>
            </div>

            {/* Blockchain */}
            <div className="bg-white rounded-2xl border border-[#b3ede6] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#1ac8b0]" />
                </div>
                <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Blockchain Verified</h3>
              </div>
              <p className="text-[#6b8fa8] text-xs mb-4 leading-relaxed">
                Cryptographically anchored to the Ethereum network
              </p>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100 mb-4">
                <Hash className="w-3 h-3 text-[#1ac8b0] flex-shrink-0" />
                <span className="text-[#3d5a6b] text-xs font-mono truncate">{shortHash}</span>
              </div>
              <a
                href={blockchainExplorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white bg-[#1ac8b0] hover:bg-[#15b09b] transition-all shadow-sm hover:shadow-md"
              >
                View on Etherscan
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-4">

            {/* Product Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <span className="w-1 h-5 rounded-full bg-[#1ac8b0]" />
                <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Product Details</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3">
                {[
                  { icon: null, label: 'Product Name', value: passportData.productName },
                  { icon: null, label: 'Product Type', value: productTitle },
                  { icon: null, label: 'Creator', value: passportData.userName },
                  { icon: null, label: 'Email', value: passportData.email },
                  { icon: Clock, label: 'Created On', value: new Date(passportData.createdAt).toLocaleDateString('en-US', { dateStyle: 'medium' }) },
                  { icon: null, label: 'Components', value: `${passportData.components.length} selected` },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className={`px-5 py-4 border-gray-100 ${i % 3 !== 2 ? 'border-r' : ''} ${i < 3 ? 'border-b' : ''}`}>
                    <p className="text-[#6b8fa8] text-xs uppercase tracking-widest mb-1.5 flex items-center gap-1">
                      {Icon && <Icon className="w-3 h-3" />}{label}
                    </p>
                    <p className="text-[#0d2340] font-semibold text-sm truncate" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Component DPPs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full bg-[#1ac8b0]" />
                  <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Component DPPs</h3>
                </div>
                <span className="text-xs text-[#6b8fa8] bg-gray-50 px-2 py-1 rounded-full border border-gray-100">{passportData.components.length} verified</span>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                {passportData.components.map((component) => (
                  <div key={component.id} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f8fefe] border border-[#d0f0ea] hover:border-[#1ac8b0] transition-colors">
                    <div className="w-7 h-7 rounded-full bg-[#e6faf7] border border-[#b3ede6] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#1ac8b0]" />
                    </div>
                    <div>
                      <p className="text-[#0d2340] text-sm font-semibold">{component.name}</p>
                      <p className="text-[#6b8fa8] text-xs">Verified Component</p>
                    </div>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#1ac8b0] animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Data */}
            {hasEnv && (
              <div className="bg-white rounded-2xl border border-[#b3ede6] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#d0f0ea] flex items-center gap-3 bg-[#f8fefe]">
                  <div className="w-7 h-7 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                    <Leaf className="w-3.5 h-3.5 text-[#1ac8b0]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Environmental Impact</h3>
                </div>
                <div className="p-6 space-y-6">

                  {/* Footprint metrics */}
                  {(passportData.envData!.co2Emissions || passportData.envData!.waterUse || passportData.envData!.fossilEnergy || passportData.envData!.pefScore) && (
                    <div>
                      <p className="text-[#6b8fa8] text-xs uppercase tracking-widest mb-3">Footprint Metrics</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { key: 'co2Emissions', label: 'CO₂ Emissions', unit: 'kg CO₂', icon: Wind, bg: '#fff7ed', border: '#fed7aa', color: '#f97316' },
                          { key: 'waterUse',     label: 'Water Use',     unit: 'm³',     icon: Droplets, bg: '#f0f9ff', border: '#bae6fd', color: '#38bdf8' },
                          { key: 'fossilEnergy', label: 'Fossil Energy', unit: 'MJ',     icon: Zap, bg: '#fefce8', border: '#fde68a', color: '#f59e0b' },
                          { key: 'pefScore',     label: 'PEF Score',     unit: 'μpts',   icon: Thermometer, bg: '#faf5ff', border: '#e9d5ff', color: '#a855f7' },
                        ].map(({ key, label, unit, icon: Icon, bg, border, color }) => {
                          const val = passportData.envData![key as keyof EnvData] as string;
                          if (!val) return null;
                          return (
                            <div key={key} className="flex items-center gap-3 px-4 py-3 rounded-xl border" style={{ backgroundColor: bg, borderColor: border }}>
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
                                <Icon className="w-4 h-4" style={{ color }} />
                              </div>
                              <div>
                                <p className="text-[#6b8fa8] text-xs">{label}</p>
                                <p className="text-[#0d2340] font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                                  {val} <span className="text-[#6b8fa8] font-normal text-xs">{unit}</span>
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Care Instructions */}
                  {passportData.envData!.careInstructions.length > 0 && (
                    <div>
                      <p className="text-[#6b8fa8] text-xs uppercase tracking-widest mb-3">Care Instructions</p>
                      <div className="grid grid-cols-2 gap-2">
                        {passportData.envData!.careInstructions.map((id) => {
                          const info = careLabels[id];
                          if (!info) return null;
                          return (
                            <div key={id} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                              <span className="text-base">{info.icon}</span>
                              <span className="text-[#3d5a6b] text-xs font-medium">{info.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Green Practices */}
                  {passportData.envData!.greenPractices.length > 0 && (
                    <div>
                      <p className="text-[#6b8fa8] text-xs uppercase tracking-widest mb-3">Green Practices &amp; Waste Solutions</p>
                      <div className="space-y-2">
                        {passportData.envData!.greenPractices.map((id) => {
                          const info = greenLabels[id];
                          if (!info) return null;
                          return (
                            <div key={id} className="px-4 py-3 rounded-xl bg-[#f8fefe] border border-[#b3ede6]">
                              <p className="text-[#1ac8b0] text-sm font-semibold mb-1">{info.label}</p>
                              <p className="text-[#6b8fa8] text-xs leading-relaxed">{info.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Certificate footer */}
            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#1ac8b0]" />
                </div>
                <div>
                  <p className="text-[#3d5a6b] text-xs font-semibold">Issued by StableDPP Platform</p>
                  <p className="text-[#6b8fa8] text-xs">EU Digital Product Passport Compliant · ESPR 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#6b8fa8] text-xs font-mono">{passportData.blockchainHash.substring(0, 14)}…</p>
                <p className="text-gray-300 text-xs mt-0.5">Ethereum Mainnet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(24px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-toast-in { animation: toast-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
