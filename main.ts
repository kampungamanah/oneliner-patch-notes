import { mkdirSync, writeFileSync } from "node:fs";

// Software patch note for a bug in real life.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character (1 to 160).
// Terse release-note register, one bug, one fix.
const line = "v2.0.1: Fixed a memory leak where names vanished the moment introductions ended.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
