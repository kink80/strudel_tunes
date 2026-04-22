// --- 1. DRONES & PSYCHEDELIC ATMOSPHERE ---
const drone = note("[c3,eb3,g3,bb3]").s("sawtooth") 
  .attack(4).release(4)
  .lpf(sine.range(200, 1500).slow(16))
  .room(1).size(0.9)
  .gain(0.01);

const alienTexture = note("c6(5,8)").s("square")
  .decay(0.05).sustain(0) 
  .fast(2)
  .room(0.8).delay(0.6).delaytime(0.25)
  .pan(saw.range(0.1, 0.9).slow(4))
  .lpf(2000) 
  .gain(0.15); 

// --- 2. THE DANCE FOUNDATION (UPGRADED FOR A SLOW BUILD) ---
const kickBuild = s("bd(5,8)")
  .lpf(saw.range(100, 2000).slow(8)) 
  .gain(0.7);

const kickDrop = s("bd:4*4").distort(0.4).gain(0.8); 

const hats = s("[~ hh]*2").gain(0.5);
const hatsFast = s("hh*16").gain(sine.range(0.0, 0.5).slow(4)).pan(rand); 

const shakerBuild = s("hh*8")
  .gain(saw.range(0, 0.4).slow(8)) 
  .pan(sine.range(0.2, 0.8).slow(2)); 

const clap = s("~ cp").room(0.6).delay(0.2).gain(0.3);

const woodPerc = note("c4(3,8) ~ c5(2,8)").s("triangle")
  .decay(0.05).sustain(0) 
  .room(0.4)
  .gain(0.5);

const tomGroove = note("c2(3,8) ~ g1(2,8)").s("sine")
  .decay(0.15).sustain(0)
  .pan(sine.range(0.3, 0.7).fast(2)) 
  .room(0.2)
  .gain(0.6);

// --- 3. BASSLINES ---
// NEW: A concrete, 2-bar plucked contrabass pattern with warm tube-style distortion
const bassRolling = note("<[c2 ~ ~ c2 ~ c2 eb2 ~] [c2 ~ ~ c2 ~ bb1 g1 ~]>").s("gm_acoustic_bass")
  .attack(0.2).decay(0.7).sustain(0.3) // Plucked string envelope
  .lpf(500) // Darker, woody acoustic tone
  .distort(0.6) // Gentle overdrive/saturation
  .gain(0.65);

const bassAcid = note("<[c2 c3]*4 [eb2 eb3]*4>").s("sawtooth")
  .lpf(saw.range(200, 4000).fast(4)) 
  .lpq(4).decay(0.15).sustain(0)
  .distort(0.6) 
  .gain(0.4); 

// --- 4. THE DROP IMPACTS ---
const crashImpact = note("c5 ~ ~ ~").s("square")
  .crush(4) 
  .decay(2).sustain(0)
  .lpf(saw.range(6000, 100).fast(1)) 
  .room(0.8)
  .gain(0.25);

const dropStab = note("[c2,c3,g3,eb4] ~ ~ ~").s("sawtooth")
  .decay(1.5).sustain(0).lpf(3000)
  .room(1).size(0.9)
  .gain(0.5);

// --- 5. MELODIES ---
const arp = note("<[c4 eb4 g4 c5] [eb4 g4 bb4 eb5]>").slow(2)
  .s("triangle")
  .room(0.8).delay(0.5).delaytime(0.375)
  .gain(0.3);

const psychLead = note("c5(3,8) ~ eb5(5,8) g5").s("square")
  .lpf(sine.range(500, 3000).slow(8))
  .room(0.7).pan(sine.range(0, 1).slow(3))
  .gain(0.25);


// --- THE MASTER MIXER ---
stack(
  // [SCENE 1] INTRO 
  drone,
  // alienTexture,

  // [SCENE 2] THE PROGRESSIVE TRIBAL BUILD 
  //kickBuild,      
  //woodPerc,       
  //tomGroove,      
  //shakerBuild,    
  //bassRolling,    // <--- The new distorted contrabass line
  //arp,
  //alienTexture,

  // [SCENE 3] THE MASSIVE DROP 
  // kickDrop,
  // hats,
  // hatsFast,
  // clap,
  // bassAcid, 
  // psychLead,
  // crashImpact, 
  // dropStab,    

  // [SCENE 4] BREAKDOWN / OUTRO 
  drone,
  //arp,
  clap,
  //bassRolling.slow(2) 

)
