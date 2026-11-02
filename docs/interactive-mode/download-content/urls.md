---
sidebar_label: "🔗 URL(s)"
---

# URL(s)

Paste one or more URLs and let scrapmf detect the site from each one. This
is the fastest path when you already have a link.

## What you do

1. Paste a URL, or several separated by spaces/newlines.
2. scrapmf validates each URL (`http`/`https`, ≤ 2048 characters) and
   reports any token it cannot parse.
3. The site is auto-detected per URL, so a single batch can mix networks.
4. Pick content kinds where the site offers a menu; single-kind sites skip
   the menu.
5. Confirm and run.

## Behaviour

- Multi-site batches run as separate jobs, one per (site, account).
- Cookies, output dir and archive follow the same precedence as a saved
  profile (CLI flags > profile > site > global).
- Invalid or empty tokens are skipped with a message rather than aborting
  the whole batch.

## See also

- [Saved profile](./saved-profile)
- [Quick scrape](./quick-scrape)
- [scrapmf scrape (CLI)](../../cli-reference/scrape)
