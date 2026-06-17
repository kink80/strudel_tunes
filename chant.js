// midiclockin('BOSS_RC-5')
// midiclockin('BOSS_RC-5')

setCpm(110/4)

samples({
'arab': '/arab.wav',
}, 'http://localhost:5432')

$: s("arab")
  .scrub("{.26@32}%8")
  .gain(.1)

$: n("0 1 [~ 5] [~ [3 3]]")
  .sound("jazz")
  .room(0.4)
  .gain(0.3)

$: note("<e2 ~ e3 ~>*4")
   .vst("d1")
   .gain(0.8)

$: note("e3*4")
   .vst("d2")
   .gain(0.3)
   .pan(sine.slow(2))

$: note("[e2 e3 e3 e3] ~ [e2 e2] ~")
   .vst("d3")
   .gain(0.3)

// d1 = SurgeXT, pads pad7
// d2 = SurgeXT, maj min saw
// d3 = SurgeXT, bass FM combo
