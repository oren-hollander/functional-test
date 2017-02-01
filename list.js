'use strict'

const Nil = 'NIL'

const cons = head => tail => ({_head: head, _tail: tail})

const head = list => {
  if(list === Nil){
    throw new Error('Nil')
  }
  else {
    return list._head
  }
}

const tail = list => {
  if(list === Nil){
    throw new Error('Nil')
  }
  else {
    return list._tail
  }
}

const List = (...elements) => elements.reverse().reduce((a, b) => cons (b) (a), Nil)
