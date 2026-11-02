---
sidebar_position: 9
---

# FAQ

## Is this legal?

Only download content you have the right to access, and respect each site's
Terms of Service and rate limits. scrapmf throttles requests by default
(`sleep 3-6`, `sleep-request 8-15`) specifically so bulk archives stay polite.

## Where are my files?

By default, `~/scrapmf`. The exact directory is `general.output_dir` in
`~/.config/scrapmf/config.toml`, overridable per site, profile or account.

## Are re-downloads skipped?

Yes. Every downloaded item is recorded in a per-account archive
(`~/.config/scrapmf/archive/<site>/<account>.jsonl`), so re-runs only fetch what
is new. Disable it with `--no-archive`.

## How do I update?

New backend pins ship with scrapmf releases: upgrade scrapmf, then re-run
`scrapmf setup`. Check the latest release on GitHub.

## Does it work on Windows / macOS?

The binary is cross-platform. On macOS build from source with
`cargo install --path .`. Browser cookie capture from a Chromium browser is
documented for Linux; on Windows use `--cookies` with an exported `cookies.txt`.

## Where are the logs?

`~/.local/state/scrapmf/logs/`. The 20 newest runs are kept; older ones are
pruned automatically.
