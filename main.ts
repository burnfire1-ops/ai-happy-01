import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`entry.png not found beside main.ts: ${src}`);
  process.exit(1);
}

// The copy is byte-for-byte on purpose: the image is the entry itself,
// and any re-encode would risk changing pixels or growing past the gate.
copyFileSync(src, dest);
