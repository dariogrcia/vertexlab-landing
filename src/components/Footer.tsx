export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="#hero" className="f-logo">
          <svg viewBox="0 0 34 34" fill="none">
            <rect width="34" height="34" rx="9" fill="#161b22" />
            <path d="M8 10 L14.5 24 L17 19.5 L19.5 24 L26 10" stroke="#00ff9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17" cy="17" r="1.8" fill="#58a6ff" opacity="0.65" />
          </svg>
          VertexLab
        </a>

        <ul className="f-links">
          <li><a href="#servicios">servicios</a></li>
          <li><a href="#nosotros">nosotros</a></li>
          <li><a href="#stack">stack</a></li>
          <li><a href="#proceso">proceso</a></li>
          <li><a href="#testimonios">clientes</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>

        <div className="f-copy">
          © 2026 VertexLab&nbsp;&nbsp;<span className="fg">{'{'}</span>&nbsp;hecho con código&nbsp;<span className="fg">{'}'}</span>
        </div>
      </div>
    </footer>
  )
}
