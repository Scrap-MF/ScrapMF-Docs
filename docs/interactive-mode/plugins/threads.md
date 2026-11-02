# Threads (ThreadstractorMF)

Threads is served by an optional plugin rather than gallery-dl. Enable it from
**Plugins → ThreadstractorMF** before scraping any `threads.com` / `threads.net`
URL.

## What it installs

- A dedicated virtualenv under
  `$XDG_DATA_HOME/scrapmf/plugins/threads/venv`.
- The pinned `threadstractormf` package (currently **v1.2.0**) plus
  `browser-cookie3`.
- Chromium for the Playwright DOM fallback (~150 MB, cached across runs).
- A managed entry point at `$XDG_DATA_HOME/scrapmf/bin/threadstractormf`.
- The `threads` site template (`sites/threads.toml`).

Everything lives in scrapmf's own data dir; your system Python is never
touched.

## Requirements

- `python3` (to create the venv).
- Network access for the first install (pip + Chromium download).
- Enough disk space for the venv and Chromium.

## Actions

- **Enable / Update / reinstall** — create the venv, install the pinned
  package and Chromium, then smoke-test a headless Chromium launch.
- **Disable** — hide threads surfaces, keep files.
- **Remove** — delete the venv, version marker and entry point; re-enabling
  reinstalls from scratch.

## Notes

- The pin is bumped manually per scrapmf release; `scrapmf` never updates the
  plugin on its own.
- If Chromium download fails, the plugin still works for GraphQL-only fetches.
- Cookie capture for Threads uses the same browser-cookie flow as the other
  sites.

## See also

- [Plugins overview](./overview)
- [Termux MediaScan](./termux-scan)
