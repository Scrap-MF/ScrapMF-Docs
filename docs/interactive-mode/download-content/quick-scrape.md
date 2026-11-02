---
sidebar_label: "⚡ Quick scrape"
---

# Quick scrape

**Quick scrape** flattens the directory tree so files land directly under
the account:

```
{username}/{content-type}/...
```

Instead of the full Save Profile layout. Use it when you want a compact
archive or are scraping a single account.

## What you do

1. Pick a network and an account.
2. Pick content kinds (or **All**).
3. Confirm and run.

## Differences from Saved profile

- No profile file is created or required.
- The network/account segments are stripped from the directory template, so
  the result is rooted at the username.
- Site-specific suffixes (posts, reels, highlights, stories) are kept.

## See also

- [Saved profile](./saved-profile)
- [URL(s)](./urls)
