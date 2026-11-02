# Site configs

Doctor parses every `sites/*.toml` and reports the broken ones.

- A file that does not parse is reported with the parser error verbatim
  (common causes: a type typo in `[rate_limit]`, a missing quote).
- A file with no identity (`site`/`pattern`/`extractor` all absent) is
  reported as empty or identity-less.
- A file that cannot be read is reported with the I/O error.
- When all files are fine: `Site configs: N file(s) OK`.
- When the directory is empty: a warning is shown.

Help text points at fixing the line or deleting the file to regenerate it.

## See also

- [Manage Sites](../configuration/manage-sites)
- [Configuration → Sites](../../configuration/sites)
