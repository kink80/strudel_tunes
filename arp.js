

$: n("[0 2 4 7]*4")
  .scale("[G:minor G:minor G:minor G:major]/4")
  .gain(0.2)
  .vst("arp")


bend = slider(0.5, 0, 1)


$: n("[0 0]")
   .scale("[G:minor G:minor G:minor G:major]/4")
   .midibend(bend.mul(2).sub(1))
   .gain(0.2)
   .vst("drone")


$: pure(1)
   .fast(30)
   .ccn(102)
   .ccv(cosine.range(0.3, 0.5).slow(4))
   .vst("drone")

$: s(seq("bd", "hh", "bd", "cp cp".delay(.3)))
   .bank('tr909')
   .room(1.2)
   .gain(0.4)
