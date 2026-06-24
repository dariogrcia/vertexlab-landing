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
              <div className="dev-role">$ Ingeniero Informático · Full-Stack &amp; IA</div>
              <p className="dev-bio">
                Ingeniero informático con experiencia full-stack, especializado en inteligencia artificial. Integro modelos de IA en aplicaciones web reales, del frontend al backend.
              </p>
            </div>
            <div className="dev-skills">
              <span className="ds-tag">React</span>
              <span className="ds-tag">Next.js</span>
              <span className="ds-tag">TypeScript</span>
              <span className="ds-tag">Node.js</span>
              <span className="ds-tag">IA</span>
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
              <div className="dev-role">$ Ingeniero Informático · Full-Stack &amp; Data</div>
              <p className="dev-bio">
                Ingeniero informático con experiencia full-stack, especializado en datos. Diseña pipelines y modelos de datos que convierten información en decisiones.
              </p>
            </div>
            <div className="dev-skills">
              <span className="ds-tag">React</span>
              <span className="ds-tag">Node.js</span>
              <span className="ds-tag">PostgreSQL</span>
              <span className="ds-tag">Docker</span>
              <span className="ds-tag">Data</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
