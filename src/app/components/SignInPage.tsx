import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { signIn } from '../utils/frappe';
import { formH1, formH2, pageH1OnDark, heroLead, LOGO } from '../styles/typography';

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
      <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
      <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
      <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
    </svg>
  );
}

export function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signIn(formData.email, formData.password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);
    try {
      const { forgotPassword } = await import('../utils/frappe');
      await forgotPassword(forgotEmail);
      setForgotSent(true);
    } catch {
      setForgotSent(true); // show success regardless to prevent email enumeration
    } finally {
      setForgotLoading(false);
    }
  };

  const [backHover, setBackHover] = useState(false);

  const formMaxWidth = '300px';

  const inputStyle = {
    width: '100%',
    maxWidth: formMaxWidth,
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1px solid #dde5ec',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  const backButton = (
    <button
      type="button"
      onClick={() => {
        if (showForgot) {
          setShowForgot(false);
          setForgotSent(false);
          setForgotEmail('');
        } else {
          navigate('/');
        }
      }}
      onMouseEnter={() => setBackHover(true)}
      onMouseLeave={() => setBackHover(false)}
      aria-label={showForgot ? 'Back to sign in' : 'Back to home'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: 0,
        border: 'none',
        background: 'none',
        color: backHover ? '#0a1f3c' : '#5a6a7a',
        fontSize: '13px',
        fontWeight: 600,
        cursor: 'pointer',
        marginBottom: 0,
        transition: 'color 0.2s ease',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '10px',
          background: backHover ? 'rgba(26,200,176,0.12)' : '#f8fafb',
          border: `1px solid ${backHover ? 'rgba(26,200,176,0.35)' : '#dde5ec'}`,
          color: backHover ? '#1ac8b0' : '#7a8a98',
          transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
          flexShrink: 0,
        }}
      >
        <ArrowLeft size={15} strokeWidth={2.25} />
      </span>
      {showForgot ? 'Back to sign in' : 'Back to home'}
    </button>
  );

  return (
    <div style={{ height: '100vh', overflow: 'hidden', boxSizing: 'border-box', background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: showForgot ? '440px' : '920px', height: 'calc(100vh - 48px)', maxHeight: '720px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'nowrap',
          background: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          height: '100%',
        }}>

          {!showForgot && (
            <div style={{
              flex: '0 0 42%',
              background: 'linear-gradient(165deg, #071528 0%, #0d2a4a 100%)',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: '-80px', right: '-40px', width: '240px', height: '240px', background: 'radial-gradient(circle, rgba(26,200,176,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <img
                src={APP_CONFIG.logo}
                alt={APP_CONFIG.name}
                style={{
                  width: LOGO.headerWidth,
                  height: 'auto',
                  display: 'block',
                  marginBottom: '24px',
                  objectFit: 'contain',
                }}
              />
              <h1 style={{ ...pageH1OnDark, fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: '12px', lineHeight: 1.2 }}>
                Welcome back to StableDPP
              </h1>
              <p style={{ ...heroLead, fontSize: '15px', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
                Sign in to continue managing your Digital Product Passports.
              </p>
              <p style={{ color: '#4a6a7a', fontSize: '12px', marginTop: '24px', marginBottom: 0, lineHeight: 1.5 }}>
                🔒 256-bit encryption · GDPR compliant · EU data storage
              </p>
            </div>
          )}

          <div style={{
            flex: '1 1 auto',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
              {backButton}
            </div>

            <div style={{ width: '100%', maxWidth: formMaxWidth }}>
            {showForgot ? (
              <>
                <h2 style={{ ...formH2, textAlign: 'center', marginBottom: '8px' }}>Reset Password</h2>
                <p style={{ color: '#7a8a98', fontSize: '13px', marginBottom: '24px', textAlign: 'center' }}>Enter your email and we'll send you a reset link.</p>
                {forgotSent ? (
                  <div style={{ background: '#e6faf7', border: '1px solid #1ac8b0', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                    <p style={{ color: '#0a1f3c', fontSize: '14px', fontWeight: 600 }}>✓ Reset link sent!</p>
                    <p style={{ color: '#5a6a7a', fontSize: '13px', marginTop: '4px' }}>Check your inbox and follow the link to reset your password.</p>
                  </div>
                ) : (
                  <form onSubmit={handleForgot}>
                    <input type="email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} required placeholder="your@email.com"
                      style={{ ...inputStyle, marginBottom: '16px' }} />
                    <button type="submit" disabled={forgotLoading}
                      style={{ width: '100%', maxWidth: formMaxWidth, background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '13px', borderRadius: '100px' }}>
                      {forgotLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </form>
                )}
              </>
            ) : (
              <>
                <h2 style={{ ...formH1, textAlign: 'center', fontSize: '22px', marginBottom: '20px' }}>Sign In to Your Dashboard</h2>

                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '12px 16px', marginBottom: '14px' }}>
                    <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Email address</label>
                    <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required placeholder="you@company.com"
                      style={inputStyle} />
                  </div>

                  <div style={{ marginBottom: '4px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '4px' }}>Password</label>
                    <input type="password" value={formData.password} onChange={e => setFormData(p => ({ ...p, password: e.target.value }))} required placeholder="••••••••"
                      style={inputStyle} />
                  </div>

                  <div style={{ textAlign: 'right', marginBottom: '12px', maxWidth: formMaxWidth }}>
                    <button type="button" onClick={() => setShowForgot(true)} style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', cursor: 'pointer' }}>
                      Forgot password?
                    </button>
                  </div>

                  <button type="submit" disabled={loading}
                    style={{ width: '100%', maxWidth: formMaxWidth, background: loading ? '#94a3b8' : 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '12px', borderRadius: '100px', marginBottom: '14px' }}>
                    {loading ? 'Signing in...' : 'Sign In →'}
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ flex: 1, height: '1px', background: '#e8edf2' }} />
                    <span style={{ color: '#9aabba', fontSize: '12px' }}>or continue with</span>
                    <div style={{ flex: 1, height: '1px', background: '#e8edf2' }} />
                  </div>

                  <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
                    <button type="button" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', border: '1px solid #dde5ec', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', color: '#0a1f3c' }}>
                      <GoogleIcon /> Google
                    </button>
                    <button type="button" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', border: '1px solid #dde5ec', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', color: '#0a1f3c' }}>
                      <MicrosoftIcon /> Microsoft
                    </button>
                  </div>
                </form>

                <p style={{ textAlign: 'center', color: '#7a8a98', fontSize: '13px', margin: '0 0 8px', lineHeight: 1.5 }}>
                  Don't have an account?{' '}
                  <button type="button" onClick={() => navigate('/get-started')} style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    Get Started Free
                  </button>
                </p>
                <p style={{ textAlign: 'center', color: '#7a8a98', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>
                  <Link to="/privacy-policy" style={{ color: '#7a8a98' }}>Privacy Policy</Link>
                  {' · '}
                  <Link to="/terms" style={{ color: '#7a8a98' }}>Terms and Conditions</Link>
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
