# Problemas comunes

Síntomas, causas y soluciones para los fallos más frecuentes de scrapmf.

## "gallery-dl backend is not installed"

Ejecuta `scrapmf setup` para instalar el backend pinneado. Si ya está
instalado, revisa `doctor` — nombra el binario resuelto y su fuente.

## "Login required" / errores de autenticación

La sesión ha caducado. Recaptura las cookies: **Configuration → Cookie
profiles → Refresh**, luego re-ejecuta. Para una cuenta privada, asegúrate de
que la sesión capturada realmente la sigue.

En Android/Termux, `--cookies-from-browser` no puede leer las bases de datos
del navegador: re-exporta `cookies.txt` con la extensión ElDevoraCucas, cópialo
a `~/.config/scrapmf/cookies/` y pásalo con `--cookies`.

## "Failed to retrieve rehydration data" (TikTok)

Un challenge de JavaScript de TikTok. Refresca tu sesión del navegador y
re-ejecuta; si persiste, el token del CDN ha caducado — espera unos minutos y
prueba de nuevo.

## Archivos incompletos (`.part`, sin átomo `moov`)

La descarga se interrumpió. Borra el archivo y re-ejecuta: los nombres de
archivo deterministas hacen que solo se traigan las partes faltantes.

## Video HEVC no se reproduce

El archivo está bien; el reproductor no tiene decodificador HEVC. Las
variantes de máxima resolución son cada vez más HEVC/H.265.

## Config ignorada silenciosamente

Revisa la sintaxis TOML de `sites/*.toml`. `doctor` parsea cada archivo de site
y nombra el que esté roto o sin identidad.

## El menú interactivo se renderiza mal

Usa una terminal con soporte de true-colour.

## Nada ayuda

Ejecuta `scrapmf doctor` y lee toda la pantalla — reporta backend, plugins,
cookies, archive y estado del sistema en un solo lugar.

## Instagram: `NotFoundError: Requested user could not be found` (reels/stories)

Los posts funcionan pero reels o stories fallan al instante con `KeyError: 'data'` /
`NotFoundError: Requested user could not be found`. Suele ser una **sesión
stale**: los endpoints de stories/reels requieren una cookie más fresca que los
posts.

- Ejecuta `scrapmf doctor` — si avisa que la sesión capturada es más antigua
  que la base de datos del navegador, refrescala:
  **Configuration → Cookie profiles → Refresh**.
- Asegúrate de que el navegador esté logueado en Instagram y siga a la cuenta
  (las stories privadas requieren follow).
- Workaround: usa el id de la cuenta en lugar del username:
  `https://www.instagram.com/id:<ds_user_id>/reels/`.
- Si persiste, exporta cookies frescas con la extensión Firefox
  **ElDevoraCucas** y pásalas con `--cookies <file>`.
- Si *sigue* persistiendo, la build pinneada de gallery-dl puede tener un bug
  solo en dev. Instala la build dev y apunta scrapmf a ella:
  ```bash
  python3 -m venv ~/.local/share/scrapmf/gdl-dev
  ~/.local/share/scrapmf/gdl-dev/bin/pip install git+https://codeberg.org/mikf/gallery-dl.git
  export SCRAPMF_GALLERY_DL="$HOME/.local/share/scrapmf/gdl-dev/bin/gallery-dl"
  ```
  (o pon `backend.gallery_dl_path` en `config.toml`).
