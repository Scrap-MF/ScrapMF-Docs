---
sidebar_label: "🎵 TikTok"
---

# TikTok (Tikstractormf)

TikTok is served by the **Tikstractormf** plugin rather than gallery-dl.
Enable it from **Plugins → Tikstractormf** before scraping any TikTok URL;
without it TikTok surfaces stay hidden.

## What it installs

- A dedicated virtualenv under
  `$XDG_DATA_HOME/scrapmf/plugins/tiktok/venv`.
- The pinned `tikstractormf` package (currently **v1.5.0**) with the
  `browser` and `antibot` extras.
- A managed entry point at `$XDG_DATA_HOME/scrapmf/bin/tikstractormf`.
- The `tiktok` site template (`sites/tiktok.toml`).

Everything lives in scrapmf's own data dir; your system Python is never
touched.

## Requirements

- `python3` (to create the venv).
- Network access for the first install (pip download).
- Enough disk space for the venv.

## Content kinds

TikTok offers:

`All · Videos · Photos · Stories · Profile`

## Actions

- **Enable / Update / reinstall** — create the venv, install the pinned
  package, then smoke-test the entry point.
- **Disable** — hide TikTok surfaces, keep files.
- **Remove** — delete the venv, version marker and entry point; re-enabling
  reinstalls from scratch.

## Notes

- The pin is bumped manually per scrapmf release; `scrapmf` never updates the
  plugin on its own.
- Cookie capture for TikTok uses the same browser-cookie flow as the other
  sites.
- When the plugin is disabled, TikTok surfaces stay hidden and any TikTok
  scrape fails with an actionable message.

## See also

- [Plugins overview](./overview)
- [Threads (ThreadstractorMF)](./threads)
- [Termux MediaScan](./termux-scan)
