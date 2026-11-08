# Installation

scrapmf is distributed as a single static Rust binary. The bundled gallery-dl
backend (~23 MB) is downloaded separately on first run via `scrapmf setup`.

## One-liner (Linux / macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/Scrap-MF/ScrapMF-Rust-CLI/main/install.sh | sh
```

Downloads the latest build for your architecture, verifies its SHA-256 checksum
against the adjacent `.sha256`, and installs to `~/.local/bin`. You can also pass
a version tag as the first argument:

```bash
install.sh v1.0.0
```

Use `--gnu` to pick the dynamically-linked build instead of the default static
musl one.

## From source

Requires Rust 1.88+:

```bash
git clone https://github.com/Scrap-MF/ScrapMF-Rust-CLI.git
cd ScrapMF-Rust-CLI
cargo install --path .
```

The binary lands in `~/.cargo/bin`.

## With Cargo

Requires Rust 1.88+ (and a C compiler for the bundled SQLite):

```bash
cargo install scrapmf                  # from crates.io (builds from source)
cargo binstall scrapmf                 # prebuilt binary
cargo install --git https://github.com/Scrap-MF/ScrapMF-Rust-CLI  # latest main
cargo install --path .                 # from this repo
```

On Debian/Ubuntu install `build-essential`, on Fedora `gcc`, on macOS
`xcode-select --install`.

## Windows

scrapmf has no native Windows binary. Install it inside WSL using the Linux
one-liner above; from there the rest of this guide applies unchanged.

## Requirements

scrapmf itself needs nothing beyond the binary. The backend and the browser
cookie capture have their own needs:

| Need | When |
|---|---|
| `curl` or `wget` | `scrapmf setup` downloads the pinned backend |
| `sqlite3` CLI **or** `python3` | reading a Firefox cookie database |
| A desktop keyring (`secret-tool` / KWallet) | decrypting Chromium-family cookies |

On Termux, `--cookies-from-browser` cannot work — export `cookies.txt` with the
companion Firefox extension **ElDevoraCucas**
(https://github.com/Scrap-MF/ElDevoraCucasMF) and use `--cookies` instead.

## Verify

```bash
scrapmf --version
scrapmf doctor
```

`doctor` checks the backend resolution, browser cookie databases and that your
temp directory is writable.

## Next

[Quick start](./quickstart)
