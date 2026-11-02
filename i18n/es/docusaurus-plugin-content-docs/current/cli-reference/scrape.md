# scrapmf scrape

Descarga una galería desde una URL usando el backend configurado.

## Sinopsis

```bash
scrapmf scrape <URL> [OPTIONS]
```

## Opciones

| Flag | Descripción |
|---|---|
| `-o, --output <PATH>` | Directorio de salida. Se expande `~`. |
| `--preset <NAME>` | Preset de tu configuración. |
| `--cookies <FILE>` | Archivo de cookies (formato Netscape `cookies.txt`). |
| `--cookies-from-browser <BROWSER>` | Lee cookies de un navegador en lugar de un archivo. |
| `--dry-run` | Imprime lo que se descargaría; no descarga nada. |
| `--no-archive` | Ignora la memoria de ya-descargado para esta ejecución. |
| `--profile-pic-only` | Solo Threads: descarga la foto de perfil en lugar de posts. |
| `-v, -vv` | Aumenta la verbosidad (`-vv` para debug). |

### Valores de `--cookies-from-browser`

`firefox`, `brave`, `brave-origin`, `brave-beta`, `brave-nightly`,
`brave-origin-beta`, `brave-origin-nightly`, `chrome`, `chromium`, `edge`,
`vivaldi`, `opera`.

### `--dry-run`

Construye la petición, imprime `Would scrape: <url>` y el directorio de salida
resuelto, luego sale sin descargar nada.

## Qué se valida antes de la ejecución

- **URL**: debe ser `http` o `https` y tener como máximo 2048 caracteres.
- **Salida**: no puede estar vacía, no puede resolverse dentro de un directorio
  protegido del sistema (`/`, `/etc`, `/var`, …) y no puede contener `..`.
- **Extra args** de un preset: validados contra una allow-list.

## Dónde va la salida

El directorio de salida se resuelve en este orden (gana el primero):

1. `--output` en la línea de comandos
2. `output_dir` de un preset o de `sites/<site>.toml`
3. `general.output_dir` en `config.toml` (por defecto `~/scrapmf`)

## Después de una ejecución

scrapmf escanea lo que llegó al disco y reporta:

- archivos `.part` huérfanos (la descarga se interrumpió);
- archivos de la familia MP4 sin átomo `moov` (truncados, no reproducibles);
- un resumen de calidad (resolución × codec).

Si un archivo está incompleto, bórralo y re-ejecuta: los nombres de archivo
deterministas hacen que solo se traigan las partes faltantes.

## Códigos de salida

| Código | Significado |
|---|---|
| `0` | éxito |
| `1` | error (ver el mensaje) |
| `2` | sin subcomando fuera de una terminal |
| `130` | abortado con Ctrl+C |

## Siguiente

[scrapmf config](./config) · [scrapmf doctor & setup](./doctor-setup)
