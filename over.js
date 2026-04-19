// 100 BPM 
//midiclockin('BOSS_RC-5')
setcpm(100/4)

$:
 n("0 1 2 <4!4 5!4 6!4 4!4>")
 .fast(4)
 .scale("<F3:minor>")
 .sound("piano")
 .release(0.3)  
 .phaser("<2 4 8>")
 .chebyshev(0.4, 0.3)
 .gain(0.7)

$:
 "[f2 f3]*4"
   .transpose("<1P -2M 1P -3M>")
   .gain(1.4)
   .note()
   .sound("piano")

$:
 s("hh(9,16)")
 .bank("AkaiMPC60")
 .jux(rev)
 .gain(0.2)


$:
 s("rim(3,8)")
 .bank("AkaiMPC60")
  .gain(0.2)
  .pan(sine.range(0.2, 0.8).slow(7))

$:
 s("<bd*2 bd*2 bd*2 [bd ~ ~ bd]>")
   .bank("AkaiMPC60")
   .gain(0.8)
