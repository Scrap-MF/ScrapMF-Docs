---
sidebar_label: "🌐 Manage sites"
---

# Manage Sites

**Manage Sites** edits the per-network files under `~/.config/scrapmf/sites/`.
Each file stem is the site key used by presets, profiles and URL auto-matching.

## What you can do

- Open a site file in `$EDITOR`.
- Add or remove networks (threads appears only when the plugin is enabled).
- Adjust output dir, extra args, rate limits, filename/directory templates and
  extractor options.

## Keys

See [Configuration → Sites](../../configuration/sites) for the full key
reference (`output_dir`, `extra_args`, `rate_limit`, `archive`, `extractor`,
`filename_template`, `directory_template`, `cookies`, …).

## Auto-matching

When you scrape a URL, scrapmf picks the site whose pattern is the longest
substring match. Additional `patterns` entries are matched alongside `pattern`.

## Validation

`doctor` parses every site file and names the one that is broken or has no
identity. Malformed files are skipped with a warning rather than crashing.

## See also

- [Configuration → Sites](../../configuration/sites)
- [Manage Profiles](./manage-profiles)
