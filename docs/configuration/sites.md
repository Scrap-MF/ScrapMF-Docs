# Sites (`sites/*.toml`)

One file per network. The file stem is the site key used by presets, profiles
and URL auto-matching.

## Example

`~/.config/scrapmf/sites/instagram.toml`:

```toml
site = "instagram"
pattern = "instagram.com"

output_dir = "~/Pictures/instagram"
extra_args = ["--restrict-filenames", "auto"]

filename_template = "{date:%Y-%m-%d}_{post_id}_{num:02d}.{extension}"
directory_template = ["{scrapmf_root}", "{category}", "{username}", "{subcategory}"]

[rate_limit]
sleep = "3-6"
sleep_request = "8-15"
sleep_429 = 120

[extractor.instagram.highlights]
include = ["highlights"]
```

## Keys

| Key | Meaning |
|---|---|
| `site` | Logical name, usually the file stem. |
| `pattern` / `patterns` | URL substrings that auto-match this site. Longest match wins. |
| `output_dir` | Per-site output directory. |
| `extra_args` | Extra gallery-dl arguments, validated against an allow-list. |
| `cookies` / `cookies_from_browser` / `cookie_profile` | Cookie sources for this site. |
| `rate_limit` | Throttling: `sleep`, `sleep_request`, `sleep_429`, `limit_rate`. |
| `archive` | Explicit archive override. |
| `extractor` | gallery-dl extractor options, passed as `-o extractor.<site>.<key>=<value>`. |
| `filename_template` | Filename pattern. |
| `directory_template` | Directory layout, e.g. `["{scrapmf_root}", "{category}", "{username}"]`. |

## Auto-matching

When you scrape a URL, scrapmf picks the site whose pattern is the longest
substring match. Additional `patterns` entries are matched alongside `pattern`.

## Next

[Profiles](./profiles)
