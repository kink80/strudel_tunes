// midiclockin('BOSS_RC-5')

setCpm(110/4)


$: n("0 1 [4 2] [3 3]")
  .sound("jazz")
  .room(0.4)
  .gain(0.3)

// surget xt - robotic saw = init saw, scena -2 pitch
// fx1 - flanger
// fx2 - freq shift, building robot monkeys

$: note("<g3 ~ g4 g#4>*8")
   .vst("d2")
   .room(0.8)
   .pan(sine.fast(4))
