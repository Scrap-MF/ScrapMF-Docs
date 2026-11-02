---
sidebar_label: "👤 Perfil guardado"
---

# Perfil guardado

Un **perfil guardado** es un batch reutilizable: una persona con nombre, una o
más cuentas en distintos sites y los tipos de contenido que cada cuenta debe
traer. Los perfiles viven bajo `~/.config/scrapmf/profiles/`.

## Qué haces

1. Eliges un perfil (o creas uno al vuelo).
2. Eliges las cuentas que cubre.
3. Para cada cuenta, eliges los tipos de contenido que ofrece el site (Posts,
   Reels, Highlights, Stories, …). Elegir **All** expande a todos los kinds que
   soporta el site.
4. Confirmas y ejecutas.

Cuando varias cuentas pertenecen al mismo site, scrapmf ofrece un atajo para
aplicar la misma selección de contenido a todas.

## Layout de directorios (modo Save Profile)

```
{scrapmf_root}/{category}/{username|user}/<sufijo de sites.toml>
```

El sufijo específico del site (posts, reels, highlights, stories, directorios
condicionales) viene de `sites/<site>.toml`, no del menú.

## Re-ejecuciones

Cada elemento descargado se registra en un archivo de archivo por cuenta, así
que volver a ejecutar el mismo perfil solo trae lo nuevo. Desactiva la dedup
para una sola ejecución con `--no-archive` (CLI) o el toggle equivalente del
menú.

## Ver también

- [Configuración → Perfiles](../../configuration/profiles)
- [URL(s)](./urls)
- [Quick scrape](./quick-scrape)
