# Instalación

scrapmf se distribuye como un único binario estático de Rust. El backend
gallery-dl incluido (~23 MB) se descarga por separado en la primera ejecución
mediante `scrapmf setup`.

## One-liner (Linux / macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/Scrap-MF/ScrapMF-Rust-CLI/main/install.sh | sh
```

Descarga la última build para tu arquitectura, verifica su checksum SHA-256
contra el `.sha256` adyacente e instala en `~/.local/bin`. También puedes
pasar una etiqueta de versión como primer argumento:

```bash
install.sh v1.0.0
```

Usa `--gnu` para elegir la build dinámicamente enlazada en lugar de la estática
musl por defecto.

## Desde código fuente

Requiere Rust 1.88+:

```bash
git clone https://github.com/Scrap-MF/ScrapMF-Rust-CLI.git
cd ScrapMF-Rust-CLI
cargo install --path .
```

El binario queda en `~/.cargo/bin`.

## Con Cargo

Requiere Rust 1.88+ (y un compilador C para SQLite incluido):

```bash
cargo install scrapmf                  # desde crates.io (compila desde fuente)
cargo binstall scrapmf                 # binario precompilado
cargo install --git https://github.com/Scrap-MF/ScrapMF-Rust-CLI  # última main
cargo install --path .                 # desde este repositorio
```

En Debian/Ubuntu instala `build-essential`, en Fedora `gcc`, en macOS
`xcode-select --install`.

## Requisitos

scrapmf no necesita nada más allá del binario. El backend y la captura de
cookies del navegador tienen sus propias necesidades:

| Necesidad | Cuándo |
|---|---|
| `curl` o `wget` | `scrapmf setup` descarga el backend pinneado |
| CLI `sqlite3` **o** `python3` | leer una base de datos de cookies de Firefox |
| Un keyring de escritorio (`secret-tool` / KWallet) | descifrar cookies de la familia Chromium |

En Termux, `--cookies-from-browser` no puede funcionar — exporta `cookies.txt`
con la extensión companion Firefox **ElDevoraCucas** y usa `--cookies`.

## Verificar

```bash
scrapmf --version
scrapmf doctor
```

`doctor` comprueba la resolución del backend, las bases de datos de cookies del
navegador y que tu directorio temporal sea escribible.

## Siguiente

[Inicio rápido](./quickstart)
