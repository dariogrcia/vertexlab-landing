export default function Contact() {
  return (
    <section id="contacto">
      <div className="contact-inner">
        <span className="eyebrow">// hablemos</span>
        <h2>¿Tienes un proyecto<br />en mente?</h2>
        <p className="sub">
          Cuéntanos la idea. Sin compromisos.<br />
          Respondemos en menos de 24 horas con una estimación real del esfuerzo y el coste.
        </p>

        <div className="contact-info">
          <div className="cinfo">
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:dariojesusgarcia6@gmail.com">dariojesusgarcia6@gmail.com</a>
          </div>
          <div className="cinfo">
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12 19.79 19.79 0 0 1 1.8 3.36 2 2 0 0 1 3.78 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 5.94 5.94l1.41-1.41a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z" />
            </svg>
            <a href="tel:+34675172371">+34 675 172 371</a>
          </div>
          <div className="cinfo">
            <svg viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12 19.79 19.79 0 0 1 1.8 3.36 2 2 0 0 1 3.78 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 5.94 5.94l1.41-1.41a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z" />
            </svg>
            <a href="tel:+34628340129">+34 628 340 129</a>
          </div>
        </div>

        <a href="https://wa.me/34675172371" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', margin: '0 auto' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" /></svg>
          Enviar mensaje
        </a>
      </div>
    </section>
  )
}
