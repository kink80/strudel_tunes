// play this around 110 BPM
midiclockin('BOSS_RC-5')
samples('github:tidalcycles/dirt-samples')

// ─── harmony ──────────────────────────────────────────────
// Dm → Bb → F → A — 2 bars each, 8-bar phrase total.
let chords = "<[d,f,a] [bb,d,f,a] [f,a,c5] [a,c#5,e5]>"

// ─── pad ──────────────────────────────────────────────────
let pad = stack(
  note(chords).s("triangle").detune(7),
  note(chords).s("triangle").detune(-7),
  note(chords).s("triangle"),
).slow(2)
  .attack(2).release(3)
  .lpf(sine.range(600, 2200).slow(24))
  .lpq(3)
  .room(0.85)
  .gain(0.3)

// ─── sub drone ────────────────────────────────────────────
let drone = stack(
  note("d1").s("sine").gain(0.5),
  note("a1").s("sine").gain(0.2),
  note("d2").s("sawtooth").lpf(180).lpq(2).gain(0.3),
)

// ─── lead: 4-bar call-and-answer phrase ───────────────────
// Each bar is its own mini-pattern; the <...> cycles them.
let lead = note("<[d4 ~ f4 ~ a4 ~ c5 d5] [~ c5 ~ a4 f4 ~ ~ ~] [e5 ~ d5 c5 a4 ~ g4 ~] [f4 ~ e4 ~ d4 ~ ~ ~]>")
  .s("sawtooth")
  .attack(0.02).decay(0.3).sustain(0.7).release(0.4)
  .lpf(perlin.range(1400, 3200).slow(8))
  .lpq(8)
  .delay(0.35).delaytime(0.375).delayfb(0.4)
  .room(0.55)
  .gain(0.5)

// ─── counter-melody: answers in bars 2 and 4 ──────────────
let counter = note("<~ [~ e4 ~ c4 a3 ~ ~ ~] ~ [a3 ~ g3 ~ f3 ~ ~ ~]>")
  .s("gm_fx_crystal")
  .distort(2)
  .distortvol(0.3)
  .attack(0.05).decay(0.5).sustain(0.4)
  .room(0.7)
  .gain(0.8)

// ─── pluck arp: follows the current chord ─────────────────
let pluck = note(chords)
  .arpWith(h => h[2])
  .s("triangle")
  .decay(0.15).sustain(0)
  .lpf(2800).room(0.4)
  .gain(0.38)

// ─── bass: root motion ───────────────────────────────────
let bass = note("<d2 bb1 f1 a1>").slow(2)
  .s("gm_synth_bass_1")
  .lpf(500)
  .lpq(10)
  .attack(0.01).decay(0.7).sustain(0.5)
  .gain(1.0)

// ─── drums ────────────────────────────────────────────────
let kick  = s("<bd*2 bd*2 bd*2 [bd ~ ~ bd]>").bank("RolandTR909").gain(0.35)
let snare = s("~ ~ sd ~ ~ sd ~ ~").bank("RolandTR909").gain(0.5).room(0.25)
let chh   = s("hh(7,16)").bank("RolandTR909").gain(0.30)
let perc  = s("rim(5,8)").bank("RolandTR909").gain(0.40).pan(sine.range(0.2, 0.8).slow(7))
let ohh   = s("~ oh ~ oh").bank("RolandTR909").gain(0.30)

// ─── MIX ──────────────────────────────────────────────────
stack(
  drone,
  pad,
  bass,
  kick,
  snare,
  chh,
  perc,
  pluck,
  ohh,
  lead,
  counter,
)
