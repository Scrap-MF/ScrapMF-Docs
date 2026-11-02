---
sidebar_label: "🩺 Overview"
---

# 🩺 Doctor

**Doctor** is the fourth entry of the main menu. It runs a health check over
the backend, plugins, cookies and system, and reports everything in one place.

## How to run

- From the menu: **Doctor**.
- From the shell: `scrapmf doctor` (add `-v` for extra detail).

The interactive version opens a full-screen view; the CLI version prints the
same lines to the terminal.

## Reading the output

Each line is prefixed by a level:

- `✔` success
- `ℹ` info
- `⚠` warning (something to check, not fatal)
- `✖` error (needs action)
- `  ` help (follows an error or warning)

When every check passes, the last line is `All checks passed`.

## What is checked

- **[Backend](./backend)** — gallery-dl resolution and pinned version.
- **[Plugins](./plugins)** — threads and Termux MediaScan state.
- **[Browsers](./browsers)** — cookie databases, keyring and D-Bus.
- **[Archive](./archive)** — per-account download memory stats.
- **[Site configs](./site-configs)** — parsing of `sites/*.toml`.
- **[Temp dir](./temp-dir)** — writability of the temp directory.

## See also

- [Troubleshooting](../../troubleshooting/common-issues)
- [scrapmf doctor & setup](../../cli-reference/doctor-setup)
