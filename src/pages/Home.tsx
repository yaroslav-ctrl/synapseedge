import { useRef, useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeroCanvas from '../components/HeroCanvas'

export default function Home() {
  const leadMagnetRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()
  const [lmStatus, setLmStatus] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollToLeadMagnet = (e: React.MouseEvent) => {
    e.preventDefault()
    leadMagnetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleLmSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLmStatus('Sending...')
    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch('https://formspree.io/f/mwvrevyl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        navigate('/thank-you')
        return
      }
      const data = await res.json().catch(() => null)
      setLmStatus(
        data?.errors?.map((err: { message: string }) => err.message).join(', ') ??
          'Something went wrong.'
      )
    } catch {
      setLmStatus('Network error. Please try again.')
    }
  }

  const faqs = [
    {
      q: "We're already running Google Ads and have a website. Why are leads still inconsistent?",
      a: (
        <>
          <p>Running ads and having a website doesn't mean your commercial system is connected. Most B2B companies we audit have three critical gaps:</p>
          <ul>
            <li>Ads send traffic to generic pages, not conversion-optimized pages built for specific buyer intent</li>
            <li>Phone calls — often the highest-value leads in heavy equipment, fleet, and marine sectors — aren't tracked back to the channel that generated them</li>
            <li>Leads that don't convert immediately have no automated follow-up sequence, so they quietly go cold</li>
          </ul>
          <p style={{ marginTop: '10px' }}>The fix isn't spending more. It's connecting the infrastructure so every lead is tracked, routed, and followed up consistently.</p>
        </>
      ),
    },
    {
      q: "We have a CRM but the sales team doesn't really use it. Is that fixable?",
      a: (
        <>
          <p>Yes — and it's one of the most common situations we encounter, especially in dealer networks and territory-based organizations. The reason sales teams don't use CRMs isn't laziness — it's that the CRM wasn't built around how they actually sell.</p>
          <ul>
            <li>Stages don't match the real deal cycle</li>
            <li>Data entry feels like reporting to management, not a tool that helps them close</li>
            <li>Lead routing is manual, creating ambiguity about ownership</li>
          </ul>
          <p style={{ marginTop: '10px' }}>We restructure the CRM around your actual sales motion, automate lead capture and routing, and build the reporting layer so leadership gets visibility without requiring the team to file reports.</p>
        </>
      ),
    },
    {
      q: "How important is AI search visibility for a company like ours — we sell equipment, not software.",
      a: (
        <>
          <p>More important than most people in your industry realize — and the window to act is short. When a procurement manager or business owner asks ChatGPT, Perplexity, or Gemini who to work with, the companies cited are the ones with structured authority signals.</p>
          <ul>
            <li>Early movers in traditional B2B sectors are already appearing in AI answers</li>
            <li>Companies that delay are being trained out of consideration before the buyer even searches Google</li>
            <li>The infrastructure we build for traditional SEO and GEO overlap significantly — it's not a separate project</li>
          </ul>
        </>
      ),
    },
    {
      q: "We've worked with marketing agencies before and seen weak results. How is this different?",
      a: (
        <>
          <p>The fundamental difference is that we're not a campaign agency — we're a commercial infrastructure firm. Agencies optimize within the channel they manage. We look at the whole system: what happens when a lead arrives, how it's routed, how it's followed up, how it's tracked, and where it breaks.</p>
          <ul>
            <li>We start with an audit, not a proposal — so the work is scoped to what actually needs fixing</li>
            <li>We measure success in pipeline and revenue outcomes, not impressions and click-through rates</li>
            <li>We operate from inside your commercial system, not from a reporting dashboard</li>
          </ul>
          <p style={{ marginTop: '10px' }}>If your last agency's answer to every problem was "increase the budget" — it's a signal the structural layer was never addressed.</p>
        </>
      ),
    },
    {
      q: "Our sales cycles are long — 3 to 12 months. Does any of this apply to us?",
      a: (
        <>
          <p>Long sales cycles are exactly where infrastructure quality determines revenue outcomes — because the gap between first contact and close is where most B2B companies lose deals they should have won.</p>
          <ul>
            <li>Without nurture sequences, long-cycle leads go silent</li>
            <li>Without CRM discipline, forecasting and bottlenecks stay invisible</li>
            <li>Without multi-touch attribution, you optimize the wrong channels</li>
          </ul>
          <p style={{ marginTop: '10px' }}>We design infrastructure specifically for long-cycle B2B.</p>
        </>
      ),
    },
    {
      q: "What does an engagement actually look like, and how long does it take?",
      a: (
        <>
          <p>Every engagement starts with the Executive Revenue Audit — typically a 2–3 week structured review of your website, CRM, tracking, SEO, and pipeline. The output is a Revenue Architecture Roadmap.</p>
          <ul>
            <li>Execution is modular — implement with us or your internal team</li>
            <li>Initial wins typically show within 60–90 days</li>
            <li>Structural wins compound over 6–18 months</li>
          </ul>
          <p style={{ marginTop: '10px' }}>The strategy call is a diagnostic conversation to determine fit.</p>
        </>
      ),
    },
  ]

  return (
    <>
      {/* Hero */}
      <section id="hero" aria-labelledby="hero-h1">
        <HeroCanvas />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left fade-up">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Revenue Infrastructure
              </div>
              <h1 id="hero-h1">
                Fix the Gaps in Your <em>B2B Sales Funnel</em>
              </h1>
              <p className="hero-sub">If website visibility, lead tracking, and CRM follow-up aren't aligned, qualified opportunities are quietly lost.</p>
              <p className="hero-bridge">We help established B2B companies diagnose and fix the infrastructure behind digital presence, lead generation and management, and sales execution.</p>
              <div className="hero-btns">
                <Link to="/strategy-call" className="btn btn-primary">Request a Strategy Call</Link>
                <a href="#lead-magnet" className="btn btn-secondary" onClick={scrollToLeadMagnet}>Get Free Pipeline Checklist</a>
              </div>
            </div>

            <div className="hero-right fade-up">
              <div className="hero-visual-card">
                <div className="hero-visual-card-icon">🌐</div>
                <div className="hero-visual-card-text">
                  <div className="hero-visual-card-label">Website Infrastructure</div>
                  <div className="hero-visual-card-title">Legacy website detected</div>
                  <div className="hero-visual-card-sub">
                    <span className="hero-status warn"><span className="hero-status-dot"></span>Authority declining · Not AI-search ready</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual-card">
                <div className="hero-visual-card-icon">⚙️</div>
                <div className="hero-visual-card-text">
                  <div className="hero-visual-card-label">CRM &amp; Sales Ops</div>
                  <div className="hero-visual-card-title">Pipeline gaps identified</div>
                  <div className="hero-visual-card-sub">
                    <span className="hero-status warn"><span className="hero-status-dot"></span>Lead routing broken · Nurturing missing</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual-card">
                <div className="hero-visual-card-icon">🔍</div>
                <div className="hero-visual-card-text">
                  <div className="hero-visual-card-label">SEO &amp; AI Visibility</div>
                  <div className="hero-visual-card-title">Commercial intent gaps</div>
                  <div className="hero-visual-card-sub">
                    <span className="hero-status warn"><span className="hero-status-dot"></span>Not cited in ChatGPT, Perplexity or Gemini</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual-card" style={{ borderColor: 'var(--primary)', background: 'var(--primary-light)' }}>
                <div className="hero-visual-card-icon accent">✅</div>
                <div className="hero-visual-card-text">
                  <div className="hero-visual-card-label">After Synapse Edge Audit</div>
                  <div className="hero-visual-card-title">Revenue infrastructure aligned</div>
                  <div className="hero-visual-card-sub">
                    <span className="hero-status ok"><span className="hero-status-dot"></span>Strategy · CRM · SEO · AI — all connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div id="social-proof">
        <div className="container">
          <div className="proof-bar">
            <div className="proof-item"><strong>$3.5M+</strong> Incremental Profit Generated</div>
            <div className="proof-divider"></div>
            <div className="proof-item"><strong>433%</strong> YoY Lead Growth</div>
            <div className="proof-divider"></div>
            <div className="proof-item"><strong>119%</strong> Revenue Growth</div>
            <div className="proof-divider"></div>
            <div className="proof-item"><strong>300%</strong> ROAS Increase</div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="hiw-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">SynapseEdge Three Step Process</span>
            <h2 id="hiw-h2">Audit → Roadmap → Implementation</h2>
            <p>A direct path from diagnosis to fixes — with clear deliverables and weekly execution.</p>
          </div>
          <div className="hiw-grid">
            <div className="hiw-card fade-up">
              <div className="hiw-step-num">1</div>
              <h3>14-Day Infrastructure Audit</h3>
              <p>We inspect lead generation, tracking, CRM stages, routing, lead-to-close, nurturing, SEO, and AI visibility — then quantify the biggest gaps.</p>
            </div>
            <div className="hiw-card fade-up">
              <div className="hiw-step-num">2</div>
              <h3>90-Day Fix Plan</h3>
              <p>You get a backlog, owners, timelines, and KPI targets. No fluff — a build plan your team can execute.</p>
            </div>
            <div className="hiw-card fade-up">
              <div className="hiw-step-num">3</div>
              <h3>Execution</h3>
              <p>If you'd like hands-on support, we work alongside your team to implement the systems and processes until everything operates smoothly end-to-end.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section id="lead-magnet" aria-labelledby="leadmagnet-h2" ref={leadMagnetRef}>
        <div className="container">
          <div className="lm-inner">
            <div className="lm-left">
              <div className="lm-eyebrow">✦ Free Download</div>
              <h2 id="leadmagnet-h2">
                Find Out Exactly <span>Where<br /> Your Pipeline Is Leaking</span>
              </h2>
              <p className="lm-lead">
                Most B2B companies are losing leads they don't even know about.
                This 50-question checklist walks you through every layer of your commercial system — from goals to sales —
                so you know precisely where to fix first.
              </p>
              <ul className="lm-bullets">
                <li>
                  <span className="lm-item-check">✓</span>
                  <strong>7 diagnostic modules</strong>
                  <span className="lm-desc">Goals, Leads, Calls, CRM, Follow-up, Website, SEO &amp; AI</span>
                </li>
                <li>
                  <span className="lm-item-check">✓</span>
                  <strong>50 yes/no questions</strong>
                  <span className="lm-desc">Takes less than 15 minutes to complete</span>
                </li>
                <li>
                  <span className="lm-item-check">✓</span>
                  <strong>Built-in scoring system</strong>
                  <span className="lm-desc">Instantly shows if you're "leaking", "capped", or "scale-ready"</span>
                </li>
                <li>
                  <span className="lm-item-check">✓</span>
                  <strong>Used inside real B2B audits</strong>
                  <span className="lm-desc">The same framework we use for paid engagements</span>
                </li>
              </ul>
            </div>

            <div className="lm-right" role="region" aria-label="Lead management checklist form">
              <div className="lm-form-eyebrow">Get Instant Access</div>
              <div className="lm-form-title">Free Lead Management Checklist</div>
              <div className="lm-form-sub">
                Enter your details and we'll send the checklist directly to your inbox. Takes 5 seconds.
              </div>
              <form className="lm-form" onSubmit={handleLmSubmit}>
                <input type="hidden" name="_subject" value="Checklist Request — synapseedge.com" />
                <input type="hidden" name="form_type" value="Checklist Request" />
                <input type="hidden" name="source" value="Checklist Download — Homepage" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="lm-field-group">
                  <div className="lm-field">
                    <label htmlFor="lm-first">First Name</label>
                    <input type="text" id="lm-first" name="first_name" placeholder="John" autoComplete="given-name" required />
                  </div>
                  <div className="lm-field">
                    <label htmlFor="lm-last">Last Name</label>
                    <input type="text" id="lm-last" name="last_name" placeholder="Smith" autoComplete="family-name" required />
                  </div>
                </div>
                <div className="lm-field">
                  <label htmlFor="lm-email">Work Email</label>
                  <input type="email" id="lm-email" name="email" placeholder="john@company.com" autoComplete="email" required />
                </div>
                <div className="lm-field">
                  <label htmlFor="lm-company">Company Name</label>
                  <input type="text" id="lm-company" name="company" placeholder="Acme Corp" autoComplete="organization" />
                </div>
                <div className="lm-field">
                  <label htmlFor="lm-industry">Industry</label>
                  <input type="text" id="lm-industry" name="industry" placeholder="e.g. Heavy Equipment, Industrial, Real Estate" />
                </div>
                <button className="lm-submit" type="submit">Send Me the Checklist →</button>
                {lmStatus && (
                  <div className="lm-success" style={{ display: 'block' }}>{lmStatus}</div>
                )}
                <div className="lm-form-guarantee">
                  <span aria-hidden="true">🔒</span>
                  <span>No spam. Unsubscribe anytime. Your data is safe.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Problem */}
      <section id="structural-problem" className="section" aria-labelledby="problem-h2">
        <div className="container">
          <div className="problem-inner">
            <div className="problem-left fade-up">
              <span className="eyebrow">The Real Issue</span>
              <h2 id="problem-h2">Fragmented Lead-to-Revenue Infrastructure</h2>
              <div className="rule"></div>
              <p>Most established B2B teams run campaigns, buy tools, and hire reps — but the handoffs fail: tracking is incomplete, leads aren't routed fast, follow-up isn't enforced, and search authority is drifting. That's why pipeline feels unpredictable.</p>
              <div className="problem-closing">
                <p>More campaigns won't fix structural gaps. Fix the systems, and results follow.</p>
              </div>
            </div>
            <div className="problem-right fade-up">
              <ul className="problem-list" aria-label="Revenue infrastructure gaps">
                <li><div className="problem-check" aria-hidden="true"></div>Disconnected sales and marketing teams</li>
                <li><div className="problem-check" aria-hidden="true"></div>Underutilized CRM systems</li>
                <li><div className="problem-check" aria-hidden="true"></div>Legacy websites losing authority</li>
                <li><div className="problem-check" aria-hidden="true"></div>Weak organic and Local SEO visibility</li>
                <li><div className="problem-check" aria-hidden="true"></div>Poor lead routing and follow-up discipline</li>
                <li><div className="problem-check" aria-hidden="true"></div>Limited email nurturing and automation</li>
                <li><div className="problem-check" aria-hidden="true"></div>No AI-search visibility strategy</li>
                <li><div className="problem-check" aria-hidden="true"></div>No one owns the system end-to-end</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built From */}
      <section id="built-from" className="section" aria-labelledby="built-h2">
        <div className="container">
          <div className="built-inner">
            <div className="built-content fade-up">
              <span className="eyebrow">Who We Are</span>
              <h2 id="built-h2">Built for High-Ticket, Operationally Complex B2Bs</h2>
              <div className="rule"></div>
              <p>Synapse Edge is built by operators — not agency-only marketers. We've worked inside territory-based sales orgs, multi-location dealer networks, and high-ticket industries where one broken handoff costs real money.</p>
              <p>We connect the pieces: <strong>website → tracking → CRM → follow-up → visibility.</strong> Then we help you execute until it's stable.</p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '12px' }}>About the Firm</Link>
            </div>
            <div className="built-cards fade-up">
              <div className="built-card">
                <h3>System Thinking</h3>
                <p>We analyze how digital visibility, lead capture, CRM workflows, and sales execution connect — identifying the structural gaps limiting growth.</p>
              </div>
              <div className="built-card">
                <h3>End-to-End Ownership</h3>
                <p>We don't hand you a strategy and disappear. We stay until the system is working — tracking, routing, follow-up, and visibility all connected.</p>
              </div>
              <div className="built-card">
                <h3>Execution in Sprints</h3>
                <p>Weekly sprints with clear deliverables. You always know what's being built, by when, and what outcome it's tied to.</p>
              </div>
              <div className="built-card">
                <h3>Revenue-Anchored Metrics</h3>
                <p>We measure pipeline, qualified leads, and close rate — not impressions. Every initiative has a commercial outcome attached.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section" aria-labelledby="expertise-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Capabilities</span>
            <h2 id="expertise-h2">Everything Needed to Generate and Convert More Qualified Leads</h2>
            <p>Strategy, systems, and execution — from website visibility and inbound lead generation to CRM discipline and sales follow-up.</p>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card fade-up">
              <h3>Growth Strategy &amp; Market Intelligence</h3>
              <ul>
                <li>Competitive landscape &amp; benchmarking</li>
                <li>Commercial-intent visibility share</li>
                <li>Territory &amp; customer coverage structure</li>
                <li>Revenue target modeling</li>
                <li>Funnel performance &amp; friction analysis</li>
              </ul>
            </div>
            <div className="expertise-card fade-up">
              <h3>Sales Operations &amp; CRM Optimization</h3>
              <ul>
                <li>CRM structuring &amp; automation</li>
                <li>Lead routing architecture</li>
                <li>Sales funnel redesign</li>
                <li>Customer coverage modeling</li>
                <li>Performance reporting infrastructure</li>
              </ul>
            </div>
            <div className="expertise-card fade-up">
              <h3>SEO &amp; Local Authority</h3>
              <ul>
                <li>Commercial-intent SEO strategy</li>
                <li>Multi-location Local SEO</li>
                <li>Structured data &amp; schema</li>
                <li>Generative Engine Optimization (GEO)</li>
                <li>AI citation visibility</li>
              </ul>
            </div>
            <div className="expertise-card fade-up">
              <h3>Email Marketing &amp; Automation</h3>
              <ul>
                <li>Lifecycle nurturing sequences</li>
                <li>Sales-trigger automation</li>
                <li>Dormant account reactivation</li>
                <li>CRM-integrated workflows</li>
              </ul>
            </div>
            <div className="expertise-card fade-up">
              <h3>AI-Driven Infrastructure</h3>
              <ul>
                <li>AI-ready site architecture</li>
                <li>AI chat &amp; lead qualification</li>
                <li>AI-search visibility optimization</li>
                <li>AI lead &amp; call scoring systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="section" aria-labelledby="ind-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Sector Focus</span>
            <h2 id="ind-h2">Industries We Serve</h2>
            <p>High-ticket B2B environments with long sales cycles, multi-stakeholder decisions, and complex commercial structures.</p>
          </div>
          <div className="industries-grid">
            {/* 1 Equipment */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 200 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="0" y1="148" x2="200" y2="148" stroke="rgba(180,218,255,0.18)" strokeWidth="1"/>
                  <rect x="12" y="100" width="148" height="36" rx="18" strokeWidth="2.5" fill="none"/>
                  <rect x="22" y="108" width="128" height="20" rx="10" strokeWidth="1.5" fill="none"/>
                  <circle cx="44" cy="118" r="9" strokeWidth="1.8" fill="none"/>
                  <circle cx="72" cy="118" r="9" strokeWidth="1.8" fill="none"/>
                  <circle cx="100" cy="118" r="9" strokeWidth="1.8" fill="none"/>
                  <circle cx="128" cy="118" r="9" strokeWidth="1.8" fill="none"/>
                  <path d="M20 100 L20 72 Q20 66 26 64 L148 64 Q158 64 160 72 L160 100 Z" strokeWidth="2" fill="none"/>
                  <path d="M100 64 L100 50 Q100 44 108 44 L148 44 Q158 44 160 52 L160 64 Z" strokeWidth="2" fill="none"/>
                  <line x1="112" y1="50" x2="112" y2="62" strokeWidth="1.5"/>
                  <line x1="124" y1="50" x2="124" y2="62" strokeWidth="1.5"/>
                  <line x1="136" y1="50" x2="136" y2="62" strokeWidth="1.5"/>
                  <rect x="148" y="32" width="6" height="14" rx="3" strokeWidth="1.8" fill="none"/>
                  <circle cx="151" cy="26" r="3.5" stroke="rgba(180,218,255,0.35)" strokeWidth="1" fill="none"/>
                  <circle cx="153" cy="18" r="5" stroke="rgba(180,218,255,0.2)" strokeWidth="1" fill="none"/>
                  <rect x="52" y="46" width="44" height="20" rx="3" strokeWidth="2" fill="none"/>
                  <rect x="56" y="49" width="14" height="12" rx="1.5" strokeWidth="1.5" fill="none"/>
                  <rect x="74" y="49" width="18" height="12" rx="1.5" strokeWidth="1.5" fill="none"/>
                  <path d="M20 80 L6 80 L6 100" strokeWidth="2" fill="none"/>
                  <path d="M6 100 L2 114" strokeWidth="2" fill="none"/>
                  <path d="M18 58 Q8 70 8 90 Q8 102 18 106" strokeWidth="3" fill="none"/>
                  <line x1="18" y1="58" x2="18" y2="106" strokeWidth="1.5"/>
                  <line x1="18" y1="70" x2="32" y2="74" strokeWidth="2"/>
                  <line x1="18" y1="94" x2="32" y2="92" strokeWidth="2"/>
                  <line x1="22" y1="64" x2="38" y2="68" strokeWidth="2"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Equipment</div>
                <h3>Heavy Equipment Dealers</h3>
                <div className="industry-sub">Construction, Agricultural, Material Handling</div>
              </div>
            </div>
            {/* 2 Fleet */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <line x1="0" y1="152" x2="180" y2="152" stroke="rgba(180,218,255,0.2)" strokeWidth="1"/>
                  <rect x="28" y="118" width="124" height="20" rx="4" fill="rgba(180,218,255,0.05)"/>
                  <circle cx="52" cy="142" r="11"/><circle cx="52" cy="142" r="5" strokeWidth="1"/>
                  <circle cx="128" cy="142" r="11"/><circle cx="128" cy="142" r="5" strokeWidth="1"/>
                  <line x1="28" y1="134" x2="8" y2="144"/><line x1="152" y1="134" x2="172" y2="144"/>
                  <circle cx="6" cy="146" r="4"/><circle cx="174" cy="146" r="4"/>
                  <rect x="74" y="108" width="32" height="12" rx="2" fill="rgba(180,218,255,0.05)"/>
                  <line x1="90" y1="108" x2="78" y2="64" strokeWidth="3.5"/>
                  <circle cx="78" cy="64" r="5" fill="rgba(180,218,255,0.08)"/>
                  <line x1="78" y1="64" x2="90" y2="18" strokeWidth="2.5"/>
                  <rect x="76" y="6" width="50" height="15" rx="3" fill="rgba(180,218,255,0.06)"/>
                  <line x1="80" y1="6" x2="80" y2="0"/><line x1="92" y1="6" x2="92" y2="0"/>
                  <line x1="104" y1="6" x2="104" y2="0"/><line x1="116" y1="6" x2="116" y2="0"/>
                  <line x1="78" y1="0" x2="118" y2="0"/>
                  <circle cx="110" cy="3" r="3" strokeWidth="1" fill="rgba(180,218,255,0.1)"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Fleet</div>
                <h3>Rental &amp; Fleet Companies</h3>
                <div className="industry-sub">Aerial Equipment, Lighting Towers, Compressors &amp; Work Tool Attachments</div>
              </div>
            </div>
            {/* 3 Industrial */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <line x1="0" y1="152" x2="180" y2="152" stroke="rgba(180,218,255,0.2)" strokeWidth="1"/>
                  <rect x="14" y="72" width="152" height="80" rx="2" fill="rgba(180,218,255,0.03)"/>
                  <polyline points="14,72 34,44 54,72 74,44 94,72 114,44 134,72 154,44 166,72" fill="none"/>
                  <rect x="22" y="90" width="20" height="14" rx="1" fill="rgba(180,218,255,0.06)" strokeWidth="1"/>
                  <rect x="50" y="90" width="20" height="14" rx="1" fill="rgba(180,218,255,0.04)" strokeWidth="1"/>
                  <rect x="78" y="90" width="20" height="14" rx="1" fill="rgba(180,218,255,0.06)" strokeWidth="1"/>
                  <rect x="106" y="90" width="20" height="14" rx="1" fill="rgba(180,218,255,0.04)" strokeWidth="1"/>
                  <rect x="74" y="122" width="32" height="30" rx="1" fill="rgba(180,218,255,0.04)"/>
                  <rect x="24" y="22" width="9" height="50" rx="2" fill="rgba(180,218,255,0.04)"/>
                  <rect x="40" y="32" width="7" height="40" rx="2" fill="rgba(180,218,255,0.04)"/>
                  <circle cx="28" cy="16" r="4" stroke="rgba(180,218,255,0.28)" fill="none" strokeWidth="1"/>
                  <circle cx="31" cy="7" r="6" stroke="rgba(180,218,255,0.15)" fill="none" strokeWidth="1"/>
                  <circle cx="43" cy="24" r="4" stroke="rgba(180,218,255,0.22)" fill="none" strokeWidth="1"/>
                  <path d="M136 96 Q148 86 160 96 L162 104 L134 104 Z" strokeWidth="1.5" fill="rgba(180,218,255,0.06)"/>
                  <rect x="134" y="104" width="28" height="5" rx="1" strokeWidth="1.2" fill="rgba(180,218,255,0.04)"/>
                  <path d="M140 118 Q136 112 140 108 Q144 104 148 108 L155 116 L152 120 Z" strokeWidth="1.3" fill="rgba(180,218,255,0.04)"/>
                  <line x1="152" y1="119" x2="162" y2="132" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Industrial</div>
                <h3>Industrial Services &amp; Machinery</h3>
                <div className="industry-sub">Industrial Systems, Safety, Transportation &amp; Automotive</div>
              </div>
            </div>
            {/* 4 Services/AI */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <rect x="62" y="52" width="56" height="56" rx="6" fill="rgba(180,218,255,0.04)"/>
                  <rect x="72" y="62" width="36" height="36" rx="3" fill="rgba(180,218,255,0.05)"/>
                  <line x1="76" y1="52" x2="76" y2="44" strokeWidth="2"/><line x1="88" y1="52" x2="88" y2="44" strokeWidth="2"/>
                  <line x1="100" y1="52" x2="100" y2="44" strokeWidth="2"/><line x1="112" y1="52" x2="112" y2="44" strokeWidth="2"/>
                  <line x1="76" y1="108" x2="76" y2="116" strokeWidth="2"/><line x1="88" y1="108" x2="88" y2="116" strokeWidth="2"/>
                  <line x1="100" y1="108" x2="100" y2="116" strokeWidth="2"/><line x1="112" y1="108" x2="112" y2="116" strokeWidth="2"/>
                  <line x1="62" y1="66" x2="54" y2="66" strokeWidth="2"/><line x1="62" y1="80" x2="54" y2="80" strokeWidth="2"/>
                  <line x1="62" y1="94" x2="54" y2="94" strokeWidth="2"/>
                  <line x1="118" y1="66" x2="126" y2="66" strokeWidth="2"/><line x1="118" y1="80" x2="126" y2="80" strokeWidth="2"/>
                  <line x1="118" y1="94" x2="126" y2="94" strokeWidth="2"/>
                  <circle cx="20" cy="24" r="5" fill="rgba(180,218,255,0.07)"/><circle cx="160" cy="24" r="5" fill="rgba(180,218,255,0.07)"/>
                  <circle cx="20" cy="136" r="5" fill="rgba(180,218,255,0.07)"/><circle cx="160" cy="136" r="5" fill="rgba(180,218,255,0.07)"/>
                  <circle cx="90" cy="12" r="4" fill="rgba(180,218,255,0.07)"/>
                  <line x1="25" y1="27" x2="62" y2="60" stroke="rgba(180,218,255,0.28)" strokeDasharray="4 3"/>
                  <line x1="155" y1="27" x2="118" y2="60" stroke="rgba(180,218,255,0.28)" strokeDasharray="4 3"/>
                  <line x1="25" y1="133" x2="62" y2="100" stroke="rgba(180,218,255,0.28)" strokeDasharray="4 3"/>
                  <line x1="155" y1="133" x2="118" y2="100" stroke="rgba(180,218,255,0.28)" strokeDasharray="4 3"/>
                  <line x1="90" y1="16" x2="90" y2="52" stroke="rgba(180,218,255,0.28)" strokeDasharray="4 3"/>
                  <circle cx="90" cy="80" r="5" stroke="none" fill="rgba(180,218,255,0.45)"/>
                  <circle cx="90" cy="80" r="10" stroke="rgba(180,218,255,0.2)" fill="none" strokeWidth="1"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Services</div>
                <h3>Enterprise Service Providers</h3>
                <div className="industry-sub">B2B Professional &amp; Managed Services</div>
              </div>
            </div>
            {/* 5 Marine */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <circle cx="22" cy="16" r="1.2" fill="rgba(180,218,255,0.5)" stroke="none"/>
                  <circle cx="154" cy="12" r="1.4" fill="rgba(180,218,255,0.45)" stroke="none"/>
                  <circle cx="72" cy="8" r="1" fill="rgba(180,218,255,0.4)" stroke="none"/>
                  <circle cx="142" cy="34" r="1" fill="rgba(180,218,255,0.35)" stroke="none"/>
                  <path d="M34 112 L146 112 L132 126 L48 126 Z" fill="rgba(180,218,255,0.05)"/>
                  <rect x="40" y="101" width="100" height="13" rx="2" fill="rgba(180,218,255,0.06)"/>
                  <line x1="36" y1="110" x2="144" y2="110" stroke="rgba(180,218,255,0.45)" strokeWidth="2"/>
                  <line x1="90" y1="100" x2="90" y2="14" strokeWidth="2"/>
                  <line x1="90" y1="86" x2="56" y2="96" strokeWidth="1.5"/>
                  <path d="M92 18 L134 100 L92 100 Z" fill="rgba(180,218,255,0.06)" strokeWidth="1.5"/>
                  <path d="M88 32 L52 100 L88 100 Z" fill="rgba(180,218,255,0.04)" strokeWidth="1"/>
                  <line x1="90" y1="16" x2="52" y2="100" stroke="rgba(180,218,255,0.28)" strokeWidth="1"/>
                  <line x1="90" y1="16" x2="134" y2="100" stroke="rgba(180,218,255,0.28)" strokeWidth="1"/>
                  <rect x="94" y="92" width="28" height="11" rx="2" fill="rgba(180,218,255,0.05)" strokeWidth="1"/>
                  <rect x="97" y="94" width="9" height="6" rx="1" fill="rgba(180,218,255,0.12)" strokeWidth="0.8"/>
                  <rect x="109" y="94" width="9" height="6" rx="1" fill="rgba(180,218,255,0.1)" strokeWidth="0.8"/>
                  <path d="M0 138 Q22 130 45 138 Q68 146 90 138 Q112 130 135 138 Q158 146 180 138" stroke="rgba(180,218,255,0.5)" fill="none"/>
                  <path d="M0 148 Q22 141 45 148 Q68 155 90 148 Q112 141 135 148 Q158 155 180 148" stroke="rgba(180,218,255,0.28)" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Marine</div>
                <h3>Yachts &amp; Marine Dealers</h3>
                <div className="industry-sub">Luxury, Commercial &amp; Recreational Marine</div>
              </div>
            </div>
            {/* 6 Power Systems */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <line x1="0" y1="152" x2="180" y2="152" stroke="rgba(180,218,255,0.2)" strokeWidth="1"/>
                  <rect x="20" y="138" width="140" height="10" rx="2" fill="rgba(180,218,255,0.05)" strokeWidth="1.5"/>
                  <rect x="24" y="146" width="18" height="6" rx="1" fill="rgba(180,218,255,0.04)" strokeWidth="1"/>
                  <rect x="138" y="146" width="18" height="6" rx="1" fill="rgba(180,218,255,0.04)" strokeWidth="1"/>
                  <rect x="28" y="60" width="124" height="80" rx="3" fill="rgba(180,218,255,0.04)" strokeWidth="2"/>
                  <rect x="28" y="52" width="124" height="10" rx="2" fill="rgba(180,218,255,0.05)" strokeWidth="1.5"/>
                  <rect x="36" y="72" width="42" height="52" rx="1" fill="rgba(180,218,255,0.03)" strokeWidth="1"/>
                  <line x1="36" y1="82" x2="78" y2="82" stroke="rgba(180,218,255,0.25)" strokeWidth="1"/>
                  <line x1="36" y1="90" x2="78" y2="90" stroke="rgba(180,218,255,0.25)" strokeWidth="1"/>
                  <line x1="36" y1="98" x2="78" y2="98" stroke="rgba(180,218,255,0.25)" strokeWidth="1"/>
                  <line x1="36" y1="106" x2="78" y2="106" stroke="rgba(180,218,255,0.25)" strokeWidth="1"/>
                  <line x1="36" y1="114" x2="78" y2="114" stroke="rgba(180,218,255,0.25)" strokeWidth="1"/>
                  <rect x="86" y="68" width="58" height="64" rx="2" fill="rgba(180,218,255,0.03)" strokeWidth="1.2"/>
                  <circle cx="90" cy="100" r="3" fill="none" strokeWidth="1.5"/>
                  <rect x="120" y="34" width="10" height="20" rx="3" fill="rgba(180,218,255,0.04)" strokeWidth="1.5"/>
                  <circle cx="125" cy="28" r="3.5" stroke="rgba(180,218,255,0.3)" strokeWidth="1" fill="none"/>
                  <circle cx="127" cy="20" r="5" stroke="rgba(180,218,255,0.16)" strokeWidth="1" fill="none"/>
                  <polyline points="106,56 100,70 107,70 101,84" stroke="rgba(180,218,255,0.7)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Power Systems</div>
                <h3>Power Systems &amp; Energy</h3>
                <div className="industry-sub">Generator Sets, Engines, Solar Panels &amp; Energy Storage</div>
              </div>
            </div>
            {/* 7 Automotive */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 200 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="0" y1="148" x2="200" y2="148" stroke="rgba(180,218,255,0.18)" strokeWidth="1"/>
                  <path d="M18 110 L18 88 Q20 82 30 76 L60 58 Q70 52 90 50 L130 50 Q148 50 158 58 L174 76 Q182 82 182 88 L182 110 Z" strokeWidth="2.5" fill="rgba(180,218,255,0.04)"/>
                  <path d="M62 76 Q72 54 92 52 L128 52 Q146 52 152 64 L164 76" strokeWidth="2" fill="none"/>
                  <path d="M66 76 Q74 56 92 54 L110 54 L110 76 Z" strokeWidth="1.5" fill="rgba(180,218,255,0.07)"/>
                  <path d="M114 76 L114 54 L128 54 Q144 54 150 64 L162 76 Z" strokeWidth="1.5" fill="rgba(180,218,255,0.05)"/>
                  <line x1="112" y1="76" x2="112" y2="110" strokeWidth="1.2" stroke="rgba(180,218,255,0.5)"/>
                  <rect x="78" y="92" width="16" height="4" rx="2" strokeWidth="1" fill="rgba(180,218,255,0.1)"/>
                  <rect x="128" y="92" width="16" height="4" rx="2" strokeWidth="1" fill="rgba(180,218,255,0.1)"/>
                  <line x1="22" y1="96" x2="178" y2="96" stroke="rgba(180,218,255,0.2)" strokeWidth="1"/>
                  <circle cx="52" cy="114" r="20" strokeWidth="2.2" fill="rgba(180,218,255,0.03)"/>
                  <circle cx="52" cy="114" r="10" strokeWidth="1.5" fill="none"/>
                  <circle cx="52" cy="114" r="3" strokeWidth="1" fill="rgba(180,218,255,0.2)"/>
                  <circle cx="148" cy="114" r="20" strokeWidth="2.2" fill="rgba(180,218,255,0.03)"/>
                  <circle cx="148" cy="114" r="10" strokeWidth="1.5" fill="none"/>
                  <circle cx="148" cy="114" r="3" strokeWidth="1" fill="rgba(180,218,255,0.2)"/>
                  <rect x="175" y="88" width="8" height="10" rx="2" strokeWidth="1.5" fill="rgba(180,218,255,0.08)"/>
                  <rect x="17" y="88" width="6" height="10" rx="2" strokeWidth="1.5" fill="rgba(180,218,255,0.06)"/>
                  <path d="M182 100 Q186 104 186 110 L182 110" strokeWidth="1.5" fill="none"/>
                  <path d="M18 100 Q14 104 14 110 L18 110" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Automotive</div>
                <h3>Automotive Dealers</h3>
                <div className="industry-sub">New &amp; Used Vehicle Sales, Multi-Brand Dealer Groups</div>
              </div>
            </div>
            {/* 8 Specialty Vehicles */}
            <div className="industry-card fade-up">
              <div className="industry-art" aria-hidden="true">
                <svg viewBox="0 0 200 160" fill="none" stroke="rgba(180,218,255,0.95)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <line x1="0" y1="148" x2="200" y2="148" stroke="rgba(180,218,255,0.18)" strokeWidth="1"/>
                  <path d="M14 112 L14 58 Q14 52 20 52 L158 52 Q166 52 168 58 L180 80 L180 112 Z" strokeWidth="2.2" fill="rgba(180,218,255,0.04)"/>
                  <line x1="158" y1="52" x2="180" y2="80" strokeWidth="2" stroke="rgba(180,218,255,0.7)"/>
                  <path d="M158 54 L176 78 L158 78 Z" strokeWidth="1.2" fill="rgba(180,218,255,0.07)"/>
                  <rect x="160" y="60" width="14" height="14" rx="2" strokeWidth="1" fill="rgba(180,218,255,0.1)"/>
                  <rect x="30" y="62" width="22" height="18" rx="2" strokeWidth="1.2" fill="rgba(180,218,255,0.07)"/>
                  <rect x="62" y="62" width="22" height="18" rx="2" strokeWidth="1.2" fill="rgba(180,218,255,0.07)"/>
                  <rect x="94" y="62" width="22" height="18" rx="2" strokeWidth="1.2" fill="rgba(180,218,255,0.07)"/>
                  <rect x="126" y="62" width="22" height="18" rx="2" strokeWidth="1.2" fill="rgba(180,218,255,0.07)"/>
                  <rect x="70" y="86" width="22" height="28" rx="2" strokeWidth="1.2" fill="rgba(180,218,255,0.04)"/>
                  <circle cx="88" cy="100" r="2" strokeWidth="1" fill="rgba(180,218,255,0.2)"/>
                  <line x1="14" y1="84" x2="180" y2="84" stroke="rgba(180,218,255,0.22)" strokeWidth="1"/>
                  <rect x="22" y="86" width="40" height="20" rx="1" strokeWidth="1" fill="rgba(180,218,255,0.03)"/>
                  <line x1="70" y1="52" x2="52" y2="44" strokeWidth="1.2" stroke="rgba(180,218,255,0.4)"/>
                  <line x1="52" y1="44" x2="52" y2="52" strokeWidth="1" stroke="rgba(180,218,255,0.3)"/>
                  <circle cx="46" cy="118" r="18" strokeWidth="2" fill="rgba(180,218,255,0.03)"/>
                  <circle cx="46" cy="118" r="9" strokeWidth="1.4" fill="none"/>
                  <circle cx="46" cy="118" r="3" strokeWidth="1" fill="rgba(180,218,255,0.18)"/>
                  <circle cx="148" cy="118" r="18" strokeWidth="2" fill="rgba(180,218,255,0.03)"/>
                  <circle cx="148" cy="118" r="9" strokeWidth="1.4" fill="none"/>
                  <circle cx="148" cy="118" r="3" strokeWidth="1" fill="rgba(180,218,255,0.18)"/>
                  <circle cx="18" cy="32" r="1.2" fill="rgba(180,218,255,0.45)" stroke="none"/>
                  <circle cx="186" cy="24" r="1" fill="rgba(180,218,255,0.35)" stroke="none"/>
                  <circle cx="190" cy="44" r="1" fill="rgba(180,218,255,0.3)" stroke="none"/>
                </svg>
              </div>
              <div className="industry-arr">↗</div>
              <div className="industry-body">
                <div className="industry-label">Recreational</div>
                <h3>Specialty Vehicle Dealers</h3>
                <div className="industry-sub">Powersports &amp; Off-Road Vehicles, RVs &amp; Campers, Golf Carts &amp; Trailers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="section" aria-labelledby="results-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Documented Outcomes</span>
            <h2 id="results-h2">Results That Reflect the Work</h2>
            <p>Outcomes achieved inside real B2B operations — not projections, not estimates.</p>
          </div>
          <div className="results-grid">
            <div className="result-card fade-up"><div className="result-num">$3.5M+</div><div className="result-label">Incremental Profit Growth</div></div>
            <div className="result-card fade-up"><div className="result-num">433%</div><div className="result-label">YoY Lead Growth</div></div>
            <div className="result-card fade-up"><div className="result-num">119%</div><div className="result-label">Revenue Growth</div></div>
            <div className="result-card fade-up"><div className="result-num">150%+</div><div className="result-label">Organic Traffic Growth</div></div>
            <div className="result-card fade-up"><div className="result-num">300%</div><div className="result-label">ROAS Increase</div></div>
            <div className="result-card fade-up"><div className="result-num">62%</div><div className="result-label">Reduction in Cost Per Conversion</div></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-up">
            <Link to="/case-studies" className="btn btn-secondary">View Full Case Studies</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Common Questions</span>
            <h2 id="faq-h2">The Questions We Hear Most Often</h2>
            <p>Straight answers to the challenges B2B companies in our sectors face every day.</p>
          </div>
          <div className="faq-grid fade-up">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => toggleFaq(i)}
                >
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-block" aria-labelledby="cta-h2">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 id="cta-h2">Let's Identify What's Holding Your Revenue Back</h2>
            <p>Every engagement starts with a structured audit of your commercial infrastructure — website, CRM, SEO, and AI readiness. No generic proposals. No guesswork.</p>
            <div className="cta-btns">
              <Link to="/strategy-call" className="btn btn-white">Request a Strategy Call</Link>
              <a href="#lead-magnet" className="btn btn-white-outline" onClick={scrollToLeadMagnet}>Get Free Checklist First</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
