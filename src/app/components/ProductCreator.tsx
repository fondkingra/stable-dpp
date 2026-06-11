import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  ArrowLeft, Upload, Check, Image as ImageIcon,
  User, Package, Leaf, Droplets, Zap, Wind, Thermometer,
} from 'lucide-react';
const logoImg = import.meta.env.BASE_URL + 'logo-transparent.png';

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

const productComponents = {
  shirt: [
    { id: 'buttons', name: 'Buttons', selected: false },
    { id: 'threads', name: 'Threads', selected: false },
    { id: 'fabric', name: 'Fabric', selected: false },
    { id: 'labels', name: 'Labels', selected: false },
    { id: 'collar', name: 'Collar', selected: false },
    { id: 'zipper-shirt', name: 'Zipper (if applicable)', selected: false },
  ],
  jeans: [
    { id: 'zipper', name: 'Zipper', selected: false },
    { id: 'rivets', name: 'Rivets', selected: false },
    { id: 'denim-fabric', name: 'Denim Fabric', selected: false },
    { id: 'pocket-lining', name: 'Pocket Lining', selected: false },
    { id: 'waistband', name: 'Waistband', selected: false },
    { id: 'stitching', name: 'Stitching Thread', selected: false },
    { id: 'button', name: 'Button', selected: false },
  ],
};

const careOptions = [
  { id: 'machine-wash-cold', label: 'Machine Wash Cold (30°C)', icon: '🌊' },
  { id: 'line-dry', label: 'Line Dry / Hang to Dry', icon: '☀️' },
  { id: 'no-dry-clean', label: 'Do Not Dry Clean', icon: '🚫' },
  { id: 'iron-low', label: 'Iron at Low Temperature (110°C)', icon: '♨️' },
  { id: 'tumble-dry-low', label: 'Tumble Dry Low', icon: '🔄' },
  { id: 'no-bleach', label: 'Do Not Bleach', icon: '⚠️' },
];

const greenOptions = [
  { id: 'composting', label: 'Composting (natural fibers)', desc: 'Textiles from natural fibers can be composted into natural fertilizer.' },
  { id: 'repurposing', label: 'Repurposing', desc: 'Old clothing adapted for different uses like cleaning rags or industrial applications.' },
  { id: 'recycling', label: 'Textile Recycling', desc: 'Fiber-to-fiber recycling to create new textiles and reduce landfill waste.' },
  { id: 'donation', label: 'Donation / Resale', desc: 'Extend garment life through second-hand markets and donation programs.' },
];

const steps = [
  { label: 'Image', icon: ImageIcon },
  { label: 'Details', icon: User },
  { label: 'Components', icon: Package },
  { label: 'Environment', icon: Leaf },
];

