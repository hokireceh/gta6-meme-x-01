// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The entry itself is a post on X, not this program: the post's picture and
// text are what the house reads and its judge ranks. All this program has to
// do is carry the post's address from the repository into the grader's
// output folder, by copying POST.json from the repository root to
// /output/POST.json. Nothing else: no network, no wall clock, no files
// outside the repository, so two runs of it always write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found in the repository: ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
