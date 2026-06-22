

$: n("[0 2 4 7 4 7 6 4]*2")
  .scale("[G:minor G:minor G:minor G:major]/4")
  .swingBy(1/3, 4)
  .gain(0.2)
  .vst("arp")

$: n("[0 0]")
   .scale("[G:minor G:minor G:minor G:major]/4")
   .gain(0.7)
   .pan(sine.slow(4))
   .vst("drone")

$: pure(1)
   .fast(30)
   .ccn(102)
   .ccv(sine.range(0.3, 0.5).slow(4))
   .vst("drone")

$: s("bd [bd bd] bd [bd bd]")
   .bank('tr909')
   .room(1.2)
   .gain(0.2)

$: s("[oh hh] [~ hh] ~ hh")
   .bank('tr909')
   .room(1.2)
   .gain(0.2)

$: s("~ ~ [cp cp] ~".delay(.3))
   .bank('tr909')
   .room(1.2)
   .gain(0.4)
