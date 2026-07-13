stack(
  n("[0 2 4 7 6 4 2 0]*2")
    .scale("<G4:minor G4:minor C4:minor D4:phrygian>")
    .vst("pad"),

  n("[0 0 7 0 0 0 7 0]*2")
    .scale("<G2:minor G2:minor C2:minor D2:phrygian>")
    .vst("bass"),


  s("bd*4").gain(0.65),
  s("[~ hh]*4").gain(0.35).room(0.2),
  s("[~ sd ~ sd]").gain(0.4).delay(0.15)
)
