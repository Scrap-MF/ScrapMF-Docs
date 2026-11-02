---
sidebar_label: "🔌 Descripción general"
---

# Plugins

**Plugins** es la tercera entrada del menú principal. Gestiona extras opcionales
que scrapmf puede instalar en su propio entorno gestionado (nunca tu Python del
sistema).

El registro tiene actualmente dos plugins:

- **[Threads (ThreadstractorMF)](./threads)** — un backend para cuentas de
  Threads.com / Threads.net.
- **[Termux MediaScan](./termux-scan)** — indexa las descargas terminadas en
  la Gallery de Android en Termux.

## Estados

Cada plugin reporta uno de:

- **not installed** — no hay archivos gestionados.
- **disabled** — los archivos se conservan pero el plugin está oculto de todas
  las superficies de scrapmf.
- **enabled (version)** — activo y usable.

## Acciones comunes

- **Enable / Update / reinstall** — instala (o reinstala) en la versión
  pinneada.
- **Disable** — oculta el plugin, conserva sus archivos.
- **Remove** — borra todos los archivos gestionados (re-activar reinstala desde
  cero).
- **Test scan** (solo Termux) — ejecuta un scan contra el directorio de salida
  configurado.
- **Help** — instrucciones de instalación de dependencias del sistema que
  falten.

Threads está gateado en todas partes: mientras no esté activo, las URLs de
threads fallan con un mensaje accionable y las superficies de threads permanecen
ocultas.
