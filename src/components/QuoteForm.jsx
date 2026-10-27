import React, { useRef, useState } from 'react'

export default function QuoteForm({ services }) {
  const [submissionAttempted, setSubmissionAttempted] = useState(false)
  const noticeRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    // Personal information stays in the form: no request, storage, or logging.
    setSubmissionAttempted(true)
    requestAnimationFrame(() => noticeRef.current?.focus())
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} aria-label="Request a free quote">
      <div className="form-grid">
        <label htmlFor="quote-name">Name<input id="quote-name" name="name" autoComplete="name" maxLength={120} required /></label>
        <label htmlFor="quote-email">Email<input id="quote-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label htmlFor="quote-phone">Phone <span className="optional">(optional)</span><input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
        <label htmlFor="quote-zip">ZIP Code<input id="quote-zip" name="zip" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" title="Enter a 5-digit ZIP Code, optionally followed by a 4-digit extension." maxLength={10} required /></label>
        <label className="full-width" htmlFor="quote-service">Service Needed<select id="quote-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(service => <option key={service} value={service}>{service}</option>)}</select></label>
        <label className="full-width" htmlFor="quote-project">Tell us about your project<textarea id="quote-project" name="project" rows={5} maxLength={4000} required /></label>
      </div>
      <button className="button" type="submit">REQUEST MY FREE QUOTE <span aria-hidden="true">→</span></button>
      {submissionAttempted && <p className="form-notice" role="status" tabIndex={-1} ref={noticeRef}>Your request has not been sent. Online submission is not connected yet. Your details remain in this form.</p>}
    </form>
  )
}
