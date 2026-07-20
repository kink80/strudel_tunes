setCpm(280/8)

$: n("0@4 0@2 0@4 0@2")
  .scale("[E:lydian C:major G:major D:major]/4")
  .late(0.15)
  .vst("bass")

_$: note("e4(<2 5 3 2>, 8, <0 0 2 0>)")
   .vst("stab")

$: n("-1@2 0@3 1@3")
   .scale("[E:lydian C:major G:major D:major]/4")
   .vst("pad")


$: n("[0 2 4 7 4 7 6 4]*2")
  .scale("[E:lydian C:minor G:minor D:major]/4")
  //.rev()
  .gain(0.2)
  .vst("pad2")


$: note("e4(<7 9 9 8 9 13>, 16, <0 0 2 0>)")
   .vst("drum")


$: note("e4(<3 5 6 3>, 8, <0 0 2 0>)")
  .vst("hh")

$: note("<e4 e4 e4 e4>*4")
   .vst("hat")

