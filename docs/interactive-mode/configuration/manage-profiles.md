---
sidebar_label: "👤 Manage profiles"
---

# Manage Profiles

**Manage Profiles** creates and edits profiles without touching the TOML by
hand. A profile groups accounts per person: `site → [accounts]`.

## What you can do

- Create a new profile (name + accounts).
- Edit an existing profile's accounts and overrides.
- Delete a profile.

## Shape

Each account requires only a username; everything else is inherited from
`sites/<site>.toml`. Accounts can override `output_dir`, `cookies`,
`cookies_from_browser`, `cookie_profile`, `extra_args` and `rate_limit`.

A profile can also carry `overrides` with whole `sites/<site>.toml`-shaped
sections, so one person can have different settings per account. A flat
`sites = ["instagram"]` list is still accepted and migrated to `accounts`
automatically.

## See also

- [Configuration → Profiles](../../configuration/profiles)
- [Cookie profiles](./cookie-profiles)
- [Manage Sites](./manage-sites)
