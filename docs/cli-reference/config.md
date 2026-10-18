# scrapmf config

Manage the TOML configuration.

## Subcommands

| Command | Description |
|---|---|
| `scrapmf config list` | Print the current `config.toml` |
| `scrapmf config path` | Print the config file location |
| `scrapmf config edit` | Open `$EDITOR` and validate the result |
| `scrapmf config` | Interactive menu |

The config lives at `~/.config/scrapmf/config.toml` (mode `0600`,
directory `0700`). Writes are atomic and keep a timestamped `.bak`.

{/* TODO (fase 2): ejemplo de config.toml por defecto y qué significa cada sección */}
