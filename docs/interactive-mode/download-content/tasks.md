---
sidebar_label: "📋 Tasks"
---

# Tasks

A **task** is a saved content batch: a name, the accounts to run it on, and
the content each account wants. Tasks live under `~/.config/scrapmf/tasks/`.

Tasks answer *what and for whom*; a **profile** answers *how* (per-run content
choices, site overrides, cookies). They are intentionally separate — different
directory, struct, menus and flows — but both speak `Account`, so a cookie
session behaves the same in each.

## When to use a task

- You scrape the same accounts with the same content kinds every time.
- You want the media in its own tree, named after the task (`{scrapmf_root}`
  takes the task name).
- You want one command-like entry in the menu instead of re-picking kinds.

## What a task stores

- A name (taken from the file stem).
- A map of site → accounts. Each account carries its own username, cookie
  session and the content kinds it wants (`kinds`).
- Kinds are labels from the site registry (`Posts`, `Reels`, `Highlights`,
  `Stories`, `Media`, …). `"All"` expands per site when the task runs, so a
  task spanning networks follows what each one actually supports.

A task stores **no** output directory or template configuration: media lands
under the task name automatically.

## Using a task

From **Download content → Tasks**:

1. **Create new task** — walk the wizard: site → account → content, until you
   save. Each account gets its own content and cookie session.
2. Pick a saved task to **Run**, **Edit** or **Delete**.
3. **Run** writes media under the task name; the dashboard and integrity
   report behave like any other scrape.

`Edit` re-walks the wizard with today's accounts. `Delete` removes the saved
file.

## Files on disk

```
~/.config/scrapmf/tasks/<name>.toml
```

Account fields are flattened, so `output_dir` and `extra_args` written there
are honoured (`output_dir` precedence: account → site → global).

## See also

- [Saved profile](./saved-profile)
- [Quick scrape](./quick-scrape)
- [URL(s)](./urls)
- [Configuration → Profiles](../../configuration/profiles)
