---
sidebar_label: "👤 Gestionar perfiles"
---

# Manage Profiles

**Manage Profiles** crea y edita perfiles sin tocar el TOML a mano. Un perfil
agrupa cuentas por persona: `site → [accounts]`.

## Qué puedes hacer

- Crear un perfil nuevo (nombre + cuentas).
- Editar las cuentas y overrides de un perfil existente.
- Eliminar un perfil.

## Forma

Cada cuenta requiere solo un username; todo lo demás se hereda de
`sites/<site>.toml`. Las cuentas pueden sobrescribir `output_dir`, `cookies`,
`cookies_from_browser`, `cookie_profile`, `extra_args` y `rate_limit`.

Un perfil también puede llevar `overrides` con secciones completas con forma de
`sites/<site>.toml`, para que una persona tenga settings distintos por cuenta.
Una lista plana `sites = ["instagram"]` sigue aceptándose y se migra a
`accounts` automáticamente.

## Ver también

- [Configuración → Perfiles](../../configuration/profiles)
- [Perfiles de cookies](./cookie-profiles)
- [Manage Sites](./manage-sites)
