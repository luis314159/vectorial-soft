# Tarjetas de presentación — Vectorial Soft

Material listo para imprenta. Tamaño de tarjeta **90×50 mm** (estándar MX) + **3 mm de sangrado** por lado → los PDFs miden **96×56 mm** y la imprenta recorta al tamaño final.

## Archivos

| Archivo | Contenido |
|---|---|
| `tarjeta-luis.pdf` / `tarjeta-marco.pdf` / `tarjeta-adela.pdf` | 2 páginas c/u: frente + reverso. **Estos se mandan a imprimir.** |
| `tarjetas-todas.pdf` | Las 6 caras en un solo PDF |
| `preview-*.png` | Previews a ~300 DPI para revisión rápida |
| `tarjetas.html` | **Fuente editable** (HTML/CSS) de las 6 caras |
| `qr-vectorial.svg` | QR vectorial a https://vectorial-soft.com |

## Indicaciones para la imprenta

- PDF en RGB; pedir conversión a CMYK estándar (los fondos oscuros conservan mejor el contraste en papel mate o soft-touch).
- Papel sugerido: 300–350 g/m², laminado mate; el QR ya está probado y escanea.
- Zona segura respetada: contenido a ≥5 mm del corte.

## Regenerar (tras editar `tarjetas.html`)

Requiere Node + Playwright (`npm i playwright` en cualquier carpeta):

```js
// render.mjs — node render.mjs
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 3.2, viewport: { width: 400, height: 250 } });
await page.goto(pathToFileURL("tarjetas.html").href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const o = { width: "96mm", height: "56mm", printBackground: true };
await page.pdf({ ...o, path: "tarjetas-todas.pdf" });
await page.pdf({ ...o, path: "tarjeta-luis.pdf", pageRanges: "1-2" });
await page.pdf({ ...o, path: "tarjeta-marco.pdf", pageRanges: "3-4" });
await page.pdf({ ...o, path: "tarjeta-adela.pdf", pageRanges: "5-6" });
await browser.close();
```
