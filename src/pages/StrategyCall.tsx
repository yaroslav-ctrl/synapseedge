import { useEffect } from 'react'

export default function StrategyCall() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <header className="page-hero" aria-labelledby="page-h1">
        <div className="container">
          <span className="eyebrow">Strategy Session</span>
          <h1 id="page-h1">Book a 45-Minute Strategy Call</h1>
          <p>
            A structured executive session focused on revenue architecture,
            CRM optimization, SEO visibility, and commercial alignment.
            Select a time below.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yaroslav-bogday-synapseedge/45m-strategy-call"
            style={{ minWidth: '320px', height: '950px' }}
          />
        </div>
      </section>
    </>
  )
}
