---
sidebar_label: "🌐 Gestionar sites"
---

# Manage Sites

**Manage Sites** edita los archivos por red bajo `~/.config/scrapmf/sites/`.
El nombre del archivo (sin extensión) es la clave de site usada por presets,
perfiles y auto-matching de URLs.

## Qué puedes hacer

- Abrir un archivo de site en `$EDITOR`.
- Añadir o quitar redes (threads aparece solo cuando el plugin está activo).
- Ajustar directorio de salida, extra args, rate limits, plantillas de
  filename/directory y opciones de extractor.

## Claves

Consulta [Configuración → Sites](../../configuration/sites) para la referencia
completa de claves (`output_dir`, `extra_args`, `rate_limit`, `archive`,
`extractor`, `filename_template`, `directory_template`, `cookies`, …).

## Auto-matching

Al scrapear una URL, scrapmf elige el site cuyo patrón es la subcadena más
larga. Las entradas adicionales de `patterns` se comparan junto con `pattern`.

## Validación

`doctor` parsea cada archivo de site y nombra el que esté roto o sin
identidad. Los archivos malformados se saltan con un aviso en lugar de
fallar.

## Ver también

- [Configuración → Sites](../../configuration/sites)
- [Manage Profiles](./manage-profiles)
