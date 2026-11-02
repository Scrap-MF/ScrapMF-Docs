# Perfiles de cookies

Archivos de credenciales en formato Netscape nombrados en
`~/.config/scrapmf/cookies/<name>.txt`. Los archivos se escriben con `0600` y
su directorio con `0700` — son sesiones de cuenta activas.

## Captura desde un navegador

Interactivo: **Configuration → Cookie profiles → Capture from browser**.

- **Firefox**: lee el `cookies.sqlite` más reciente (desde una copia — los
  bloqueos del navegador no importan). Necesita la CLI `sqlite3` o `python3`.
- **Familia Chromium** (Brave/Chrome/Chromium/Edge/Vivaldi/Opera): descifra la
  base de datos de cookies usando el keyring de escritorio (`secret-tool`),
  con fallback a la contraseña legacy `"peanuts"` y KWallet.

Cada perfil incrusta su origen como línea de comentario, así que **Refresh**
puede recapturarlo más tarde con un clic. El menú muestra cuántos días le
quedan a la sesión capturada.

## Importación manual

Pega un `cookies.txt` Netscape exportado desde un navegador (por ejemplo con
la extensión *Get cookies.txt LOCALLY*, o la extensión companion
**ElDevoraCucas** en Android) y scrapmf lo valida y almacena.

En Android/Termux, usa la extensión Firefox **ElDevoraCucas** para exportar
`cookies.txt` y sigue la guía de la [extensión Firefox](./firefox-extension).

## Android / Termux

`--cookies-from-browser` no puede funcionar en Termux. Usa la extensión
companion Firefox **ElDevoraCucas**
([Scrap-MF/ElDevoraCucasMF](https://github.com/Scrap-MF/ElDevoraCucasMF)) para
exportar `cookies.txt`, cópialo a `~/.config/scrapmf/cookies/` y pásalo con
`--cookies`. Consulta el README para el flujo completo.

## Precedencia

`cookie_profile` gana a `cookies_from_browser`, y un flag CLI explícito gana a
ambos. Un perfil almacenado solo se usa donde lo indiques, y nunca se
reemplaza silenciosamente.

## Caducidad

El menú muestra cuántos días le quedan a la sesión capturada, para que sepas
cuándo refrescarla antes de que un scrape falle por error de autenticación.

## Siguiente

[Resumen de configuración](../configuration/overview)
