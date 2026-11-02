# Interactive mode

Running `scrapmf` with no arguments on a TTY opens the main menu:

- **[📥 Download content](./download-content/overview)** → Saved profile · URL(s) · Quick
  scrape · Tasks
- **[⚙️ Configuration](./configuration/overview)** → cookie profiles, sites, profiles,
  general settings
- **[🔌 Plugins](./plugins/overview)** → enable or disable optional extras (Threads,
  Termux scan)
- **[🩺 Doctor](./doctor/overview)** → backend & system check
- **Exit**

## Download content

The **Download content** entry is documented in its own section:

- [Overview](./download-content/overview) — the three scrape paths and when to use each
- [Saved profile](./download-content/saved-profile) — reusable batches
- [URL(s)](./download-content/urls) — paste links, auto-detect the site
- [Quick scrape](./download-content/quick-scrape) — flat `<account>/<content>` tree
- [Site-specific flows](./download-content/site-flows) — Twitter/X, Instagram,
  Threads, Facebook, …

## The dashboard

On a TTY each batch runs inside a full-screen dashboard: one row per job, live
file counters, and Ctrl-C to abort (exit code `130`). Because terminals cannot
copy from the alternate screen, every job also mirrors its gallery-dl output
into a persistent log:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

The 20 newest logs are kept automatically; older ones are pruned.

## Next

[The pinned backend](../backend/pinned-gallery-dl)
