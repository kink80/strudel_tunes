setCpm(240/8)

$: note("e@4 e@2 e@4 e@2")
  //.late(0.15)
  .vst("bass")

_$: note("d4@2 e4@3 f4@3")
  .vst("pad")

$: note("<d4 e4 f4 e4 g4 f4 e4@2>*4")
  .vst("pad2")


$: note("e4(<7 9 9 8 9 13>, 16, <0 0 2 0>)")
   .vst("drum")


$: note("e4(<3 5 6 3>, 8, <0 0 2 0>)")
  .vst("hh")

_$: note("<e4 e4 e4 e4>*4")
   .vst("hat")

