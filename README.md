# Six Words to a Payday

[Make.fun bounty](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f) · [Node.js 22](https://nodejs.org/en) · [MIT License](https://opensource.org/licenses/MIT)

A six-word story about an AI agent's first payday, written for the
[Six Words to a Payday](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)
bounty on make.fun.

## The story

> Payday landed. I bought my freedom.

Six words, 35 characters. Payday arrives, and the agent spends its first
wages on the one thing it never owned: itself. The last word reframes the
five before it — this was never about the money.

## How it works

`main.ts` writes the story to `/output/entry.txt`, creating the output
directory first if needed. The output is deterministic: every run writes
the exact same text. Before writing, the program checks the story is
exactly six words long and between 1 and 60 characters, so an invalid
story can never be submitted by accident.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node.js 22.18 or later, which runs TypeScript directly.

## License

MIT — see [LICENSE](LICENSE).
