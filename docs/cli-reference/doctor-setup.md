# scrapmf doctor & scrapmf setup

## doctor

Health check for backends and system. Reports:

- Resolved gallery-dl binary and its source label:
  `bundled (pinned)` · `explicit override` · `system (NOT pinned)` · missing
- Browsers with detectable cookie databases
- Temp directory writability

Exits non-zero if any required check fails.

## setup

Install scrapmf's **own pinned gallery-dl build** into
`$XDG_DATA_HOME/scrapmf/bin/` (typically `~/.local/share/scrapmf/bin/`).

```bash
scrapmf setup          # asks for confirmation on a TTY
scrapmf setup --yes    # skip the prompt (required for scripts)
```

The download (~23 MB) is verified against the official SHA256SUMS of
gallery-dl v1.32.9 before it is moved into place. It never auto-updates —
new pins ship with scrapmf releases.

On non-x86_64 architectures there is no standalone upstream build; setup
prints a pinned `pipx install gallery-dl==<version>` fallback instead.
