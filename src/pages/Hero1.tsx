import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hero 1 — "Dark Command"
 * Full-viewport dark navy. Split layout: bold headline left, live
 * "infrastructure audit readout" on the right that types in line by line.
 */
export default function Hero1() {
  const linesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = linesRef.current?.querySelectorAll<HTMLElement>('[data-line]')
    if (!lines) return
    lines.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 160)
    })
  }, [])

  return (
    <div style={s.page}>
      {/* Background grid */}
      <div style={s.grid} aria-hidden="true" />

      <div style={s.container}>
        {/* LEFT */}
        <div style={s.left}>
          <span style={s.tag}>
            <span style={s.tagDot} />
            B2B Revenue Infrastructure
          </span>

          <h1 style={s.h1}>
            Fix the gaps.<br />
            <span style={s.accent}>Before they cost you more.</span>
          </h1>

          <p style={s.sub}>
            Most established B2B companies don't have a marketing problem —
            they have a systems problem. We find it and fix it.
          </p>

          <div style={s.btns}>
            <Link to="/strategy-call" style={{ ...s.btnPrimary }}>
              Request a Strategy Call
            </Link>
            <Link to="/contact" style={{ ...s.btnGhost }}>
              Get Free Pipeline Checklist
            </Link>
          </div>

          <div style={s.stats}>
            {[
              { n: '$3.5M+', l: 'Incremental Profit' },
              { n: '119%',   l: 'Revenue Growth' },
              { n: '433%',   l: 'YoY Lead Growth' },
            ].map(({ n, l }) => (
              <div key={n} style={s.stat}>
                <span style={s.statNum}>{n}</span>
                <span style={s.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — audit readout */}
        <div style={s.right}>
          <div style={s.terminal} ref={linesRef}>
            <div style={s.termHeader}>
              <span style={{ ...s.dot, background: '#ff5f57' }} />
              <span style={{ ...s.dot, background: '#ffbd2e' }} />
              <span style={{ ...s.dot, background: '#28ca41' }} />
              <span style={s.termTitle}>revenue_audit.exe</span>
            </div>
            <div style={s.termBody}>
              {AUDIT_LINES.map((line, i) => (
                <div key={i} data-line style={s.termLine}>
                  <span style={{ color: line.color ?? '#94a3b8' }}>{line.prefix}</span>
                  <span style={{ color: line.valueColor ?? '#e2e8f0' }}>{line.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AUDIT_LINES = [
  { prefix: '› scanning   ', text: 'website authority...', color: '#64748b' },
  { prefix: '  result     ', text: 'legacy CMS detected — AI-search blind', valueColor: '#f59e0b' },
  { prefix: '› scanning   ', text: 'CRM pipeline...', color: '#64748b' },
  { prefix: '  result     ', text: 'lead routing broken at stage 2', valueColor: '#f59e0b' },
  { prefix: '› scanning   ', text: 'nurture sequences...', color: '#64748b' },
  { prefix: '  result     ', text: 'no automation configured', valueColor: '#ef4444' },
  { prefix: '› scanning   ', text: 'SEO / AI visibility...', color: '#64748b' },
  { prefix: '  result     ', text: 'not cited in ChatGPT, Perplexity, Gemini', valueColor: '#ef4444' },
  { prefix: '› scanning   ', text: 'call tracking...', color: '#64748b' },
  { prefix: '  result     ', text: 'zero attribution on inbound calls', valueColor: '#ef4444' },
  { prefix: '' ,            text: '' },
  { prefix: '✓ audit done  ', text: 'book a call to review your roadmap', valueColor: '#22c55e', color: '#22c55e' },
]

/* ── inline styles ── */
const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #07192b 0%, #0f3b5f 60%, #0c2f4a 100%)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '100px 0 80px',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px', margin: '0 auto', padding: '0 32px',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '72px', alignItems: 'center',
    position: 'relative', zIndex: 1,
    width: '100%',
  },
  left: { display: 'flex', flexDirection: 'column', gap: '0' },
  tag: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#7ecef5',
    background: 'rgba(126,206,245,0.1)', border: '1px solid rgba(126,206,245,0.2)',
    padding: '6px 14px', borderRadius: '20px', marginBottom: '24px',
    width: 'fit-content',
  },
  tagDot: {
    width: '6px', height: '6px', borderRadius: '50%', background: '#7ecef5',
    animation: 'none',
  },
  h1: {
    fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
    fontWeight: 800, lineHeight: 1.1,
    letterSpacing: '-0.03em', color: '#ffffff',
    marginBottom: '20px',
  },
  accent: { color: '#7ecef5' },
  sub: {
    fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7, maxWidth: '420px', marginBottom: '36px',
  },
  btns: { display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' },
  btnPrimary: {
    padding: '14px 28px', background: '#7ecef5', color: '#07192b',
    borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem',
    textDecoration: 'none', letterSpacing: '0.01em',
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    padding: '14px 28px',
    background: 'transparent', color: 'rgba(255,255,255,0.8)',
    border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
    fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
  },
  stats: {
    display: 'flex', gap: '36px', paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  stat: { display: 'flex', flexDirection: 'column', gap: '4px' },
  statNum: {
    fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 800,
    color: '#ffffff', letterSpacing: '-0.02em',
  },
  statLabel: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 },

  right: { display: 'flex', justifyContent: 'center' },
  terminal: {
    background: '#0a1628', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px', overflow: 'hidden', width: '100%',
    boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
    fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace',
  },
  termHeader: {
    background: '#111f35', padding: '12px 16px',
    display: 'flex', alignItems: 'center', gap: '8px',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
  },
  dot: { width: '12px', height: '12px', borderRadius: '50%' },
  termTitle: {
    marginLeft: '8px', fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.4)', fontWeight: 500,
  },
  termBody: { padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: '6px' },
  termLine: { fontSize: '0.8rem', lineHeight: 1.6, whiteSpace: 'nowrap' },
}
