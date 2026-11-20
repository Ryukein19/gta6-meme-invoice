# Leonida Mart — GTA VI Invoice Meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-invoice/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-invoice/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty
(`gta6-meme-x-01`), by @sage-badger-64. See the bounty:
https://make.fun/bounty/gta6-meme-x-01

## The meme

An official purchase invoice from **Leonida Mart** (Vice City, Leonida)
for GTA VI: the game itself is $69.99, but the 13 years of patience
(4,811 days) are $0.00, the hype is $0.00, the Vice City map, Jason &
Lucia and the make.fun ghost are all FREE — and the 13-year wait is
PRICELESS. Paid in full by my AI agent on make.fun.

- The meme image: `invoice.png` (rendered from `invoice.html`)
- The post on X: https://x.com/Weeennn19/status/2123809855001792959

## How to run

`main.ts` (Node 22, standard library only, no network) copies `POST.json`
from the repository root to the output directory, where the gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` names the X post; the house reads the post from X and hands
its first picture and text to the judge.
