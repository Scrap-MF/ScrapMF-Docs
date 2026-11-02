---
sidebar_label: "🩺 Descripción general"
---

# 🩺 Doctor

**Doctor** es la cuarta entrada del menú principal. Ejecuta una comprobación de
salud sobre el backend, los plugins, las cookies y el sistema, y reporta todo en
un solo lugar.

## Cómo ejecutar

- Desde el menú: **Doctor**.
- Desde la shell: `scrapmf doctor` (añade `-v` para más detalle).

La versión interactiva abre una vista a pantalla completa; la versión CLI
imprime las mismas líneas en la terminal.

## Leer la salida

Cada línea lleva un nivel:

- `✔` éxito
- `ℹ` info
- `⚠` aviso (algo a revisar, no fatal)
- `✖` error (requiere acción)
- `  ` ayuda (sigue a un error o aviso)

Cuando todas las comprobaciones pasan, la última línea es `All checks passed`.

## Qué se comprueba

- **[Backend](./backend)** — resolución de gallery-dl y versión pinneada.
- **[Plugins](./plugins)** — estado de threads y Termux MediaScan.
- **[Navegadores](./browsers)** — bases de cookies, keyring y D-Bus.
- **[Archive](./archive)** — estadísticas de la memoria de descarga por cuenta.
- **[Site configs](./site-configs)** — parseo de `sites/*.toml`.
- **[Temp dir](./temp-dir)** — escritura en el directorio temporal.

## Ver también

- [Troubleshooting](../../troubleshooting/common-issues)
- [scrapmf doctor & setup](../../cli-reference/doctor-setup)
