---
sidebar_label: "📋 Tasks"
---

# Tasks

Una **task** es un batch de contenido guardado: un nombre, las cuentas sobre
las que se ejecuta y el contenido que cada una quiere. Las tasks viven bajo
`~/.config/scrapmf/tasks/`.

Las tasks responden a *qué y para quién*; un **perfil** responde a *cómo*
(elecciones de contenido por ejecución, overrides por site, cookies). Son
intencionalmente separados — directorio, struct, menús y flujos distintos —
pero ambos hablan `Account`, así que una sesión de cookies se comporta igual
en cada uno.

## Cuándo usar una task

- Scrapeas las mismas cuentas con los mismos kinds de contenido cada vez.
- Quieres el media en su propio árbol, nombrado con el nombre de la task
  (`{scrapmf_root}` toma el nombre de la task).
- Quieres una entrada tipo comando en el menú en lugar de re-elegir kinds.

## Qué almacena una task

- Un nombre (tomado del nombre del archivo).
- Un mapa de site → cuentas. Cada cuenta lleva su username, sesión de cookies
  y los kinds de contenido que quiere (`kinds`).
- Los kinds son etiquetas del registro de sites (`Posts`, `Reels`,
  `Highlights`, `Stories`, `Media`, …). `"All"` se expande por site al
  ejecutar la task, así que una task que abarca redes sigue lo que cada una
  soporta realmente.

Una task **no** almacena directorio de salida ni configuración de plantillas:
el media queda bajo el nombre de la task automáticamente.

## Usar una task

Desde **Download content → Tasks**:

1. **Create new task** — recorre el wizard: site → cuenta → contenido, hasta
   guardar. Cada cuenta obtiene su propio contenido y sesión de cookies.
2. Elige una task guardada para **Run**, **Edit** o **Delete**.
3. **Run** escribe el media bajo el nombre de la task; el dashboard y el
   reporte de integridad se comportan como cualquier otro scrape.

`Edit` recorre el wizard de nuevo con las cuentas actuales. `Delete` elimina
el archivo guardado.

## Archivos en disco

```
~/.config/scrapmf/tasks/<name>.toml
```

Los campos de cuenta se aplanan, así que `output_dir` y `extra_args` escritos
ahí se respetan (precedencia de `output_dir`: cuenta → site → global).

## Ver también

- [Perfil guardado](./saved-profile)
- [Quick scrape](./quick-scrape)
- [URL(s)](./urls)
- [Configuración → Perfiles](../../configuration/profiles)
