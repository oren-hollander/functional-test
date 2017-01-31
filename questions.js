// In this test, an implementation of a linked list data structure is given
// A list is a data structure with 'head', which can be anything, and a 'tail', which is a list
// 'Nil' is an empty lists
// 'cons' is a function that takes a 'head' and a 'tail' and returns a list


// In each question below, you should implement a function that passes all the given tests
// according to the instructions.
// You can't use 'var' or 'let', only 'const'
// You can't use dot notation - i.e., instead of cons(1, Nil)._head do head(cons(1, Nil))
// Your functions should accept only one argument
//
// In each question, implement the required functoin start by uncommenting the expectations.
// Then, proceed and implement the required function and make sure all expectations
// are met by reloading the HTML file in chrome and making sure the console has no errors

// In your answers you may use the following functions:

// 'flip' is a higher order function that given a binary function returns a
// binary function which invokes the given function with the arguments flipped
// const flip = f => a => b => f (b) (a)

// 'compose' - function composition
// const compose = f => g => x => f (g (x))

// 'id' - The identity function
// const id = x => x

// 'constant' - the constant function
// const constant = x => _ => x


////////////////////////////////////////////////////////////////////////////////
// 1.
// Implement the 'nil' function which returns true if the list is Nil and false otherwise
//
// Signature: const nil = list => ...

if(implemented(nil)){
  expect('nil on empty list', nil (Nil), true)
  expect('nil on non-empty list', nil (List(1, 2, 3)), false)
}

////////////////////////////////////////////////////////////////////////////////
// 2.
// Implement the 'init' function which returns all the elements of a
// list except the last one. The list must be non-empty
//
// Signature: const init = list => ...

if(implemented(init)){
  expect('the first element in the init of a list', head (init (List(1, 2, 3))), 1)
  expect('the second element in the init of a list', head (tail (init (List(1, 2, 3)))), 2)
  expect('the init length should be 2', tail (tail (init (List(1, 2, 3)))), Nil)
}

////////////////////////////////////////////////////////////////////////////////
// 3.
// Implement the 'last' function which returns the last element in the list
//
// Signature: const last = list => ...

if(implemented(last)){
  expect('tail of a list', last (List(1, 2, 3)), 3)
  expect('tail of a singleton list', last (List(1)), 1)
}

////////////////////////////////////////////////////////////////////////////////
// 4.
// Implement the 'elem' function which return true if the element occurs in the
// list and false otherwise
//
// Signature: const elem = e => list => ...

if(implemented(elem)){
  expect('Element should not be found in an empty list', elem (1) (Nil), false)
  expect('Existing element is first', elem (1) (List(1, 2, 3)), true)
  expect('Existing element is last', elem (1) (List(3, 2, 1)), true)
  expect('Existing element in a singleton list', elem (1) (List(1)), true)
  expect('Non-existing element', elem (4) (List(1, 2, 3)), false)
}

////////////////////////////////////////////////////////////////////////////////
// 5.
// Implement the 'length' function which returns the number of elements in the list
//
// Signature: const length = list => ...

if(implemented(length)){
  expect('The length of an empty list should be 0', length (Nil), 0)
  expect('The length of a singleton list should be 1', length (List(1)), 1)
  expect('The length of a list with 3 elements should be 3', length (List(1, 2, 3)), 3)
}

////////////////////////////////////////////////////////////////////////////////
// 6.
// Implement the 'take' function which return the prefix of list of length n.
// If n > length(list), return list
//
// Signature: const take = n => list => ...

if(implemented(take)){
  expect('Taking 0 from Nil', take (0) (Nil), Nil)
  expect('Taking 3 from Nil', take (3) (Nil), Nil)
  expect('Taking 0 from a list of 3', take (0) (List(1, 2, 3)), Nil)
  expect('Taking 1 from a list of 3', take (1) (List(1, 2, 3)), List(1))
  expect('Taking 2 from a list of 3', take (2) (List(1, 2, 3)), List(1, 2))
  expect('Taking 3 from a list of 3', take (3) (List(1, 2, 3)), List(1, 2, 3))
  expect('Taking 4 from a list of 3', take (4) (List(1, 2, 3)), List(1, 2, 3))
}

////////////////////////////////////////////////////////////////////////////////
// 7.
// Implement the 'drop' function which return the suffix of list after n elements.
// If n > length(list), return Nil
//
// Signature: const drop = n => list => ...

