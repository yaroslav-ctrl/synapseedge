import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setStatus('Sending...')
    try {
      const formData = new FormData(form)
      const res = await fetch('https://formspree.io/f/mjgeqpvq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        navigate('/thank-you')
        return
      }
      const data = await res.json().catch(() => null)
      setStatus(
        data?.errors?.map((err: { message: string }) => err.message).join(', ') ??
          'Something went wrong. Please try again.'
      )
    } catch {
      setStatus('Network error. Please try again.')
    }
  }

  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">Executive Inquiry</span>
          <h1 id="page-h1">Contact Synapse Edge</h1>
          <p>Request an Executive Growth Audit or send a message. We respond within one business day.</p>
        </div>
      </header>

      <section id="form" className="contact-section" aria-labelledby="contact-h2">
        <div className="container">
          <div className="contact-layout">

            <div className="contact-info fade-up">
              <span className="eyebrow">Direct Contact</span>
              <h2 id="contact-h2">Let's Architect Your Revenue System</h2>
              <div className="rule"></div>
              <p>
                If your pipeline, CRM, or search visibility has structural gaps, we'll help you identify constraints and define a clear execution path.
              </p>
              <div className="contact-point">
                <div className="label">Email</div>
                <div className="value">
                  <a href="mailto:info@synapseedge.com">info@synapseedge.com</a>
                </div>
              </div>
              <div className="contact-point">
                <div className="label">Phone</div>
                <div className="value">
                  <a href="tel:+18782363229">878-236-3229</a>
                </div>
              </div>
              <div className="contact-point">
                <div className="label">Response Time</div>
                <div className="value">Within one business day.</div>
              </div>
            </div>

            <div className="contact-form-card fade-up">
              <h3>Request an Executive Growth Audit</h3>
              <p className="form-intro">
                Name, email, and phone are required. Add a short message and we'll follow up.
              </p>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="_subject" value="New Executive Growth Audit Request — synapseedge.com" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="form-group">
                  <label htmlFor="name">Name <span className="req" style={{ color: 'var(--primary)' }}>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone <span className="req" style={{ color: 'var(--primary)' }}>*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(###) ###-####"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email <span className="req" style={{ color: 'var(--primary)' }}>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@company.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    placeholder="e.g. Heavy Equipment, Industrial, Real Estate"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Briefly describe what you'd like to improve."
                  />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Send</button>
                  {status && (
                    <div
                      id="form-status"
                      style={{ marginTop: '10px', fontSize: '0.95rem', color: 'rgba(15,30,45,0.75)', minHeight: '1.2em' }}
                      aria-live="polite"
                    >
                      {status}
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
