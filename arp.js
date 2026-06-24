

$: n("[0 2 4 7 4 7 6 4]*2")
  .scale("[G:minor G:minor G:minor G:major Eb:lydian Eb:lydian D:phrygian D:phrygian]/8")
  .scramble(4)
  //.rev()
  .gain(0.2)
  .vst("arp")

$: pure(1)
   .fast(30)
   .ccn(102)
   .ccv(sine.range(0.3, 0.5).slow(4))
   .vst("bass")


_$: n("[[0 0] ~ 0]")
   .scale("[G:minor G:minor G:minor G:major Eb:lydian Eb:lydian D:phrygian D:phrygian]/8")
   .vst("bass")

$: n("[[0 7] [0 7] [2 7] [4 7]]")
   .scale("[G:minor G:minor G:minor G:major Eb:lydian Eb:lydian D:phrygian D:phrygian]/8")
   .vst("bass")


$: pure(1)
   .fast(30)
   .ccn(103)
   .ccv(sine.range(0.0, 1.0).slow(4))
   .vst("bass")

$: n("[0 0]")
   .scale("[G:minor G:minor G:minor G:major Eb:lydian Eb:lydian D:phrygian D:phrygian]/8")
   .gain(0.7)
   .pan(sine.slow(4))
   .vst("drone")

_$: pure(1)
   .fast(30)
   .ccn(102)
   .ccv(sine.range(0.47, 0.53).slow(8))
   .vst("drone")

$: s("bd [bd bd] bd [bd bd]")
   .bank('tr909')
   .room(1.2)
   .gain(0.5)

$: s("bd ~ ~ ~")
   .bank('tr909')
   .room(1.2)
   .gain(0.5)

$: s("[oh hh] [~ hh] ~ hh")
   .bank('tr909')
   .room(1.2)
   .gain(0.1)

$: s("~ ~ [cp cp] ~".delay(.3))
   .bank('tr909')
   .room(1.2)
   .gain(0.4)
