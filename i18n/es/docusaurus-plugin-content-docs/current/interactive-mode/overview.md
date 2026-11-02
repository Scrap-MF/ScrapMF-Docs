# Modo interactivo

Ejecutar `scrapmf` sin argumentos en una TTY abre el menú principal:

- **[📥 Download content](./download-content/overview)** → Perfil guardado · URL(s) ·
  Quick scrape · Tasks
- **[⚙️ Configuration](./configuration/overview)** → perfiles de cookies, sites,
  perfiles, ajustes generales
- **[🔌 Plugins](./plugins/overview)** → activar o desactivar extras opcionales
  (Threads, Termux scan)
- **[🩺 Doctor](./doctor/overview)** → comprobación de backend y sistema
- **Exit**

## Download content

La entrada **Download content** está documentada en su propia sección:

- [Resumen](./download-content/overview) — las tres vías de scrape y cuándo usar cada una
- [Perfil guardado](./download-content/saved-profile) — batches reutilizables
- [URL(s)](./download-content/urls) — pegar enlaces, auto-detectar el site
- [Quick scrape](./download-content/quick-scrape) — árbol plano `<cuenta>/<contenido>`
- [Flujos por site](./download-content/site-flows) — Twitter/X, Instagram, Threads, Facebook, …

## El dashboard

En una TTY cada batch se ejecuta dentro de un dashboard a pantalla completa: una
fila por job, contadores de archivos en vivo y Ctrl+C para abortar (código de
salida `130`). Como las terminales no permiten copiar de la pantalla alternativa,
la salida de gallery-dl también se refleja en un log persistente:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

Se conservan los 20 logs más recientes; los antiguos se podan.

## Siguiente

[El backend pinneado](../backend/pinned-gallery-dl)
