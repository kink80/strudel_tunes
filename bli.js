setCpm(110/4)

$: sound("[rim ~] [~ rim] [cp cp] ~")
  .bank("sr16")
  .lpf(1200)
  .gain(0.4)


$: sound("[cp]*2")
  .bank("sr16")
  .gain(0.5)
  .lpf(800)


$: sound("[~ [hh hh]]*4")
  .bank("sr16")
  .gain(0.2)


$: note("<g4>*4")
  .vst("d1")
  .gain(1.2)

// d1 - Surge XT, dreamy flute, volume to 80%

$: note("<[g5 g5 g5 g5] [g#5 g#5 g#5 g#5] [d5 d5 d5 d5] g5>*2")
  .vst("d1")
  .gain(0.7)

// d2 - Surge XT, Bass 5, volume to 80%

$: note("<g3 ~ g4 ~>*4")
   .vst("d2")
