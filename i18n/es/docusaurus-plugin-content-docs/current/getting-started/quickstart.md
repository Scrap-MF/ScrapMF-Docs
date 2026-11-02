# Inicio rápido

De cero a un perfil descargado en dos minutos.

## 1. Instala el backend

```bash
scrapmf setup
```

Esto descarga la build pinneada de gallery-dl (actualmente **v1.32.19**) en
`~/.local/share/scrapmf/bin/` y verifica su SHA-256 contra los checksums
oficiales. Nunca se actualiza por sí solo.

## 2. Scrapea

Ejecuta el menú interactivo:

```bash
scrapmf
```

Elige **Download content** → **Quick scrape**, luego elige una red, una cuenta y
los tipos de contenido que quieras. También puedes pegar un enlace directo — el
sitio se detecta a partir de la URL:

```bash
scrapmf scrape "https://www.instagram.com/sbtn_mf/" --dry-run
```

`--dry-run` imprime lo que se descargaría y no descarga nada.

## 3. Lee el reporte

Al final de cada ejecución obtienes un resumen corto:

```
✔ 31 files · quality: 1080x1920 avc1 ×28, 720x1280 hvc1 ×3
```

Marca archivos incompletos y archivos `.part` sueltos. Si el sistema anti-bot de
un sitio se tragó algunos posts, te dice cuántos y cómo arreglarlo.

## 4. Re-ejecuta sin duplicar

Cada elemento descargado se registra en un archivo de archivo por cuenta, así que
volver a ejecutar el mismo comando el mes siguiente solo trae los posts nuevos.
Desactívalo para una sola ejecución con `--no-archive`.

## Dónde vive todo

| Qué | Ruta |
|---|---|
| Salida (por defecto) | `~/scrapmf` |
| Config | `~/.config/scrapmf/config.toml` |
| Logs por ejecución | `~/.local/state/scrapmf/logs/` (los 20 más recientes) |

## Siguiente

[Referencia CLI](../cli-reference/scrape) · [Configuración](../configuration/overview)
