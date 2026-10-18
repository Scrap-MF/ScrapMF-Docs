# Installation

scrapmf is distributed as a single static Rust binary. The bundled gallery-dl
backend (~23 MB) is downloaded separately on first run via `scrapmf setup`.

{/* TODO: contenido completo (fase 2) — verificar comandos exactos contra el repo cli/
   - cargo binstall scrapmf
   - AUR / PKGBUILD (cli/PKGBUILD)
   - install.sh (curl | bash) — documentar qué hace antes de recomendarlo
   - desde fuente: cargo install --path cli/
   - requisitos: curl o wget (para setup), sqlite3 o python3 (captura cookies Firefox) */}

## Verify the installation

```bash
scrapmf doctor
```

`doctor` checks the backend resolution, browser cookie databases and that your
temp directory is writable.
