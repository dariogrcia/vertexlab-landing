import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Nota: no usamos <React.StrictMode> a propósito. Las animaciones GSAP y la
// animación imperativa del terminal deben ejecutarse una sola vez; StrictMode
// las invocaría dos veces en desarrollo y rompería el efecto de tipeo.
createRoot(document.getElementById('root')!).render(<App />)
