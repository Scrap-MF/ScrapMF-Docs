# The pinned gallery-dl backend

scrapmf never uses your system gallery-dl by default. It downloads its own
copy once (`scrapmf setup`) into `$XDG_DATA_HOME/scrapmf/bin/` and freezes it at
a tested version — currently **gallery-dl v1.32.17**.

## Resolution order

1. `SCRAPMF_GALLERY_DL` env var (dev escape hatch)
2. `backend.gallery_dl_path` in `config.toml`
3. scrapmf's managed copy (**bundled, pinned**)
4. System `$PATH` — works but labelled `system (NOT pinned)`

## Why pin?

gallery-dl tracks the sites it scrapes, and extractors break when a site
changes. A floating system install means an archive that worked last month can
fail today for reasons that have nothing to do with your setup. Pinning makes
every run reproducible and turns upstream breakage into a deliberate, tested
upgrade instead of a surprise.

## Upgrading

New pins ship with scrapmf releases: upgrade scrapmf, then re-run
`scrapmf setup`. Your system installation is never touched, and the managed copy
does not update on its own.

## Bumping the pin

Bumping the pin is a manual, deliberate step: confirm the new standalone build
and its checksum exist in the upstream release, bump the pin in the CLI, run the
test suite, then ship a new scrapmf release.

## Next

[scrapmf doctor & setup](../cli-reference/doctor-setup)
