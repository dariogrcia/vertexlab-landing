# VertexLab — Landing Page

Landing page de una sola página para **VertexLab**, un estudio de dos desarrolladores que ofrece servicios de desarrollo web, CRM a medida y hosting gestionado.

---

## Cómo levantar el proyecto

Es un archivo HTML autocontenido — no necesita servidor, build tools, ni dependencias instaladas.

### Opción 1 — Abrir directamente en el navegador

```bash
open vertexlab.html          # macOS
start vertexlab.html         # Windows
xdg-open vertexlab.html      # Linux
```

### Opción 2 — Servidor local (recomendado para desarrollo)

Con Python (disponible en cualquier sistema):

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Luego abre `http://localhost:8080/vertexlab.html` en el navegador.

Con Node.js:

```bash
npx serve .
```

Con VS Code: instala la extensión **Live Server** y haz clic en "Go Live".

---

## Estructura del proyecto

```
vertexlab-landing/
└── vertexlab.html   # Todo el proyecto en un único archivo
```

El archivo sigue el patrón **single-file HTML discipline**: todo el CSS está dentro de `<style>` y todo el JavaScript dentro de `<script>`, sin ficheros externos salvo dos dependencias CDN.

---

## Cómo está hecho

### Tecnologías

| Capa | Tecnología |
|---|---|
| Markup | HTML5 semántico |
| Estilos | CSS3 — variables, grid, flexbox, keyframes |
| Animaciones | [GSAP 3.12](https://greensock.com/gsap/) + ScrollTrigger (CDN) |
| Tipografía | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

### Dependencias externas (solo CDN, sin instalación)

```html
<!-- Tipografía -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Animaciones -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

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

| # | ID | Descripción |
|---|---|---|
| 1 | `#hero` | Hero full-height con terminal animada y parallax de ratón |
| 2 | `#servicios` | 3 tarjetas de servicio con hover glow |
| 3 | `#nosotros` | Perfil de los 2 desarrolladores |
| 4 | `#stack` | Badges del stack tecnológico |
| 5 | `#proceso` | 4 pasos del proceso de trabajo |
| 6 | `#contacto` | Bloque CTA con email y teléfono |
| — | `footer` | Logo, enlaces y copyright |

### Animaciones implementadas

- **Hero entrance** — timeline GSAP con stagger encadenado (fade + translateY)
- **Mouse parallax** — 3 capas de profundidad que responden al movimiento del cursor
- **Terminal typing** — animación de escritura línea a línea con delays variables
- **ScrollTrigger** — reveal de tarjetas, steps y badges al entrar en viewport
- **CSS keyframes** — formas flotantes en el fondo (sin coste de JS)
- **Cursor parpadeante** — CSS `step-end` en el terminal al finalizar la escritura

### Responsive

| Breakpoint | Cambios |
|---|---|
| `> 900px` | Layout completo: hero 2 columnas, servicios 3 col |
| `≤ 900px` | Hero 1 columna, servicios 2 col, nav colapsado a hamburger |
| `≤ 580px` | Todo en 1 columna, tipografía reducida |

---

## Personalización

### Datos a reemplazar

Busca estas cadenas en `vertexlab.html` y sustitúyelas por los datos reales:

| Placeholder | Dónde | Qué poner |
|---|---|---|
| `[Nombre Dev 1]` | Sección `#nosotros` | Nombre real del desarrollador 1 |
| `[Nombre Dev 2]` | Sección `#nosotros` | Nombre real del desarrollador 2 |
| `[Tu descripción personal…]` | Sección `#nosotros` | Bio breve de cada dev |
| `hola@vertexlab.dev` | Nav, contacto y footer | Email real de contacto |
| `[+00 000 000 000]` | Sección `#contacto` | Teléfono real |

### Añadir fotos de los desarrolladores

Localiza el bloque `dev-avatar` de cada dev y reemplaza el SVG placeholder por una etiqueta `<img>`:

```html
<!-- Antes (placeholder SVG) -->
<div class="dev-avatar">
  <svg>...</svg>
</div>

<!-- Después (foto real) -->
<div class="dev-avatar">
  <img class="dev-avatar-img" src="foto-dev1.jpg" alt="Nombre Dev 1">
</div>
```

### Cambiar colores de marca

Edita las variables CSS en el bloque `:root` al inicio del `<style>`:

```css
:root {
  --green:  #00ff9c;   /* Color principal — cambia aquí */
  --blue:   #58a6ff;   /* Color secundario */
  --violet: #bc8cff;   /* Color terciario */
}
```

---

## Despliegue

Al ser un archivo estático, puede desplegarse en cualquier plataforma sin configuración:

- **GitHub Pages** — activa Pages desde `Settings > Pages > Deploy from branch: main`
- **Netlify** — arrastra la carpeta al dashboard de Netlify
- **Vercel** — `vercel --prod` desde la raíz del proyecto
- **Cualquier hosting estático** — sube `vertexlab.html` por FTP/SFTP

---

## Nombre de marca

El nombre **VertexLab** fue seleccionado entre estas alternativas (comentadas en el HTML):

- `ByteForge` — energía + precisión técnica
- `NexCore` — moderno y escalable
- `CodeStack` — directo y descriptivo

*'Vértice' evoca confluencia de habilidades y punto de máximo rendimiento; 'Lab' añade rigor experimental. Funciona bien en posicionamiento B2B tech.*

---

&copy; 2026 VertexLab
