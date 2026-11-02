# El backend pinneado de gallery-dl

scrapmf nunca usa tu gallery-dl del sistema por defecto. Descarga su propia
copia una vez (`scrapmf setup`) en `$XDG_DATA_HOME/scrapmf/bin/` y la congela en
una versión probada — actualmente **gallery-dl v1.32.19**.

## Orden de resolución

1. Variable de entorno `SCRAPMF_GALLERY_DL` (escape hatch de dev)
2. `backend.gallery_dl_path` en `config.toml`
3. La copia gestionada de scrapmf (**incluida, pinneada**)
4. `$PATH` del sistema — funciona pero se etiqueta `system (NOT pinned)`

## Por qué pin

gallery-dl sigue las redes que scrapea, y los extractores se rompen cuando un
sitio cambia. Una instalación flotante del sistema significa que un archive que
funcionó el mes pasado puede fallar hoy por razones que no tienen nada que ver
con tu setup. Pinneando, cada ejecución es reproducible y la rotura de upstream
se convierte en una actualización deliberada y probada en lugar de una sorpresa.

## Actualizar

Los nuevos pins se publican con las releases de scrapmf: actualiza scrapmf y
luego re-ejecuta `scrapmf setup`. Tu instalación del sistema nunca se toca, y
la copia gestionada no se actualiza por sí sola.


## Subir el pin

Subir el pin es un paso manual y deliberado: confirmar que la nueva build
standalone y su checksum existan en la release upstream, subir el pin en el
CLI, ejecutar la suite de tests y publicar una nueva release de scrapmf.

## Siguiente

[scrapmf doctor & setup](../cli-reference/doctor-setup)
