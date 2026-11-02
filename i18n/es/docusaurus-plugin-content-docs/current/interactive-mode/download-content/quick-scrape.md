---
sidebar_label: "⚡ Quick scrape"
---

# Quick scrape

**Quick scrape** aplana el árbol de directorios para que los archivos queden
directamente bajo la cuenta:

```
{username}/{content-type}/...
```

En lugar del layout completo de Save Profile. Úsalo cuando quieras un archivo
compacto o estés scrapeando una sola cuenta.

## Qué haces

1. Eliges una red y una cuenta.
2. Eliges tipos de contenido (o **All**).
3. Confirmas y ejecutas.

## Diferencias con Perfil guardado

- No se crea ni requiere archivo de perfil.
- Los segmentos de red/cuenta se eliminan de la plantilla de directorio, así
  que el resultado queda enraizado en el username.
- Los sufijos específicos del site (posts, reels, highlights, stories) se
  conservan.

## Ver también

- [Perfil guardado](./saved-profile)
- [URL(s)](./urls)
