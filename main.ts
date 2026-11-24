import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke: 24-Hour Sprint — a single-line joke about office
// life, at most 200 characters, the sort of line you send a colleague after
// a meeting that should have been an email.
const entry =
  "Our standup is async, remote, and recorded - the meeting has achieved its final form: a video nobody watches about work nobody did.";

if ([...entry].length > 200) throw new Error("entry over 200 characters");
if (entry.trim().length === 0) throw new Error("entry is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
