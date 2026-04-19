// or 120 BPM suits this tune well
midiclockin('BOSS_RC-5')


const kick = 
  s("bd*4")
  .gain(0.3)
  .duckorbit(2)
  .duckattack(0.2)
  .duckdepth(1);

const hats = 
  s("[~ hh]*2")
  .gain(0.3)
  .room(0.1)
  .duckorbit(3)
  .duckattack(0.2)
  .duckdepth(0.8)
  ;

const bass = note("<[c2 c3]*8 [eb2 eb3]*8 [bb1 bb2]*8 [c2 c3]*8>")
  //.jux(rev) // or comment to out 
  .s("sawtooth")
  .bpsync(8)
  .lpf(saw.range(300, 2500).slow(8)) // Slow 8-cycle filter sweep
  .lpq(4) // High resonance
  .decay(0.1)
  .sustain("<.4 .6 .8 1>")
  .pan(sine.range(0.2, 0.8).slow(2))
  .gain(1.2)
  .orbit(2);


const pads = note("<[c4,eb4,g4] [eb4,g4,bb4] [bb3,d4,f4] [c4,eb4,g4]>")
  .s("triangle") 
  .attack(1).release(1) 
  .lpf(slider(1798.4, 400, 2000)) 
  .room(0.9).size(0.8)
  .orbit(3)
  .gain(0.35);


stack(
  kick,
  hats,
  bass,
  pads
)
