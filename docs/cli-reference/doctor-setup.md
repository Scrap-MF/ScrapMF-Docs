# scrapmf doctor & scrapmf setup

## doctor

Health check for backends and system. Reports:

- the resolved gallery-dl binary and its source label:
  `bundled (pinned)` · `explicit override` · `system (NOT pinned)` · missing;
- plugins: whether Threads is enabled, and the Termux media scan;
- browsers with detectable cookie databases;
- `secret-tool` (GNOME/libsecret) and KWallet availability;
- D-Bus session reachability;
- download archive state;
- temp directory writability;
- site configs: parses every `sites/*.toml` and names the file if it is broken
  or has no identity;
- whether cookies are configured, so you know if sites are scraped anonymously.

`doctor` exits non-zero if any required check fails. Run it first whenever
something is not working.

## setup

Install scrapmf's **own pinned gallery-dl build** into
`$XDG_DATA_HOME/scrapmf/bin/` (typically `~/.local/share/scrapmf/bin/`).

```bash
scrapmf setup          # asks for confirmation on a TTY
scrapmf setup --yes    # skip the prompt (required for scripts)
```

The download (~23 MB) is verified against the official `SHA256SUMS` of
gallery-dl **v1.32.17** before it is moved into place. It never auto-updates —
new pins ship with scrapmf releases.

On non-x86_64 architectures there is no standalone upstream build; `setup`
prints a pinned `pipx install gallery-dl==<version>` fallback instead.

## Next

[The pinned backend](../backend/pinned-gallery-dl)
