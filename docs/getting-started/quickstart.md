# Quick start

From zero to a downloaded profile in two minutes.

## 1. Install the backend

```bash
scrapmf setup
```

This downloads the pinned gallery-dl build (currently **v1.32.17**) into
`~/.local/share/scrapmf/bin/` and verifies its SHA-256 against the official
checksums. It never updates on its own.

## 2. Scrape

Run the interactive menu:

```bash
scrapmf
```

Pick **Download content** → **Quick scrape**, then choose a network, an account
and the content kinds you want. You can also paste a direct link — the site is
detected from the URL:

```bash
scrapmf scrape "https://www.instagram.com/user/" --dry-run
```

`--dry-run` prints what would be downloaded and downloads nothing.

## 3. Read the report

At the end of every run you get a short summary:

```
✔ 31 files · quality: 1080x1920 avc1 ×28, 720x1280 hvc1 ×3
```

It flags incomplete downloads and stray `.part` files. If a site's anti-bot
system swallowed some posts, it tells you how many and how to fix it.

## 4. Re-run without duplicating

Every downloaded item is recorded in a per-account archive, so running the same
command again next month only fetches the new posts. Disable it for a single run
with `--no-archive`.

## Where things live

| What | Path |
|---|---|
| Output (default) | `~/scrapmf` |
| Config | `~/.config/scrapmf/config.toml` |
| Per-run logs | `~/.local/state/scrapmf/logs/` (20 newest) |

## Next

[CLI reference](../cli-reference/scrape) · [Configuration](../configuration/overview)
