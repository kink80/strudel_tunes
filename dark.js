_$: note("[a1 b1 c2 e2]*2  [a1 b1 c2 f2]*2")
  .pan(sine.slow(2))
  .room(0.3)
  .gain(slider(0.27, 0.1, 0.5))
  .orbit("2")
  .vst("bass")

// odin preset

$: note("[a2 a2 a2 a2 b2 b2 b2 b2 c2 c2 c2 c2 b2 b2 b2 b2]/2")
  .gain(2.4)
  .pan(sine.slow(5))
  .vst("d1")

// d1 - dexed, preset 26.

_$: note("[a1 a1 a1 a1 a1]")
   .gain(1.2)
   .phaser(2)
   .vst("d2")     

// d2 - dexed, preset 10

_$: note("[a3 g#3 g3 f#3]/4")
  .delay(0.8)
  .delaytime(2/3)
  .delayfb(0.7) 
  .room(0.8)
  .vst("d3")

// d3 - dexed, preset 16/17?

$: s("bd*8").bank("ddm110").gain(0.2)
$: s("~ [rim, sd:<2 3>]").room("<0 .2>").gain(0.2)
$: n("[0 <1 3>]*<2!3 4>").s("hh").gain(0.2)
