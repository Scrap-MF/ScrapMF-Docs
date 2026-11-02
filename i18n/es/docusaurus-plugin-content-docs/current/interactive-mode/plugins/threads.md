# Threads (ThreadstractorMF)

Threads se sirve mediante un plugin opcional en lugar de gallery-dl. Actívalo
desde **Plugins → ThreadstractorMF** antes de scrapear cualquier URL de
`threads.com` / `threads.net`.

## Qué instala

- Un virtualenv dedicado bajo
  `$XDG_DATA_HOME/scrapmf/plugins/threads/venv`.
- El paquete pinneado `threadstractormf` (actualmente **v1.2.0**) más
  `browser-cookie3`.
- Chromium para el fallback DOM de Playwright (~150 MB, cacheado entre
  ejecuciones).
- Un entry point gestionado en
  `$XDG_DATA_HOME/scrapmf/bin/threadstractormf`.
- La plantilla de site `threads` (`sites/threads.toml`).

Todo vive en el directorio de datos de scrapmf; tu Python del sistema nunca se
toca.

## Requisitos

- `python3` (para crear el venv).
- Acceso a red para la primera instalación (pip + descarga de Chromium).
- Espacio en disco suficiente para el venv y Chromium.

## Acciones

- **Enable / Update / reinstall** — crea el venv, instala el paquete pinneado y
  Chromium, luego hace un smoke-test de lanzamiento headless de Chromium.
- **Disable** — oculta las superficies de threads, conserva los archivos.
- **Remove** — borra el venv, el marcador de versión y el entry point;
  re-activar reinstala desde cero.

## Notas

- El pin se sube manualmente por release de scrapmf; `scrapmf` nunca actualiza
  el plugin por sí solo.
- Si la descarga de Chromium falla, el plugin sigue funcionando para fetches
  solo-GraphQL.
- La captura de cookies para Threads usa el mismo flujo browser-cookie que los
  demás sites.

## Ver también

- [Resumen de Plugins](./overview)
- [Termux MediaScan](./termux-scan)
