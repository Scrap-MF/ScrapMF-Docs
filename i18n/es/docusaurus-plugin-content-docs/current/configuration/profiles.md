# Perfiles (`profiles/*.toml`)

Un perfil agrupa cuentas por persona: `site → [accounts]`.

```toml
profile = "example"
display_name = "example"

[accounts.instagram]
[[accounts.instagram]]
username = "example_user"
```

Las cuentas heredan todo de `sites/<site>.toml`; solo el username es
obligatorio.

## Overrides

Cada cuenta puede sobrescribir los valores por defecto del site:

| Clave | Significado |
|---|---|
| `output_dir` | Directorio de salida específico de la cuenta. |
| `cookies` / `cookies_from_browser` / `cookie_profile` | Fuente de cookies específica de la cuenta. |
| `extra_args` | Argumentos extra específicos de la cuenta. |
| `rate_limit` | Throttling específico de la cuenta. |

Un perfil también puede llevar `overrides` con secciones completas con forma de
`sites/<site>.toml`, para que una persona tenga settings distintos por cuenta.

## Forma legacy

Una lista plana `sites = ["instagram"]` sigue aceptándose y se migra a
`accounts` automáticamente.

## Gestión desde el menú

**Configuration → Manage Profiles** crea y edita perfiles sin tocar el TOML a
mano.

## Siguiente

[Cookies](../cookies/profiles)
