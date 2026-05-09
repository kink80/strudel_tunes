$: note("[a1 b1 c2 e2]*2  [a1 b1 c2 f2]*2")
  .pan(sine.slow(2))
  .gain(0.5)
  .vst("bass")

// hass - odin2, preset mine

_$: n("0 2 4 6 4 2").scale("A:minor").vst("bass")

$: note("[a1 a1]")
  .gain(1.9)
  .pan(sine.slow(2))
  .vst("d1")

// d1 - dexed, preset 26.

$: s("bd").struct("<[x*<1 2> [~@3 x]] x>")
$: s("~ [rim, sd:<2 3>]").room("<0 .2>")
$: n("[0 <1 3>]*<2!3 4>").s("hh")
