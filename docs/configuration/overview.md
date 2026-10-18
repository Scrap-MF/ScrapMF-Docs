# Configuration overview

Everything lives under `~/.config/scrapmf/` (XDG-aware):

```
~/.config/scrapmf/
├── config.toml        # global defaults
├── sites/*.toml       # per-network options
├── profiles/*.toml    # people = map of site → accounts
├── presets/           # legacy layered presets (deprecated)
└── cookies/*.txt      # named cookie profiles (Netscape format)
```

## Resolution precedence

| What | Order (wins first) |
|---|---|
| Output directory | CLI `--output` > preset/site `output_dir` > `general.output_dir` |
| Cookies | CLI flag > named `cookie_profile` > account > profile > site |
| Extra args | site `extra_args` merged with account's; validated against an allow-list |

Layered files are loaded on every run: a file in `sites/` or `profiles/`
overrides the inline maps of the same name in `config.toml`.

{/* TODO (fase 2): tabla completa de claves de Site y Profile, ejemplos reales
     tomados de cli/src/config/templates.rs, migraciones automáticas */}
