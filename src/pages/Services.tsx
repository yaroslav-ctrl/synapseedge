import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h1 id="page-h1">Strategic Capabilities</h1>
          <p>Five integrated disciplines that form a complete revenue architecture — designed for B2B companies with complex commercial environments and high-ticket sales cycles.</p>
        </div>
      </header>

      {/* 01 Strategic Analysis */}
      <section id="growth-strategy" className="services-section" aria-labelledby="svc-h2-1">
        <div className="container">
          <div className="svc-block fade-up">
            <div className="svc-meta">
              <span className="eyebrow-plain">01</span>
              <h2 id="svc-h2-1">Strategic Analysis &amp; Market Intelligence</h2>
              <div className="rule"></div>
              <p>A structured evaluation of your commercial infrastructure — identifying the specific gaps that prevent predictable growth.</p>
            </div>
            <div className="svc-cards">
              <div className="svc-card">
                <h3>Competitive Landscape</h3>
                <p>Industry benchmarking and competitive visibility mapping to identify where authority gaps exist in your market.</p>
              </div>
              <div className="svc-card">
                <h3>Commercial-Intent Visibility Share</h3>
                <p>Analysis of how effectively your organization captures high-intent organic demand in your category.</p>
              </div>
              <div className="svc-card">
                <h3>Territory &amp; Customer Coverage</h3>
                <p>Evaluation of geographic and segment coverage models to identify growth whitespace and overlap.</p>
              </div>
              <div className="svc-card">
                <h3>CRM Architecture Audit</h3>
                <p>Structural review of CRM usage, pipeline hygiene, and lead routing discipline across your sales team.</p>
              </div>
              <div className="svc-card">
                <h3>Funnel Performance Analysis</h3>
                <p>Conversion friction identification across awareness, lead, qualification, and opportunity stages.</p>
              </div>
              <div className="svc-card">
                <h3>AI-Search Readiness</h3>
                <p>Website architecture, structured data, and generative engine visibility assessment across AI search platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Sales Ops & CRM */}
      <section id="sales-ops-crm" className="services-section" aria-labelledby="svc-h2-2">
        <div className="container">
          <div className="svc-block fade-up">
            <div className="svc-meta">
              <span className="eyebrow-plain">02</span>
              <h2 id="svc-h2-2">Sales Operations &amp; CRM Optimization</h2>
              <div className="rule"></div>
              <p>Transforming your CRM from a record-keeping tool into a live commercial intelligence and execution system.</p>
            </div>
            <div className="svc-cards">
              <div className="svc-card">
                <h3>Funnel Redesign</h3>
                <p>Rebuilding deal stages, lead classifications, and pipeline architecture to reflect how your buyers actually behave.</p>
              </div>
              <div className="svc-card">
                <h3>Lead Routing Architecture</h3>
                <p>Automated, rules-based lead assignment aligned to territory, segment, product line, and rep capacity.</p>
              </div>
              <div className="svc-card">
                <h3>CRM Structuring &amp; Automation</h3>
                <p>Custom field architecture, trigger-based automation workflows, and CRM hygiene systems that reduce admin burden.</p>
              </div>
              <div className="svc-card">
                <h3>Customer Coverage Modeling</h3>
                <p>Frameworks for territory planning, account assignment, call cycle management, and rep performance tracking.</p>
              </div>
              <div className="svc-card">
                <h3>Sales Enablement Frameworks</h3>
                <p>Process documentation, playbooks, and onboarding structure to ensure consistent execution across your team.</p>
              </div>
              <div className="svc-card">
                <h3>Performance Reporting</h3>
                <p>Dashboard design and KPI architecture that gives leadership real commercial visibility without manual reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 SEO & Local */}
      <section id="seo-local" className="services-section" aria-labelledby="svc-h2-3">
        <div className="container">
          <div className="svc-block fade-up">
            <div className="svc-meta">
              <span className="eyebrow-plain">03</span>
              <h2 id="svc-h2-3">SEO &amp; Local Authority</h2>
              <div className="rule"></div>
              <p>Building sustained, commercial-intent organic visibility across traditional and AI-powered search environments.</p>
            </div>
            <div className="svc-cards">
              <div className="svc-card">
                <h3>Commercial-Intent SEO Strategy</h3>
                <p>Keyword architecture focused on queries that drive pipeline — not vanity traffic or informational browsing.</p>
              </div>
              <div className="svc-card">
                <h3>Multi-Location Local SEO</h3>
                <p>Structured visibility frameworks across multiple territories, branches, or dealership locations.</p>
              </div>
              <div className="svc-card">
                <h3>Structured Data &amp; Schema</h3>
                <p>Technical implementation of schema markup to improve authority signals and AI-search eligibility.</p>
              </div>
              <div className="svc-card">
                <h3>Generative Engine Optimization (GEO)</h3>
                <p>Content and entity architecture designed for citation and visibility in AI-generated search responses.</p>
              </div>
              <div className="svc-card">
                <h3>AI Citation Visibility</h3>
                <p>Positioning your brand as a trusted, citable source in ChatGPT, Perplexity, Gemini, and other AI platforms.</p>
              </div>
              <div className="svc-card">
                <h3>Technical SEO Foundations</h3>
                <p>Site architecture, crawlability, Core Web Vitals, and authority infrastructure development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Marketing Automation */}
      <section id="marketing-automation" className="services-section" aria-labelledby="svc-h2-4">
        <div className="container">
          <div className="svc-block fade-up">
            <div className="svc-meta">
              <span className="eyebrow-plain">04</span>
              <h2 id="svc-h2-4">Email Marketing &amp; Automation</h2>
              <div className="rule"></div>
              <p>Systematic follow-up and lifecycle infrastructure that works in the background of your sales operation — without depending on manual effort.</p>
            </div>
            <div className="svc-cards">
              <div className="svc-card">
                <h3>Lifecycle Nurturing</h3>
                <p>Sequenced communication frameworks aligned to buyer stage, industry, product interest, and deal complexity.</p>
              </div>
              <div className="svc-card">
                <h3>Sales-Trigger Automation</h3>
                <p>Behavior-based automation that fires the right message at the right commercial moment in the sales cycle.</p>
              </div>
              <div className="svc-card">
                <h3>Dormant Account Reactivation</h3>
                <p>Structured campaigns to re-engage lapsed customers and cold leads with verified purchase history.</p>
              </div>
              <div className="svc-card">
                <h3>CRM-Integrated Workflows</h3>
                <p>Automation sequences that connect marketing activity directly into CRM pipeline visibility and rep alerts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 AI Infrastructure */}
      <section id="ai-infrastructure" className="services-section" aria-labelledby="svc-h2-5">
        <div className="container">
          <div className="svc-block fade-up">
            <div className="svc-meta">
              <span className="eyebrow-plain">05</span>
              <h2 id="svc-h2-5">AI-Driven Infrastructure</h2>
              <div className="rule"></div>
              <p>Future-proofing your commercial architecture for the AI-native search and sales environment that is already reshaping buyer behavior.</p>
            </div>
            <div className="svc-cards">
              <div className="svc-card">
                <h3>AI-Ready Site Architecture</h3>
                <p>Structural and content frameworks that communicate authority, context, and relevance to AI search systems.</p>
              </div>
              <div className="svc-card">
                <h3>AI Chat Assistants</h3>
                <p>On-site AI assistants integrated with CRM and lead qualification workflows for 24/7 commercial coverage.</p>
              </div>
              <div className="svc-card">
                <h3>Automated Lead Qualification</h3>
                <p>AI-assisted scoring and routing systems that surface high-intent leads before human rep intervention.</p>
              </div>
              <div className="svc-card">
                <h3>AI-Search Visibility Optimization</h3>
                <p>Strategic positioning for visibility in ChatGPT, Perplexity, Gemini, and generative search platforms.</p>
              </div>
              <div className="svc-card">
                <h3>AI Lead Scoring</h3>
                <p>Behavioral and firmographic scoring models that improve with pipeline data over time.</p>
              </div>
              <div className="svc-card">
                <h3>AI Calls Scoring</h3>
                <p>Automated analysis and scoring of sales calls to surface coaching opportunities and conversion patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-block" aria-labelledby="svc-cta-h2">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 id="svc-cta-h2">Ready to Assess Your Revenue Infrastructure?</h2>
            <p>Every engagement begins with a structured audit — not a generic proposal. We identify the specific gaps in your current system before recommending a path forward.</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-white">Request Executive Growth Audit</Link>
              <Link to="/approach" className="btn btn-white-outline">See Our Approach</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
