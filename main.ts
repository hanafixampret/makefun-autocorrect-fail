import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Team, the meeting is moved to 3pm. Bring the quarterly reports and your own coffin \u2014 I mean COFFEE. Sorry, my phone is out to get me.";

if (entry.length < 1 || entry.length > 199 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-199 gate`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
