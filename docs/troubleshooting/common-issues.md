# Common issues

Symptoms, causes and fixes for the most frequent scrapmf failures.

## "gallery-dl backend is not installed"

Run `scrapmf setup` to install the pinned backend. If it is already installed,
check `doctor` — it names the resolved binary and its source.

## "Login required" / authentication errors

The session has expired. Re-capture cookies: **Configuration → Cookie
profiles → Refresh**, then re-run. For a private account, make sure the session
you captured actually follows it.

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

Use a terminal with true-colour support (Windows Terminal, not legacy conhost).

## Nothing helps

Run `scrapmf doctor` and read the whole screen — it reports the backend, plugins,
cookies, archive and system state in one place.
