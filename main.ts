import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To: my older brother\n" +
  "I still have the voicemail from the night Dad died, I listen to it when I miss him and I never told you I kept it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
