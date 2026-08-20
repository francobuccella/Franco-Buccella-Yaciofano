# Sitio de Franco Buccella Yaciofano

Sitio propio (React + Vite + Tailwind CSS), reconstruido a partir del sitio original hecho en Lovable, para poder editarlo y hostearlo vos mismo sin depender de esa plataforma.

## Cómo probarlo en tu computadora

Necesitás tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173`. Cada vez que guardás un cambio, se actualiza solo.

## Cómo editar el contenido

Casi todo el texto, números y links del sitio están en un solo archivo:

**[`src/content.ts`](src/content.ts)**

Ahí podés cambiar: el nombre, el teléfono de WhatsApp, los textos de cada sección, las estadísticas, los productos listados, las opciones del formulario, etc. — sin tocar el diseño.

Las imágenes están en `src/assets/` (logo, monograma y foto/retrato). Para cambiar una imagen, reemplazá el archivo por otro con el mismo nombre, o cambiá el `import` correspondiente en el componente que la usa (dentro de `src/components/`).

Los colores y la tipografía están definidos como variables en [`src/index.css`](src/index.css) (bloque `@theme`), tomados del sitio original (paleta navy/gold/cream). Cambiando esos valores cambia el look de todo el sitio.

## Conectar el formulario de contacto (Formspree)

El formulario de la sección "Hablemos" todavía no está conectado a un destino real. Para que las consultas te lleguen por mail:

1. Andá a [formspree.io](https://formspree.io) y creá una cuenta gratuita (hasta 50 envíos por mes).
2. Creá un formulario nuevo y copiá el **Form ID** que te dan (algo como `xyzabcde`).
3. Abrí `src/content.ts` y reemplazá esta línea dentro de `CONTACT`:

   ```ts
   formspreeEndpoint: "https://formspree.io/f/TU_FORM_ID",
   ```

   por tu endpoint real, por ejemplo:

   ```ts
   formspreeEndpoint: "https://formspree.io/f/xyzabcde",
   ```

4. Guardá, probá el formulario, y confirmá el mail de verificación que te manda Formspree la primera vez.

Mientras no lo conectes, el botón de WhatsApp del formulario y del pie de página siguen funcionando igual (van directo a tu WhatsApp).

## Cómo publicarlo (Netlify)

### Opción A — arrastrar y soltar (más simple)

```bash
npm run build
```

Esto genera una carpeta `dist/`. Entrá a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastrá esa carpeta ahí. Netlify te da una URL al instante. Después podés conectar tu propio dominio desde el panel de Netlify.

### Opción B — conectado a un repositorio Git (recomendado a futuro)

1. Subí este proyecto a un repositorio de GitHub.
2. En Netlify: "Add new site" → "Import an existing project" → elegís el repo.
3. Netlify va a detectar automáticamente la configuración (`netlify.toml` ya está incluido: build command `npm run build`, carpeta publicada `dist`).
4. Cada vez que hagas push a la rama principal, el sitio se actualiza solo.

## Estructura del proyecto

```
src/
  content.ts          ← todo el texto/config editable
  components/          ← una sección del sitio por archivo
    Navbar.tsx
    Hero.tsx
    AboutMe.tsx
    ForWho.tsx
    Solutions.tsx
    Backing.tsx
    Calculator.tsx     ← calculadoras de ahorro (interactivas)
    Contact.tsx         ← formulario de contacto
    Footer.tsx
  assets/               ← logo, monograma, foto
  index.css             ← paleta de colores y estilos globales
```
