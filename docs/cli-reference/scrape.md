# scrapmf scrape

Download a gallery from a URL using the configured backend.

## Synopsis

```bash
scrapmf scrape <URL> [OPTIONS]
```

## Options

| Flag | Description |
|---|---|
| `-o, --output <PATH>` | Output directory. `~` is expanded. |
| `--preset <NAME>` | Preset from your configuration. |
| `--cookies <FILE>` | Cookies file (Netscape `cookies.txt` format). |
| `--cookies-from-browser <BROWSER>` | Read cookies from a browser instead of a file. |
| `--dry-run` | Print what would be downloaded; download nothing. |
| `--no-archive` | Ignore the already-downloaded memory for this run. |
| `--profile-pic-only` | Threads only: download the profile picture instead of posts. |
| `-v`, `-vv` | Increase verbosity (`-vv` for debug). |

### `--cookies-from-browser` values

`firefox`, `brave`, `brave-origin`, `brave-beta`, `brave-nightly`,
`brave-origin-beta`, `brave-origin-nightly`, `chrome`, `chromium`, `edge`,
`vivaldi`, `opera`.

### `--dry-run`

Builds the request, prints `Would scrape: <url>` and the resolved output
directory, then exits without downloading anything.

## What is validated before the run

- **URL**: must be `http` or `https` and at most 2048 characters.
- **Output**: must not be empty, must not resolve inside a protected system
  directory (`/`, `/etc`, `/var`, …) and must not contain `..`.
- **Extra args** from a preset: validated against an allow-list.

## Where the output goes

The output directory is resolved in this order (first wins):

1. `--output` on the command line
2. `output_dir` from a preset or a `sites/<site>.toml`
3. `general.output_dir` in `config.toml` (default `~/scrapmf`)

## After a run

scrapmf scans what landed on disk and reports:

- orphaned `.part` files (the download was interrupted);
- MP4-family files without a `moov` atom (truncated, not playable);
- a quality summary (resolution × codec).

If a file is incomplete, delete it and re-run: deterministic filenames mean
only the missing pieces are fetched again.

## Exit codes

| Code | Meaning |
|---|---|
| `0` | success |
| `1` | error (see the message) |
| `2` | no subcommand given outside a terminal |
| `130` | aborted with Ctrl+C |

## Next

[scrapmf config](./config) · [scrapmf doctor & setup](./doctor-setup)
