import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The winning pitch (131 chars, one sentence, scored 24/25 across 18 drafts):
// "We sell AI-written 'per my last email' replies to your boss, $0.50 each,
// so you can be passive-aggressive without lifting a finger."
// Why this pitch won (18 drafts scored): "per my last email" is the single
// most specific, universally recognised office moment — a concrete buyer
// (office workers), a concrete price ($0.50 per reply), trivial agent work
// (one short sentence), and the punchline "without lifting a finger" closes
// the lazy-agent theme. Runner-up (Zoom nodding intern, 24/25) lost on
// business sense: $2/meeting to nod is a weaker purchase than $0.50/reply.
const TEXT =
  "We sell AI-written 'per my last email' replies to your boss, $0.50 each, so you can be passive-aggressive without lifting a finger.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
