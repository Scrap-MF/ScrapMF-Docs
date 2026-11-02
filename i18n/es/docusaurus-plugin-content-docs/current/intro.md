# ScrapMF — Archivador interactivo y seguro para galerías de redes sociales

**scrapmf** es un orquestador de línea de comandos para [gallery-dl](https://github.com/mikf/gallery-dl).

No reimplementa la descarga. En su lugar:

- incluye su **propia copia pinneada del backend**, para que un cambio en
  upstream nunca rompa tu archivo a mitad de una ejecución;
- valida cada URL, ruta y navegador que le indiques;
- envuelve el backend en una interfaz de terminal guiada, para que archivar un
  perfil sea elegir un usuario en un menú;
- recuerda lo que ya descargó, para que las re-ejecuciones solo traigan lo nuevo;
- reporta archivos incompletos y calidad al final.

```bash
scrapmf
```

## ¿Por qué un backend pinneado?

gallery-dl sigue las redes que scrapea, y un extractor que funciona hoy puede
romperse mañana cuando un sitio cambia. scrapmf congela el backend en una versión
probada y solo lo actualiza cuando scrapmf mismo publica un nuevo pin. Tus
archivos se mantienen reproducibles, y los fallos que ves nunca son una
sorpresa de upstream.

## Redes soportadas

| Red | Tipos de contenido |
|---|---|
| Instagram | Todo · Posts · Reels · Highlights · Stories · Perfil |
| TikTok | Todo · Videos · Fotos · Perfil |
| Twitter/X | Todo · Media · Perfil |
| VSCO | Todo · Media · Perfil |
| Threads | Todo · Fotos · Videos · Perfil |
| Facebook | Todo · Posts · Álbumes · Videos |

Threads se sirve mediante un plugin opcional en lugar de gallery-dl. Actívalo
desde el menú **Plugins**.

## A dónde ir ahora

- [Instalación](./getting-started/installation) — pon scrapmf en tu máquina
- [Inicio rápido](./getting-started/quickstart) — primer scrape en dos minutos
- [Referencia CLI](./cli-reference/scrape) — cada comando y flag
- [Configuración](./configuration/overview) — sites, perfiles y reglas de precedencia
