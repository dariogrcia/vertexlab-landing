# VertexLab — Landing Page

Landing page de una sola página para **VertexLab**, un estudio de dos desarrolladores que ofrece servicios de desarrollo web, CRM a medida y hosting gestionado.

Proyecto **React + Vite + TypeScript**. Las animaciones se gestionan con **GSAP** (ScrollTrigger).

---

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm (incluido con Node)

---

## Cómo levantar el proyecto

```bash
# 1. Instala las dependencias
npm install

# 2. Servidor de desarrollo (recarga en caliente)
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173/vertexlab-landing/`).

### Otros comandos

```bash
npm run build     # Compila a producción en ./dist
npm run preview   # Sirve localmente el build de ./dist
```

---

## Estructura del proyecto

```
vertexlab-landing/
├── index.html                 # Shell de Vite (monta la app en #root)
├── package.json
├── vite.config.ts             # Config de Vite (base: /vertexlab-landing/)
├── tsconfig.json
└── src/
    ├── main.tsx               # Punto de entrada (monta <App/>)
    ├── App.tsx                # Composición de secciones + animaciones GSAP
    ├── index.css              # Todos los estilos (variables, layout, animaciones)
    └── components/
        ├── Nav.tsx            # Navegación + menú móvil (estado React)
        ├── Hero.tsx           # Hero + terminal animada
        ├── Services.tsx       # Tarjetas de servicios
        ├── About.tsx          # Perfiles de los desarrolladores
        ├── TechStack.tsx      # Badges del stack tecnológico
        ├── Process.tsx        # Pasos del proceso de trabajo
        ├── Testimonials.tsx   # Testimonios de clientes
        ├── Contact.tsx        # Bloque de contacto / CTA
        └── Footer.tsx         # Pie de página
```

---

## Cómo está hecho

### Tecnologías

| Capa | Tecnología |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Build tool | [Vite 5](https://vite.dev/) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) |
| Estilos | CSS3 (variables, grid, flexbox, keyframes) en `src/index.css` |
| Animaciones | [GSAP 3](https://gsap.com/) + ScrollTrigger (paquete npm) |
| Tipografía | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts, cargadas desde `index.html`) |

### Notas de arquitectura

- **CSS global** — Todos los estilos viven en `src/index.css` con la misma cascada que la
  versión original de un solo archivo, para garantizar un aspecto idéntico.
- **Animaciones** — `App.tsx` ejecuta toda la lógica GSAP dentro de un `useLayoutEffect`
  (se ejecuta antes del primer pintado → evita el FOUC, igual que el `<script>` original).
  El parallax del ratón se engancha al `.hero`. Los reveals usan `ScrollTrigger.batch`.
- **Terminal animada** — `Hero.tsx` reproduce el efecto de tipeo línea a línea con un
  `useEffect` y un `ref`.
- **Menú móvil** — `Nav.tsx` gestiona el estado de apertura con `useState` (en vez de
  manipular clases del DOM).

### Paleta de colores (dark mode)

```css
--bg:       #0d1117   /* Fondo principal (estilo GitHub Dark) */
--bg-mid:   #161b22   /* Fondo secundario / secciones alternas */
--green:    #00ff9c   /* Acento principal — verde terminal */
--blue:     #58a6ff   /* Acento secundario — azul eléctrico */
--violet:   #bc8cff   /* Acento terciario — violeta sintaxis */
--orange:   #f0883e   /* Acento cuaternario — naranja string */
```

### Secciones

| # | ID | Componente | Descripción |
|---|---|---|---|
| 1 | `#hero` | `Hero` | Hero full-height con terminal animada y parallax de ratón |
| 2 | `#servicios` | `Services` | 3 tarjetas de servicio con hover glow |
| 3 | `#nosotros` | `About` | Perfil de los 2 desarrolladores |
| 4 | `#stack` | `TechStack` | Badges del stack tecnológico |
| 5 | `#proceso` | `Process` | 4 pasos del proceso de trabajo |
| 6 | `#testimonios` | `Testimonials` | 3 testimonios de clientes |
| 7 | `#contacto` | `Contact` | Bloque CTA con email y teléfonos |
| — | `footer` | `Footer` | Logo, enlaces y copyright |

---

## Personalización

### Datos a reemplazar

| Placeholder | Componente | Qué poner |
|---|---|---|
| `[Nombre Cliente X]` / `[Empresa]` | `Testimonials.tsx` | Datos reales de los testimonios |
| `hola@vertexlab.dev` | `Nav` / `Contact` | Email real de contacto |

### Añadir fotos de los desarrolladores

En `About.tsx`, dentro de cada `.dev-avatar`, sustituye la inicial por una imagen:

```tsx
<div className="dev-avatar">
  <img className="dev-avatar-img" src="/foto-dario.jpg" alt="Dario Garcia" />
</div>
```

(Coloca las imágenes en una carpeta `public/` y referéncialas con `/nombre.jpg`.)

### Cambiar colores de marca

Edita las variables CSS en el bloque `:root` al inicio de `src/index.css`.

---

## Despliegue

URL en producción: **https://dariogrcia.github.io/vertexlab-landing/**

La web se publica en GitHub Pages desde la rama `gh-pages`, que contiene el resultado de
`npm run build`. Para publicar una nueva versión tras hacer cambios:

```bash
npm run build
cd dist && touch .nojekyll
git init && git add -A && git commit -m "deploy"
git push -f https://github.com/dariogrcia/vertexlab-landing.git HEAD:gh-pages
```

> **Despliegue automático (opcional):** se puede añadir un workflow de GitHub Actions que
> compile y despliegue con cada push a `main`. Requiere que el token de `gh` tenga el scope
> `workflow` (`gh auth refresh -h github.com -s workflow`).

Para desplegar en otra plataforma (Netlify, Vercel, etc.) basta con ejecutar
`npm run build` y servir el contenido de `./dist`.

---

## Nombre de marca

El nombre **VertexLab** fue seleccionado entre estas alternativas:

- `ByteForge` — energía + precisión técnica
- `NexCore` — moderno y escalable
- `CodeStack` — directo y descriptivo

---

© 2026 VertexLab
