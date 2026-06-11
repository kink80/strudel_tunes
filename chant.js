// midiclockin('BOSS_RC-5')

setCpm(110/4)

samples({
'arab': '/arab.wav',
}, 'http://localhost:5432')

_$: s("arab")
  .scrub("{.26@32}%8")
  .gain(.1)

$: n("0 1 [~ 5] [~ 5]")
  .sound("jazz")
  .room(0.4)
  .gain(0.3)

$: note("<g3 ~ g4 g#4>*8")
   .vst("d2")

_$: note("<g2 ~ g2 ~>*4")
   .vst("d1")
   .gain(1.2)
