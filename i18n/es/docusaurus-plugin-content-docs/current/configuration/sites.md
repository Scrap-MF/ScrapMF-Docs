# Sites (`sites/*.toml`)

Un archivo por red. El nombre del archivo (sin extensión) es la clave de site
usada por presets, perfiles y auto-matching de URLs.

## Ejemplo

`~/.config/scrapmf/sites/instagram.toml`:

```toml
site = "instagram"
pattern = "instagram.com"

output_dir = "~/Pictures/instagram"
extra_args = ["--restrict-filenames", "auto"]

filename_template = "{date:%Y-%m-%d}_{post_id}_{num:02d}.{extension}"
directory_template = ["{scrapmf_root}", "{category}", "{username}", "{subcategory}"]

[rate_limit]
sleep = "3-6"
sleep_request = "8-15"
sleep_429 = 120

[extractor.instagram.highlights]
include = ["highlights"]
```

## Claves

| Clave | Significado |
|---|---|
| `site` | Nombre lógico, normalmente el nombre del archivo. |
| `pattern` / `patterns` | Subcadenas de URL que auto-asocian este site. Gana el match más largo. |
| `output_dir` | Directorio de salida por site. |
| `extra_args` | Argumentos extra de gallery-dl, validados contra allow-list. |
| `cookies` / `cookies_from_browser` / `cookie_profile` | Fuentes de cookies para este site. |
| `rate_limit` | Throttling: `sleep`, `sleep_request`, `sleep_429`, `limit_rate`. |
| `archive` | Override explícito de archive. |
| `extractor` | Opciones del extractor de gallery-dl, pasadas como `-o extractor.<site>.<key>=<value>`. |
| `filename_template` | Patrón de nombre de archivo. |
| `directory_template` | Layout de directorios, p. ej. `["{scrapmf_root}", "{category}", "{username}"]`. |

## Auto-matching

Al scrapear una URL, scrapmf elige el site cuyo patrón es la subcadena más
larga. Las entradas adicionales de `patterns` se comparan junto con `pattern`.

## Siguiente

[Perfiles](./profiles)
