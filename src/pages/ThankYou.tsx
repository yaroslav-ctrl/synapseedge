import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">Message Received</span>
          <h1 id="page-h1">Thank you.</h1>
          <p>We received your request and will respond within one business day.</p>
        </div>
      </header>

      <section className="thanks-wrap" aria-label="Thank you details">
        <div className="container">
          <div className="thanks-card fade-up">
            <h2 style={{ margin: 0 }}>What happens next</h2>
            <div className="rule" style={{ margin: '14px 0 10px' }}></div>
            <p>
              If this is time-sensitive, email{' '}
              <a href="mailto:info@synapseedge.com">info@synapseedge.com</a>{' '}
              or call <a href="tel:+18782363229">878-236-3229</a>.
            </p>
            <div className="thanks-actions">
              <Link to="/" className="btn btn-secondary">Back to Home</Link>
              <Link to="/strategy-call" className="btn btn-primary">Request a Strategy Call</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
