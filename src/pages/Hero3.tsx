import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Hero 3 — "Three Pillars"
 * Centred, light. A short punchy headline above three animated
 * vertical "pillar" columns — one per infrastructure gap — each
 * with a score bar that fills on mount. Single CTA below.
 */

const PILLARS = [
  {
    icon: '🌐',
    label: 'Website & SEO',
    problem: 'Legacy CMS. Not cited by AI. Organic authority declining.',
    score: 28,
    scoreLabel: 'Authority Score',
    color: '#ef4444',
    items: ['No structured data', 'Not AI-search visible', 'Thin commercial pages'],
  },
  {
    icon: '⚙️',
    label: 'CRM & Sales Ops',
    problem: 'Lead routing broken. No nurture. Forecast unreliable.',
    score: 41,
    scoreLabel: 'Pipeline Health',
    color: '#f59e0b',
    items: ['Manual lead routing', 'Zero nurture sequences', 'No attribution model'],
  },
  {
    icon: '📈',
    label: 'Revenue Strategy',
    problem: 'No repeatable growth system. Channels disconnected.',
    score: 55,
    scoreLabel: 'Systems Alignment',
    color: '#f59e0b',
    items: ['Disconnected channels', 'No ICP definition', 'Weak conversion path'],
  },
]

export default function Hero3() {
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bars = barsRef.current?.querySelectorAll<HTMLElement>('[data-bar]')
    if (!bars) return
    bars.forEach((bar) => {
      const target = bar.getAttribute('data-bar') ?? '0'
      bar.style.width = '0%'
      setTimeout(() => {
        bar.style.transition = 'width 1.2s cubic-bezier(0.25, 1, 0.5, 1)'
        bar.style.width = `${target}%`
      }, 400)
    })
  }, [])

  return (
    <div style={s.page}>
      {/* Subtle background pattern */}
      <div style={s.noise} aria-hidden="true" />

      <div style={s.container}>
        {/* Header */}
        <div style={s.header}>
          <span style={s.eyebrow}>Infrastructure Audit</span>
          <h1 style={s.h1}>
            Three systems.<br />One broken chain.
          </h1>
          <p style={s.sub}>
            B2B revenue loss rarely comes from one source.
            It compounds across website, CRM, and strategy — invisibly.
          </p>
        </div>

        {/* Pillars */}
        <div style={s.pillars} ref={barsRef}>
          {PILLARS.map((p, i) => (
            <div key={i} style={s.pillar}>
              <div style={s.pillarIcon}>{p.icon}</div>
              <div style={s.pillarLabel}>{p.label}</div>
              <p style={s.pillarProblem}>{p.problem}</p>

              {/* Score bar */}
              <div style={s.barWrap}>
                <div style={{ ...s.barTrack }}>
                  <div
                    data-bar={p.score}
                    style={{ ...s.barFill, background: p.color }}
                  />
                </div>
                <div style={s.barMeta}>
                  <span style={s.barMetaLabel}>{p.scoreLabel}</span>
                  <span style={{ ...s.barMetaScore, color: p.color }}>{p.score}%</span>
                </div>
              </div>

              {/* Issues list */}
              <ul style={s.issues}>
                {p.items.map((item) => (
                  <li key={item} style={s.issue}>
                    <span style={s.issueIcon}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resolution row */}
        <div style={s.resolution}>
          <div style={s.resolutionBadge}>
            <span style={s.resolutionDot} />
            After Synapse Edge Audit — all three systems aligned
          </div>
          <div style={s.cta}>
            <Link to="/strategy-call" style={s.btnPrimary}>
              Get Your Free Infrastructure Audit
            </Link>
            <Link to="/case-studies" style={s.btnGhost}>
              See Client Results
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#f4f6f9',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
    padding: '120px 0 80px',
  },
  noise: {
    position: 'absolute', inset: 0,
    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(15,59,95,0.06) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(15,59,95,0.04) 0%, transparent 40%)`,
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1100px', margin: '0 auto', padding: '0 32px',
    width: '100%', position: 'relative', zIndex: 1,
  },
  header: { textAlign: 'center', marginBottom: '60px' },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: '#0f3b5f',
    background: '#e8f0f7', padding: '5px 14px',
    borderRadius: '20px', marginBottom: '20px',
  },
  h1: {
    fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
    fontWeight: 800, lineHeight: 1.1,
    letterSpacing: '-0.03em', color: '#1e293b',
    marginBottom: '16px',
  },
  sub: {
    fontSize: '1rem', color: '#6b7c93',
    lineHeight: 1.7, maxWidth: '520px', margin: '0 auto',
  },

  pillars: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px', marginBottom: '48px',
  },
  pillar: {
    background: '#ffffff', border: '1px solid #e6eaf0',
    borderRadius: '16px', padding: '32px 28px',
    boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
  },
  pillarIcon: {
    fontSize: '1.8rem', marginBottom: '14px', lineHeight: 1,
  },
  pillarLabel: {
    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
    textTransform: 'uppercase', color: '#0f3b5f',
    marginBottom: '10px',
  },
  pillarProblem: {
    fontSize: '0.88rem', color: '#1e293b', fontWeight: 600,
    lineHeight: 1.5, marginBottom: '20px',
  },

  barWrap: { marginBottom: '20px' },
  barTrack: {
    height: '6px', background: '#e6eaf0',
    borderRadius: '99px', overflow: 'hidden', marginBottom: '8px',
  },
  barFill: { height: '100%', borderRadius: '99px', width: '0%' },
  barMeta: { display: 'flex', justifyContent: 'space-between' },
  barMetaLabel: { fontSize: '0.7rem', color: '#94a3b8', fontWeight: 500 },
  barMetaScore: { fontSize: '0.7rem', fontWeight: 700 },

  issues: { display: 'flex', flexDirection: 'column', gap: '8px' },
  issue: {
    display: 'flex', gap: '8px', alignItems: 'flex-start',
    fontSize: '0.8rem', color: '#6b7c93', lineHeight: 1.4,
  },
  issueIcon: { color: '#ef4444', fontWeight: 700, flexShrink: 0, marginTop: '1px' },

  resolution: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px',
  },
  resolutionBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    fontSize: '0.82rem', fontWeight: 600, color: '#166534',
    background: '#dcfce7', border: '1px solid #86efac',
    padding: '10px 20px', borderRadius: '99px',
  },
  resolutionDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#22c55e', flexShrink: 0,
    boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
    display: 'inline-block',
  },
  cta: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },
  btnPrimary: {
    padding: '14px 30px',
    background: '#0f3b5f', color: '#ffffff',
    borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem',
    textDecoration: 'none',
  },
  btnGhost: {
    padding: '14px 30px',
    background: 'transparent', color: '#0f3b5f',
    border: '1.5px solid #0f3b5f', borderRadius: '8px',
    fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
  },
}
