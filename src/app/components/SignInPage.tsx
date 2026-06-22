import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { APP_CONFIG } from '../constants';
import { signIn } from '../utils/frappe';
import { formH1, formH2, logoHeaderStyle } from '../styles/typography';

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

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={logoHeaderStyle} />
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', padding: '40px' }}>

          {/* Forgot Password Modal */}
          {showForgot ? (
            <>
              <h2 style={{ ...formH2, textAlign: 'left', marginBottom: '8px' }}>Reset Password</h2>
              <p style={{ color: '#7a8a98', fontSize: '13px', marginBottom: '24px' }}>Enter your email and we'll send you a reset link.</p>
              {forgotSent ? (
                <div style={{ background: '#e6faf7', border: '1px solid #1ac8b0', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                  <p style={{ color: '#0a1f3c', fontSize: '14px', fontWeight: 600 }}>✓ Reset link sent!</p>
                  <p style={{ color: '#5a6a7a', fontSize: '13px', marginTop: '4px' }}>Check your inbox and follow the link to reset your password.</p>
                </div>
              ) : (
                <form onSubmit={handleForgot}>
                  <input type="email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} required placeholder="your@email.com"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #dde5ec', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }} />
                  <button type="submit" disabled={forgotLoading}
                    style={{ width: '100%', background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '13px', borderRadius: '100px' }}>
                    {forgotLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </form>
              )}
              <button onClick={() => { setShowForgot(false); setForgotSent(false); setForgotEmail(''); }}
                style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', cursor: 'pointer', marginTop: '16px', display: 'block', width: '100%', textAlign: 'center' }}>
                ← Back to Sign In
              </button>
            </>
          ) : (
            <>
              <h1 style={{ ...formH1, marginBottom: '6px' }}>Welcome back</h1>
              <p style={{ color: '#7a8a98', fontSize: '14px', textAlign: 'center', marginBottom: '28px' }}>Sign in to manage your Digital Product Passports</p>

              {error && (
                <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px' }}>
                  <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '6px' }}>Email address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required placeholder="you@company.com"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #dde5ec', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0a1f3c', marginBottom: '6px' }}>Password</label>
                  <input type="password" value={formData.password} onChange={e => setFormData(p => ({ ...p, password: e.target.value }))} required placeholder="••••••••"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid #dde5ec', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                  <button type="button" onClick={() => setShowForgot(true)} style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', cursor: 'pointer' }}>
                    Forgot password?
                  </button>
                </div>

                <button type="submit" disabled={loading}
                  style={{ width: '100%', background: loading ? '#94a3b8' : 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', color: '#071528', fontSize: '15px', fontWeight: 700, padding: '13px', borderRadius: '100px', marginBottom: '20px' }}>
                  {loading ? 'Signing in...' : 'Sign In →'}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ flex: 1, height: '1px', background: '#e8edf2' }} />
                  <span style={{ color: '#9aabba', fontSize: '12px' }}>or continue with</span>
                  <div style={{ flex: 1, height: '1px', background: '#e8edf2' }} />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                  <button type="button" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', border: '1px solid #dde5ec', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', color: '#0a1f3c' }}>
                    <GoogleIcon /> Google
                  </button>
                  <button type="button" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', border: '1px solid #dde5ec', padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', color: '#0a1f3c' }}>
                    <MicrosoftIcon /> Microsoft
                  </button>
                </div>

                <p style={{ textAlign: 'center', color: '#7a8a98', fontSize: '13px', marginBottom: '16px' }}>
                  Don't have an account?{' '}
                  <button type="button" onClick={() => navigate('/get-started')} style={{ background: 'none', border: 'none', color: '#1ac8b0', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                    Get Started Free
                  </button>
                </p>

                <p style={{ textAlign: 'center', color: '#9aabba', fontSize: '11px' }}>
                  🔒 256-bit encryption · GDPR compliant · EU data storage
                </p>
              </form>
            </>
          )}
        </div>

        <p style={{ textAlign: 'center', color: '#4a5a68', fontSize: '12px', marginTop: '20px' }}>
          <Link to="/terms#privacy" style={{ color: '#4a5a68' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/terms#terms" style={{ color: '#4a5a68' }}>Terms of Service</Link>
        </p>
      </div>
    </div>
  );
}
