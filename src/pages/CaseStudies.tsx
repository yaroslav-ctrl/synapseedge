import { Link } from 'react-router-dom'

export default function CaseStudies() {
  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">Documented Outcomes</span>
          <h1 id="page-h1">Case Studies</h1>
          <p>Three B2B engagements. Verified commercial results across technical SEO, paid acquisition, conversion architecture, and full-stack digital infrastructure — delivered inside real, competitive markets.</p>
        </div>
      </header>

      <section className="case-studies-section" aria-label="B2B case studies">
        <div className="container">

          {/* Case 1 — Los Angeles Construction Equipment Dealer */}
          <article id="construction-equipment" className="case-study-v2 fade-up" aria-labelledby="case-h2-1">
            <div className="case-top">
              <div className="case-overview">
                <div className="case-number">Case Study — 01</div>
                <div className="case-industry-pill">Los Angeles Construction Equipment Dealer</div>
                <h2 id="case-h2-1">Legacy Website Turnaround: Technical SEO, Paid Acquisition &amp; Conversion Rebuilding</h2>
                <p className="case-intro">A reputable construction machinery dealer with a loyal customer base and strong product portfolio, but an aging website that had suffered a 50% organic traffic collapse following a major Google algorithm update. Aggressive pricing competition from non-US manufacturers added further pressure on their commercial pipeline, making visibility recovery urgent.</p>
                <div className="case-services" aria-label="Services delivered">
                  <span className="svc-tag">Technical SEO</span>
                  <span className="svc-tag">On-Page SEO</span>
                  <span className="svc-tag">Local SEO</span>
                  <span className="svc-tag">Google Ads</span>
                  <span className="svc-tag">Meta Ads</span>
                  <span className="svc-tag">Conversion Rate Optimization</span>
                  <span className="svc-tag">Web Development</span>
                  <span className="svc-tag">Analytics &amp; GTM Setup</span>
                </div>
              </div>

              <div className="case-metrics-panel">
                <div className="metrics-panel-header">
                  <p>Measured Results</p>
                </div>
                <div className="metrics-stack">
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Total Revenue</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>119%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Site Users</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>121%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Organic Traffic</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>117%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Time on Site</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>4×</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Traffic from Paid Channels</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>173%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Revenue via Paid Campaigns</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>220%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-bottom">
              <div>
                <div className="case-section-title">Challenges Identified</div>
                <div className="challenge-grid">
                  <div className="challenge-item">
                    <h4>50% Organic Traffic Collapse</h4>
                    <p>A major Google core update had halved the site's search visibility before the engagement began.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Outdated Site Architecture</h4>
                    <p>Legacy structure prevented proper crawling and indexation by modern search engine algorithms.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Slow Load Speeds</h4>
                    <p>Unoptimized images and bloated code created poor UX and depressed search rankings simultaneously.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>No Analytics Infrastructure</h4>
                    <p>Incomplete GA4 and GTM setup made it impossible to track user behavior or attribute conversions.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Content Gaps on Product Pages</h4>
                    <p>Key commercial pages lacked targeted content, preventing ranking for high-intent buyer queries.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>No Local SEO Strategy</h4>
                    <p>A business relying on geographic buyers had zero structured local search presence or GBP optimization.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-section-title">Strategy &amp; Execution</div>
                <div className="phase-timeline">
                  <div className="phase-step">
                    <div className="phase-dot">P1</div>
                    <div className="phase-step-body">
                      <h4>Foundation — Error Elimination &amp; PPC Launch</h4>
                      <ul>
                        <li>Eliminated broken links, duplicate content, and redirect chain errors site-wide</li>
                        <li>Fixed product catalog and feed for accurate, fully indexed inventory</li>
                        <li>Configured Google Analytics 4 and Google Tag Manager for complete event tracking</li>
                        <li>Launched Google Ads and Meta Ads campaigns with high-conversion keyword targeting to bridge revenue gap while organic rebuilt</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">P2</div>
                    <div className="phase-step-body">
                      <h4>CRO &amp; Functionality Improvements</h4>
                      <ul>
                        <li>Introduced enhanced product filtering and on-site search functionality</li>
                        <li>Redesigned core conversion pages to improve user journey and reduce drop-off</li>
                        <li>Reduced load times through image compression, code cleanup, and caching implementation</li>
                        <li>Added microdata and structured markup for enhanced SERP appearance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">P3</div>
                    <div className="phase-step-body">
                      <h4>Advanced SEO &amp; Local Authority</h4>
                      <ul>
                        <li>Created SEO-focused content to close keyword gaps across all product and category pages</li>
                        <li>Built high-quality backlinks to restore and grow domain authority</li>
                        <li>Optimized Google Business Profile and built location-specific landing pages per territory</li>
                        <li>Implemented A/B testing and analytics-driven continuous optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Case 2 — Miami Real Estate Startup */}
          <article id="real-estate-startup" className="case-study-v2 fade-up" aria-labelledby="case-h2-2">
            <div className="case-top">
              <div className="case-overview">
                <div className="case-number">Case Study — 02</div>
                <div className="case-industry-pill">Real Estate — Miami Luxury Market</div>
                <h2 id="case-h2-2">Full Digital Launch: Website Build, Multi-Platform Paid Acquisition &amp; Automated Lead Funnels</h2>
                <p className="case-intro">A Miami-based real estate startup entering a highly competitive luxury market with zero existing digital presence. The mandate was to build a complete commercial digital infrastructure from scratch — website, landing pages, multi-platform ad campaigns, and automated lead nurturing — and generate qualified pipeline within the first six months of launch.</p>
                <div className="case-services" aria-label="Services delivered">
                  <span className="svc-tag">Web Development</span>
                  <span className="svc-tag">Landing Page CRO</span>
                  <span className="svc-tag">Google Ads</span>
                  <span className="svc-tag">Facebook Ads</span>
                  <span className="svc-tag">Instagram Ads</span>
                  <span className="svc-tag">Marketing Automation</span>
                  <span className="svc-tag">CRM Integration</span>
                  <span className="svc-tag">Dynamic Remarketing</span>
                </div>
              </div>

              <div className="case-metrics-panel">
                <div className="metrics-panel-header">
                  <p>Measured Results — First 6 Months</p>
                </div>
                <div className="metrics-stack">
                  <div className="metric-row">
                    <div className="metric-row-label">Website Traffic Increase</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>75%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Reduction in Cost Per Click</div>
                    <div className="metric-row-value"><span className="arrow-down">↓</span>150%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Reduction in Bounce Rate</div>
                    <div className="metric-row-value"><span className="arrow-down">↓</span>27%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Website Conversion Rate</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>27%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Qualified Leads</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>50%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Cost Per Lead Reduction (Month 1)</div>
                    <div className="metric-row-value"><span className="arrow-down">↓</span>2.3×</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-bottom">
              <div>
                <div className="case-section-title">Challenges Identified</div>
                <div className="challenge-grid">
                  <div className="challenge-item">
                    <h4>Zero Digital Presence</h4>
                    <p>No website, no brand assets, no tracking — every commercial digital component required building from the ground up.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Highly Competitive Market</h4>
                    <p>Entering a market dominated by established luxury real estate firms demanded immediate, precise positioning.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Complex Buyer Journey</h4>
                    <p>Luxury transactions require multi-touchpoint nurturing — a simple lead form was structurally insufficient.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Seasonal Market Dynamics</h4>
                    <p>Miami's real estate cycle demanded adaptive campaign strategies responsive to demand fluctuations.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Quality Over Volume Mandate</h4>
                    <p>The client required serious, qualified buyers and sellers — not high-volume, low-intent inquiry traffic.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>No Brand Credibility</h4>
                    <p>An unknown entrant in a trust-driven category required rapid authority and social proof infrastructure.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-section-title">Strategy &amp; Execution</div>
                <div className="phase-timeline">
                  <div className="phase-step">
                    <div className="phase-dot">S1</div>
                    <div className="phase-step-body">
                      <h4>Website &amp; Landing Page Architecture</h4>
                      <ul>
                        <li>Designed and built full WordPress site with Miami luxury aesthetic — property search with filters, interactive map, and 3D property tour integration</li>
                        <li>Integrated with major real estate databases for live inventory and real-time MLS sync</li>
                        <li>Built segmented landing pages per property type and audience intent with optimized CTAs and frictionless lead capture</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">S2</div>
                    <div className="phase-step-body">
                      <h4>Multi-Platform Paid Acquisition</h4>
                      <ul>
                        <li>Launched campaigns across Google, Facebook, and Instagram with high-intent keyword targeting and Miami neighborhood-level geo-targeting</li>
                        <li>Implemented dynamic remarketing — showing users the exact properties they viewed to recapture high-intent traffic</li>
                        <li>Continuously excluded underperforming GDN placements and expanded negative keyword lists to protect budget efficiency</li>
                        <li>Ran ongoing A/B tests on ad formats, headlines, and audiences to compound performance gains</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">S3</div>
                    <div className="phase-step-body">
                      <h4>Automated Funnels, CRM &amp; Trust Building</h4>
                      <ul>
                        <li>Built fully automated email nurture sequences segmented by property interest and buyer stage</li>
                        <li>Integrated CRM to track all touchpoints and measure funnel performance end-to-end</li>
                        <li>Developed retargeting sequences to re-engage unconverted high-intent users</li>
                        <li>Created market guides, FAQ content, and testimonial infrastructure to build credibility rapidly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Case 3 — Cement & Ready-Mix Supplier */}
          <article id="cement-supplier" className="case-study-v2 fade-up" aria-labelledby="case-h2-3">
            <div className="case-top">
              <div className="case-overview">
                <div className="case-number">Case Study — 03</div>
                <div className="case-industry-pill">B2B Construction — Cement &amp; Ready-Mix Concrete</div>
                <h2 id="case-h2-3">Technical SEO Transformation: Performance Recovery, Authority Building &amp; Local Visibility for a B2B Supplier</h2>
                <p className="case-intro">A leading supplier of cement and ready-mix concrete with a legacy website carrying critical technical SEO failures, page speeds well below industry standards, a weak backlink profile, and an underdeveloped local search presence. In a B2B category where search visibility directly determines commercial pipeline, these issues were measurably costing the business qualified leads.</p>
                <div className="case-services" aria-label="Services delivered">
                  <span className="svc-tag">Technical SEO</span>
                  <span className="svc-tag">Site Speed Optimization</span>
                  <span className="svc-tag">Local SEO</span>
                  <span className="svc-tag">Content Strategy</span>
                  <span className="svc-tag">Link Building</span>
                  <span className="svc-tag">Schema Markup</span>
                  <span className="svc-tag">CDN Implementation</span>
                  <span className="svc-tag">Retargeting</span>
                </div>
              </div>

              <div className="case-metrics-panel">
                <div className="metrics-panel-header">
                  <p>Measured Results</p>
                </div>
                <div className="metrics-stack">
                  <div className="metric-row">
                    <div className="metric-row-label">Improvement in Load Speed</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>3×</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Increase in Organic Traffic</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>72%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Reduction in Bounce Rate</div>
                    <div className="metric-row-value"><span className="arrow-down">↓</span>50%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Enhanced Mobile Experience</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>51%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-bottom">
              <div>
                <div className="case-section-title">Challenges Identified</div>
                <div className="challenge-grid">
                  <div className="challenge-item">
                    <h4>Critical Technical Errors</h4>
                    <p>Broken links, missing meta tags, invalid code, and URL case sensitivity issues damaged crawl performance throughout.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Slow Page Load Speeds</h4>
                    <p>Load times far below industry standards created high bounce rates and negative UX signals to search engines.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Weak Backlink Profile</h4>
                    <p>Low domain authority and thin backlink coverage prevented competitive ranking for high-value B2B keywords.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Content Deficiency</h4>
                    <p>Key commercial pages lacked relevant, optimized content to effectively match buyer intent queries.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Underdeveloped Local SEO</h4>
                    <p>Incomplete GBP profiles, inconsistent citations, and zero review strategy severely limited local search presence.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>No Retargeting Infrastructure</h4>
                    <p>Site visitors who did not convert on first visit were permanently lost with no re-engagement mechanism.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-section-title">Strategy &amp; Execution</div>
                <div className="phase-timeline">
                  <div className="phase-step">
                    <div className="phase-dot">S1</div>
                    <div className="phase-step-body">
                      <h4>Technical SEO Overhaul</h4>
                      <ul>
                        <li>Full crawl audit — resolved broken links, duplicate content, redirect chains, and indexing failures</li>
                        <li>Corrected invalid code, URL case sensitivity issues, and replaced all 301 internal links</li>
                        <li>Implemented schema markup for rich results; optimized sitemaps and robots.txt for clean crawler guidance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">S2</div>
                    <div className="phase-step-body">
                      <h4>Site Speed &amp; Infrastructure</h4>
                      <ul>
                        <li>Compressed images, minified CSS/JavaScript, and enabled browser caching across all pages</li>
                        <li>Migrated to high-performance hosting for improved server response times</li>
                        <li>Implemented CDN to accelerate load speeds across all geographic regions and user segments</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">S3</div>
                    <div className="phase-step-body">
                      <h4>Content, Authority &amp; Local Visibility</h4>
                      <ul>
                        <li>Rewrote meta descriptions and added missing H1 headings across all commercial and product pages</li>
                        <li>Disavowed harmful backlinks and built authoritative links from relevant industry publications</li>
                        <li>Revamped location pages with keyword-optimized content and fully enhanced Google Business Profiles</li>
                        <li>Launched review solicitation strategy and retargeting campaigns for unconverted high-intent visitors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Case 4 — Germany Heavy Equipment Dealer */}
          <article id="heavy-equipment-dealer" className="case-study-v2 fade-up" aria-labelledby="case-h2-4">
            <div className="case-top">
              <div className="case-overview">
                <div className="case-number">Case Study — 04</div>
                <div className="case-industry-pill">Germany Heavy Equipment Dealer</div>
                <h2 id="case-h2-4">Market Share Expansion: Full-Funnel Digital Build for a Caterpillar Equipment Dealer</h2>
                <p className="case-intro">A major Caterpillar heavy equipment dealer operating across a competitive multi-territory market with an underdeveloped digital presence and no structured lead generation pipeline. Despite a strong product portfolio and established brand, the business was leaving significant revenue on the table — relying on legacy sales processes, a limited web footprint, and no systematic nurturing of inbound demand.</p>
                <div className="case-services" aria-label="Services delivered">
                  <span className="svc-tag">PPC &amp; Paid Search</span>
                  <span className="svc-tag">Search Engine Optimization</span>
                  <span className="svc-tag">Web Development</span>
                  <span className="svc-tag">Conversion Rate Optimization</span>
                  <span className="svc-tag">Email &amp; SMS Marketing</span>
                  <span className="svc-tag">Lead Nurturing</span>
                  <span className="svc-tag">CRM Integration</span>
                  <span className="svc-tag">Analytics &amp; Reporting</span>
                </div>
              </div>

              <div className="case-metrics-panel">
                <div className="metrics-panel-header">
                  <p>Measured Results</p>
                </div>
                <div className="metrics-stack">
                  <div className="metric-row">
                    <div className="metric-row-label">Incremental Profit from New Customers</div>
                    <div className="metric-row-value">$3.5M+</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Market Share Gained</div>
                    <div className="metric-row-value"><span className="arrow-up">↑</span>4.5 p.p.</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Return on Marketing Investment</div>
                    <div className="metric-row-value">1,235%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Improvement in Website Conversion Rate</div>
                    <div className="metric-row-value">2×</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Email Nurture Open Rate</div>
                    <div className="metric-row-value">23%</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row-label">Lead-to-Sale Conversion Rate Growth</div>
                    <div className="metric-row-value">0.24% → 2.3%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-bottom">
              <div>
                <div className="case-section-title">Challenges Identified</div>
                <div className="challenge-grid">
                  <div className="challenge-item">
                    <h4>No Digital Lead Generation Pipeline</h4>
                    <p>The business had no structured PPC or SEO program in place — new customer acquisition relied entirely on inbound referrals and field sales.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Undersized, Low-Converting Website</h4>
                    <p>The existing site lacked the depth, content coverage, and conversion architecture needed to capture and convert high-intent commercial buyers.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Slow Quotation Process Losing Deals</h4>
                    <p>Average response time to sales inquiries was 2 days — creating friction at the critical moment of buyer intent and costing the team winnable deals.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>No Lead Nurturing Infrastructure</h4>
                    <p>Without email or SMS follow-up sequences, leads from digital channels were going cold with no systematic mechanism to progress them toward sale.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Weak CRM Utilisation &amp; Visibility</h4>
                    <p>Sales reps were operating without reliable pipeline data — CRM adoption was low and there were no automated reports to guide daily commercial activity.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>Low Lead-to-Sale Conversion</h4>
                    <p>Only 0.24% of inbound leads were converting to sales in 2017, signaling deep funnel inefficiencies across both qualification and follow-up processes.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="case-section-title">Strategy &amp; Execution</div>
                <div className="phase-timeline">
                  <div className="phase-step">
                    <div className="phase-dot">P1</div>
                    <div className="phase-step-body">
                      <h4>GTM Strategy &amp; Sales Infrastructure Rebuild</h4>
                      <ul>
                        <li>Developed a new go-to-market retail strategy centered on digital-first acquisition and streamlined commercial response</li>
                        <li>Redesigned the inquiry-to-quotation workflow, reducing average response time from 2 days to 2 hours</li>
                        <li>Built and deployed a structured call center function to handle inbound lead volume at speed and scale</li>
                        <li>Launched CRM transformation and automated BI reporting to give sales leadership real-time pipeline visibility</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">P2</div>
                    <div className="phase-step-body">
                      <h4>Website Rebuild &amp; Paid Acquisition Launch</h4>
                      <ul>
                        <li>Led cross-functional development of a new website 15× larger than its predecessor, built around buyer intent and commercial search behavior</li>
                        <li>Doubled site-wide conversion rate and achieved 5× lead volume vs. the legacy platform at launch</li>
                        <li>Established cost-efficient PPC and SEO programs with sophisticated customer persona segmentation</li>
                        <li>Achieved 1,235% ROMI with marketing cost contained to 7.5% of margin — well inside target efficiency thresholds</li>
                      </ul>
                    </div>
                  </div>
                  <div className="phase-step">
                    <div className="phase-dot">P3</div>
                    <div className="phase-step-body">
                      <h4>Lead Nurturing, CRM &amp; Funnel Optimization</h4>
                      <ul>
                        <li>Designed and launched drip email and SMS marketing sequences targeting prospects at each stage of the buying cycle</li>
                        <li>Nurture program achieved 23% open rate, 3% CTR, and closed the first net-new sale within 4 months of deployment</li>
                        <li>Grew Lead-to-Sale conversion from 0.24% (2017) to 2.3% (2020) through continuous funnel optimization and CRM-guided rep activity</li>
                        <li>Generated $3.5M+ in incremental profit from new customer acquisition, adding 4.5 percentage points of market share</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      <section className="cta-block" aria-labelledby="cs-cta-h2">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 id="cs-cta-h2">Let's Architect Your Revenue System</h2>
            <p>Every engagement begins with a structured audit. We identify the specific infrastructure gaps preventing predictable growth — then build a precise roadmap to close them.</p>
            <div className="cta-btns">
              <Link to="/strategy-call" className="btn btn-white">Request a Strategy Call</Link>
              <Link to="/approach" className="btn btn-white-outline">See Our Approach</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
