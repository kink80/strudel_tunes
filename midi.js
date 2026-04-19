setCpm(140 / 4)

var BASS_PART = 0
var LEAD_PART = 1

const hpf_i = note(`~`).midichan(16).control([10, hpf]).midi()

function track({ exp, chan, cc }) {
  let chain = exp.midichan(chan)

  if (Array.isArray(cc?.[0])) {
    for (const [num, val] of cc) {
      chain = chain.control([num, val])
    }
  } else if (cc) {
    chain = chain.control(cc)
  }

  return chain.midi()
}

function p(i, arr) {
  return arr[i]
}

const energyCC = 74

const kick = track({ 
  exp: note(
  p(1, [
  `[c2!4] [c2 c2 [c2 ~] [c2 ~]]`,
  `[c2!8]`,
  `[c2!8]`,
  `[c2!4]`
  ])
  .slow(2)),
  chan: 1 // Configure your kick track inside ableton to listen events at MIDI channel 1
})
const bass = track({
  exp: note(
  p(1, [
  `{c2 c2 c2 [c3 c2]/2 ~ c2 c3 c2}%16`,
  `{c2 c2 c2 c2 c2 c2 c2}%16`,
  `{c2 c2 c2 [c3 c2]/2 c2 [[c3]/2]*2 c2 c2}%16`,
  // trans
  `{c2 c2 d2 c3 c2 d3 c2 c2}%16`,
  `{c2 c2 d2 c3 d3 d3 d2 c2}%16`,
  `{d2 c2 c2 c3 d3 g3 c2 c2}%16`,
  `{d2 c2 c2 c3 d3 f3 c2 c2}%16`,
  `{d2 c2 c2 c3 d3 43 c2 c2}%16`,
    // trans
   `{d2 c2 c2 c2}%16`,
  ])
  .slow(1)),
  chan: 2,
  cc: [80, "100".fast(1)]
})
const groove = track({
  exp: note(`
  [c2 c#2 d2 d#2(1,5)]!4
  [c2 c#2 d2 d2]
  [c2 c#2(2,4) d2 d#2(1,5)]!2
  [c2 c#2 d2 c#2(1,4)]
  `.slow(4)),
  chan: 4
})
const groove2 = track({
  exp: note(`
  [c2 c#2(1,4) d2 c#2]
  [c2 c#2(1,4) e2 c#2]
  [c2 c#2(1,4) e2 c#2]
  [c2 c c2 c#2]
  `.slow(2)),
  chan: 6
})

const groove3 = track({
  exp: note(`
  [c2 c#2(1,4) c2 c3(1,5)]
  [c2 e#2(1,4) c2 e3]
  `.fast(1)),
  chan: 9
})

const hatso = track({
  exp: note(`~ ~ a#2 ~`.fast(4)),
  chan: 3,
  cc: [[77, "0 0.2 2 1"]]
})

const hatsc = track({
  exp: note(`~ ~ f#2 ~`.fast(4)),
  chan: 3,
  cc: [[77, "0.4 .2 .5"]]
})
const clap = track({
  exp: note(`~ ~ d#2 ~`.fast(2)),
  chan: 3
})
const perc = track({
  exp: note(`~ ~ e#2 ~`.fast(4)),
  chan: 3
})
const hh16 = track({ 
  exp: note(`f#2!4`.fast(2)),
  chan: 3
})
const pad = track({
  exp: note(`[c2]`),
  chan: 7,
  cc: [
    // [74, sine.slow(4)],
    [71, "0.1 0.2 0.3 0.4".slow(4)]
  ]
})
const lead = track({
  exp: p(1,
    [
      note(`
      [c3 d#3 g c3]
      [c3 d#3 g*2 c3]
      [c3 d#3 g c3]
      [c3 d#3 g c3]
      [d3 d#3 g c3]!4
      [c3 d#3 g c3]!4
      [c3 d#3 g3 c3]!4

      [c3 d#3 g c3]
      [c3 d#3 g*2 c3]
      [c3 d#4 g4 c3]
      [c3 d#3 g c3]
      [d3 d#3 g4 c3]!2
      [d3 d#3 a4 c3]!2
      [c3 d#3 g c3]!4
      [c3 d#3 g4 c3]!4
      `.slow(8)),
      note(`
      [d3 d#3 g c3]
      [d3 d#3 g*2 c3]
      [d3 d#3 g c3]
      [d3 d#3 g c3]
      [d3 d#3 g d3]!4
      [d3 d#3 g c3]!4
      [d3 d#3 g3 c3]!4

      [d3 d#3 g c3]
      [d3 d#3 g*2 c3]
      [d3 d#4 g4 c3]
      [d3 d#3 g c3]
      [d3 d#3 g4 c3]!2
      [d3 d#3 a4 c3]!2
      [d3 d#3 g d3]!4
      [d3 d#3 g4 c3]!4
      `.slow(8)),
      note(`
      [c3 c3 c3 c3]
      [c3,c4 c3 c3 c3]
      [c3,c4 c3 c3 c3]
      [c3,c1 d4*2 c3(2,2)]
      `.slow(1))
    ]),
  chan: 8
})
const fills = track({
  exp: note(`
  c3!2 ~!2 a2!2*2 b2!2/2
  `.slow(2)),
  chan: 10
})

function v(c, color) {
  return  c.color(color).punchcard()
}



$:stack(
  midicmd("clock").midi(),
  v(kick, "#1F271B"),
  v(bass, "#19647E"),
  // v(hatso, "#28AFB0"),
  v(hatsc, "#F4D35E"),
  clap,
  // v(hh16, "#896978"),
  // perc,
  v(groove, "cyan"),
  
  // v(groove2, "orange"),
  // v(groove3, "yellow"),
  // pad,
  v(lead, "#EE964B"),
  // fills,
)

