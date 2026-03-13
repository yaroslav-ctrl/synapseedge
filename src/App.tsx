import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Approach from './pages/Approach'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import StrategyCall from './pages/StrategyCall'
import ThankYou from './pages/ThankYou'
import Hero1 from './pages/Hero1'
import Hero2 from './pages/Hero2'
import Hero3 from './pages/Hero3'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Hero banner explorations */}
          <Route path="/hero-1" element={<Hero1 />} />
          <Route path="/hero-2" element={<Hero2 />} />
          <Route path="/hero-3" element={<Hero3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
