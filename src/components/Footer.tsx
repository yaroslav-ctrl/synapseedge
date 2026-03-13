import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Synapse<span>Edge</span></div>
            <p className="footer-tagline">B2B Revenue Architecture. Built for established companies with complex commercial environments.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#growth-strategy">Growth Strategy</Link></li>
              <li><Link to="/services#sales-ops-crm">Sales Operations &amp; CRM</Link></li>
              <li><Link to="/services#seo-local">SEO &amp; Local Authority</Link></li>
              <li><Link to="/services#marketing-automation">Marketing Automation</Link></li>
              <li><Link to="/services#ai-infrastructure">AI Infrastructure</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/approach">Our Approach</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Request Audit</Link></li>
              <li><Link to="/strategy-call">Book Strategy Call</Link></li>
              <li><a href="mailto:info@synapseedge.com">Send Email</a></li>
              <li><a href="tel:+18782363229">Call +1 (878) 236-3229</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Synapse Edge. All rights reserved.</p>
          <p>Built for enterprise B2B growth infrastructure.</p>
        </div>
      </div>
    </footer>
  )
}
