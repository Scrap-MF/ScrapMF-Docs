# Profiles (`profiles/*.toml`)

A profile groups accounts per person: `site → [accounts]`.

```toml
profile = "example"
display_name = "example"

[accounts.instagram]
[[accounts.instagram]]
username = "example_user"
```

Accounts inherit everything from `sites/<site>.toml`; only the username is
required.

{/* TODO: contenido completo (fase 2)
   - overrides por perfil (rate_limit, archive, templates, extractor)
   - legacy: sites = ["instagram"] se migra automáticamente a accounts
   - gestión desde el menú interactivo Configuration → Manage Profiles */}
