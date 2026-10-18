# Profiles (`profiles/*.toml`)

A profile groups accounts per person: `site → [accounts]`.

```toml
profile = "example"
display_name = "example"

[accounts.instagram]
[[accounts.instagram]]
username = "example_user"
```

Accounts inherit everything from `sites/<site>.toml`; only the username is
required.

## Overrides

Each account can override the site defaults:

| Key | Meaning |
|---|---|
| `output_dir` | Account-specific output directory. |
| `cookies` / `cookies_from_browser` / `cookie_profile` | Account-specific cookie source. |
| `extra_args` | Account-specific extra arguments. |
| `rate_limit` | Account-specific throttling. |

A profile can also carry `overrides` with whole `sites/<site>.toml`-shaped
sections, so one person can have different settings per account.

## Legacy shape

A flat `sites = ["instagram"]` list is still accepted and migrated to
`accounts` automatically.

## Managing from the menu

**Configuration → Manage Profiles** creates and edits profiles without touching
the TOML by hand.

## Next

[Cookies](../cookies/profiles)
