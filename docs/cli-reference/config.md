# scrapmf config

Manage the TOML configuration.

## Subcommands

| Command | Description |
|---|---|
| `scrapmf config list` | Print the current `config.toml`. |
| `scrapmf config path` | Print the config file location. |
| `scrapmf config edit` | Open `$EDITOR` (or `$VISUAL`, default `vi`) and validate the result. |
| `scrapmf config` | Interactive menu. |

## The file

The config lives at `~/.config/scrapmf/config.toml` (mode `0600`, directory
`0700`). Writes are atomic: the new content is written to a temporary file and
renamed over the original, so a crash cannot leave you with a half-written file.

```toml
[general]
output_dir = "~/scrapmf"
archive = true
# cookies_from_browser = "brave-origin"

[backend]
# gallery_dl_path = "/custom/path"
# auto_install_backends = true
```

### `[general]`

| Key | Default | Meaning |
|---|---|---|
| `output_dir` | `~/scrapmf` | Base output directory. `~` is expanded. |
| `archive` | `true` | Keep a per-account download archive (dedup). |
| `cookies_from_browser` | unset | Browser to read session cookies from, for every site. |

### `[backend]`

| Key | Default | Meaning |
|---|---|---|
| `gallery_dl_path` | unset | Explicit path to a gallery-dl binary, overriding even the bundled one. |
| `auto_install_backends` | `true` | Offer to install the bundled backend on the first interactive run. |

## Next

[Configuration overview](../configuration/overview)
