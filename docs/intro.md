---
sidebar_position: 1
---

# ScrapMF — Safe, interactive archiver for social media galleries

**scrapmf** is a command-line orchestrator for [gallery-dl](https://github.com/mikf/gallery-dl).

It does not reimplement downloading. Instead it:

- ships its **own pinned copy of the backend**, so an upstream change can never
  break your archive mid-run;
- validates every URL, path and browser you point it at;
- wraps the backend in a guided terminal UI, so archiving a profile is picking
  a username from a menu;
- remembers what it already downloaded, so re-runs only fetch what is new;
- reports incomplete files and quality at the end.

```bash
scrapmf
```

## Why a pinned backend?

gallery-dl tracks the sites it scrapes, and an extractor that works today can
break tomorrow when a site changes. scrapmf freezes the backend at a version it
was tested against and upgrades it only when scrapmf itself ships a new pin.
Your archives stay reproducible, and the failures you see are never a surprise
from upstream.

## Supported networks

| Network | Content kinds |
|---|---|
| Instagram | All · Posts · Reels · Highlights · Stories · Profile |
| TikTok | All · Videos · Photos · Stories · Profile |
| Twitter/X | All · Media · Profile |
| VSCO | All · Media · Profile |
| Threads | All · Photos · Videos · Profile |
| Facebook | All · Posts · Albums · Videos |

Threads is served by an optional plugin rather than gallery-dl. Enable it from
the **Plugins** menu.

TikTok is served by the **Tikstractormf** plugin rather than gallery-dl. Enable
it from the **Plugins** menu; without it TikTok surfaces stay hidden.

## Where to go next

- [Installation](./getting-started/installation) — get scrapmf on your machine
- [Quick start](./getting-started/quickstart) — first scrape in two minutes
- [CLI reference](./cli-reference/scrape) — every command and flag
- [Configuration](./configuration/overview) — sites, profiles and precedence rules
