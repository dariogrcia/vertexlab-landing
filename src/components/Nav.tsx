import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Cierra el menú móvil al hacer scroll (igual que el original)
  useEffect(() => {
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          {/* Logo: V-shape monogram inside dark rounded square */}
          <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="9" fill="#161b22" />
            <rect width="34" height="34" rx="9" fill="none" stroke="rgba(88,166,255,0.2)" strokeWidth="1" />
            <path d="M8 10 L14.5 24 L17 19.5 L19.5 24 L26 10" stroke="#00ff9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17" cy="17" r="1.8" fill="#58a6ff" opacity="0.65" />
          </svg>
          VertexLab
        </a>

        <ul className="nav-links">
          <li><a href="#servicios">// servicios</a></li>
          <li><a href="#nosotros">// nosotros</a></li>
          <li><a href="#stack">// stack</a></li>
          <li><a href="#proceso">// proceso</a></li>
          <li><a href="#contacto" className="nav-cta">$ hablemos</a></li>
        </ul>

        <button className="ham" onClick={() => setOpen((o) => !o)} aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${open ? ' open' : ''}`} id="mobileNav">
        <a href="#servicios" onClick={close}>// servicios</a>
        <a href="#nosotros" onClick={close}>// nosotros</a>
        <a href="#stack" onClick={close}>// stack</a>
        <a href="#proceso" onClick={close}>// proceso</a>
        <a href="#contacto" onClick={close}>$ hablemos</a>
      </div>
    </>
  )
}
