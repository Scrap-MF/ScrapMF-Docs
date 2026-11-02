---
sidebar_label: "📱 Termux scan"
---

# Termux MediaScan

**Termux MediaScan** runs `termux-media-scan -r <output dir>` once per finished
download so Android's Gallery picks up the new media. It is **opt-in** and
disabled by default.

## Requirements

- Termux environment.
- The **Termux:API** app (from F-Droid) and `pkg install termux-api`.
- `termux-media-scan` on `PATH` (or `SCRAPMF_TERMUX_SCAN_BIN`).

## States and actions

- **not installed** — Termux without `termux-media-scan`. **Help** prints the
  install steps.
- **disabled** — opt-in off. **Enable** turns it on (and reports if the binary
  is still missing).
- **enabled** — **Disable** turns it off; **Test scan now** runs a scan against
  the configured output dir and reports the outcome.

## Storage visibility

The scan runs inside the `termux:api` app, which can only read world-readable
paths. Output must live under shared storage (`~/storage/downloads/…`, a
symlink to `/storage/emulated/0/Download/…`). App-private targets are reported
instead of silently indexing nothing, and `doctor` flags them.

scrapmf canonicalizes the output dir (including missing leaves) before handing
it over, and narrows the scan to the account tree the run actually wrote.

## See also

- [Plugins overview](./overview)
- [Threads](./threads)
- [Cookies → Android / Termux](../../cookies/profiles)
