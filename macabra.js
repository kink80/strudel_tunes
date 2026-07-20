setCpm(280/8)

let chords = chord(`<
Em9 D6 CM7 D6
>`)


$: n("0@4 0@2 1@4 1@2")
  .set(chords)
  .mode("root:e4")
  .voicing()
  .vst("bass")


_$: note("e4(<2 5 3 2>, 8, <0 0 2 0>)")
   .vst("stab")

_$: n("-1@2 0@3 1@3")
   .set(chords)
   .mode("root:e4")
   .voicing()
   .vst("pad")


$: n("[0 2 4 7 4 7 6 4]*2")
  .set(chords)
   .mode("root:e3")
   .voicing()
  .rev()
  .gain(0.2)
  .vst("pad2")


$: note("e6(<8>, 16, <0>)")
   .vst("signal")


$: note("e4(<7 9 9 8 9 13>, 16, <0 0 2 0>)")
   .vst("drum")


$: note("e4(<3 5 6 3>, 8, <0 0 2 0>)")
  .vst("hh")

$: note("<e4 e4 e4 e4>*4")
   .vst("hat")

