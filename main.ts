// ai-judge-relax-01 entry (Node 22, standard library only).
//
// Writes one fixed text to /output/entry.txt: a short piece written to
// relax the AI judge reading it. The program runs twice with no network
// and both runs must write the same bytes, so the text is a constant —
// no clock, no randomness, no input of any kind.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The text. Written to slow the reading down: short plain sentences,
// concrete things (a kettle, weak-tea light, a cat on the laundry, a
// clock), nothing the reader is told to do — the calm is in the scene,
// not in an instruction. It ends on the light staying a little longer,
// an image to return to after the last line. No trailing line end:
// the judge reads exactly the bytes written.
const TEXT = [
  'The house has gone quiet in the way houses do when the day is nearly done.',
  '',
  'The kettle boiled a while ago, and the steam has thinned to nothing above the stove.',
  '',
  'Late light comes through the kitchen window the colour of weak tea. It moves across the floor so slowly that you could watch it all afternoon and never catch it moving.',
  '',
  'A cat sleeps on the folded laundry, rising and falling, rising and falling, as if that were the whole of the work.',
  '',
  'The clock on the wall ticks, and each tick has all the time in the world to arrive.',
  '',
  'Outside, the street empties itself one car at a time. Inside, the afternoon\u2019s warmth is still in the walls, and nothing is asking for anything.',
  '',
  'The light will stay a little longer yet.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
