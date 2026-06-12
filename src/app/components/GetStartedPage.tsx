import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { updatePageSEO } from '../utils/seo';
import { APP_CONFIG } from '../constants';
import { signUp } from '../utils/frappe';

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSEO('getStarted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\d/.test(formData.password)) {
      setError('Password must contain at least one number.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await signUp(formData.firstName, formData.lastName, formData.email, formData.password);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)', fontFamily: 'var(--font-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: '#fff', padding: '48px', borderRadius: '16px', border: '1px solid #ede8e3', maxWidth: '500px', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '52px', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: '22px', fontWeight: 900, color: '#0a1f3c', marginBottom: '12px' }}>Account Created!</h2>
            <p style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>Check your inbox — we've sent a verification email. Click the link to activate your account.</p>
            <button onClick={() => navigate('/signin')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 32px', borderRadius: '100px' }}>
              Go to Sign In →
            </button>
          </div>
        ) : (
          <>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#0a1f3c', textAlign: 'center', marginBottom: '8px' }}>
          Create Your Free Account
        </h1>
        
        <p style={{ color: '#5a6a7a', fontSize: '14px', textAlign: 'center', marginBottom: '28px' }}>
          Start issuing blockchain-verified Digital Product Passports in minutes.
        </p>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px' }}>
            <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{error}</p>
          </div>
        )}

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
            disabled={!formData.agreeToTerms || loading}
            style={{
              background: formData.agreeToTerms && !loading ? 'linear-gradient(135deg, #1ac8b0, #0ea58c)' : '#94a3b8',
              color: '#071528',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--font-primary)',
              fontSize: '16px',
              fontWeight: 700,
              cursor: formData.agreeToTerms && !loading ? 'pointer' : 'not-allowed',
              width: '100%',
              marginBottom: '24px'
            }}
          >
            {loading ? 'Creating Account...' : 'Create My Free Account →'}
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
          </>
        )}
      </div>
    </div>
  );
}