setcpm(60/4)

const chordsA = chord("<Dm Dm7 Bm7b5 BbM7>*4")
  .voicing() 
  .pan(sine.slow(2))
  .lpf(800)
  .vst("d1")
  .gain(0.9)
  ._pianoroll()
// Dexed - Prez03 - 27 poly syn

const bassA = note("<d2 c3 b2 bb2>*4")
  .arp("[0] [0,2] 1 [0,2]")
  .struct("x ~ x ~ ~ x ~ x ~ ~ x ~ ~ x ~ x")
  .gain(1.5)
  .room(0.8)
  .s("d2")

// Prez 27 - soft organ

const kick = s("bd(5,8)").lpf(800).gain(0.8);
const snare = s("<~ cp>*2").delay(0.3).delaytime(0.25).gain(0.4);

const hats = s("<sd ~ ~ sd>*4").room(0.1).gain(0.4);
const percussion = s("<~ ~ rim ~>*4").room(0.4).gain(0.7);

stack(
  // [SCENE 1: THE EXPOSITION] (Your original vibe, enhanced)
  // chordsA,
  // bassA,

  // [SCENE 2: THE GROOVE] (Drums enter)
  chordsA,
  bassA,
  kick,
  snare,
  hats,
  percussion,
)
