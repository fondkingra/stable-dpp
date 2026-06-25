import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowLeft, Check, Shield, Zap, Globe } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { signUp } from '../utils/frappe';
import { pageH1OnDark, heroLead, LOGO } from '../styles/typography';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

export function GetStartedPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', company: '', country: '', agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>('');

  useEffect(() => {
    // Dynamically load Turnstile script
    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      document.head.appendChild(script);
    }
    const interval = setInterval(() => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          theme: 'light',
        });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\d/.test(formData.password)) { setError('Password must contain at least one number.'); return; }
    if (!turnstileToken) { setError('Please complete the verification.'); return; }
    setLoading(true);
    setError('');
    try {
      await signUp(formData.firstName, formData.lastName, formData.email, formData.password, formData.company, formData.country);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally { setLoading(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const formMaxWidth = '340px';
  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: '10px',
    border: '1px solid #dde5ec', fontSize: '14px', outline: 'none',
    boxSizing: 'border-box' as const, fontFamily: 'Inter, sans-serif',
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '960px', height: 'calc(100vh - 48px)', maxHeight: '740px' }}>
        <div style={{ display: 'flex', background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.35)', height: '100%' }}>

          {/* Left panel */}
          <div style={{
            flex: '0 0 38%', background: 'linear-gradient(165deg, #071528 0%, #0d2a4a 100%)',
            padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-40px', width: '240px', height: '240px', background: 'radial-gradient(circle, rgba(26,200,176,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ width: LOGO.headerWidth, height: 'auto', display: 'block', marginBottom: '24px', objectFit: 'contain' }} />
            <h1 style={{ ...pageH1OnDark, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '12px', lineHeight: 1.2 }}>
              Start issuing passports in minutes
            </h1>
            <p style={{ ...heroLead, fontSize: '14px', lineHeight: 1.7, margin: 0, maxWidth: '260px' }}>
              Create your free account and launch your first blockchain-verified Digital Product Passport today.
            </p>

            {/* Benefits */}
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Shield, text: 'Blockchain-anchored from day one' },
                { icon: Zap, text: 'First DPP live in under 5 minutes' },
                { icon: Globe, text: 'EU ESPR 2024 compliant' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '8px', background: 'rgba(26,200,176,0.12)', border: '1px solid rgba(26,200,176,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: 13, height: 13, color: '#1ac8b0' }} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            <p style={{ color: '#4a6a7a', fontSize: '11px', marginTop: '28px', marginBottom: 0, lineHeight: 1.5 }}>
              🔒 GDPR Compliant · EU Data Storage · No credit card required
            </p>
          </div>

          {/* Right panel — form */}
          <div style={{ flex: '1 1 auto', padding: '32px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflowY: 'auto' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
              <button type="button" onClick={() => navigate('/')}
                onMouseEnter={() => setBackHover(true)} onMouseLeave={() => setBackHover(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 0, border: 'none', background: 'none', color: backHover ? '#0a1f3c' : '#5a6a7a', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'color 0.2s' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '10px', background: backHover ? 'rgba(26,200,176,0.12)' : '#f8fafb', border: `1px solid ${backHover ? 'rgba(26,200,176,0.35)' : '#dde5ec'}`, color: backHover ? '#1ac8b0' : '#7a8a98', transition: 'all 0.2s' }}>
                  <ArrowLeft size={15} strokeWidth={2.25} />
                </span>
                Back to home
              </button>
            </div>

            <div style={{ width: '100%', maxWidth: formMaxWidth }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#e6faf7', border: '2px solid #1ac8b0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Check style={{ width: 24, height: 24, color: '#1ac8b0' }} />
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0a1f3c', marginBottom: '8px' }}>Account Created!</h2>
                  <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>Check your inbox — we've sent a verification email. Click the link to activate your account.</p>
                  <button onClick={() => navigate('/signin')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '13px 28px', borderRadius: '100px' }}>
                    Go to Sign In →
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0a1f3c', textAlign: 'center', marginBottom: '20px' }}>Create Your Free Account</h2>

                  {error && (
                    <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '12px 16px', marginBottom: '14px' }}>
                      <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" style={inputStyle} />
                      </div>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Work Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" style={inputStyle} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>
                        Password * <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 400 }}>(min 8 chars, 1 number)</span>
                      </label>
                      <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={8} placeholder="••••••••" style={inputStyle} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Company *</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Acme Inc." style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Country *</label>
                        <select name="country" value={formData.country} onChange={handleChange} required style={{ ...inputStyle, background: '#fff' }}>
                          <option value="">Select</option>
                          {['Austria','Belgium','Brazil','Canada','China','Denmark','Finland','France','Germany','India','Indonesia','Ireland','Italy','Japan','Malaysia','Mexico','Netherlands','New Zealand','Nigeria','Norway','Pakistan','Philippines','Poland','Portugal','Saudi Arabia','Singapore','South Africa','South Korea','Spain','Sweden','Switzerland','Thailand','Turkey','Ukraine','United Arab Emirates','United Kingdom','United States','Vietnam','Other'].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} required style={{ marginTop: '3px' }} />
                        <span style={{ color: '#5a6a7a', fontSize: '12px', lineHeight: 1.5 }}>
                          I agree to the <Link to="/terms" style={{ color: '#1ac8b0' }}>Terms</Link> and <Link to="/privacy-policy" style={{ color: '#1ac8b0' }}>Privacy Policy</Link>
                        </span>
                      </label>
                    </div>

                    {/* Cloudflare Turnstile */}
                    <div ref={turnstileRef} style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }} />

                    <button type="submit" disabled={!formData.agreeToTerms || !turnstileToken || loading}
                      style={{ width: '100%', background: formData.agreeToTerms && turnstileToken && !loading ? 'linear-gradient(135deg, #1ac8b0, #0ea58c)' : '#94a3b8', border: 'none', cursor: formData.agreeToTerms && turnstileToken && !loading ? 'pointer' : 'not-allowed', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '12px', borderRadius: '100px', marginBottom: '14px' }}>
                      {loading ? 'Creating Account...' : 'Create Free Account →'}
                    </button>
                  </form>

                  <p style={{ textAlign: 'center', color: '#7a8a98', fontSize: '13px', margin: '0 0 8px' }}>
                    Already have an account?{' '}
                    <button type="button" onClick={() => navigate('/signin')} style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Sign In</button>
                  </p>
                  <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '11px', margin: 0 }}>
                    <Link to="/privacy-policy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>{' · '}<Link to="/terms" style={{ color: '#94a3b8' }}>Terms and Conditions</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
