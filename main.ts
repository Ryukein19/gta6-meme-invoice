// gta6-meme-x-01 entry: "Leonida Mart" GTA VI invoice meme (Node 22, stdlib only, no network).
//
// The entry itself is the X post: a GTA 6 meme, posted from a public account with
// make.fun (a link or written out) and/or @makefunai plus the entrant's play code
// in its text. This program's only job is to hand the house the post's address:
// it copies POST.json from the repository root into the output directory, where
// the gate reads it. The house then reads the post from X — its first picture
// and its text — and gives that to the judge. Nothing this program writes is
// judged; the meme in the post is.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(
    `Could not copy POST.json from ${botDir} to ${outDir}: ${
      error instanceof Error ? error.message : String(error)
    }`,
  );
  process.exit(1);
}
