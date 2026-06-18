export default function About() {
  return (
    <section id="nosotros">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">// el equipo</span>
          <h2>Dos devs, un estudio</h2>
          <p>Nada de agencias ni intermediarios. Trabajas directamente con las personas que escriben tu código, diseñan tu producto y despliegan tu servidor.</p>
        </div>

        <div className="about-grid">

          {/* Dev 1 */}
          <div className="dev-card" data-n="01">
            <div className="dev-avatar" style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 700, color: 'var(--green)' }}>
              {/* Añade tu foto: <img className="dev-avatar-img" src="foto-dario.jpg" alt="Dario Garcia" /> */}
              DG
            </div>
            <div>
              <div className="dev-name">Dario Garcia</div>
              <div className="dev-role">$ Full-Stack &amp; Configurator Engineer</div>
              <p className="dev-bio">
                Desarrollador full-stack especializado en construir aplicaciones web completas y sistemas de configuración a medida. Del frontend al backend, cada capa importa.
              </p>
            </div>
            <div className="dev-skills">
              <span className="ds-tag">React</span>
              <span className="ds-tag">Next.js</span>
              <span className="ds-tag">TypeScript</span>
              <span className="ds-tag">Node.js</span>
              <span className="ds-tag">Configurator</span>
            </div>
          </div>

          {/* Dev 2 */}
          <div className="dev-card" data-n="02">
            <div className="dev-avatar" style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 700, color: 'var(--blue)' }}>
              {/* Añade tu foto: <img className="dev-avatar-img" src="foto-alejandro.jpg" alt="Alejandro Jorge" /> */}
              AJ
            </div>
            <div>
              <div className="dev-name">Alejandro Jorge</div>
              <div className="dev-role">$ Full-Stack &amp; Configurator Engineer</div>
              <p className="dev-bio">
                Desarrollador full-stack con foco en arquitectura de sistemas y soluciones de configuración empresarial. Convierte procesos complejos en software claro y funcional.
              </p>
            </div>
            <div className="dev-skills">
              <span className="ds-tag">React</span>
              <span className="ds-tag">Node.js</span>
              <span className="ds-tag">PostgreSQL</span>
              <span className="ds-tag">Docker</span>
              <span className="ds-tag">Configurator</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
