# Download archive

Doctor reports the per-account download memory under `archive/`.

- **empty** — no records yet (appears after the first scrape).
- **N media across M account(s)** — counts JSONL entries across all site
  directories, plus the archive path.

The archive is plain text you own: copy the `archive/` folder between machines
and the memory comes with it. Disable it for a single run with `--no-archive`.

## See also

- [scrapmf scrape](../../cli-reference/scrape)
- [Configuration overview](../../configuration/overview)
