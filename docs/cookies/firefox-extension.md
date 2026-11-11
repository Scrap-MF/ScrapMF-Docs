# Firefox extension: ElDevoraCucas

**ElDevoraCucas** is a companion Firefox extension that exports a Netscape
`cookies.txt` for the networks scrapmf supports, straight from a logged-in
Firefox session. It also implants a `cookies.txt` back into a browser.

- Repository: [Scrap-MF/ElDevoraCucasMF](https://github.com/Scrap-MF/ElDevoraCucasMF)
- Extension ID: `eldevoracucas@mfapplications`
- Requires Firefox 109 or newer. Runs on Firefox for Android and desktop.

## Supported networks

Instagram, TikTok, Twitter/X, VSCO, Threads, Facebook. The popup dropdown
ticks one, several or all of them; an export writes only the ticked networks.

## Export

1. Log in to the sites you want inside Firefox.
2. Click the ElDevoraCucas icon.
3. Tick the networks in the dropdown.
4. Type a file name (the extension appends `.txt`).
5. Press **Download cookies.txt** or **Copy to clipboard**.

The popup stores your network selection and file name in `storage.local` and
restores them next time you open it.

## Implant

The implant page writes cookies into a browser. Open it from the popup with
**Open Implant Page**, or from the add-on options.

Paste Netscape text, drop a `.txt` file onto the zone, or pick one from the
file chooser. The page skips any domain outside the six networks above and
overwrites the session cookies of the domains in the file. Log in again on any
site you replaced.

## Keyboard shortcut

`Ctrl+Shift+F12` exports from any supported site without opening the popup.
Firefox owns the binding; change it at `about:addons` → gear icon next to
ElDevoraCucas → **Manage Extension Shortcuts**.

The shortcut needs a keyboard with a Ctrl key. On a touch-only phone, open the
popup and tap **Download cookies.txt** instead.

## Install

### Android

Release Firefox for Android accepts signed add-ons only. Sideloading an unsigned
`.xpi` fails, and `xpinstall.signatures.required` has no effect on release
builds. One route works today:

**Firefox Nightly**, with signing off:

1. Open `about:config` and set `xpinstall.signatures.required` to `false`.
2. Copy `ElDevoraCucasMF.xpi` to your phone the normal way (USB cable, Google
   Drive, email, etc.) into a folder you can reach, such as `Download/`.
   (With `adb`: `adb push ElDevoraCucasMF.xpi /mnt/sdcard/` and then open
   `file:///mnt/sdcard/` in Firefox.)
3. In Firefox, open that folder and tap `ElDevoraCucasMF.xpi` (or use the
   file manager and choose Firefox as the app to open it).
4. Accept the blocked add-on warning, then the unverified warning.

If Firefox does not appear as an option when opening the file, download the
`.xpi` directly on the phone (e.g. from the repository's releases page) and
open it from the downloads list.

**addons.mozilla.org**, once the listing goes live. AMO signs the build and the
install survives updates.

### Desktop

`about:debugging` → **This Firefox** → **Load Temporary Add-on** → pick
`manifest.json`. You load the folder, not the `.xpi`. Temporary installs clear
when Firefox closes.

## Android / Termux workflow with scrapmf

Install the build, log in to the sites you want, export, then point scrapmf at
the file from Termux:

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

## Privacy

The extension makes no network requests and collects nothing. It reads cookie
values for the six networks and writes them where you ask.

## See also

- [Cookie profiles](./profiles)
- [Configuration → Cookie profiles](../interactive-mode/configuration/cookie-profiles)
- [Getting started → Installation](../getting-started/installation)
