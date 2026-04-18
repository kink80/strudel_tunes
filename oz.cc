midiclockin('BOSS_RC-5')

let kick = 
  s("bd*4")
  .gain(0.2)
  .room(0.1)

let hh =
   s("[~ hh]*2")
  .gain(0.2)
  .room(0.2)
  .pan(0.6)


let snare =
  s("~ cp ~ cp")
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
   note("e4 g4 b4 a4 c5 b4 g4 e4")
    .fast(2) // Play it as 16th notes
    .s("sawtooth")
    .lpf(sine.range(400, 2500).slow(8)) // Slow LFO on the filter for movement
    .attack(0.01).decay(0.1).sustain(0) // Pluck envelope
    .room(0.8).size(0.6) // Big reverb for that desert/open-air feel
    .delay(0.5).delaytime(0.25).delayfeedback(0.4) // Ping-pong style delay
    .pan(sine.range(0.2, 0.8).slow(2))
    .gain(0.5)

let drone = 
  note("e3, g3, b3").s("saw")
    .attack(2).release(4) // Slow, sweeping pad
    .lpf(400) // Keep it dark and muted
    .room(0.9)
    .pan(sine.range(0.2, 0.8).fast(2))
    .gain(0.3)

stack(
  // 1. The steady, driving 4/4 Kick Drum
  kick,

  // 2. The off-beat Techno Hi-Hats
  hh,

  // 3. A distant Clap/Snare on the 2 and 4
  snare,

  // 4. The Rolling Dark Bassline 
  // Using a 3-against-8 polyrhythm feel that is common in melodic techno
  base,

  // 5. The Plucky Arpeggio / Melodic synth
  // This simulates the driving, hypnotic synth lines in the track
  arp,

  // 6. Atmospheric Drone / Pads (The "Oz" Atmosphere)
  // Playing an E-minor chord that fades in and out
  drone

)
