export default function Services() {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">// nuestros servicios</span>
          <h2>Lo que construimos</h2>
          <p>Soluciones de software a la medida exacta de tu negocio. Sin plantillas genéricas, sin funciones que no usarás.</p>
        </div>

        <div className="services-grid">

          {/* Web Dev */}
          <div className="feature-card card-web">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00ff9c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M7 8l2 2-2 2M11 12h5" />
              </svg>
            </div>
            <h3>Desarrollo Web</h3>
            <p>Sitios y aplicaciones web rápidas, accesibles y optimizadas para conversión. Desde landing pages hasta plataformas SaaS completas y e-commerce.</p>
            <div className="card-tags">
              <span className="ctag">React</span>
              <span className="ctag">Next.js</span>
              <span className="ctag">TypeScript</span>
              <span className="ctag">SEO</span>
            </div>
          </div>

          {/* CRM */}
          <div className="feature-card card-crm">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Desarrollo de CRM</h3>
            <p>Sistemas de gestión de clientes construidos 100% a la medida de tu flujo de trabajo. Sin licencias caras ni funciones irrelevantes. Tu CRM, tus reglas.</p>
            <div className="card-tags">
              <span className="ctag">Node.js</span>
              <span className="ctag">PostgreSQL</span>
              <span className="ctag">REST API</span>
              <span className="ctag">Dashboard</span>
            </div>
          </div>

          {/* Hosting */}
          <div className="feature-card card-host">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#bc8cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <circle cx="6" cy="6" r="1" fill="#bc8cff" />
                <circle cx="6" cy="18" r="1" fill="#bc8cff" />
                <path d="M10 6h8M10 18h8" />
              </svg>
            </div>
            <h3>Hosting &amp; Mantenimiento</h3>
            <p>Infraestructura gestionada, backups automáticos, SSL y soporte continuo. Tu aplicación siempre disponible, actualizada y segura.</p>
            <div className="card-tags">
              <span className="ctag">Docker</span>
              <span className="ctag">AWS</span>
              <span className="ctag">SSL + CDN</span>
              <span className="ctag">99.9% uptime</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
