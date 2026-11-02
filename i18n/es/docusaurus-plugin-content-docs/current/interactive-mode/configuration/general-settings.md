# General settings

**General settings** edita los valores por defecto globales en `config.toml`.

## Opciones

- **Directorio de salida** — ubicación por defecto de los archivos descargados
  (`~/scrapmf`). Se expanden `~` y `$HOME`.
- **Archive** — on/off. Cuando está on, cada elemento descargado se registra
  para que las re-ejecuciones solo traigan lo nuevo.
- **Cookies de navegador** — el canal de navegador único del que cada site toma
  su sesión, o `None` para scrape anónimo. El menú muestra el tamaño y la fecha
  de modificación de cada base de datos de cookies, además de la cuenta de
  Instagram a la que realmente pertenece.

## Plugins

El estado de los plugins (Threads, Termux MediaScan) se gestiona desde el menú
**Plugins**, no aquí, pero la pantalla de general settings reporta el estado
del plugin de threads.

## Ver también

- [Perfiles de cookies](./cookie-profiles)
- [Resumen de configuración](../../configuration/overview)
