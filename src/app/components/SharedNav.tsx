import { useState, useEffect, type CSSProperties } from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { APP_CONFIG } from '../constants';
import { LOGO, logoHeaderStyle, logoFooterStyle } from '../styles/typography';
import { faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function SharedNav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const navLinks = [
    { label: 'Product', path: '/product' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Resources', path: '/resources' },
    { label: 'Company', path: '/company' },
  ];

  const linkStyle = (active: boolean): CSSProperties => ({
    background: active ? 'rgba(26,200,176,0.12)' : 'none',
    border: 'none',
    cursor: 'pointer',
    color: active ? '#1ac8b0' : '#c8d8e8',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    padding: '8px 14px',
    borderRadius: '8px',
    transition: 'all 0.2s',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  });

  return (
    <nav style={{
      background: '#0a1f3c',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(26,200,176,0.15)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: LOGO.navHeight,
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}>
        <Link
          to="/"
          aria-label="Go to StableDPP home"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0, display: 'flex', alignItems: 'center' }}
        >
          <img
            src={APP_CONFIG.logo}
            alt="StableDPP"
            style={logoHeaderStyle}
          />
        </Link>

        <div className="hidden md:flex" style={{ gap: '4px', flex: 1 }}>
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={linkStyle(active)}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#c8d8e8'; }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <Link
            to="/signin"
            className="hidden sm:inline-flex"
            style={{
              background: 'none',
              border: '1px solid rgba(200,216,232,0.3)',
              cursor: 'pointer',
              color: '#c8d8e8',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            Sign In
          </Link>
          <Link
            to="/book-a-demo"
            className="hidden sm:inline-flex"
            aria-label="Book a 30-minute Digital Product Passport demo"
            style={{
              background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
              border: 'none',
              cursor: 'pointer',
              color: '#071528',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              padding: '9px 18px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            Book a Demo
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', gap: '5px' }}
          >
            <span style={{ width: '22px', height: '2px', background: '#c8d8e8', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ width: '22px', height: '2px', background: '#c8d8e8', borderRadius: '2px', transition: 'all 0.2s', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: '22px', height: '2px', background: '#c8d8e8', borderRadius: '2px', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col" style={{ background: '#0a1f3c', borderTop: '1px solid rgba(26,200,176,0.1)', padding: '16px 24px 20px', gap: '4px' }}>
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...linkStyle(active),
                  fontSize: '15px',
                  padding: '10px 14px',
                  textAlign: 'left',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Link
              to="/signin"
              style={{ flex: 1, background: 'none', border: '1px solid rgba(200,216,232,0.3)', cursor: 'pointer', color: '#c8d8e8', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}
            >
              Sign In
            </Link>
            <Link
              to="/book-a-demo"
              style={{ flex: 1, background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, padding: '10px 18px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SharedFooter() {
  const socialLinks = [
    { icon: faXTwitter, url: 'https://x.com/stabledpp', label: 'StableDPP on X', visible: 'X' },
    { icon: faInstagram, url: 'https://www.instagram.com/stabledpp/', label: 'StableDPP on Instagram', visible: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/stable-dpp/', label: 'StableDPP on LinkedIn', visible: 'LinkedIn' },
  ];

  const footerLinkStyle: CSSProperties = {
    display: 'block',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#7a8a98',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    marginBottom: '8px',
    padding: 0,
    textAlign: 'left',
    transition: 'color 0.2s',
    textDecoration: 'none',
  };

  const legalLinkStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#4a5a68',
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    transition: 'color 0.2s',
    textDecoration: 'none',
  };

  return (
    <footer style={{ background: '#071528', borderTop: '1px solid rgba(26,200,176,0.12)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div>
            <Link
              to="/"
              aria-label="Go to StableDPP home"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'block' }}
            >
              <img src={APP_CONFIG.logo} alt="StableDPP" style={logoFooterStyle} />
            </Link>
            <p style={{ color: '#7a8a98', fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
              StableDPP (Stable DPP) — give every product a passport. Make every claim verifiable.
            </p>
            {/* Social Links */}
            <div>
              <p style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map(({ icon, url, label, visible }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={visible}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(26,200,176,0.08)',
                      border: '1px solid rgba(26,200,176,0.15)',
                      color: '#1ac8b0',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(26,200,176,0.15)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(26,200,176,0.3)';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(26,200,176,0.08)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(26,200,176,0.15)';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                    }}
                  >
                    <FontAwesomeIcon icon={icon} style={{ width: '16px', height: '16px' }} />
                    <span className="sr-only">{visible}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {[
            { title: 'Platform', links: [['Product', '/product'], ['Resources', '/resources'], ['Get Started', '/get-started']] as const },
            { title: 'Solutions', links: [['Fashion Brands', '/solutions/fashion-brands'], ['Manufacturers', '/solutions/manufacturers'], ['Retailers', '/solutions/retailers']] as const },
            { title: 'Company', links: [['About', '/company'], ['Book a Demo', '/book-a-demo']] as const },
          ].map(col => (
            <div key={col.title}>
              <div style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.title}</div>
              {col.links.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  style={footerLinkStyle}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#7a8a98'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ color: '#4a5a68', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
            © 2026 StableDPP · Digital Product Passports for Fashion · EU ESPR Compliant
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {([['Privacy Policy', '/privacy-policy'], ['Terms and Conditions', '/terms']] as const).map(([t, path]) => (
              <Link
                key={t}
                to={path}
                style={legalLinkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#7a8a98'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4a5a68'; }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
