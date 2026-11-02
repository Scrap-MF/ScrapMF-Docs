# Preguntas frecuentes

## ¿Es legal?

Solo descarga contenido al que tengas derecho a acceder y respeta los Términos
de Servicio y los rate limits de cada site. scrapmf limita las peticiones por
defecto (`sleep 3-6`, `sleep-request 8-15`) para que los archivos masivos se
mantengan educados.

## ¿Dónde están mis archivos?

Por defecto, `~/scrapmf`. El directorio exacto es `general.output_dir` en
`~/.config/scrapmf/config.toml`, sobrescribible por site, perfil o cuenta.

## ¿Se saltan las re-descargas?

Sí. Cada elemento descargado se registra en un archive por cuenta
(`~/.config/scrapmf/archive/<site>/<account>.jsonl`), así que las
re-ejecuciones solo traen lo nuevo. Desactívalo con `--no-archive`.

## ¿Cómo actualizo?

Los nuevos pins del backend se publican con las releases de scrapmf: actualiza
scrapmf y luego re-ejecuta `scrapmf setup`. Consulta la última release en
GitHub.

## ¿Funciona en Windows / macOS?

El binario es multiplataforma. En macOS compila desde código con
`cargo install --path .`. La captura de cookies de navegador Chromium está
documentada para Linux; en Windows usa `--cookies` con un `cookies.txt`
exportado.

## ¿Dónde están los logs?

`~/.local/state/scrapmf/logs/`. Se conservan las 20 ejecuciones más recientes;
las antiguas se podan automáticamente.
