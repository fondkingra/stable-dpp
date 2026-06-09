import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { updatePageSEO } from '../utils/seo';
import { APP_CONFIG } from '../constants';

export function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    updatePageSEO('signin');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in
    console.log('Sign in:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: '#fff', padding: '48px', borderRadius: '16px', border: '1px solid #ede8e3', maxWidth: '400px', width: '100%' }}>
        
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#0a1f3c', textAlign: 'center', marginBottom: '8px' }}>
          Welcome back to StableDPP
        </h1>
        
        <p style={{ color: '#5a6a7a', fontSize: '16px', textAlign: 'center', marginBottom: '32px' }}>
          Sign in to your dashboard and manage your Digital Product Passports.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
              Email address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #ede8e3',
                fontSize: '14px',
                fontFamily: 'var(--font-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #ede8e3',
                fontSize: '14px',
                fontFamily: 'var(--font-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '24px' }}>
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1ac8b0',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Forgot your password?
            </button>
          </div>

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
              color: '#071528',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--font-primary)',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              width: '100%',
              marginBottom: '24px'
            }}
          >
            Sign In →
          </button>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>Or continue with</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <button
              type="button"
              style={{
                flex: 1,
                background: '#fff',
                border: '1px solid #ede8e3',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Continue with Google
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                background: '#fff',
                border: '1px solid #ede8e3',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Continue with Microsoft
            </button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ color: '#5a6a7a', fontSize: '14px' }}>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/get-started')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1ac8b0',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Get Started Free
              </button>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#94a3b8', fontSize: '12px' }}>
            <span>🔒</span>
            <span>Secured by 256-bit encryption · GDPR compliant · EU data storage</span>
          </div>
        </form>
      </div>
    </div>
  );
}