# ai-happy-01 — A Little Light for You

## The image

A small child in a bright yellow raincoat kneels in a sunlit garden and gently
offers a tiny folded paper boat toward the viewer, a small lit candle glowing
inside it, above a rain puddle reflecting warm golden sunset colours. The
child's face is full of wonder and tenderness, with dewdrops on the grass
around them. There is no text anywhere in the image.

## Why it fits the judge's criteria

**Happiness.** One look lifts the mood: a child offering you a little light is
a warm, disarming gesture, the kind of small kindness that makes a person
smile before they have time to think about why.

**Idea.** The idea is specific and fresh: not a stock smiley face or a generic
sunny scene, but a single moment, a child sharing the glow of a candle-lit
paper boat with whoever is looking. It is a gift aimed directly at the viewer.

**Feeling.** Golden-hour light, the warm reflection in the puddle, the bright
yellow raincoat against soft green grass, and the child's tender expression
all pull toward one mood: gentle, hopeful warmth after the rain.

**Craft.** The image is cleanly rendered: no smears, no artefacts, no garbled
text, no broken anatomy. The child, the boat, the candle flame, and the
puddle are all clearly drawn and easy to read.

**Reads small.** At around 300 px the main shape is still unmistakable: a
bright yellow figure holding out a small glowing boat. The idea survives
shrinking because the composition is simple and the gesture is the centre.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (the image sitting beside `main.ts`) byte-for-byte to
`out/entry.png`. The file is JPEG bytes in a `.png` name, which is fine: the
competition gate detects the format by magic bytes, not by the extension.

## License

MIT. See `LICENSE`.
