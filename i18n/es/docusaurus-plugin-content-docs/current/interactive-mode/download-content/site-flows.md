---
sidebar_label: "🌐 Flujos por site"
---

# Flujos por site

Algunas redes necesitan más de una pasada o manejo especial. scrapmf los
ejecuta automáticamente.

## <img src="/img/networks/x.svg" alt="X" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Twitter / X

Ejecuta dos pasadas — **photos**, luego **videos** — para que cada una caiga en
su propia carpeta en lugar de un árbol de media mezclado.

## <img src="/img/networks/instagram.svg" alt="Instagram" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Instagram

Separa **posts** y **reels** para que los reels se descarguen exactamente una
vez en lugar de traerse dos veces por extractores solapados. También soporta:

- **Highlights** y **Stories** como kinds de contenido distintos.
- **Instagram_id**, que resuelve el id numérico de la cuenta vía la vista
  `/info/` (no se escriben archivos de media).

## <img src="/img/networks/threads.svg" alt="Threads" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Threads

Servido por el plugin opcional **Threadstractor** en lugar de gallery-dl.
Actívalo desde el menú **Plugins** primero; de lo contrario las URLs de
threads fallan con un mensaje accionable.

## <img src="/img/networks/facebook.svg" alt="Facebook" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Facebook

Distingue **Posts**, **Albums** y **Videos**; maneja URLs de perfil y la forma
`profile.php?id=`.

## <img src="/img/networks/tiktok.svg" alt="TikTok" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> TikTok

Scrape estándar en una sola pasada; TikTok reporta los posts perdidos por
challenges de JavaScript para que sepas cuándo refrescar la sesión del
navegador.

## <img src="/img/networks/vsco.svg" alt="VSCO" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> VSCO

Scrape estándar en una sola pasada.

## Dashboard y logs

Cada batch se ejecuta dentro de un dashboard a pantalla completa en una TTY:
una fila por job, contadores de archivos en vivo y Ctrl+C para abortar (código
de salida `130`). Como las terminales no permiten copiar de la pantalla
alternativa, la salida de gallery-dl también se refleja en un log persistente:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

Se conservan los 20 logs más recientes; los antiguos se podan.
