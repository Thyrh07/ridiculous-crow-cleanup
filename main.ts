import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch (<=200 chars): trained crows collect cigarette butts
// for city councils, paid by the kilo. Bizarre at first glance (crow
// janitors); real by the second (cities already pay per kilo for litter
// cleanup, and crows undercut street sweepers).
const ENTRY =
  "We train crows to collect cigarette butts from city parks and sell the cleanup to councils by the kilo, because the birds undercut street sweepers and never take a sick day.";

const OUTPUT = "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim() !== text || /\s$/.test(text)) {
    throw new Error("entry must not have leading/trailing whitespace");
  }
  if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, ENTRY, "utf8");
