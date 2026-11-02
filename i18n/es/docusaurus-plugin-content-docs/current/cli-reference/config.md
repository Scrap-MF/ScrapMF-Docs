# scrapmf config

Gestiona la configuración TOML.

## Subcomandos

| Comando | Descripción |
|---|---|
| `scrapmf config list` | Imprime el `config.toml` actual. |
| `scrapmf config path` | Imprime la ubicación del archivo de config. |
| `scrapmf config edit` | Abre `$EDITOR` (o `$VISUAL`, por defecto `vi`) y valida el resultado. |
| `scrapmf config` | Menú interactivo. |

## El archivo

La config vive en `~/.config/scrapmf/config.toml` (modo `0600`, directorio
`0700`). Las escrituras son atómicas: el nuevo contenido se escribe en un
archivo temporal y se renombra sobre el original, así que un crash no puede
dejarte con un archivo a medias.

```toml
[general]
output_dir = "~/scrapmf"
archive = true
# cookies_from_browser = "brave-origin"

[backend]
# gallery_dl_path = "/custom/path"
# auto_install_backends = true
```

### `[general]`

| Clave | Por defecto | Significado |
|---|---|---|
| `output_dir` | `~/scrapmf` | Directorio de salida base. Se expande `~`. |
| `archive` | `true` | Mantiene un archive de descarga por cuenta (dedup). |
| `cookies_from_browser` | sin definir | Navegador del que leer cookies de sesión, para todos los sites. |

### `[backend]`

| Clave | Por defecto | Significado |
|---|---|---|
| `gallery_dl_path` | sin definir | Ruta explícita a un binario gallery-dl, que incluso sobrescribe al incluido. |
| `auto_install_backends` | `true` | Ofrece instalar el backend incluido en la primera ejecución interactiva. |

## Siguiente

[Resumen de configuración](../configuration/overview)
