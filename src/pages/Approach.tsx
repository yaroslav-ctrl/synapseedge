import { Link } from 'react-router-dom'

export default function Approach() {
  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">Framework</span>
          <h1 id="page-h1">The SynapseEdge Revenue Architecture Framework™</h1>
          <p>A structured four-phase system for diagnosing, designing, implementing, and scaling B2B revenue infrastructure.</p>
        </div>
      </header>

      <div className="approach-intro-band" aria-hidden="false">
        <div className="container">
          <p className="approach-tagline">"Growth is not a campaign. It is infrastructure."</p>
        </div>
      </div>

      <section className="phases-section" aria-label="Framework phases">
        <div className="container">

          {/* Phase 1 */}
          <div className="phase fade-up">
            <div className="phase-aside">
              <div className="phase-number">01</div>
              <div className="phase-badge">Phase One</div>
              <div className="phase-title">Executive Revenue &amp; Authority Audit</div>
            </div>
            <div className="phase-content">
              <h2>Executive Revenue &amp; Authority Audit</h2>
              <p>We begin every engagement with a full structural evaluation of your commercial infrastructure — not a surface review. This audit surfaces the specific gaps preventing predictable revenue growth.</p>
              <p>We conduct a full evaluation of:</p>
              <ul className="phase-list">
                <li>Organic &amp; Local SEO authority and commercial visibility gaps</li>
                <li>Competitive visibility and market share analysis</li>
                <li>CRM structure, pipeline health &amp; lead routing discipline</li>
                <li>Customer coverage model and territory structure effectiveness</li>
                <li>Conversion performance and funnel friction identification</li>
                <li>Paid channel efficiency and attribution quality</li>
                <li>AI-search readiness and structured data architecture</li>
              </ul>
              <div className="deliverable-badge">Deliverable: Executive Growth &amp; Authority Report</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase fade-up">
            <div className="phase-aside">
              <div className="phase-number">02</div>
              <div className="phase-badge">Phase Two</div>
              <div className="phase-title">Revenue Infrastructure Design</div>
            </div>
            <div className="phase-content">
              <h2>Revenue Infrastructure Design</h2>
              <p>Based on audit findings, we design a structured revenue infrastructure roadmap covering every dimension of your commercial system. This is not a marketing plan. It is an operational blueprint.</p>
              <p>We design:</p>
              <ul className="phase-list">
                <li>Full funnel architecture and conversion pathway redesign</li>
                <li>CRM optimization and lead management roadmap</li>
                <li>Automation sequences for nurturing and follow-up</li>
                <li>SEO and Local authority development strategy</li>
                <li>AI optimization and AI-search visibility blueprint</li>
                <li>Territory expansion and customer coverage model</li>
              </ul>
              <div className="deliverable-badge">Deliverable: Strategic Revenue Roadmap</div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="phase fade-up">
            <div className="phase-aside">
              <div className="phase-number">03</div>
              <div className="phase-badge">Phase Three</div>
              <div className="phase-title">Implementation Oversight</div>
            </div>
            <div className="phase-content">
              <h2>Implementation Oversight</h2>
              <p>Strategy without execution is documentation. Our approach pairs strategic leadership with specialized implementation teams — ensuring that every system, automation, and content layer is built to specification and aligned to revenue objectives.</p>
              <p>We maintain direct oversight across all workstreams: SEO, CRM, automation, AI infrastructure, and paid channels. Execution stays disciplined, timelines stay accountable, and every initiative remains anchored to commercial performance — not agency activity metrics.</p>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="phase fade-up">
            <div className="phase-aside">
              <div className="phase-number">04</div>
              <div className="phase-badge">Phase Four</div>
              <div className="phase-title">Optimization &amp; Expansion</div>
            </div>
            <div className="phase-content">
              <h2>Optimization &amp; Expansion</h2>
              <p>Revenue infrastructure is not a one-time build. Once foundational systems are operational, we shift to continuous refinement — optimizing authority signals, automation performance, AI visibility, and conversion rates across the full funnel.</p>
              <p>As performance stabilizes, we identify and execute expansion opportunities: new territory coverage, adjacent keyword categories, additional automation sequences, and next-stage CRM sophistication. Growth becomes predictable — not periodic.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="cta-block" aria-labelledby="approach-cta-h2">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 id="approach-cta-h2">Start With an Executive Audit</h2>
            <p>Every engagement begins with a structured evaluation of your current commercial infrastructure. The audit defines the roadmap — nothing is assumed, everything is verified.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-white">Request Executive Growth Audit</Link>
              <Link to="/services" className="btn btn-white-outline">Explore Capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
