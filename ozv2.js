setcpm(130/4)

let hh =
   s("[~ hh]*2")
  .bank('tr909')
  .gain(0.2)
  .room(0.2)
  .pan(0.6)


let snare =
  s("~ cp ~ cp")
  .bank('tr909')
  .gain(0.2)
  .room(0.8)
  .delay(0.2)


let base = 
  note("e2(3,8) d2(3,8) c2(3,8) b1(3,8)")
    .s("gm_synth_bass_1")
    .lpf(saw.range(200, 1000).slow(8)) // Filter opens and closes slowly
    .lpq(2) // Adding some resonance
    .decay(0.3)
    .gain(0.7)

let arp = 
   note("0 2 4 3 5 4 2 0")
    .scale("e:minor") // Maps the numbers to the E minor scale
    .add("<0 0 3 3 5 5 4 4>") // Shifts the pattern to follow your 8-bar chord progression!
    .fast(2) // Play it as 16th notes
    .s("sawtooth")
    .lpf(sine.range(400, 2500).slow(8)) // Slow LFO on the filter for movement
    .attack(0.01).decay(0.1).sustain(0) // Pluck envelope
    .room(0.8).size(0.6) // Big reverb for that desert/open-air feel
    .delay(0.5).delaytime(0.25).delayfeedback(0.4) // Ping-pong style delay
    .pan(sine.range(0.2, 0.8).slow(2))
    .gain(0.5)

let drone = 
  chord("<Em9 [Em9 Em9] Am9 [Am9 Am9] CM7 CM7 Bm7 Bm7>")
  .voicing()
  .swing(4)
  .vst("drone")
  ._pianoroll()

let realbassLine = 
    note("<[e2]*4 [[e2]*2 [~ b2] [e2]] [a2]*4 [[a2]*2 [e3] [a3 a3]] [c3]*4 [[c3]*2 [g3] [c3]] [b2]*4 [[b2]*2 [f#3] [b2]]>")
    .vst("realbass")

let bassLine = 
    note("<[~ e1]*4 [[~ e1]*2 [~ b1] [~ e2 e1]] [~ a1]*4 [[~ a1]*2 [~ e2] [~ a2 a1]] [~ c2]*4 [[~ c2]*2 [~ g2] [~ c3 c2]] [~ b1]*4 [[~ b1]*2 [~ f#2] [~ b2 b1]]>")
    .gain(0.4)
    .vst("bass")

let gentleBeat =
   note("[~ e1] [~ ~ e1 ~] [~ ~ e1 ~] [e1]")
    .gain(0.4)
    .vst("beat")

stack(
  hh,
  snare,
  bassLine,
  drone,
  gentleBeat,
  arp,
  realbassLine
)
