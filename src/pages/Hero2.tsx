import { Link } from 'react-router-dom'

/**
 * Hero 2 — "Editorial Oversized"
 * Pure white. Left-aligned editorial typography.
 * A giant muted word bleeds behind the headline.
 * Three inline status badges replace the diagnostic cards.
 * Very minimal — just type, space, and one action.
 */
export default function Hero2() {
  return (
    <div style={s.page}>
      {/* Decorative oversized word */}
      <span style={s.watermark} aria-hidden="true">GAPS</span>

      <div style={s.container}>
        <div style={s.inner}>

          <p style={s.eyebrow}>B2B Revenue Architecture</p>

          <h1 style={s.h1}>
            Your pipeline leaks.<br />
            <em style={s.em}>We find exactly where.</em>
          </h1>

          <p style={s.sub}>
            We audit the commercial infrastructure behind your digital presence,
            lead generation, and sales execution — then build a system to close
            every gap.
          </p>

          <div style={s.badges}>
            <span style={{ ...s.badge, ...s.badgeWarn }}>
              <span style={{ ...s.badgeDot, background: '#f59e0b' }} />
              Website — not AI-search ready
            </span>
            <span style={{ ...s.badge, ...s.badgeWarn }}>
              <span style={{ ...s.badgeDot, background: '#f59e0b' }} />
              CRM — lead routing broken
            </span>
            <span style={{ ...s.badge, ...s.badgeWarn }}>
              <span style={{ ...s.badgeDot, background: '#ef4444' }} />
              SEO — zero AI citations
            </span>
          </div>

          <div style={s.action}>
            <Link to="/strategy-call" style={s.btnPrimary}>
              Request a Strategy Call →
            </Link>
            <span style={s.or}>or</span>
            <Link to="/contact" style={s.link}>
              get the free checklist
            </Link>
          </div>

          <div style={s.rule} />

          <div style={s.proof}>
            {[
              { n: '$3.5M+', l: 'incremental profit generated' },
              { n: '433%',   l: 'YoY lead growth' },
              { n: '119%',   l: 'revenue growth' },
              { n: '300%',   l: 'ROAS increase' },
            ].map(({ n, l }) => (
              <div key={n} style={s.proofItem}>
                <strong style={s.proofNum}>{n}</strong>
                <span style={s.proofLabel}>{l}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#ffffff',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
    padding: '120px 0 80px',
  },
  watermark: {
    position: 'absolute',
    right: '-2vw', top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 'clamp(160px, 22vw, 300px)',
    fontWeight: 900, letterSpacing: '-0.06em',
    color: 'transparent',
    WebkitTextStroke: '2px #e6eaf0',
    lineHeight: 1,
    userSelect: 'none', pointerEvents: 'none',
    zIndex: 0,
  },
  container: {
    maxWidth: '1200px', margin: '0 auto', padding: '0 32px',
    position: 'relative', zIndex: 1, width: '100%',
  },
  inner: { maxWidth: '680px' },
  eyebrow: {
    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#0f3b5f',
    marginBottom: '20px',
  },
  h1: {
    fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
    fontWeight: 800, lineHeight: 1.08,
    letterSpacing: '-0.035em', color: '#1e293b',
    marginBottom: '24px',
  },
  em: { fontStyle: 'normal', color: '#0f3b5f' },
  sub: {
    fontSize: '1.05rem', color: '#6b7c93',
    lineHeight: 1.7, marginBottom: '32px', maxWidth: '520px',
  },
  badges: { display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '7px',
    fontSize: '0.75rem', fontWeight: 600, padding: '6px 12px',
    borderRadius: '20px', border: '1px solid',
  },
  badgeWarn: {
    background: '#fffbeb', borderColor: '#fcd34d', color: '#92400e',
  },
  badgeDot: { width: '6px', height: '6px', borderRadius: '50%' },
  action: {
    display: 'flex', alignItems: 'center', gap: '16px',
    flexWrap: 'wrap', marginBottom: '52px',
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '15px 32px',
    background: '#0f3b5f', color: '#ffffff',
    borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem',
    textDecoration: 'none', letterSpacing: '0.01em',
  },
  or: { color: '#94a3b8', fontSize: '0.85rem' },
  link: {
    color: '#0f3b5f', fontWeight: 600, fontSize: '0.9rem',
    textDecoration: 'underline', textUnderlineOffset: '3px',
  },
  rule: {
    height: '1px', background: '#e6eaf0',
    marginBottom: '28px',
  },
  proof: { display: 'flex', gap: '40px', flexWrap: 'wrap' },
  proofItem: { display: 'flex', flexDirection: 'column', gap: '2px' },
  proofNum: {
    fontSize: '1.5rem', fontWeight: 800,
    color: '#0f3b5f', letterSpacing: '-0.02em',
  },
  proofLabel: { fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 },
}
