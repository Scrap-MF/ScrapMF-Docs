# Backend (gallery-dl)

Doctor resuelve el backend gallery-dl y reporta su versión y fuente.

## Fuentes

Orden de resolución (gana el primero):

1. Variable de entorno `SCRAPMF_GALLERY_DL`.
2. `backend.gallery_dl_path` en `config.toml`.
3. La copia gestionada (pinneada) propia de scrapmf.
4. `gallery-dl` en `$PATH` (sistema, no pinneado).

## Versión pinneada

La copia gestionada está congelada en la versión contra la que scrapmf fue
probado. Doctor compara la versión instalada contra el pin y avisa cuando
difieren — actualizar scrapmf no reinstala el backend; solo `scrapmf setup` lo
hace.

Cuando las versiones divergen, ejecuta `scrapmf setup` para actualizar la copia
gestionada.

## No encontrado

Si no se encuentra ningún backend, Doctor imprime un error y una línea de ayuda
que apunta a `scrapmf setup` (o a la oferta de primera ejecución en modo
interactivo).

## Ver también

- [El backend pinneado](../../backend/pinned-gallery-dl)
- [scrapmf doctor & setup](../../cli-reference/doctor-setup)
