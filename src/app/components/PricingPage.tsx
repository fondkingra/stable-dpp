import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    sub: 'Up to 10 DPPs/month',
    features: [
      '10 Digital Product Passports/month',
      'QR code generation',
      'Blockchain anchoring (Ethereum)',
      'ESPR compliance check',
      'Public passport viewer',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaPath: '/get-started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '€199',
    period: '/mo',
    sub: 'Up to 500 DPPs/month',
    features: [
      'Everything in Starter',
      'Component DPP tracking',
      'Sustainability data dashboard',
      'CSV & bulk upload',
      'GS1 Digital Link QR codes',
      'Priority email support',
      'ESPR compliance reports',
    ],
    cta: 'Start Growth Plan',
    ctaPath: '/get-started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    sub: 'Unlimited DPPs',
    features: [
      'Everything in Growth',
      'API access & integrations',
      'White-label DPP portal',
      'Dedicated account manager',
      'Custom compliance reporting',
      'SLA & uptime guarantee',
      'PIM/ERP/PLM connections',
    ],
    cta: 'Book a Demo',
    ctaPath: '/book-a-demo',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Can I try StableDPP for free?',
    a: 'Yes — our Starter plan is permanently free. No time limit. No credit card. Create up to 10 Digital Product Passports per month, all blockchain-anchored on Ethereum Mainnet, with QR codes and ESPR compliance checking included. When you are ready to scale, upgrade in one click.',
  },
  {
    q: 'What does blockchain anchoring include?',
    a: 'Every DPP you create is cryptographically hashed and recorded on Ethereum Mainnet, creating a permanent, tamper-proof record. The blockchain hash appears on your passport and can be independently verified by any buyer, regulator, or consumer at any time — at zero additional cost on all plans.',
  },
  {
    q: 'Is StableDPP GDPR compliant?',
    a: 'Yes. All product and supply chain data is stored within EU-regulated cloud infrastructure, encrypted at rest (AES-256) and in transit (TLS 1.3), and access-controlled by role. You decide exactly which fields appear on the public-facing passport — everything else stays private to your account.',
  },
  {
    q: 'Can I connect my existing product data systems?',
    a: 'Yes. Growth plan customers can bulk-upload product data via CSV. Enterprise customers get full API access to connect PIM, ERP, PLM, or any product data system directly to StableDPP — eliminating manual data entry and enabling automated DPP generation at scale.',
  },
  {
    q: 'Which EU regulations does StableDPP cover?',
    a: 'StableDPP is purpose-built for EU ESPR 2024 and aligned to GS1 Digital Link, ISO 14001, EU Textile Strategy, and the Green Claims Directive. Our compliance engine is updated as regulations evolve — your passports stay compliant without any action on your side.',
  },
];

export function PricingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'Inter, sans-serif' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(26,200,176,0.12)', border: '1px solid rgba(26,200,176,0.3)', color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }}>
            PRICING
          </div>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Simple, Transparent Digital Product Passport Pricing. Like Your Supply Chain Should Be.
          </h1>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.7 }}>
            Start free and scale your Digital Product Passport programme as your catalogue grows. All plans include blockchain anchoring and EU ESPR 2024 compliance. No hidden fees. No long-term contracts. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '64px 24px', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{
              background: tier.highlight ? '#0a1f3c' : '#fff',
              border: tier.highlight ? '2px solid #1ac8b0' : '1px solid #ede8e3',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              boxShadow: tier.highlight ? '0 8px 40px rgba(26,200,176,0.15)' : 'none',
            }}>
              {tier.highlight && (
                <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', color: '#071528', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, padding: '5px 16px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ color: tier.highlight ? '#1ac8b0' : '#7a8a98', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px' }}>{tier.name.toUpperCase()}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '40px', fontWeight: 800, color: tier.highlight ? '#fff' : '#0a1f3c' }}>{tier.price}</span>
                {tier.period && <span style={{ color: '#7a8a98', fontSize: '16px' }}>{tier.period}</span>}
              </div>
              <div style={{ color: '#7a8a98', fontSize: '13px', marginBottom: '24px' }}>{tier.sub}</div>
              <div style={{ marginBottom: '28px' }}>
                {tier.features.map((feat, j) => (
                  <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ color: '#1ac8b0', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: tier.highlight ? '#c8d8e8' : '#4a5a6a', fontSize: '14px', lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(tier.ctaPath)}
                style={{
                  width: '100%',
                  background: tier.highlight ? 'linear-gradient(135deg, #1ac8b0, #0ea58c)' : 'none',
                  border: tier.highlight ? 'none' : '2px solid #0a1f3c',
                  cursor: 'pointer',
                  color: tier.highlight ? '#071528' : '#0a1f3c',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '13px',
                  borderRadius: '100px',
                }}
              >
                {tier.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', maxWidth: '760px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: '#0a1f3c', textAlign: 'center', marginBottom: '40px' }}>
          Frequently Asked Questions About StableDPP Pricing
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #ede8e3', borderRadius: '12px', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}
              >
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 600, color: '#0a1f3c', paddingRight: '16px' }}>{faq.q}</span>
                <span style={{ color: '#1ac8b0', fontSize: '18px', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 20px 18px', borderLeft: '3px solid #1ac8b0', marginLeft: '16px' }}>
                  <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
