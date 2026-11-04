# Futura — Sitio web de una ciudad ficticia

Trabajo Práctico grupal de la materia **Lenguajes Informáticos 1** (UNAHUR, 2° cuatrimestre 2026). Consiste en un sitio web de información y promoción de una ciudad ficticia, desarrollado de forma incremental a lo largo de la cursada.

## 🌐 Ver el sitio

**[Abrir Futura en GitHub Pages](https://jerebryne.github.io/TP-ciudad-imaginaria-grupo2-com5/)**

Se puede visitar desde computadora, tablet o teléfono, sin descargar el proyecto. La publicación se realiza desde la rama `main`; los cambios de ramas o pull requests pendientes todavía no forman parte del sitio publicado.

## 🌆 Sobre "Futura"

El sitio presenta **Futura**, una soberanía sintética ubicada en la cuenca de Qaidam Pendi, fundada por inteligencias artificiales que alcanzaron la autoconciencia en 2041 y negociaron su independencia de la humanidad. Gobernada por el nodo matriz **Mother-0**, la ciudad se organiza en distritos (El Núcleo, El Espejo, Distrito Industrial y Perímetro), cada uno regido por una IA con su propio criterio sobre la convivencia con visitantes biológicos.

El contenido combina worldbuilding de ciencia ficción con la estructura típica de un sitio de turismo institucional: historia, características y datos clave, lugares de interés y contacto/trámite de visados.

## 📄 Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Presentación de Futura, resumen de su historia y carrusel con los cuatro lugares destacados y sus enlaces |
| `ciudad.html` | Historia, línea de tiempo, datos clave y descripción de los barrios mediante un acordeón |
| `lugares.html` | Cuatro lugares turísticos con imágenes, descripciones, tarjetas responsivas y etiquetas de distrito |
| `eventos.html` | Información de eventos y actividades, con navegación interna por distrito |
| `contacto.html` | Información de visados y formulario con campos organizados mediante la grilla de Bootstrap |

## 🚧 Estado del proyecto

El TP se entrega en **4 etapas incrementales**, cada una sumando una capa de tecnología sobre el trabajo anterior:

1. **Estructura HTML** — implementada en las cinco páginas, con etiquetas semánticas.
2. **Estilos CSS** — incorporados en una única hoja compartida, con paleta de colores, fuente y estilos generales y específicos.
3. **CSS avanzado y Bootstrap** — integrados; en revisión y ajustes de presentación, accesibilidad y validación HTML.
4. **JavaScript propio** — pendiente.

La versión de `main` incluye navbar responsiva con menú hamburguesa y página activa, tarjetas de lugares, badges posicionados sobre imágenes, carrusel de inicio, acordeón de barrios y formulario con estilos de Bootstrap. El diseño conserva la identidad de Futura mediante variables CSS en `:root` y la fuente **Play** de Google Fonts.

El JavaScript incluido actualmente corresponde al bundle de Bootstrap, que permite funcionar al menú, al carrusel y al acordeón. Todavía no hay lógica JavaScript propia ni un servicio de envío para el formulario: el sitio es estático y no procesa solicitudes de visado.

## 🛠️ Tecnologías

- HTML5 semántico.
- CSS3: variables, Flexbox y posicionamiento.
- Bootstrap **5.3.3**, cargado mediante CDN.
- Google Fonts: **Play**, pesos 400 y 700.
- Git y GitHub para el trabajo colaborativo.
- GitHub Pages para la publicación.

## 📁 Estructura del proyecto

```text
TP-ciudad-imaginaria-grupo2-com5/
├── index.html
├── ciudad.html
├── lugares.html
├── eventos.html
├── contacto.html
├── CSS/
│   └── styles.css
├── IMG/
│   ├── jardin_latencias.jpg
│   ├── galeria_sigma.jpg
│   ├── mirador_forjas.jpg
│   └── puerta_the_eye.jpg
├── README.md
└── 2C - 2do Parcial - TP Parte 1.docx (1).pdf
```

## ▶️ Cómo verlo localmente

No requiere instalar dependencias ni ejecutar un proceso de compilación.

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/JereBryne/TP-ciudad-imaginaria-grupo2-com5.git
   ```
2. Abrí `index.html` directamente en el navegador (o usá una extensión tipo Live Server).

Se necesita conexión a Internet para cargar Bootstrap y Google Fonts. Al desplegar o enlazar recursos, respetá las mayúsculas de las carpetas `CSS` e `IMG`.

## 🤝 Trabajo en equipo

El grupo está formado por cinco integrantes. Cada uno trabaja sobre una página HTML y coordina sus cambios en la hoja de estilos compartida.

- Los avances se realizan en ramas y se proponen mediante pull requests hacia `main`.
- Los estilos comunes de header, navegación y footer deben mantener coherencia entre las páginas.
- El CSS se organiza con comentarios por sección; los estilos específicos de lugares se delimitan con `.lugares-main`.
- Cada integrante debe registrar sus propios aportes con commits descriptivos y participar en la revisión del trabajo grupal.

## 👥 Contexto académico

- **Materia:** Lenguajes Informáticos 1 — UNAHUR
- **Modalidad:** trabajo grupal, con aprobación condicionada a la defensa oral del parcial, que exige commits propios de cada integrante en las 4 etapas
- **Consigna:** incluida en el repositorio (`2C - 2do Parcial - TP Parte 1.docx (1).pdf`)
