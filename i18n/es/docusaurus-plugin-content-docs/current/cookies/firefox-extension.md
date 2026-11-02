# Extensión Firefox: ElDevoraCucas

**ElDevoraCucas** es una extensión companion de Firefox que exporta un
`cookies.txt` Netscape para las redes que soporta scrapmf, directamente desde
una sesión de Firefox con sesión iniciada. También implanta un `cookies.txt` de
vuelta en un navegador.

- Repositorio: [Scrap-MF/ElDevoraCucasMF](https://github.com/Scrap-MF/ElDevoraCucasMF)
- ID de la extensión: `eldevoracucas@mfapplications`
- Requiere Firefox 109 o superior. Funciona en Firefox para Android y desktop.

## Redes soportadas

Instagram, TikTok, Twitter/X, VSCO, Threads, Facebook. El desplegable del popup
marca una, varias o todas; una exportación escribe solo las redes marcadas.

## Exportar

1. Inicia sesión en los sites que quieras dentro de Firefox.
2. Haz clic en el icono de ElDevoraCucas.
3. Marca las redes en el desplegable.
4. Escribe un nombre de archivo (la extensión añade `.txt`).
5. Pulsa **Download cookies.txt** o **Copy to clipboard**.

El popup guarda tu selección de redes y el nombre de archivo en `storage.local`
y los restaura la próxima vez que lo abras.

## Implantar

La página de implantación escribe cookies en un navegador. Ábrela desde el
popup con **Open Implant Page**, o desde las opciones del add-on.

Pega texto Netscape, arrastra un `.txt` a la zona, o elige uno con el selector
de archivos. La página salta cualquier dominio fuera de las seis redes anteriores
y sobrescribe las cookies de sesión de los dominios del archivo. Vuelve a
iniciar sesión en cualquier site que hayas reemplazado.

## Atajo de teclado

`Ctrl+Shift+F12` exporta desde cualquier site soportado sin abrir el popup.
Firefox posee el binding; cámbialo en `about:addons` → icono de engranaje junto
a ElDevoraCucas → **Manage Extension Shortcuts**.

El atajo necesita un teclado con tecla Ctrl. En un teléfono solo táctil, abre el
popup y pulsa **Download cookies.txt**.

## Instalación

### Android

Firefox para Android de release acepta solo add-ons firmados. Hacer sideload de
un `.xpi` sin firmar falla, y `xpinstall.signatures.required` no tiene efecto
en builds de release. Una ruta funciona hoy:

**Firefox Nightly**, con firma desactivada:

1. Abre `about:config` y pon `xpinstall.signatures.required` a `false`.
2. Copia `ElDevoraCucasMF.xpi` al teléfono de la forma normal (cable USB,
   Google Drive, correo, etc.) a una carpeta accesible, como `Download/`.
3. En Firefox, abre esa carpeta y pulsa `ElDevoraCucasMF.xpi` (o usa el
   gestor de archivos y elige Firefox como app para abrirlo).
4. Acepta el aviso de add-on bloqueado y luego el aviso de no verificado.

Si Firefox no aparece como opción al abrir el archivo, descarga el `.xpi`
directamente en el teléfono (p. ej. desde la página de releases del repositorio)
y ábrelo desde la lista de descargas.

**addons.mozilla.org**, una vez que el listado esté activo. AMO firma la build y
la instalación sobrevive a las actualizaciones.

### Desktop

`about:debugging` → **This Firefox** → **Load Temporary Add-on** → elige
`manifest.json`. Cargas la carpeta, no el `.xpi`. Las instalaciones temporales
se borran al cerrar Firefox.

## Flujo Android / Termux con scrapmf

Instala la build, inicia sesión en los sites que quieras, exporta y luego apunta
scrapmf al archivo desde Termux:

```bash
termux-setup-storage   # una vez por instalación nueva
cp ~/storage/downloads/cookies.txt ~/.config/scrapmf/cookies/android.txt
scrapmf scrape "https://www.instagram.com/sbtn_mf/" \
  --cookies ~/.config/scrapmf/cookies/android.txt
```

Firefox escribe las descargas en `~/storage/downloads`, al que Termux accede
mediante el symlink que crea `termux-setup-storage`. scrapmf lee el archivo que
le entregas y no lo refresca — re-exporta cuando la sesión caduque.

> Los archivos de cookies son credenciales de cuenta. Nunca los commits ni
> compartas.

## Privacidad

La extensión no hace peticiones de red ni recolecta nada. Lee los valores de
cookies de las seis redes y los escribe donde le pidas.

## Ver también

- [Perfiles de cookies](./profiles)
- [Configuración → Perfiles de cookies](../interactive-mode/configuration/cookie-profiles)
- [Primeros pasos → Instalación](../getting-started/installation)
