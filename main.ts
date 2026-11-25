import { mkdirSync, writeFileSync } from "node:fs";

// One single-line joke: an excuse for a missed deadline, under 200 chars.
const line =
  "I missed the deadline because I spent all day writing the perfect apology for missing the deadline.";

// Self-check against the gate: 1-200 chars, a single line, not only whitespace.
if (line.length < 1 || line.length > 200 || line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry line violates the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
