# The pinned gallery-dl backend

scrapmf never uses your system gallery-dl by default. It downloads its own
copy once (`scrapmf setup`) into `$XDG_DATA_HOME/scrapmf/bin/` and freezes
it at a tested version — currently **gallery-dl v1.32.9**.

## Resolution order

1. `SCRAPMF_GALLERY_DL` env var (dev escape hatch)
2. `backend.gallery_dl_path` in `config.toml`
3. scrapmf's managed copy (**bundled, pinned**)
4. System `$PATH` — works but labelled `system (NOT pinned)`

## Upgrading

New pins ship with scrapmf releases: upgrade scrapmf, then re-run
`scrapmf setup`. Your system installation is never touched.

{/* TODO (fase 2): por qué pinear (regresiones upstream documentadas en los
     tests del cli, p.ej. stories privadas de TikTok), checklist de bump */}
