# Plugins

Doctor reports the state of both registered plugins.

## Threads (ThreadstractorMF)

- **enabled (version)** — managed venv present and not disabled.
- **disabled** — files kept, plugin hidden.
- **not installed** — optional; enable from **Plugins**.

## Termux MediaScan

- **enabled** — `termux-media-scan` found and toggle on. Doctor also checks
  the resolved output directory:
  - **app-private storage** — warns, because Android Gallery cannot index it.
  - **missing** — warns, the directory does not exist yet.
  - **ready** — info with the resolved (recursive) target.
- **disabled** — opt-in off.
- **not installed** — `termux-media-scan` not found (install `termux:api`).

## See also

- [Plugins overview](../plugins/overview)
- [Termux MediaScan](../plugins/termux-scan)