if(implemented(drop)){
  expect('Dropping 0 from Nil', drop (0) (Nil), Nil)
  expect('Dropping 3 from Nil', drop (3) (Nil), Nil)
  expect('Dropping 0 from a list of 3', drop (0) (List(1, 2, 3)), List(1, 2, 3))
  expect('Dropping 1 from a list of 3', drop (1) (List(1, 2, 3)), List(2, 3))
  expect('Dropping 2 from a list of 3', drop (2) (List(1, 2, 3)), List(3))
  expect('Dropping 3 from a list of 3', drop (3) (List(1, 2, 3)), Nil)
  expect('Dropping 4 from a list of 3', drop (4) (List(1, 2, 3)), Nil)
}

////////////////////////////////////////////////////////////////////////////////
// 8.
// Implement the 'eq' function which returns 'true' if the lists are equal
// and 'false' otherwise
//
// Signature: const eq = as => bs => ...

if(implemented(eq)){
  expect('Empty list equality', eq (Nil) (Nil), true)
  expect('Non-empty list equality', eq (List(1, 2, 3)) (List(1, 2, 3)), true)
  expect('Long and short lists', eq (List(1, 2, 3)) (List(2, 3)), false)
  expect('Short and long lists', eq (List(1, 2)) (List(1, 2, 3)), false)
  expect('Same length lists with non-equal element', eq (List(1, 2, 3)) (List(1, 2, 4)), false)
  expect('Empty and non-empty lists', eq (Nil) (List(1, 2, 4)), false)
  expect('Non-empty and empty lists', eq (List(1, 2, 3)) (Nil), false)
}

////////////////////////////////////////////////////////////////////////////////
// 9.
// Implement the 'concat' function which concatenates two lists
//
// Signature: const concat = as => bs => ...

if(implemented(concat)){
  expect('Concating two empty lists should be an empty list', concat (Nil) (Nil), Nil)
  expect('Concating an empty list and a non-empty list should be the non-empty list', concat (Nil) (List(1, 2, 3)), List(1, 2, 3))
  expect('Concating a non-empty list and an empty list should be the non-empty list', concat (List(1, 2, 3)) (Nil), List(1, 2, 3))
  expect('Concating two non-empty lists should be the second list appended to the first', concat (List(1, 2)) (List(3, 4)), List(1, 2, 3, 4))
}

////////////////////////////////////////////////////////////////////////////////
// 10.
// Implement the 'reverse' function which reverses the list
//
// Signature: const reverse = list => ...

if(implemented(reverse)){
  expect('Reversing an empty list is the empty list', reverse (Nil), Nil)
  expect('Reversing a singleton list is the same list', reverse (List(1)), List(1))
  expect('Reversing a list', reverse (List(1, 2, 3)), List(3, 2, 1))
}

////////////////////////////////////////////////////////////////////////////////
// 11.
// Implement the 'filter' function which takes a predicate
// (a unary function returning a boolean) and a list and returns the list of
// those elements that satisfy the predicate
//
// Signature: const filter = p => list => ...

if(implemented(filter)) {
  expect('Filtering an empty list ', filter (constant (true)) (Nil), Nil)
  expect('Filtering an empty list', filter (constant (false)) (Nil), Nil)
  const odd = x => x % 2 !== 0
  expect('Filtering odd numbers', filter (odd) (List(1, 2, 3, 4)), List(1, 3))
}

////////////////////////////////////////////////////////////////////////////////
// 12.
// Implement the 'map' function which returns a list obtained by applying the
// unary function f to each element in the list
//
// 'f's signature: const f = e => ... where e is an element in the list
// Signature: const map = f => list => ...

if(implemented(map)){
  const square = x => x ** 2
  expect('Mapping over an empty list', map (square) (Nil), Nil)
  expect('Mapping with identity', map (id) (List(1, 2, 3)), List(1, 2, 3))
  expect('Mapping over a singleton list', map (square) (List(2)), List(4))
  expect('Mapping over a list', map (square) (List(1, 2, 3)), List(1, 4, 9))
}

////////////////////////////////////////////////////////////////////////////////
// 13.
// Implement the 'foldl' function which takes a binary function f,
// a starting value z and a list.
// 'foldl' reduces the list using the binary function from left to right.
//
// 'f's signature: const f = z => e => ...
// where z is the reduced value and e is the list element
//
// Signature: const foldl = f => z => list => ...

