# scrapmf scrape

Download a gallery from a URL using the configured backend.

## Synopsis

```bash
scrapmf scrape <URL> [OPTIONS]
```

| Flag | Description |
|---|---|
| `-o, --output <PATH>` | Output directory (`~` is expanded) |
| `--preset <NAME>` | Preset from your configuration |
| `--cookies <FILE>` | Cookies file (Netscape format) |
| `--cookies-from-browser <BROWSER>` | firefox, brave, chrome, chromium, edge, opera, vivaldi, whale |
| `--dry-run` | List URLs with gallery-dl `--get-urls`, no download |

Global flags: `-v` / `-vv` increase verbosity.

{/* TODO: contenido completo (fase 2)
   - validaciones aplicadas: URL http/https ≤2048, output fuera de /etc /var …
     y sin "..", allow-list de extra_args del preset
   - precedencia de salida: CLI > preset > general.output_dir (~/.config/scrapmf/config.toml)
   - integridad post-scrape (.part, moov atom, HEVC) y resumen de calidad
   - exit codes: 0 ok, !=0 error, 130 cancelado */}
