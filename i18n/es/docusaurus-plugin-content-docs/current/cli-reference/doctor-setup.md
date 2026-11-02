# scrapmf doctor & scrapmf setup

## doctor

Comprobación de salud para backends y sistema. Reporta:

- el binario gallery-dl resuelto y su etiqueta de fuente:
  `bundled (pinned)` · `explicit override` · `system (NOT pinned)` · missing;
- plugins: si Threads está activo y el scan de medios de Termux;
- navegadores con bases de cookies detectables;
- disponibilidad de `secret-tool` (GNOME/libsecret) y KWallet;
- alcanzabilidad de la sesión D-Bus;
- estado del archive de descarga;
- escritura del directorio temporal;
- site configs: parsea cada `sites/*.toml` y nombra el archivo si está roto
  o sin identidad;
- si las cookies están configuradas, para que sepas si los sites se scrapean
  anónimamente.

`doctor` sale con código distinto de cero si falla alguna comprobación
requerida. Ejecútalo primero cuando algo no funcione.

## setup

Instala la **propia build pinneada de gallery-dl** de scrapmf en
`$XDG_DATA_HOME/scrapmf/bin/` (típicamente `~/.local/share/scrapmf/bin/`).

```bash
scrapmf setup          # pide confirmación en una TTY
scrapmf setup --yes    # salta el prompt (requerido para scripts)
```

La descarga (~23 MB) se verifica contra los `SHA256SUMS` oficiales de
gallery-dl **v1.32.19** antes de moverla a su sitio. Nunca se auto-actualiza —
los nuevos pins se publican con las releases de scrapmf.

En arquitecturas no x86_64 no hay build standalone de upstream; `setup`
imprime en su lugar un fallback pinneado `pipx install gallery-dl==<version>`.

## Siguiente

[El backend pinneado](../backend/pinned-gallery-dl)
