# Common issues

## Windows: "no cookies could be decrypted" for Chrome or Brave

Chrome and Brave 127 and newer encrypt cookies with app-bound encryption. scrapmf
cannot unlock that key from outside the browser, so automatic capture fails with
"AES-256-GCM authentication failed". Use Firefox (captures automatically on
Windows) or import a Netscape `cookies.txt` exported with *Get cookies.txt
LOCALLY*.

Symptoms, causes and fixes for the most frequent scrapmf failures.

## "gallery-dl backend is not installed"

Run `scrapmf setup` to install the pinned backend. If it is already installed,
check `doctor` — it names the resolved binary and its source.

## "Login required" / authentication errors

The session has expired. Re-capture cookies: **Configuration → Cookie
profiles → Refresh**, then re-run. For a private account, make sure the session
you captured actually follows it.

On Android/Termux, `--cookies-from-browser` cannot read browser databases:
re-export `cookies.txt` with the ElDevoraCucas Firefox extension, copy it to
`~/.config/scrapmf/cookies/`, and pass it with `--cookies`.

## "Failed to retrieve rehydration data" (TikTok)

A JavaScript challenge from TikTok. Refresh your browser session and re-run;
if it persists, the CDN token has expired — wait a few minutes and try again.

## Incomplete files (`.part`, no `moov` atom)

The download was interrupted. Delete the file and re-run: deterministic
filenames mean only the missing pieces are fetched again.

## HEVC video does not play

The file is fine; the player has no HEVC decoder. Top-resolution variants are
increasingly HEVC/H.265.

## Config is ignored silently

Check the TOML syntax of `sites/*.toml`. `doctor` parses every site file and
names the one that is broken or has no identity.

## The interactive menu renders incorrectly

Use a terminal with true-colour support.

## Nothing helps

Run `scrapmf doctor` and read the whole screen — it reports the backend, plugins,
cookies, archive and system state in one place.

## Instagram: `NotFoundError: Requested user could not be found` (reels/stories)

Posts work but reels or stories fail instantly with `KeyError: 'data'` /
`NotFoundError: Requested user could not be found`. This is usually a **stale
session**: the stories/reels endpoints require a fresher cookie than posts.

- Run `scrapmf doctor` — if it warns that the captured session is older than
  the browser's cookie database, refresh it:
  **Configuration → Cookie profiles → Refresh**.
- Make sure the browser is logged in to Instagram and follows the account
  (private stories require a follow).
- Workaround: use the account id instead of the username:
  `https://www.instagram.com/id:<ds_user_id>/reels/`.
- If it persists, export fresh cookies with the **ElDevoraCucas** Firefox
  extension and pass them with `--cookies <file>`.
- If it *still* persists, the pinned gallery-dl build may have an upstream bug
  fixed only in dev. Install a newer dev build and point scrapmf at it:
  ```bash
  python3 -m venv ~/.local/share/scrapmf/gdl-dev
  ~/.local/share/scrapmf/gdl-dev/bin/pip install git+https://codeberg.org/mikf/gallery-dl.git
  export SCRAPMF_GALLERY_DL="$HOME/.local/share/scrapmf/gdl-dev/bin/gallery-dl"
  ```
  (or set `backend.gallery_dl_path` in `config.toml`).
