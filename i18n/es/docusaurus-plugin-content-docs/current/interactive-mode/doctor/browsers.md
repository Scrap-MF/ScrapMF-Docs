---
sidebar_label: "🌐 Navegadores"
---

# Navegadores (cookies)

Doctor detecta las bases de datos de cookies del navegador y reporta el estado
del keyring / D-Bus.

## Bases de datos de cookies

Lista cada canal cuya base de datos de cookies está presente (variantes de
Brave, Chrome, Chromium, Edge, Vivaldi, Opera, Firefox). Cuando no se
encuentra ninguna, lista los canales que comprobó.

## Keyring

- **secret-tool (libsecret/GNOME)** — encontrado o no (opcional).
- **kwallet (KDE)** — cliente encontrado o no (opcional).

## Sesión D-Bus

Reporta el socket resuelto. Sin sesión D-Bus, las cookies de la familia
Chromium que necesitan el keyring no pueden descifrarse — impórtalas en su
lugar mediante **Configuration → Cookie profiles**.

## Cookies de navegador global

Cuando `general.cookies_from_browser` está definido, Doctor resuelve el canal y
comprueba que sea usable. También reporta:

- la cuenta de Instagram a la que pertenece la sesión (si se conoce);
- un aviso cuando la base de datos de cookies no ha cambiado en 14+ días
  (parece abandonada);
- un aviso cuando la sesión capturada es más antigua que la base de datos de
  cookies del navegador (se recapturará en el siguiente scrape).

## Ver también

- [Perfiles de cookies](../configuration/cookie-profiles)
- [Cookies → Perfiles](../../cookies/profiles)
