import { useNavigate, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faLinkedinIn, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const logoImg = import.meta.env.BASE_URL + 'logo-transparent.png';

export function SharedNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Product', path: '/product' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Company', path: '/company' },
  ];

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
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0, display: 'flex', alignItems: 'center' }}
        >
          <img
            src={logoImg}
            alt="StableDPP"
            style={{ height: '72px', width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </button>

        <div className="hidden md:flex" style={{ gap: '4px', flex: 1 }}>
          {navLinks.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              style={{
                background: location.pathname === link.path ? 'rgba(26,200,176,0.12)' : 'none',
                border: 'none',
                cursor: 'pointer',
                color: location.pathname === link.path ? '#1ac8b0' : '#c8d8e8',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (location.pathname !== link.path) (e.target as HTMLButtonElement).style.color = '#fff'; }}
              onMouseLeave={e => { if (location.pathname !== link.path) (e.target as HTMLButtonElement).style.color = '#c8d8e8'; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <button
            onClick={() => navigate('/signin')}
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
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/book-a-demo')}
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
            }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export function SharedFooter() {
  const navigate = useNavigate();
  
  const socialLinks = [
    { icon: faXTwitter, url: 'https://x.com/stabledpp', label: 'X' },
    { icon: faInstagram, url: 'https://www.instagram.com/stabledpp/', label: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/stable-dpp/', label: 'LinkedIn' },
    { icon: faRedditAlien, url: 'https://www.reddit.com/user/stable-dpp/', label: 'Reddit' },
  ];

  return (
    <footer style={{ background: '#071528', borderTop: '1px solid rgba(26,200,176,0.12)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div>
            <img src={logoImg} alt="StableDPP" style={{ height: '70px', width: 'auto', objectFit: 'contain', marginBottom: '12px' }} />
            <p style={{ color: '#7a8a98', fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
              Give every product a passport. Make every claim verifiable.
            </p>
            {/* Social Links */}
            <div>
              <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map(({ icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
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
                      textDecoration: 'none'
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
                  </a>
                ))}
              </div>
            </div>
          </div>
          {[
            { title: 'Platform', links: [['Product', '/product'], ['Get Started', '/get-started']] },
            { title: 'Solutions', links: [['Fashion Brands', '/solutions'], ['Manufacturers', '/solutions'], ['Retailers', '/solutions']] },
            { title: 'Company', links: [['About', '/company'], ['Book a Demo', '/book-a-demo']] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.title}</div>
              {col.links.map(([label, path]) => (
                <button key={label} onClick={() => navigate(path)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: '#7a8a98', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginBottom: '8px', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a8a98')}
                >
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ color: '#4a5a68', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
            © 2026 StableDPP · Digital Product Passports for Fashion · EU ESPR Compliant
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {([['Privacy Policy', '/terms#privacy'], ['Terms of Service', '/terms#terms']] as [string, string][]).map(([t, path]) => (
              <button key={t} onClick={() => navigate(path)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5a68', fontFamily: 'Inter, sans-serif', fontSize: '13px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7a8a98')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a5a68')}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