if(implemented(foldl)){
  const plus = a => b => a + b
  const minus = a => b => a - b
  expect('Left folding an empty list to be the staring value', foldl(plus)(0)(Nil), 0)
  expect('Left folding a list with plus', foldl(plus)(0)(List(1, 2, 3)), 6)
  expect('Left folding a list with minus', foldl(minus)(0)(List(1, 2, 3)), -6)
}

////////////////////////////////////////////////////////////////////////////////
// 14.
// Implement the 'foldr' function which takes a binary function f,
// a starting value z and a list.
// 'foldr' reduces the list using the binary function from right to left.
//
// 'f's signature: const f = e => z => ...
// where e is the list element and z is the reduced value
//
// Signature: const foldr = f => z => list => ...

if(implemented(foldr)){
  const plus = a => b => a + b
  const minus = a => b => a - b
  expect('Right folding an empty list to be the staring value', foldr(plus)(0)(Nil), 0)
  expect('Right folding a list with plus', foldr(plus)(0)(List(1, 2, 3)), 6)
  expect('Right folding a list with minus', foldr(minus)(0)(List(1, 2, 3)), 2)
}

////////////////////////////////////////////////////////////////////////////////
// 15.
// Implement the 'copy' function which duplicates the list.
// Use the 'foldl' function
//
// Signature: const copy = list => ...

if(implemented(copy)){
  expect('Copy an empty list', copy (Nil), Nil)
  expect('Copy a singleton list', copy (List(1)), List(1))
  expect('Copy a list', copy (List(1, 2, 3)), List(1, 2, 3))
}

////////////////////////////////////////////////////////////////////////////////
// 16.
// Implement the 'copy2' function which duplicates the list.
// Use the 'foldr' function
//
// Signature: const copy2 = list => ...

if(implemented(copy2)){
  expect('Copy an empty list', copy2 (Nil), Nil, eq)
  expect('Copy a singleton list', copy2 (List(1)), List(1))
  expect('Copy a list', copy2 (List(1, 2, 3)), List(1, 2, 3))
}

////////////////////////////////////////////////////////////////////////////////
// 17.
// Implement the 'map2' function. It should be similar to 'map'.
// Use the 'foldr' function
//
// Signature: const map2 = f => list => ...

if(implemented(map2)){
  const square = x => x ** 2
  expect('Mapping over an empty list', map2 (square) (Nil), Nil)
  expect('Mapping over a singleton list', map2 (square) (List(2)), List(4))
  expect('Mapping over a list', map2 (square) (List(1, 2, 3)), List(1, 4, 9))
}

////////////////////////////////////////////////////////////////////////////////
// 18.
// Implelemt the 'reverse2' function. It should be similar to 'reverse'.
// Use the 'foldl' function
//
// Signature: const reverse2 = list => ...

if(implemented(reverse2)){
  expect('Reversing an empty list is the empty list', reverse2 (Nil), Nil)
  expect('Reversing a singleton list is the same list', reverse2 (List(1)), List(1))
  expect('Reversing a list', reverse2 (List(1, 2, 3)), List(3, 2, 1))
}

////////////////////////////////////////////////////////////////////////////////
// 19.
// Implement the 'zip' function which takes two lists and returns a list of
// corresponding pairs. If one input list is short,
// excess elements of the longer list are discarded.
//
// Signature: zip => as => bs => ...

if(implemented(zip)){
  expect('Zipping empty lists', zip (Nil) (Nil), Nil)
  expect('Zipping an empty list and a list', zip (Nil) (List(1, 2, 3)), Nil)
  expect('Zipping a list and an empty list', zip (List(1, 2, 3)) (Nil), Nil)
  expect('Zipping two same-length lists', zip (List(1, 2, 3)) (List(10, 20, 30)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
  expect('Zipping two lists, the first is shorter', zip (List(1, 2, 3)) (List(10, 20, 30, 40)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
  expect('Zipping two lists, the second is shorter', zip (List(1, 2, 3, 4)) (List(10, 20, 30)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
}

////////////////////////////////////////////////////////////////////////////////
// 20.
// Implement the 'unzip' function which transforms a list of pairs into a
// list of first components and a list of second components.
//
// Signature: unzip => pairs => ...

if(implemented(unzip)){
  expect('unzipping empty lists', unzip (Nil), pair (Nil) (Nil))
  expect('unzippint a list', unzip (List(pair (1) (10), pair (2) (20), pair (3) (30))), pair (List(1, 2, 3)) (List(10, 20, 30)))
}
