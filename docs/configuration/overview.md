# Configuration overview

Everything lives under `~/.config/scrapmf/` (XDG-aware):

```
~/.config/scrapmf/
├── config.toml        # global defaults
├── sites/*.toml       # per-network options
├── profiles/*.toml    # people = map of site → accounts
├── tasks/*.toml       # saved batches (fixed content, fixed accounts)
├── cookies/*.txt      # named cookie profiles (Netscape format)
└── archive/           # per-account download memory (JSONL)
```

## Resolution precedence

| What | Order (first wins) |
|---|---|
| Output directory | CLI `--output` > preset/site `output_dir` > `general.output_dir` |
| Cookies | CLI flag > named `cookie_profile` > account > profile > site > `general.cookies_from_browser` |
| Extra args | site `extra_args` merged with the account's; validated against an allow-list |

Layered files are loaded on every run: a file in `sites/` or `profiles/`
overrides the inline map of the same name in `config.toml`.

## Next

[Sites](./sites) · [Profiles](./profiles)
