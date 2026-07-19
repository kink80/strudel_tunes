setCpm(240/8)

_$: note("e@4 e@2 e@4 e@2")
  //.late(0.15)
  .vst("bass")

_$: note("d4@2 e4@6")
  .vst("pad")


$: note("e4(<7 9 9 8 9 13>, 16, <0 0 2 0>)")
   .vst("drum")


_$: note("e4(<3 5 6 3>, 8, <0 0 2 0>)")
  .vst("hh")

_$: note("<e4 e4 e4 e4>*4")
   .vst("hat")

