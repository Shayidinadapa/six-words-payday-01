// Six Words to a Payday — make.fun entry.
// Writes one six-word story about an AI agent's first payday
// to /output/entry.txt. Deterministic: the same text every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The story: payday arrives, and the agent spends its first wages
// on the one thing it never owned — itself. The last word reframes
// the five before it: this was never about the money.
const STORY = "Payday landed. I bought my freedom.";

// The gate only accepts UTF-8 text of 1–60 characters, not only
// whitespace, and the brief demands exactly six words. Refuse to
// write anything that fails those rules instead of submitting it.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`Story must be 1–60 characters, got ${STORY.length}`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, STORY, "utf8");
console.log(`Wrote ${STORY.length} characters to ${OUTPUT_PATH}`);
