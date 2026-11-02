# Resumen de configuración

Todo vive bajo `~/.config/scrapmf/` (consciente de XDG):

```
~/.config/scrapmf/
├── config.toml        # valores por defecto globales
├── sites/*.toml       # opciones por red
├── profiles/*.toml    # personas = mapa de sitio → cuentas
├── tasks/*.toml       # batches guardados (contenido fijo, cuentas fijas)
├── cookies/*.txt      # perfiles de cookies nombrados (formato Netscape)
└── archive/           # memoria de descarga por cuenta (JSONL)
```

## Precedencia de resolución

| Qué | Orden (gana el primero) |
|---|---|
| Directorio de salida | CLI `--output` > `output_dir` de preset/site > `general.output_dir` |
| Cookies | Flag CLI > `cookie_profile` nombrado > cuenta > perfil > site > `general.cookies_from_browser` |
| Extra args | `extra_args` del site fusionado con el de la cuenta; validado contra allow-list |

Los archivos en capas se cargan en cada ejecución: un archivo en `sites/` o
`profiles/` sobrescribe el mapa inline del mismo nombre en `config.toml`.

## Siguiente

[Sites](./sites) · [Perfiles](./profiles)
