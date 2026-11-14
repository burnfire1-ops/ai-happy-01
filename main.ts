import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outputDir, { recursive: true });
// Byte-for-byte copy: the image is already finished, so it must reach
// the output untouched — any re-encode could change pixels or size.
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));
