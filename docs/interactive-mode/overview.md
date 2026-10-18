# Interactive mode

Running `scrapmf` with no arguments on a TTY opens the main menu:

- **Download content** → Saved profile · URL(s) · Quick scrape
- **Configuration** → cookie profiles, sites, profiles, general settings
- **Plugins** → enable or disable optional extras (Threads, Termux scan)
- **Doctor** → backend & system check
- **Exit**

## The Scrape submenu

- **Saved profile** — pick a profile and the accounts it covers.
- **URL(s)** — paste one or more URLs; the site is auto-detected per URL.
- **Quick scrape** — flatten the directory tree to `<account>/<content>`.

## The dashboard

On a TTY each batch runs inside a full-screen dashboard: one row per job, live
file counters, and Ctrl-C to abort (exit code `130`). Because terminals cannot
copy from the alternate screen, every job also mirrors its gallery-dl output
into a persistent log:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

The 20 newest logs are kept automatically; older ones are pruned.

## Site-specific flows

- **Twitter/X** runs two passes (photos, then videos) so each lands in its own
  folder.
- **Instagram** separates posts and reels so reels are downloaded exactly once.

## Next

[The pinned backend](../backend/pinned-gallery-dl)
