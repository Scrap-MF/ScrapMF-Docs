---
sidebar_label: "🔗 URL(s)"
---

# URL(s)

Pega una o varias URLs y deja que scrapmf detecte el site de cada una. Es la
vía más rápida cuando ya tienes un enlace.

## Qué haces

1. Pegas una URL, o varias separadas por espacios/saltos de línea.
2. scrapmf valida cada URL (`http`/`https`, ≤ 2048 caracteres) y reporta
   cualquier token que no pueda parsear.
3. El site se auto-detecta por URL, así que un batch puede mezclar redes.
4. Eliges tipos de contenido donde el site ofrece menú; los sites de un solo
   kind saltan el menú.
5. Confirmas y ejecutas.

## Comportamiento

- Los batches multi-site corren como jobs separados, uno por (site, cuenta).
- Cookies, directorio de salida y archive siguen la misma precedencia que un
  perfil guardado (flags CLI > perfil > site > global).
- Los tokens inválidos o vacíos se saltan con un mensaje en lugar de abortar
  todo el batch.

## Ver también

- [Perfil guardado](./saved-profile)
- [Quick scrape](./quick-scrape)
- [scrapmf scrape (CLI)](../../cli-reference/scrape)
