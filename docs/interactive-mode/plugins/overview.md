# Plugins

**Plugins** is the third entry of the main menu. It manages optional extras
that scrapmf can install into its own managed environment (never your system
Python).

The registry currently has two plugins:

- **[Threads (ThreadstractorMF)](./threads)** — a backend for Threads.com /
  Threads.net accounts.
- **[Termux MediaScan](./termux-scan)** — indexes finished downloads into the
  Android Gallery on Termux.

## States

Each plugin reports one of:

- **not installed** — no managed files present.
- **disabled** — files are kept but the plugin is hidden from all scrapmf
  surfaces.
- **enabled (version)** — active and usable.

## Common actions

- **Enable / Update / reinstall** — install (or reinstall) at the pinned
  version.
- **Disable** — hide the plugin, keep its files.
- **Remove** — delete all managed files (re-enabling reinstalls from scratch).
- **Test scan** (Termux only) — run a scan against the configured output dir.
- **Help** — install instructions for missing system dependencies.

Threads is gated everywhere: while it is not enabled, threads URLs fail with an
actionable message and threads surfaces stay hidden.
