import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { ERROR_404 } from '../utils/messages';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'Inter, sans-serif' }}>
      <SharedNav />
      
      <section style={{ 
        padding: '120px 24px', 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '0 auto',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ fontSize: '120px', marginBottom: '32px' }}>🔍</div>
        <h1 style={{ 
          fontFamily: 'Merriweather, serif', 
          fontSize: 'clamp(24px, 3vw, 36px)', 
          fontWeight: 900, 
          color: '#0a1f3c', 
          marginBottom: '16px',
          lineHeight: 1.3
        }}>
          {ERROR_404.headline}
        </h1>
        <p style={{ 
          color: '#5a6a7a', 
          fontSize: '16px', 
          lineHeight: 1.7, 
          marginBottom: '32px' 
        }}>
          {ERROR_404.body}
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
            border: 'none',
            cursor: 'pointer',
            color: '#071528',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 700,
            padding: '14px 28px',
            borderRadius: '100px',
            display: 'inline-block',
            margin: '0 auto'
          }}
        >
          {ERROR_404.cta}
        </button>
      </section>
      
      <SharedFooter />
    </div>
  );
}