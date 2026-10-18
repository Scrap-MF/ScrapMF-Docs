# Interactive mode

Running `scrapmf` with no arguments on a TTY opens the main menu:

- **Scrape** → Saved profile / URL(s) / Quick scrape
- **Configuration** → cookie profiles, sites, profiles, general
- **Doctor** → backend & system check
- **Exit**

## The dashboard

On a TTY each batch runs inside a full-screen dashboard (one row per job,
file counters, Ctrl-C to abort). Because terminals cannot copy from the
alternate screen, every job also mirrors its gallery-dl output into a
persistent log:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

The 20 newest logs are kept automatically.

{/* TODO (fase 2): capturas de pantalla, flujo quick-scrape con aplanado de
     directorios, twitter two-pass (photos/videos), dedup de reels instagram */}
