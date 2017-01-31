const output = document.getElementById('output')

const isList = value => value === Nil || typeof value === 'object' && value._head && value._tail

const isPair = value => typeof value === 'object' && value._fst && value._snd

const listsEquals = (as, bs) =>
  as === Nil && bs === Nil ||
  as !== Nil && bs !== Nil && equals(as._head, bs._head) && equals(as._tail, bs._tail)

const pairsEquals = (p1, p2) => equals(p1._fst, p2._fst) && equals(p1._snd, p2._snd)

const showList = list => {
  const showListElements = list => {
    if(list === Nil)
      return ''

    const h = head (list)
    const t = tail (list)
    if(t === Nil)
      return show(h)

    return show(h) + ',' + showListElements(t)
  }

  return `[${showListElements(list)}]`
}

const showPair = pair => `(${show(pair._fst)},${show(pair._snd)})`

function show(value) {
  return isList(value)
    ? showList(value)
    : isPair(value)
      ? showPair(value)
      : value
}

function equals (a, b) {
  return isList(a) && isList(b)
    ? listsEquals(a, b)
    : isPair(a) && isPair(b)
      ? pairsEquals(a, b)
      : a === b
}

const implemented = func => typeof func !== 'undefined'

const log = (message, color) => {
  const line = document.createElement('div');
  line.style.color = 'white'
  line.style.backgroundColor = color
  line.style.margin = '1px'
  line.style.padding = '3px'
  line.style.fontFamily = 'Monospace'
  line.appendChild(document.createTextNode(message))
  output.appendChild(line)
}

const expect = (message, expected, actual) => {
  if(equals (expected, actual))
    log(`OK ...... ${message}: ${show(expected)} is ${show(actual)}`, 'green')
  else
    log(`ERROR ... ${message}: expected ${show(expected)}, but actual is ${show(actual)}`, 'red')
}
