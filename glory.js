setcpm(60/4)

$: chord("<Dm Dm Bm7b5 BbM7>*4")
  .voicing() 
  .pan(sine.range(0.2, 0.8).slow(6))
  // --- REVERB & MOOD ---
  // Heavy, atmospheric reverb
  .room(0.8)
  .size(0.7)
  .gain(0.2)
  .vst("d1")

// Dexed - Prez03 - 27 poly syn

$: note("<d2 c2 b1 bb1>*4")     
    .gain(1.5)
    .vst("d2")

// Dexed - Prez02 - dbl orgy
