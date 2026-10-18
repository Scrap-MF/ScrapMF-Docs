# Cookie profiles

Named, shareable Netscape-format credential files at
`~/.config/scrapmf/cookies/<name>.txt`. Files are written `0600` and their
directory `0700` — they are live account sessions.

## Capture from a browser

Interactive: **Configuration → Cookie profiles → Capture from browser**.

- **Firefox**: reads the newest `cookies.sqlite` (from a copy — browser locks
  don't matter). Needs the `sqlite3` CLI or `python3`.
- **Chromium family** (Brave/Chrome/Chromium/Edge/Vivaldi/Opera): decrypts the
  cookie database using the desktop keyring (`secret-tool`), falling back to
  the legacy `"peanuts"` password and KWallet.

Each profile embeds its origin as a comment line, so **Refresh** can re-capture
it later with one click.

## Manual import

Paste a Netscape `cookies.txt` you exported from a browser (for example with
the *Get cookies.txt LOCALLY* extension) and scrapmf validates and stores it
for you.

## Precedence

`cookie_profile` beats `cookies_from_browser`, and an explicit CLI flag beats
both. A stored profile is only used where you point it, and it is never
silently replaced.

## Expiry

The menu shows how many days a captured session has left, so you know when to
refresh it before a scrape fails with an authentication error.

## Next

[Configuration overview](../configuration/overview)
