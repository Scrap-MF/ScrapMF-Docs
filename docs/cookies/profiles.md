# Cookie profiles

Named, shareable Netscape-format credential files at
`~/.config/scrapmf/cookies/<name>.txt`. Files are written `0600` and their
directory `0700` — they are live account sessions.

## Capture from a browser

Interactive: *Configuration → Cookie profiles → Capture from browser*.

- **Firefox**: reads the newest `cookies.sqlite` (from a copy — browser locks
  don't matter). Needs `sqlite3` CLI or `python3`.
- **Chromium family** (Brave/Chrome/Chromium/Edge/Vivaldi/Opera): decrypts
  the cookie DB using the desktop keyring (`secret-tool`), falling back to
  the legacy `"peanuts"` password.

Each profile embeds its origin as a comment line, so **refresh** can
re-capture it later with one click.

## Precedence

`cookie_profile` beats `cookies_from_browser`, and an explicit CLI flag
beats both. A friend's stored session is never silently replaced by yours.

{/* TODO (fase 2): flujo de refresco, importación manual pegando texto,
     resumen de expiración que muestra el menú */}
