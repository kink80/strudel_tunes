$: n("[0 2 3 4 5 4 3 2]*2")
    .scale("<D4:minor!8 A4:minor G4:minor D4:minor!2>")
    .vst("pad")

$: pure(1)
   .fast(30)
   .ccn(103)
   .ccv(sine.range(0.3, 0.5).slow(4))
   .vst("pad")

$: n("0*16")
    .scale("<D2:minor!4 G2:minor!2 D2:minor!2 A2:minor G2:minor D2:minor!2>")
    .vst("bass")

$: pure(1)
   .fast(30)
   .ccn(104)
   .ccv(sine.range(0.48, 0.52).fast(4))
   .vst("bass")

$: s("bd*4").gain(0.65)

$: s("[~ hh]*4").gain(0.35).room(0.2)

$: s("[~ sd ~ [sd sd]]").gain(0.4).delay(0.15)
