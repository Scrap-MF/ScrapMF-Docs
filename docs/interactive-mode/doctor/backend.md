# Backend (gallery-dl)

Doctor resolves the gallery-dl backend and reports its version and source.

## Sources

Resolution order (first wins):

1. `SCRAPMF_GALLERY_DL` environment variable.
2. `backend.gallery_dl_path` in `config.toml`.
3. scrapmf's own managed (pinned) copy.
4. `gallery-dl` on `$PATH` (system, not pinned).

## Pinned version

The managed copy is frozen at the version scrapmf was tested against. Doctor
compares the installed version against the pin and warns when they differ —
upgrading scrapmf does not reinstall the backend; only `scrapmf setup` does.

When the versions drift, run `scrapmf setup` to update the managed copy.

## Not found

If no backend is found, Doctor prints an error and a help line pointing at
`scrapmf setup` (or the first-run offer in interactive mode).

## See also

- [The pinned backend](../../backend/pinned-gallery-dl)
- [scrapmf doctor & setup](../../cli-reference/doctor-setup)
