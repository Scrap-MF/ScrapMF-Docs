---
sidebar_label: "🎵 TikTok"
---

# TikTok (Tikstractormf)

TikTok se sirve mediante el plugin **Tikstractormf** en lugar de gallery-dl.
Actívalo desde **Plugins → Tikstractormf** antes de scrapear cualquier URL de
TikTok; sin él las superficies de TikTok quedan ocultas.

## Qué instala

- Un virtualenv dedicado bajo
  `$XDG_DATA_HOME/scrapmf/plugins/tiktok/venv`.
- El paquete pinneado `tikstractormf` (actualmente **v1.5.0**) con los extras
  `browser` y `antibot`.
- Un entry point gestionado en
  `$XDG_DATA_HOME/scrapmf/bin/tikstractormf`.
- La plantilla de site `tiktok` (`sites/tiktok.toml`).

Todo vive en el directorio de datos de scrapmf; tu Python del sistema nunca se
toca.

## Requisitos

- `python3` (para crear el venv).
- Acceso a red para la primera instalación (descarga de pip).
- Espacio en disco suficiente para el venv.

## Tipos de contenido

TikTok ofrece:

`All · Videos · Photos · Stories · Profile`

## Acciones

- **Enable / Update / reinstall** — crea el venv, instala el paquete pinneado,
  luego hace un smoke-test del entry point.
- **Disable** — oculta las superficies de TikTok, conserva los archivos.
- **Remove** — borra el venv, el marcador de versión y el entry point;
  re-activar reinstala desde cero.

## Notas

- El pin se sube manualmente por release de scrapmf; `scrapmf` nunca actualiza
  el plugin por sí solo.
- La captura de cookies para TikTok usa el mismo flujo browser-cookie que los
  demás sites.
- Cuando el plugin está deshabilitado, las superficies de TikTok quedan
  ocultas y cualquier scrape de TikTok falla con un mensaje accionable.

## Ver también

- [Resumen de Plugins](./overview)
- [Threads (ThreadstractorMF)](./threads)
- [Termux MediaScan](./termux-scan)