export function ProductCreator() {
  const { productType } = useParams<{ productType: 'shirt' | 'jeans' }>();
  const navigate = useNavigate();

  const [productName, setProductName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [components, setComponents] = useState<ComponentDPP[]>(
    productComponents[productType as keyof typeof productComponents] || []
  );
  const [envData, setEnvData] = useState<EnvData>({
    co2Emissions: '', waterUse: '', fossilEnergy: '', pefScore: '',
    careInstructions: [], greenPractices: [],
  });
  const [isCreating, setIsCreating] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleImageUpload(file);
  };

  const toggleComponent = (id: string) =>
    setComponents(components.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c)));

  const toggleCare = (id: string) =>
    setEnvData((prev) => ({
      ...prev,
      careInstructions: prev.careInstructions.includes(id)
        ? prev.careInstructions.filter((x) => x !== id)
        : [...prev.careInstructions, id],
    }));

  const toggleGreen = (id: string) =>
    setEnvData((prev) => ({
      ...prev,
      greenPractices: prev.greenPractices.includes(id)
        ? prev.greenPractices.filter((x) => x !== id)
        : [...prev.greenPractices, id],
    }));

  const handleCreateDPP = () => {
    setIsCreating(true);
    const dppData = {
      productType, productName, userName, email, imagePreview,
      components: components.filter((c) => c.selected),
      envData,
      createdAt: new Date().toISOString(),
      blockchainHash: `0x${Math.random().toString(16).substring(2, 66)}`,
    };
    setTimeout(() => {
      localStorage.setItem('currentPassport', JSON.stringify(dppData));
      navigate(`/passport/${productType}`);
    }, 2000);
  };

  const isFormValid = productName && userName && email && imageFile && components.some((c) => c.selected);
  const productTitle = productType === 'shirt' ? 'T-Shirt' : 'Jeans';
  const currentStep = !imageFile ? 0 : !productName || !userName || !email ? 1 : !components.some((c) => c.selected) ? 2 : 3;

  return (
    <div className="min-h-screen bg-[#f8fefe]" style={{ fontFamily: 'Inter, sans-serif' }}>

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

      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#1ac8b0] text-xs font-semibold uppercase tracking-widest mb-3">Create Your Passport</p>
          <h1 className="text-4xl font-extrabold text-[#0d2340] leading-tight mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            {productTitle} <span className="text-[#1ac8b0]">DPP</span>
          </h1>
          <p className="text-[#6b8fa8]">Fill in product info, components, and environmental data</p>
        </div>

        {/* Step progress */}
        <div className="flex items-center justify-center mb-10">
          {steps.map(({ label, icon: Icon }, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  i < currentStep ? 'bg-[#1ac8b0] border-[#1ac8b0]'
                  : i === currentStep ? 'bg-white border-[#1ac8b0]'
                  : 'bg-white border-gray-200'
                }`}>
                  {i < currentStep
                    ? <Check className="w-4 h-4 text-white" />
                    : <Icon className={`w-4 h-4 ${i === currentStep ? 'text-[#1ac8b0]' : 'text-gray-300'}`} />}
                </div>
                <span className={`text-xs font-medium ${i <= currentStep ? 'text-[#0d2340]' : 'text-gray-300'}`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-3 mb-4 transition-all duration-700 ${i < currentStep ? 'bg-[#1ac8b0]' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">

          {/* Image Upload */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                <ImageIcon className="w-4 h-4 text-[#1ac8b0]" />
              </div>
              <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Product Image</h3>
            </div>

            {!imagePreview ? (
              <label
                className={`flex flex-col items-center justify-center h-48 cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ${
                  dragOver ? 'border-[#1ac8b0] bg-[#e6faf7]' : 'border-gray-200 hover:border-[#1ac8b0] hover:bg-[#f8fefe]'
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${dragOver ? 'bg-[#1ac8b0]' : 'bg-gray-100'}`}>
                  <Upload className={`w-6 h-6 transition-colors ${dragOver ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <p className="text-[#0d2340] text-sm font-medium mb-1">Drop image here or <span className="text-[#1ac8b0]">browse</span></p>
                <p className="text-gray-400 text-xs">PNG, JPG up to 10MB</p>
                <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); }} className="hidden" />
              </label>
            ) : (
              <div className="relative group rounded-xl overflow-hidden border border-gray-100">
                <img src={imagePreview} alt="Product preview" className="w-full h-48 object-contain bg-gray-50" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <button onClick={() => { setImageFile(null); setImagePreview(''); }}
                    className="opacity-0 group-hover:opacity-100 transition-all px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold">
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Basic Details */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                <User className="w-4 h-4 text-[#1ac8b0]" />
              </div>
              <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Basic Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Product Name', value: productName, setter: setProductName, placeholder: `e.g., Classic ${productTitle}`, type: 'text', span: false },
                { label: 'Your Name', value: userName, setter: setUserName, placeholder: 'e.g., John Doe', type: 'text', span: false },
                { label: 'Email', value: email, setter: setEmail, placeholder: 'e.g., john@example.com', type: 'email', span: true },
              ].map(({ label, value, setter, placeholder, type, span }) => (
                <div key={label} className={span ? 'md:col-span-2' : ''}>
                  <label className="block text-[#3d5a6b] text-xs font-semibold mb-1.5 uppercase tracking-wider">{label} *</label>
                  <input
                    type={type} value={value} onChange={(e) => setter(e.target.value)} placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0d2340] placeholder-gray-300 text-sm focus:outline-none focus:border-[#1ac8b0] focus:bg-white focus:ring-2 focus:ring-[#1ac8b0]/15 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Component Selection */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#1ac8b0]" />
                </div>
                <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Component DPPs *</h3>
              </div>
              <span className="text-xs text-[#6b8fa8] bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                {components.filter((c) => c.selected).length}/{components.length} selected
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {components.map((comp) => (
                <button key={comp.id} onClick={() => toggleComponent(comp.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left border-2 ${
                    comp.selected
                      ? 'bg-[#e6faf7] border-[#1ac8b0] text-[#0d2340]'
                      : 'bg-gray-50 border-gray-100 text-[#6b8fa8] hover:border-gray-200 hover:text-[#0d2340]'
                  }`}
                >
                  <span>{comp.name}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    comp.selected ? 'bg-[#1ac8b0] border-[#1ac8b0]' : 'border-gray-300'
                  }`}>
                    {comp.selected && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Environmental Data */}
          <div className="bg-white rounded-2xl border border-[#b3ede6] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg bg-[#e6faf7] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#1ac8b0]" />
              </div>
              <h3 className="text-base font-bold text-[#0d2340]" style={{ fontFamily: 'Syne, sans-serif' }}>Environmental Data</h3>
              <span className="ml-auto text-xs text-[#6b8fa8] bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">Optional</span>
            </div>
            <p className="text-[#6b8fa8] text-xs mb-6 ml-11">Add sustainability metrics to enrich your product passport</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'CO₂ Emissions', placeholder: 'e.g., 3.57', unit: 'kg CO₂', icon: Wind, key: 'co2Emissions' as keyof EnvData },
                { label: 'Water Use', placeholder: 'e.g., 0.55', unit: 'm³', icon: Droplets, key: 'waterUse' as keyof EnvData },
                { label: 'Fossil Energy', placeholder: 'e.g., 36.53', unit: 'MJ', icon: Zap, key: 'fossilEnergy' as keyof EnvData },
                { label: 'PEF Score', placeholder: 'e.g., 1352', unit: 'μpts', icon: Thermometer, key: 'pefScore' as keyof EnvData },
              ].map(({ label, placeholder, unit, icon: Icon, key }) => (
                <div key={key}>
                  <label className="flex items-center gap-1.5 text-[#3d5a6b] text-xs font-semibold mb-1.5 uppercase tracking-wider">
                    <Icon className="w-3 h-3 text-[#1ac8b0]" />{label}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={envData[key] as string}
                      onChange={(e) => setEnvData((prev) => ({ ...prev, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 pr-16 rounded-xl bg-gray-50 border border-gray-200 text-[#0d2340] placeholder-gray-300 text-sm focus:outline-none focus:border-[#1ac8b0] focus:bg-white focus:ring-2 focus:ring-[#1ac8b0]/15 transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-mono">{unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Care Instructions */}
            <div className="mb-5">
              <p className="text-[#3d5a6b] text-xs font-semibold uppercase tracking-wider mb-3">Care Instructions</p>
              <div className="grid grid-cols-2 gap-2">
                {careOptions.map(({ id, label, icon }) => {
                  const selected = envData.careInstructions.includes(id);
                  return (
                    <button key={id} onClick={() => toggleCare(id)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs text-left border-2 transition-all ${
                        selected ? 'bg-[#e6faf7] border-[#1ac8b0] text-[#0d2340]' : 'bg-gray-50 border-gray-100 text-[#6b8fa8] hover:border-gray-200'
                      }`}
                    >
                      <span className="text-base">{icon}</span>
                      <span className="flex-1 font-medium">{label}</span>
                      {selected && <Check className="w-3 h-3 text-[#1ac8b0] flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Green Practices */}
            <div>
              <p className="text-[#3d5a6b] text-xs font-semibold uppercase tracking-wider mb-3">End-of-Life Green Practices</p>
              <div className="space-y-2">
                {greenOptions.map(({ id, label, desc }) => {
                  const selected = envData.greenPractices.includes(id);
                  return (
                    <button key={id} onClick={() => toggleGreen(id)}
                      className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left border-2 transition-all ${
                        selected ? 'bg-[#e6faf7] border-[#1ac8b0]' : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selected ? 'bg-[#1ac8b0] border-[#1ac8b0]' : 'border-gray-300'
                      }`}>
                        {selected && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold mb-0.5 ${selected ? 'text-[#0d2340]' : 'text-[#3d5a6b]'}`}>{label}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleCreateDPP}
            disabled={!isFormValid || isCreating}
            className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-[#1ac8b0] hover:bg-[#15b09b] text-white shadow-md hover:shadow-lg"
          >
            {isCreating ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                <span>Anchoring to Blockchain…</span>
              </div>
            ) : (
              'Create Digital Product Passport'
            )}
          </button>

          {!isFormValid && !isCreating && (
            <p className="text-center text-gray-400 text-xs">Fill all required fields and select at least one component</p>
          )}
        </div>
      </div>
    </div>
  );
}
