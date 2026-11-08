---
sidebar_label: "🌐 Site-specific flows"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Site-specific flows

Some networks need more than one pass or special handling. scrapmf runs
these automatically.

## <img src={useBaseUrl('/img/networks/x.svg')} alt="X" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Twitter / X

Runs two passes — **photos**, then **videos** — so each lands in its own
folder instead of a single mixed media tree.

## <img src={useBaseUrl('/img/networks/instagram.svg')} alt="Instagram" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Instagram

Separates **posts** and **reels** so reels are downloaded exactly once
instead of being fetched twice by overlapping extractors. Also supports:

- **Highlights** and **Stories** as distinct content kinds.
- **Instagram_id**, which resolves the numeric account id via the
  `/info/` view (no media files are written).

## <img src={useBaseUrl('/img/networks/threads.svg')} alt="Threads" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Threads

Served by the optional **Threadstractor** plugin rather than gallery-dl.
Enable it from the **Plugins** menu first; otherwise threads URLs fail with
an actionable message.

## <img src={useBaseUrl('/img/networks/facebook.svg')} alt="Facebook" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> Facebook

Distinguishes **Posts**, **Albums** and **Videos**; handles profile URLs and
`profile.php?id=` forms.

## <img src={useBaseUrl('/img/networks/tiktok.svg')} alt="TikTok" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> TikTok

TikTok is served by the **Tikstractormf** plugin rather than gallery-dl.
Enable it from **Plugins → Tikstractormf**; without it TikTok surfaces stay
hidden.

Content kinds: `All · Videos · Photos · Stories · Profile`. TikTok reports
posts lost to JavaScript challenges so you know when to refresh the browser
session.

## <img src={useBaseUrl('/img/networks/vsco.svg')} alt="VSCO" width="24" style={{verticalAlign:"middle",marginRight:"8px"}} /> VSCO

Standard single-pass scrape.

## Dashboard and logs

Every batch runs inside a full-screen dashboard on a TTY: one row per job,
live file counters, and Ctrl+C to abort (exit code `130`). Because
terminals cannot copy from the alternate screen, gallery-dl output is also
mirrored to a persistent log:

```
~/.local/state/scrapmf/logs/<timestamp>-<site>-<user>.log
```

The 20 newest logs are kept; older ones are pruned.
