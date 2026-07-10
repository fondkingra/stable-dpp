import type { CSSProperties } from 'react';

const HEADER_WIDTH = 120;
const FOOTER_WIDTH = 130;

export const LOGO = {
  headerWidth: `${HEADER_WIDTH}px`,
  footerWidth: `${FOOTER_WIDTH}px`,
  navHeight: '72px',
  headerOffsetX: '0px',
  footerOffsetX: '0px',
} as const;

export const pageH1: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: 'clamp(28px, 4vw, 48px)',
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
};

export const pageH1OnDark: CSSProperties = {
  ...pageH1,
  color: '#fff',
};

export const pageH1OnLight: CSSProperties = {
  ...pageH1,
  color: '#0a1f3c',
};

export const pageH2: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: 'clamp(22px, 3vw, 36px)',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
};

export const pageH2OnLight: CSSProperties = {
  ...pageH2,
  color: '#0a1f3c',
};

export const pageH2OnDark: CSSProperties = {
  ...pageH2,
  color: '#fff',
};

export const formH1: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: '24px',
  fontWeight: 800,
  color: '#0a1f3c',
  textAlign: 'center',
  lineHeight: 1.2,
};

export const formH2: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: '22px',
  fontWeight: 800,
  color: '#0a1f3c',
  textAlign: 'center',
  lineHeight: 1.2,
};

export const legalH2: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: '17px',
  fontWeight: 700,
  color: '#e0eaf4',
  marginBottom: '10px',
  marginTop: '32px',
};

export const logoHeaderStyle: CSSProperties = {
  width: LOGO.headerWidth,
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  marginLeft: LOGO.headerOffsetX,
};

export const logoFooterStyle: CSSProperties = {
  width: LOGO.footerWidth,
  height: 'auto',
  objectFit: 'contain',
  marginBottom: '12px',
  marginLeft: LOGO.footerOffsetX,
};

export const cardH3: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  color: '#0a1f3c',
  lineHeight: 1.3,
  marginBottom: '12px',
};

export const cardBody: CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  color: '#475569',
  fontSize: '15px',
  lineHeight: 1.7,
};

export const heroEyebrow: CSSProperties = {
  display: 'inline-block',
  background: 'rgba(26,200,176,0.12)',
  border: '1px solid rgba(26,200,176,0.3)',
  color: '#1ac8b0',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '11px',
  letterSpacing: '0.14em',
  padding: '6px 14px',
  borderRadius: '100px',
  marginBottom: '24px',
};

export const heroLead: CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  color: '#a8bcc8',
  fontSize: '17px',
  lineHeight: 1.8,
};

export const heroSubtitle: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  color: '#1ac8b0',
  fontStyle: 'italic',
  fontSize: 'clamp(20px, 2.5vw, 28px)',
  fontWeight: 600,
  lineHeight: 1.3,
};

export const sectionLabel: CSSProperties = {
  color: '#1ac8b0',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '11px',
  letterSpacing: '0.14em',
  marginBottom: '12px',
};

export const passportCardBrand: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: '15px',
  color: '#0a1f3c',
};

export const passportCardTitle: CSSProperties = {
  fontFamily: "'Space Grotesk', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: '17px',
  color: '#0a1f3c',
  lineHeight: 1.3,
  marginBottom: '2px',
};

export const passportCardMeta: CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: '12px',
  color: '#94a3b8',
  lineHeight: 1.5,
  marginBottom: '14px',
};

export const passportCardTag: CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: '11px',
  fontWeight: 600,
  color: '#1ac8b0',
};

export const passportCardBadge: CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontSize: '10px',
  fontWeight: 700,
  color: '#1ac8b0',
};

export const passportCardMono: CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '11px',
};

export const passportCardMonoMuted: CSSProperties = {
  ...passportCardMono,
  color: '#94a3b8',
};

export const passportCardMonoAccent: CSSProperties = {
  ...passportCardMono,
  color: '#1ac8b0',
  fontWeight: 600,
};
