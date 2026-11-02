# Plugins

Doctor reporta el estado de ambos plugins registrados.

## Threads (ThreadstractorMF)

- **enabled (version)** — venv gestionado presente y no desactivado.
- **disabled** — archivos conservados, plugin oculto.
- **not installed** — opcional; activar desde **Plugins**.

## Termux MediaScan

- **enabled** — `termux-media-scan` encontrado y toggle activo. Doctor también
  comprueba el directorio de salida resuelto:
  - **app-private storage** — avisa, porque Android Gallery no puede
    indexarlo.
  - **missing** — avisa, el directorio aún no existe.
  - **ready** — info con el target resuelto (recursivo).
- **disabled** — opt-in apagado.
- **not installed** — `termux-media-scan` no encontrado (instalar app
  `termux:api`).

## Ver también

- [Resumen de Plugins](../plugins/overview)
- [Termux MediaScan](../plugins/termux-scan)
