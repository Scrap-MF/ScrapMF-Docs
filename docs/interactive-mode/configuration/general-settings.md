# General settings

**General settings** edits the global defaults in `config.toml`.

## Options

- **Output directory** — default location for downloaded files (`~/scrapmf`).
  `~` and `$HOME` are expanded.
- **Archive** — on/off. When on, every downloaded item is recorded so re-runs
  only fetch what is new.
- **Browser cookies** — the single browser channel every site takes its session
  from, or `None` for anonymous scraping. The menu shows each cookie database's
  size and modification date, plus the Instagram account it actually belongs to.

## Plugins

Plugin state (Threads, Termux MediaScan) is managed from the **Plugins** menu,
not here, but the general settings screen reports the threads plugin status.

## See also

- [Cookie profiles](./cookie-profiles)
- [Configuration overview](../../configuration/overview)
