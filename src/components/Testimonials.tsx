export default function Testimonials() {
  return (
    <section id="testimonios">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">// clientes</span>
          <h2>Lo que dicen de nosotros</h2>
          <p>Resultados reales de negocios que confiaron en VertexLab para construir su software.</p>
        </div>

        <div className="testi-grid">

          {/* Testimonio 1 */}
          <div className="testi-card">
            <div className="testi-comment">/* review_01.txt */</div>
            <div className="testi-stars">
              <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
            </div>
            <p className="testi-text">
              "Necesitábamos una plataforma web desde cero con integración a nuestro sistema de reservas. El equipo entendió el problema desde la primera llamada y entregó exactamente lo que pedimos, en plazo y sin sorpresas."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">
                {/* Reemplaza por: <img src="avatar1.jpg" alt="Cliente 1" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> */}
                A
              </div>
              <div>
                <div className="testi-name">[Nombre Cliente 1]</div>
                <div className="testi-role">CEO · [Empresa]</div>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="testi-card">
            <div className="testi-comment">/* review_02.txt */</div>
            <div className="testi-stars">
              <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
            </div>
            <p className="testi-text">
              "Llevábamos años gestionando clientes en hojas de Excel. El CRM que nos construyeron automatizó el 80% de ese trabajo. El equipo fue muy claro en todo momento y el soporte post-lanzamiento es excelente."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">
                {/* Reemplaza por: <img src="avatar2.jpg" alt="Cliente 2" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> */}
                M
              </div>
              <div>
                <div className="testi-name">[Nombre Cliente 2]</div>
                <div className="testi-role">Director Comercial · [Empresa]</div>
              </div>
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="testi-card">
            <div className="testi-comment">/* review_03.txt */</div>
            <div className="testi-stars">
              <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
            </div>
            <p className="testi-text">
              "Migramos toda nuestra infraestructura a su servicio de hosting y los tiempos de carga mejoraron drásticamente. Además, la tranquilidad de tener soporte técnico real detrás no tiene precio."
            </p>
            <div className="testi-author">
              <div className="testi-avatar">
                {/* Reemplaza por: <img src="avatar3.jpg" alt="Cliente 3" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> */}
                R
              </div>
              <div>
                <div className="testi-name">[Nombre Cliente 3]</div>
                <div className="testi-role">CTO · [Empresa]</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
