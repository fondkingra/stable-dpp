import { useState, useRef } from 'react';
import { Link } from 'react-router';
import emailjs from '@emailjs/browser';
import { SharedNav, SharedFooter } from './SharedNav';

const EMAILJS_SERVICE_ID = 'service_ht3l9bf';
const EMAILJS_TEMPLATE_ID = 'template_v82jwei';
const EMAILJS_PUBLIC_KEY = 'XnXXIfbHW-tQw42I1';

export function BookDemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    numberOfProducts: '',
    primaryMarket: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company,
          job_title: formData.jobTitle || 'Not specified',
          num_products: formData.numberOfProducts || 'Not specified',
          primary_market: formData.primaryMarket || 'Not specified',
          message: formData.message || 'No message provided',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please email us directly at info@stabledpp.com');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '28px' }}>
            See Your Products' Digital Product Passport — Live, in 30 Minutes.
          </h1>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            Book a personalised 30-minute demo with the StableDPP product team. We will build a live Digital Product Passport for one of your actual products, walk through every ESPR 2024 compliance requirement for your supply chain, and leave you with a clear, actionable roadmap to get your full catalogue DPP-ready.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          
          {/* Form */}
          <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '52px', marginBottom: '20px' }}>🎉</div>
                <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: '22px', fontWeight: 900, color: '#0a1f3c', marginBottom: '12px' }}>Request Received!</h2>
                <p style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.7 }}>Thanks! We'll be in touch within 24 hours to confirm your demo time.</p>
              </div>
            ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
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
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #ede8e3', fontSize: '14px', fontFamily: 'var(--font-primary)', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #ede8e3', fontSize: '14px', fontFamily: 'var(--font-primary)', outline: 'none' }}
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
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                    Number of Products
                  </label>
                  <select
                    name="numberOfProducts"
                    value={formData.numberOfProducts}
                    onChange={handleChange}
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
                    <option value="">Select range</option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                    Your primary market
                  </label>
                  <select
                    name="primaryMarket"
                    value={formData.primaryMarket}
                    onChange={handleChange}
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
                    <option value="">Select market</option>
                    <option value="EU">EU</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Global">Global</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 600, color: '#0a1f3c', marginBottom: '8px' }}>
                  Message: Tell us about your DPP goals and current compliance status
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #ede8e3',
                    fontSize: '14px',
                    fontFamily: 'var(--font-primary)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? '#94a3b8' : 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
                  color: '#071528',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  marginBottom: '16px'
                }}
              >
                {loading ? 'Sending...' : 'Book My Free Demo →'}
              </button>

              {error && <p style={{ color: '#dc2626', fontSize: '13px', marginBottom: '12px', textAlign: 'center' }}>{error}</p>}

              <p style={{ color: '#94a3b8', fontSize: '12px', lineHeight: 1.5 }}>
                Your data is handled in accordance with our <Link to="/terms#privacy" style={{ color: '#1ac8b0' }}>Privacy Policy</Link> and EU GDPR guidelines. We never sell or share your information.
              </p>
            </form>
            )}
          </div>

          {/* Trust Elements & Social Proof */}
          <div>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#0a1f3c', marginBottom: '20px' }}>
                What you will get from your 30 minutes:
              </h3>
              <ul style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.7, paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>A live Digital Product Passport built for one of your actual products</li>
                <li style={{ marginBottom: '8px' }}>A full ESPR 2024 compliance gap assessment for your supply chain</li>
                <li style={{ marginBottom: '8px' }}>A personalised DPP rollout roadmap for your product catalogue</li>
                <li style={{ marginBottom: '8px' }}>Answers to every compliance and technical question you have</li>
              </ul>
              <p style={{ color: '#1ac8b0', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>
                No obligation. No credit card. No pressure.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#0a1f3c', marginBottom: '20px' }}>
                Trusted by forward-thinking fashion brands building transparent, EU ESPR-compliant supply chains.
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ textAlign: 'center', padding: '16px', background: '#fafaf8', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '28px', fontWeight: 700, color: '#0a1f3c' }}>500+</div>
                  <div style={{ color: '#5a6a7a', fontSize: '12px' }}>Digital Product Passports issued</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#fafaf8', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#1ac8b0' }}>✓</div>
                  <div style={{ color: '#5a6a7a', fontSize: '12px' }}>EU ESPR 2024 Compliant</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#fafaf8', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#1ac8b0' }}>⟁</div>
                  <div style={{ color: '#5a6a7a', fontSize: '12px' }}>Blockchain Verified</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#fafaf8', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '28px', fontWeight: 700, color: '#0a1f3c' }}>30+</div>
                  <div style={{ color: '#5a6a7a', fontSize: '12px' }}>fashion brands onboarded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}