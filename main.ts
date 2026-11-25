import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To: my older brother\n" +
  "I still have the voicemail from the night Dad died, I listen to it when I miss him and I never told you I kept it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// Fail loudly if the entry ever violates the bounty gate: total 1–260
// chars, exactly two lines (a `To:` line + one message line ≤ 200 chars).
const entryLines = entry.split("\n");
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry length ${entry.length} is outside 1–260 chars`);
}
if (entryLines.length !== 2 || !entryLines[0].startsWith("To: ")) {
  throw new Error("entry must be exactly a `To:` line plus one message line");
}
if (entryLines[1].length > 200) {
  throw new Error(`message line is ${entryLines[1].length} chars, over the 200 limit`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
