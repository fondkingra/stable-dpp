import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { updatePageSEO } from '../utils/seo';
import { APP_CONFIG } from '../constants';

export function GetStartedPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    country: '',
    agreeToTerms: false
  });

  useEffect(() => {
    updatePageSEO('getStarted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle account creation
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: '#fff', padding: '48px', borderRadius: '16px', border: '1px solid #ede8e3', maxWidth: '500px', width: '100%' }}>
        
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#0a1f3c', textAlign: 'center', marginBottom: '8px' }}>
          Create Your Free Digital Product Passport Account
        </h1>
        
        <p style={{ color: '#5a6a7a', fontSize: '16px', textAlign: 'center', marginBottom: '32px' }}>
          Start issuing blockchain-verified Digital Product Passports in minutes. EU ESPR 2024 compliant from your very first passport. No credit card required — upgrade whenever you are ready to scale.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
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
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
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
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
              Work Email *
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
              Password * <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 400 }}>(min 8 characters, 1 number required)</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
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
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
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
              Country *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #ede8e3',
                fontSize: '14px',
                fontFamily: 'var(--font-primary)',
                outline: 'none',
                background: '#fff'
              }}
            >
              <option value="">Select your country</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
              <option value="ES">Spain</option>
              <option value="NL">Netherlands</option>
              <option value="BE">Belgium</option>
              <option value="AT">Austria</option>
              <option value="CH">Switzerland</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
              <option value="SG">Singapore</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                style={{ marginTop: '2px' }}
              />
              <span style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.5 }}>
                I agree to the{' '}
                <Link to="/terms#terms" style={{ color: '#1ac8b0', textDecoration: 'underline' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link to="/terms#privacy" style={{ color: '#1ac8b0', textDecoration: 'underline' }}>Privacy Policy</Link> *
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.agreeToTerms}
            style={{
              background: formData.agreeToTerms ? 'linear-gradient(135deg, #1ac8b0, #0ea58c)' : '#94a3b8',
              color: '#071528',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--font-primary)',
              fontSize: '16px',
              fontWeight: 700,
              cursor: formData.agreeToTerms ? 'pointer' : 'not-allowed',
              width: '100%',
              marginBottom: '24px'
            }}
          >
            Create My Free Account →
          </button>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ color: '#5a6a7a', fontSize: '14px' }}>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signin')}
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
                Sign In
              </button>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#94a3b8', fontSize: '12px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>🔒</span>
              <span>GDPR Compliant · EU Data Storage · AES-256 Encrypted</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>✓</span>
              <span>Blockchain-anchored from your very first passport</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>●</span>
              <span>Free to get started · No credit card required</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}