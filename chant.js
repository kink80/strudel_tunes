setCpm(110/4)

samples({
'arab': '/arab.wav',
}, 'http://localhost:5432')

$: s("arab")
  .scrub("{.26@16}%8")
  .gain(.1)

$: n("0 1 [2 2] [3 3]")
  .sound("jazz")
  .room(0.4)
  .gain(0.3)

$: note("<g3 ~ g4 g#4>*8")
   .vst("d2")
