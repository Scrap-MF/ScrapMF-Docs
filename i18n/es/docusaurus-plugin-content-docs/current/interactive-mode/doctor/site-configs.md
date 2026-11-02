# Site configs

Doctor parsea cada `sites/*.toml` y reporta los que están rotos.

- Un archivo que no parsea se reporta con el error del parser verbatim (causas
  comunes: un typo de tipo en `[rate_limit]`, una comilla faltante).
- Un archivo sin identidad (`site`/`pattern`/`extractor` todos ausentes) se
  reporta como vacío o sin identidad.
- Un archivo que no se puede leer se reporta con el error de I/O.
- Cuando todos los archivos están bien: `Site configs: N file(s) OK`.
- Cuando el directorio está vacío: se muestra un aviso.

El texto de ayuda apunta a arreglar la línea o borrar el archivo para
regenerarlo.

## Ver también

- [Manage Sites](../configuration/manage-sites)
- [Configuración → Sites](../../configuration/sites)
