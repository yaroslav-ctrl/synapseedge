import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Primary">
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="Synapse Edge — Home">
            <span className="nav-logo-text">Synapse Edge</span>
          </Link>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links" role="list">
            <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={close}>Services</NavLink></li>
            <li><NavLink to="/approach" onClick={close}>Our Approach</NavLink></li>
            <li><NavLink to="/case-studies" onClick={close}>Case Studies</NavLink></li>
            <li><NavLink to="/about" onClick={close}>About</NavLink></li>
            <li className="nav-mobile-only"><NavLink to="/contact" onClick={close}>Contact Us</NavLink></li>
            <li className="nav-mobile-only" style={{ marginTop: '8px' }}>
              <Link to="/strategy-call" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }} onClick={close}>
                Request a Strategy Call
              </Link>
            </li>
          </ul>

          <div className="nav-cta" style={{ gap: '10px', alignItems: 'center' }}>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            <Link to="/strategy-call" className="btn btn-primary">Request a Strategy Call</Link>
          </div>

          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
