import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">The Firm</span>
          <h1 id="page-h1">Strategic Revenue Leadership</h1>
          <p>Built from operational experience inside complex B2B environments — not agency theory.</p>
        </div>
      </header>

      <section className="about-story" aria-labelledby="about-h2-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-body fade-up">
              <span className="eyebrow">Our Background</span>
              <h2 id="about-h2-story">How Synapse Edge Was Built</h2>
              <div className="rule"></div>
              <p>Synapse Edge was founded on operational experience inside complex B2B environments. Background includes analytics, sales development, CRM structuring, and revenue transformation across international dealer networks and high-ticket industries.</p>
              <p>That foundation shaped a practical view of growth: how territories are structured, how customer coverage determines performance, how CRM systems influence sales behavior, and how visibility in search translates into commercial intent.</p>
              <p>Modern B2B growth requires alignment across strategy, sales operations, CRM infrastructure, organic authority, automation, and AI readiness. Very few organizations have all of these working together.</p>
              <p>Most have pockets of competency surrounded by structural gaps. That is the problem Synapse Edge was built to solve.</p>
            </div>
            <div className="fade-up">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>To support established businesses in their digital and AI evolution — helping them modernize intelligently, align revenue systems, and build scalable growth infrastructure without losing operational discipline.</p>
              </div>
              <div className="mission-card">
                <h3>Our Operating Principle</h3>
                <p>Growth is not a campaign. It is infrastructure. Every engagement is designed to leave your commercial systems fundamentally stronger — not dependent on ongoing spend to maintain results.</p>
              </div>
              <div className="mission-card">
                <h3>Who We Work With</h3>
                <p>Established B2B companies with proven revenue models, complex sales environments, and the leadership appetite to build systems that compound over time. Construction, industrial, equipment, fleet, real estate, marine, aviation, and enterprise services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" aria-labelledby="values-h2">
        <div className="container">
          <div className="section-header fade-up">
            <span className="eyebrow">Culture</span>
            <h2 id="values-h2">Core Values</h2>
            <p>The principles that govern how we work, how we think, and how we deliver.</p>
          </div>
          <div className="values-grid">
            <div className="value-card fade-up">
              <div className="value-num">01 — Execution</div>
              <h3>Get It Done</h3>
              <p>We believe there are no impossible tasks, only problems that require disciplined, data-driven decisions and decisive action. Strategy is meaningless without execution — we close the gap between the two without excuses.</p>
            </div>
            <div className="value-card fade-up">
              <div className="value-num">02 — Thinking</div>
              <h3>Solve Complex Problems</h3>
              <p>We approach complex challenges with curiosity and structured thinking, combining analytical rigor with creative problem-solving. The harder the problem, the more precisely it needs to be understood before it can be solved.</p>
            </div>
            <div className="value-card fade-up">
              <div className="value-num">03 — Standards</div>
              <h3>Raise the Standard</h3>
              <p>We pursue continuous improvement in systems, performance, and execution quality. Every engagement raises the baseline for what your commercial infrastructure is capable of delivering — and sets a new internal standard for your team.</p>
            </div>
            <div className="value-card fade-up">
              <div className="value-num">04 — Communication</div>
              <h3>Radical Clarity</h3>
              <p>We value direct, honest communication. Clear feedback and open conversations allow us to move faster, solve problems sooner, and build stronger partnerships. There is no value in ambiguity — in analysis or in conversation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-block" aria-labelledby="about-cta-h2">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 id="about-cta-h2">Ready to Assess Your Revenue Infrastructure?</h2>
            <p>If your commercial infrastructure has untapped potential — or structural gaps holding back performance — let's build a precise picture of where things stand and what to do about it.</p>
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
