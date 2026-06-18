import { useEffect, useRef } from 'react'

type TermLine =
  | { t: 'p'; cmd: string; d?: number }
  | { t: 'o' | 'c' | 's'; txt: string; d?: number }

const lines: TermLine[] = [
  { t: 'p', cmd: 'npm create vertexlab-app proyecto-nuevo' },
  { t: 'o', txt: '&nbsp;&nbsp;<span style="color:#6e7681">Inicializando proyecto...</span>', d: 900 },
  { t: 'o', txt: '&nbsp;&nbsp;<span style="color:#00ff9c">✓</span> <span style="color:#6e7681">Stack configurado</span>', d: 350 },
  { t: 'o', txt: '&nbsp;&nbsp;<span style="color:#00ff9c">✓</span> <span style="color:#6e7681">DB lista</span>', d: 280 },
  { t: 'o', txt: '' },
  { t: 'c', txt: '<span style="color:#484f58">// vertexlab/services.ts</span>' },
  { t: 'c', txt: '<span style="color:#e6edf3">export const studio = {</span>' },
  { t: 'c', txt: '&nbsp;&nbsp;<span style="color:#58a6ff">webDev</span><span style="color:#e6edf3">: </span><span style="color:#00ff9c">true</span><span style="color:#e6edf3">,</span>' },
  { t: 'c', txt: '&nbsp;&nbsp;<span style="color:#58a6ff">crm</span><span style="color:#e6edf3">: </span><span style="color:#00ff9c">true</span><span style="color:#e6edf3">,</span>' },
  { t: 'c', txt: '&nbsp;&nbsp;<span style="color:#58a6ff">hosting</span><span style="color:#e6edf3">: </span><span style="color:#00ff9c">true</span><span style="color:#e6edf3">,</span>' },
  { t: 'c', txt: '&nbsp;&nbsp;<span style="color:#58a6ff">client</span><span style="color:#e6edf3">: </span><span style="color:#f0883e">"you"</span>' },
  { t: 'c', txt: '<span style="color:#e6edf3">}</span>' },
  { t: 'o', txt: '' },
  { t: 's', txt: '&nbsp;&nbsp;✓ Listos para construir. ¡Comencemos!' },
]

export default function Hero() {
  const termRef = useRef<HTMLDivElement>(null)

  // Animación de tipeo del terminal (lógica imperativa idéntica al original)
  useEffect(() => {
    const termBody = termRef.current
    if (!termBody) return

    let idx = 0
    let timer = 0

    const typeTerm = () => {
      if (idx >= lines.length) {
        const last = termBody.lastElementChild
        if (last) last.innerHTML += '<span class="cursor"></span>'
        return
      }

      const line = lines[idx++]
      const el = document.createElement('span')
      el.className = 't-line'

      if (line.t === 'p') {
        el.innerHTML = `<span class="t-prompt">$ </span><span class="t-cmd">${line.cmd}</span>`
      } else if (line.t === 'o') {
        el.innerHTML = line.txt
      } else if (line.t === 'c') {
        el.innerHTML = line.txt
      } else if (line.t === 's') {
        el.style.color = '#00ff9c'
        el.innerHTML = line.txt
      }

      termBody.appendChild(el)
      const delay = line.d || (line.t === 'p' ? 650 : 170)
      timer = window.setTimeout(typeTerm, delay)
    }

    const start = window.setTimeout(typeTerm, 1500)

    return () => {
      window.clearTimeout(start)
      window.clearTimeout(timer)
      termBody.innerHTML = ''
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>

      {/* Parallax back layer */}
      <div className="hero-shapes-back">
        <div className="glow-a"></div>
        <div className="glow-b"></div>
        <div className="glow-c"></div>
      </div>

      {/* Parallax mid layer */}
      <div className="hero-shapes-mid">
        <div className="geo-1"></div>
        <div className="geo-2"></div>
        <div className="geo-3"></div>
        <div className="geo-4"></div>
        <div className="geo-5"></div>
      </div>

      <div className="hero-content">
        {/* Left: copy */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            disponibles para proyectos
          </div>

          <h1>
            <span className="brand-name">VertexLab</span>
            construimos el software<br />
            que tu negocio<br />
            <span className="accent">necesita.</span>
          </h1>

          <p className="hero-subtitle">
            Somos dos desarrolladores especializados en soluciones web, CRM a medida y hosting gestionado. Del código limpio a producción real.
          </p>

          <div className="hero-btns">
            <a href="#contacto" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" /></svg>
              Empezar proyecto
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios →
            </a>
          </div>
        </div>

        {/* Right: terminal window */}
        <div className="hero-right">
          <div className="terminal">
            <div className="term-bar">
              <div className="td td-r"></div>
              <div className="td td-y"></div>
              <div className="td td-g"></div>
              <span className="term-title">vertexlab ~ terminal</span>
            </div>
            <div className="term-body" id="termBody" ref={termRef}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#servicios" className="scroll-down" aria-label="Siguiente sección">
        <span>scroll</span>
        <div className="scroll-chev"></div>
      </a>
    </section>
  )
}
