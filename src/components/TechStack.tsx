export default function TechStack() {
  return (
    <section id="stack">
      <div className="stack-label">// nuestro stack tecnológico</div>
      <div className="stack-row">
        <div className="sbadge"><span className="sdot" style={{ background: '#61dafb' }}></span>React</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#ffffff', opacity: 0.7 }}></span>Next.js</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#3178c6' }}></span>TypeScript</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#68a063' }}></span>Node.js</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#3776ab' }}></span>Python</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#336791' }}></span>PostgreSQL</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#4479a1' }}></span>MySQL</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#2496ed' }}></span>Docker</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#ff9900' }}></span>AWS</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#38bdf8' }}></span>Tailwind CSS</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#764abc' }}></span>Redux</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#f05032' }}></span>Git</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#6cc24a' }}></span>Linux</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#e34c26' }}></span>HTML5</div>
        <div className="sbadge"><span className="sdot" style={{ background: '#264de4' }}></span>CSS3</div>
      </div>

      <div className="stack-built">
        <div className="stack-built-label">// esta web está construida con:</div>
        <div className="stack-built-row">
          <div className="sbadge sbadge-own"><span className="sdot" style={{ background: '#61dafb' }}></span>React</div>
          <div className="sbadge sbadge-own"><span className="sdot" style={{ background: '#646cff' }}></span>Vite</div>
          <div className="sbadge sbadge-own"><span className="sdot" style={{ background: '#3178c6' }}></span>TypeScript</div>
          <div className="sbadge sbadge-own"><span className="sdot" style={{ background: '#38bdf8' }}></span>Tailwind CSS</div>
          <div className="sbadge sbadge-own"><span className="sdot" style={{ background: '#18181b', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%' }}></span>shadcn/ui</div>
        </div>
      </div>
    </section>
  )
}
