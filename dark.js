$: note("[a1 b1 c2 e2]*2  [a1 b1 c2 f2]*2")
  .pan(sine.fast(2))
  .gain(slider(0.3701, 0.2, 0.5))
  .orbit("2")
  .vst("bass")

// hass - odin2, preset mine

_$: n("0 2 4 6 4 2").scale("A:minor").vst("bass")

$: note("[a1 a1]")
  .gain(3.0)
  .pan(sine.slow(5))
  .vst("d1")

// d1 - dexed, preset 26.

$: note("[a3 a3]")
   .vst("d2")    

// d2 - dexed, preset 10

$: s("bd*8").bank("ddm110").gain(1.2)
$: s("~ [rim, sd:<2 3>]").room("<0 .2>")
$: n("[0 <1 3>]*<2!3 4>").s("hh")
