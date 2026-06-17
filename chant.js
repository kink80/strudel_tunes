// midiclockin('BOSS_RC-5')

setCpm(110/4)

samples({
'arab': '/arab.wav',
}, 'http://localhost:5432')

$: s("arab")
  .scrub("{.26@32}%8")
  .gain(.1)

$: n("0 1 [~ 5] [~ 5]")
  .sound("jazz")
  .room(0.4)
  .gain(0.3)

$: note("<e2 ~ e3 ~>*4")
   .vst("d1")
   .gain(0.8)

// d1 = SurgeXT, pads pad7
