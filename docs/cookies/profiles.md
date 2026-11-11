# Cookie profiles

Named, shareable Netscape-format credential files at
`~/.config/scrapmf/cookies/<name>.txt`. Files are written `0600` and their
directory `0700` — they are live account sessions.

## Capture from a browser

Interactive: **Configuration → Cookie profiles → Capture from browser**.

- **Firefox**: reads the newest `cookies.sqlite` (from a copy — browser locks
  don't matter). Needs the `sqlite3` CLI or `python3`. On Windows this is the
  only browser that captures automatically, because Firefox stores cookies in
  plain text.
- **Chromium family** (Brave/Chrome/Chromium/Edge/Vivaldi/Opera): decrypts the
  cookie database using the desktop keyring (`secret-tool`), falling back to
  the legacy `"peanuts"` password and KWallet. On Windows this works for
  Chrome/Brave older than 127; version 127 and newer use app-bound encryption
  that scrapmf cannot unlock. Use Firefox or manual import for those.

Each profile embeds its origin as a comment line, so **Refresh** can re-capture
it later with one click.

## Manual import

Paste a Netscape `cookies.txt` you exported from a browser (for example with
the *Get cookies.txt LOCALLY* extension, or the companion **ElDevoraCucas**
extension on Android) and scrapmf validates and stores it for you. This is the
reliable path on Windows for Chrome and Brave 127+, whose app-bound encryption
blocks automatic capture.

On Android/Termux, use the **ElDevoraCucas** Firefox extension to export
`cookies.txt` and follow the [Firefox extension](./firefox-extension) guide.


## Android / Termux

`--cookies-from-browser` cannot work in Termux: browser cookie databases live in
app-private storage that Termux cannot read without root. Export a Netscape
`cookies.txt` instead and pass it with `--cookies`.

The companion Firefox extension **ElDevoraCucas**
([Scrap-MF/ElDevoraCucasMF](https://github.com/Scrap-MF/ElDevoraCucasMF)) exports
a `cookies.txt` for Instagram, TikTok, Twitter/X, VSCO, Threads and Facebook
straight from a logged-in Firefox session:

1. Install it in **Firefox for Android** (Firefox Nightly with
   `xpinstall.signatures.required` set to `false`, or from AMO once listed).
2. Log in to the sites you want inside Firefox.
3. Open the extension popup, tick the networks, and download `cookies.txt`.
4. Copy the file into Termux's config dir:

   ```bash
   termux-setup-storage   # once per fresh install
   cp ~/storage/downloads/cookies.txt ~/.config/scrapmf/cookies/android.txt
   scrapmf scrape "https://www.instagram.com/sbtn_mf/" \
     --cookies ~/.config/scrapmf/cookies/android.txt
   ```

Firefox writes downloads to `~/storage/downloads`, which Termux reaches through
the symlink that `termux-setup-storage` creates. scrapmf reads the file you hand
it and does not refresh it — re-export when the session expires.

> Cookie files are account credentials. Never commit or share them.

## Precedence

`cookie_profile` beats `cookies_from_browser`, and an explicit CLI flag beats
both. A stored profile is only used where you point it, and it is never
silently replaced.

## Expiry

The menu shows how many days a captured session has left, so you know when to
refresh it before a scrape fails with an authentication error.

## Next

[Configuration overview](../configuration/overview)
