---
sidebar_label: "🌐 Browsers"
---

# Browsers (cookies)

Doctor detects browser cookie databases and reports keyring / D-Bus state.

## Cookie databases

Lists every channel whose cookie database is present (Brave variants, Chrome,
Chromium, Edge, Vivaldi, Opera, Firefox). When none are found, it lists the
channels it checked.

## Keyring

- **secret-tool (libsecret/GNOME)** — found or not (optional).
- **kwallet (KDE)** — client found or not (optional).

## D-Bus session

Reports the resolved socket. Without a D-Bus session, Chromium-family cookies
that need the keyring cannot be decrypted — import them instead via
**Configuration → Cookie profiles**.

## Global browser cookies

When `general.cookies_from_browser` is set, Doctor resolves the channel and
checks that it is usable. It also reports:

- the Instagram account the session belongs to (if known);
- a warning when the cookie database has been unchanged for 14+ days (looks
  abandoned);
- a warning when the captured session is older than the browser's cookie
  database (it will be re-captured on the next scrape).

## See also

- [Cookie profiles](../configuration/cookie-profiles)
- [Cookies → Profiles](../../cookies/profiles)
