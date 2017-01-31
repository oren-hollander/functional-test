const pair = fst => snd => ({_fst: fst, _snd: snd})
const fst = pair => pair._fst
const snd = pair => pair._snd
