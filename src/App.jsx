import React, { useState } from 'react'
import LandscapeImage from './components/LandscapeImage.jsx'
import QuoteForm from './components/QuoteForm.jsx'

const services = [
  ['Landscape Design', 'Custom landscape plans that bring together plants, materials and functional spaces around your home.'],
  ['Lawn & Garden Care', 'Professional care that keeps your lawn, plants and garden looking their best throughout the year.'],
  ['Hardscaping', 'Patios, walkways and stone features designed to add structure, function and character to your landscape.'],
  ['Outdoor Living', 'Comfortable outdoor spaces designed for relaxing, dining and spending more time outside.'],
]
const benefits = [
  ['Thoughtful Design', 'Every space starts with a plan built around your property, needs and lifestyle.'],
  ['Clear Estimates', 'Know what to expect before your project begins.'],
  ['Quality Craftsmanship', 'Careful attention to detail from the first idea to the finishing touches.'],
]
const steps = [
  ['Tell Us About Your Project', "Share your ideas, needs and what you'd like to change about your outdoor space."],
  ['Get Your Estimate', "We'll review your project and provide a clear estimate based on your needs."],
  ['Bring It to Life', 'Once the plan is approved, we get to work transforming your space.'],
  ['Enjoy Your New Space', 'Step outside and enjoy a space designed around the way you live.'],
]
const faqs = [
  ['Do you offer free estimates?', "Yes. Tell us a little about your project and we'll help you understand the next steps and provide an initial estimate."],
  ['What areas do you serve?', 'We serve Austin and surrounding communities, including Round Rock, Cedar Park, Pflugerville and Georgetown.'],
  ['What types of projects do you handle?', 'We work on landscape design, lawn and garden care, hardscaping and outdoor living projects.'],
  ['How do I get started?', "Start by requesting a free quote. Tell us what you have in mind, and we'll guide you through the next steps."],
]
const gallery = [
  ['Landscape Design', 'landscape-design-lawn-and-planting', 'Sweeping lawn framed by layered planting beds, trees and stone paths.', '50% 55%'],
  ['Outdoor Living', 'outdoor-living-covered-lounge', 'Covered outdoor kitchen and dining area beside a fire-pit lounge.', '65% 50%'],
  ['Hardscaping', 'hardscaping-austin-limestone-patio', 'Modern Austin backyard with limestone patio, outdoor living area and native landscaping.', '65% 65%', '72% 65%'],
  ['Garden Design', 'garden-design-austin-oak-and-native-planting', 'Austin backyard with layered native planting, mature oak, lawn and modern limestone home.', '52% 70%', '58% 70%'],
]

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Evergreen Outdoor Co. home">
      <span className="brand-mark" aria-hidden="true">♧</span>
      <span>EVERGREEN<small>OUTDOOR CO.</small></span>
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="home" className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close −' : 'Menu +'}
          </button>
          <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation" onClick={() => setMenuOpen(false)} onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMenuOpen(false)
              document.querySelector('.menu-toggle').focus()
            }
          }}>
            <a href="#services">Services</a><a href="#gallery">Our Work</a><a href="#about">About</a><a href="#faq">FAQ</a>
            <a className="nav-cta" href="#quote">GET A FREE QUOTE <Arrow /></a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <LandscapeImage name="austin-outdoor-living-hero" alt="Oak-framed backyard with a covered patio, lawn and illuminated planting at sunset." className="hero-photo" wide priority position="65% 50%" sizes="100vw" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">LANDSCAPING & OUTDOOR LIVING · AUSTIN, TX</p>
              <h1 id="hero-title">Beautiful outdoor spaces.<br /><em>Built for everyday living.</em></h1>
              <p className="lead">Thoughtful landscaping and outdoor spaces designed around your home and the way you live.</p>
              <div className="hero-actions">
                <a className="button" href="#quote">GET A FREE QUOTE <Arrow /></a>
                <a className="text-link" href="#gallery">VIEW OUR WORK <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-strip" aria-label="The Evergreen approach">
          <div className="container trust-inner">{benefits.map(([title, copy]) => (
            <article key={title}><span className="benefit-mark" aria-hidden="true">✳</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}</div>
        </section>
        <section id="services" className="section container">
          <div className="section-heading">
            <div><p className="eyebrow">WHAT WE DO</p><h2>Everything your<br /><em>outdoor space needs.</em></h2></div>
            <p>From complete landscape transformations to ongoing care, we create outdoor spaces that look beautiful and work for everyday life.</p>
          </div>
          <div className="services-grid">{services.map(([title, copy], index) => (
            <article className="service" key={title}><span className="item-number">0{index + 1} /</span><h3>{title}</h3><p>{copy}</p><a href="#quote">Discuss your project <Arrow /></a></article>
          ))}</div>
        </section>
        <section id="projects" className="featured section">
          <div className="container featured-grid">
            <LandscapeImage name="west-austin-backyard-transformation" alt="Backyard with a pool, stone waterfall, planted borders and covered seating." wide position="55% 50%" />
            <div className="featured-copy">
              <p className="eyebrow">FEATURED PROJECT</p><h2>West Austin<br />Backyard <em>Transformation</em></h2>
              <p>A complete backyard designed to turn an underused outdoor area into a welcoming space for relaxing, dining and entertaining.</p>
              <a className="text-link" href="#gallery">EXPLORE OUR WORK <Arrow /></a>
            </div>
          </div>
        </section>
        <section id="about" className="section container about-grid">
          <div><p className="eyebrow">WHY EVERGREEN</p><h2>Designed with purpose.<br /><em>Built with care.</em></h2></div>
          <div><p className="large-copy">A great outdoor space should do more than look good. It should feel like a natural extension of your home.</p><p className="about-copy">That's why every project starts with understanding how you want to use your space.</p><a className="text-link" href="#quote">LET'S TALK ABOUT YOUR SPACE <Arrow /></a></div>
        </section>
        <section id="process" className="process section">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">HOW IT WORKS</p><h2>A simple path to a<br /><em>better outdoor space.</em></h2></div></div>
            <div className="process-grid">{steps.map(([title, copy], index) => (
              <article key={title}><span className="item-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}</div>
          </div>
        </section>
        <section id="gallery" className="section container">
          <div className="section-heading"><div><p className="eyebrow">OUR WORK</p><h2>Spaces made<br /><em>to be enjoyed.</em></h2></div><a className="text-link" href="#quote">LET'S CREATE YOURS <Arrow /></a></div>
          <div className="gallery">{gallery.map(([label, name, alt, position, mobilePosition], index) => (
            <figure key={label}><LandscapeImage name={name} alt={alt} position={position} mobilePosition={mobilePosition} /><figcaption><span>0{index + 1} /</span> {label}</figcaption></figure>
          ))}</div>
        </section>
        <section id="service-area" className="service-area">
          <div className="container area-inner"><p className="eyebrow">LOCAL LANDSCAPING</p><h2>Proudly serving<br /><em>the Austin area.</em></h2><p>Evergreen Outdoor Co. serves homeowners throughout Austin and surrounding communities.</p><ul className="area-list">{['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'].map(area => <li key={area}>{area}</li>)}</ul></div>
        </section>
        <section id="faq" className="section container faq-grid">
          <div><p className="eyebrow">FAQ</p><h2>A little<br /><em>clarity.</em></h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
          ))}</div>
        </section>
        <section className="final-cta">
          <div className="container"><p className="eyebrow">LET'S CREATE SOMETHING BEAUTIFUL</p><h2>Ready to transform<br /><em>your outdoor space?</em></h2><p>Tell us about your project and take the first step toward an outdoor space you'll love coming home to.</p><a className="button light" href="#quote">GET YOUR FREE QUOTE <Arrow /></a></div>
        </section>
        <section id="quote" className="section container quote-section" aria-labelledby="quote-title">
          <div className="quote-intro"><p className="eyebrow">REQUEST A FREE QUOTE</p><h2 id="quote-title">Your space.<br /><em>Your possibilities.</em></h2><p>Tell us about your home and what you have in mind.</p></div>
          <QuoteForm services={services.map(([title]) => title)} />
        </section>
      </main>
      <footer className="footer"><div className="container">
        <div className="footer-top"><Brand /><p>Landscaping & Outdoor Living<br />Austin, Texas</p><nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#gallery">Our Work</a><a href="#about">About</a><a href="#faq">FAQ</a></nav><a className="text-link" href="#quote">GET A FREE QUOTE <Arrow /></a></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Evergreen Outdoor Co.</p><a href="#home">BACK TO TOP ↑</a></div>
      </div></footer>
    </>
  )
}
