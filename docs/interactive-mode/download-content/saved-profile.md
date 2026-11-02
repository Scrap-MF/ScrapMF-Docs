---
sidebar_label: "👤 Saved profile"
---

# Saved profile

A **saved profile** is a reusable batch: a named person, one or more
accounts across sites, and the content kinds each account should fetch.
Profiles live under `~/.config/scrapmf/profiles/`.

## What you do

1. Pick a profile (or create one on the fly).
2. Pick the accounts it covers.
3. For each account, pick the content kinds the site offers (Posts, Reels,
   Highlights, Stories, …). Selecting **All** expands to every kind the site
   supports.
4. Confirm and run.

When several accounts belong to the same site, scrapmf offers a shortcut to
apply the same content selection to all of them.

## Directory layout (Save Profile mode)

```
{scrapmf_root}/{category}/{username|user}/<site.toml suffix>
```

The site-specific suffix (posts, reels, highlights, stories, conditional
directories) comes from `sites/<site>.toml`, not from the menu.

## Re-runs

Every downloaded item is recorded in a per-account archive, so running the
same profile again only fetches what is new. Disable dedup for a single run
with `--no-archive` (CLI) or the equivalent menu toggle.

## See also

- [Configuration → Profiles](../../configuration/profiles)
- [URL(s)](./urls)
- [Quick scrape](./quick-scrape)
