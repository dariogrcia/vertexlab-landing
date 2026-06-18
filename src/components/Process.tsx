export default function Process() {
  return (
    <section id="proceso">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">// cómo trabajamos</span>
          <h2>Del concepto al código</h2>
          <p>Un proceso claro y transparente que mantiene al cliente informado en cada etapa, sin sorpresas.</p>
        </div>

        <div className="process-steps">

          <div className="p-step s1">
            <div className="p-num-wrap">
              <span className="p-num">01</span>
            </div>
            <div className="p-title">Idea &amp; Análisis</div>
            <p className="p-desc">Escuchamos tus objetivos, analizamos el problema y definimos el alcance y coste real del proyecto.</p>
          </div>

          <div className="p-step s2">
            <div className="p-num-wrap">
              <span className="p-num">02</span>
            </div>
            <div className="p-title">Diseño &amp; Arquitectura</div>
            <p className="p-desc">Diseñamos la interfaz y la estructura técnica antes de escribir la primera línea de código.</p>
          </div>

          <div className="p-step s3">
            <div className="p-num-wrap">
              <span className="p-num">03</span>
            </div>
            <div className="p-title">Desarrollo &amp; Testing</div>
            <p className="p-desc">Iteramos en sprints con demos reales. Testing continuo para garantizar calidad desde el primer día.</p>
          </div>

          <div className="p-step s4">
            <div className="p-num-wrap">
              <span className="p-num">04</span>
            </div>
            <div className="p-title">Lanzamiento &amp; Soporte</div>
            <p className="p-desc">Desplegamos en producción y acompañamos el crecimiento del producto con mantenimiento activo.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
