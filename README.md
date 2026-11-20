# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/hokireceh/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/hokireceh/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a gamer who waited 13 years for GTA VI finally starts the download — and the progress bar says 13 years remaining. The make.fun ghost sits on the couch next to him, waiting too. The entry itself is the X post (its picture is `meme.png`, its text is `post-text.txt`); this repository only names the post in `POST.json`, and `main.ts` copies that file to the grader's output.

## Posting (for Cici)

1. Attach `meme.png` to a new post on X from a public account.
2. Paste the text from `post-text.txt` as the post's text, exactly as written.
3. Copy the post's address and put it in `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}` — that is the only file that changes after posting.
4. Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=jjqnkn84&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
