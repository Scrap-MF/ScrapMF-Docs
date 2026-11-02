# Termux MediaScan

**Termux MediaScan** ejecuta `termux-media-scan -r <directorio de salida>` una
vez por descarga terminada para que la Gallery de Android recoja el media nuevo.
Es **opt-in** y está desactivado por defecto.

## Requisitos

- Entorno Termux.
- La app **Termux:API** (desde F-Droid) y `pkg install termux-api`.
- `termux-media-scan` en `PATH` (o `SCRAPMF_TERMUX_SCAN_BIN`).

## Estados y acciones

- **not installed** — Termux sin `termux-media-scan`. **Help** imprime los
  pasos de instalación.
- **disabled** — opt-in apagado. **Enable** lo enciende (y reporta si el
  binario sigue faltando).
- **enabled** — **Disable** lo apaga; **Test scan now** ejecuta un scan contra
  el directorio de salida configurado y reporta el resultado.

## Visibilidad de almacenamiento

El scan corre dentro de la app `termux:api`, que solo puede leer rutas
world-readable. La salida debe vivir en almacenamiento compartido
(`~/storage/downloads/…`, un symlink a `/storage/emulated/0/Download/…`). Los
targets app-private se reportan en lugar de indexar silenciosamente nada, y
`doctor` los marca.

scrapmf canonicaliza el directorio de salida (incluyendo hojas que no existen
aún) antes de entregarlo, y reduce el scan al árbol de cuenta que la
ejecución realmente escribió.

## Ver también

- [Resumen de Plugins](./overview)
- [Threads](./threads)
- [Cookies → Android / Termux](../../cookies/profiles)
