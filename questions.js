'use strict'

/*

In this test, a basic implementation of a linked list data structure is given.

In each question below, you should implement a function that passes all the
given tests according to the instructions.

When implementing a function, follow these rules:

- Don't use 'var' or 'let', only 'const'
- Your functions should accept only one argument

The last rule means that you should do this:

const add = a => b => a + b
const result = add (1) (2)

instead of this:

const add = (a, b) => a + b
const result = add(1, 2)

The implementation of list in this test has the following building blocks:

- Nil -
'Nil' is the empty list. This is how you use 'Nil':

const myEmptyList = Nil

- cons -
Type: cons :: a -> [a] -> [a]

'cons' is the list constructor. It is a function that takes a 'head' and 'tail'
and returns a new list. The 'head' is any JavaScript value and the 'tail' is
a list. This is how you use 'cons':

const mySingletonList = cons (2) (Nil) // This will return the list: [2]
const myTwoElementList = cons (1) (mySingletonList) // This will return the list: [1, 2]
const myThreeElementList = cons (1) (cons (2) (cons (3) (Nil))) // This will return the list: [1, 2, 3]

- head -
Type: head :: [a] -> a

'head' is a function that takes a non-empty list and returns its head. The head
is the first element in the list. This is how you use 'head':

const myHead = head (myThreeElementList) // This will return 1
const noHead = head (Nil) // This will throw an error since the list is empty

- tail -
Type: tail :: [a] -> [a]

'tail' is a function that takes a non-empty list and returns its tail. The tail
is a list with all elements except for the first one. This is how you use 'tail':

const myTail = tail (myThreeElementList) // This will return the list: [2, 3]
const noTail = tail (Nil) // This will throw an error since the list is empty

As you can see, the following will hold for any non-empty list l:

cons (head (l)) (tail (l)) === l

--------------------------------------------------------------------------------

Each question has a short description followed by some tests.
To start implementing the question functions, open the list.html file in chrome.
Go over the questions one by one and implement the required function.
When you are done with a question, refresh chrome and make sure the tests pass.
The html page will present the test results in green for success and red for
failure.

In your answers you may use the following functions:

- flip -
Type: flip :: (a -> b -> c) -> (b -> a -> c)

'flip' is a higher order function that given a binary function returns a
binary function which invokes the given function with the arguments flipped

const flip = f => a => b => f (b) (a)

For example:

const div = a => b => a / b
div (2) (5) // This will result in 0.4
flip (div) (2) (5) // This will result in 2.5

- compose -
Type: compose :: (b -> c) -> (a -> b) -> (a -> c)
'compose' does function composition

const compose = f => g => x => f (g (x))

For example:

const square = x => x ** 2
square (3) // This will result in 9
compose (square) (square) (3) // This will result in 81

- id -
Type: id :: a -> a

'id' is identity function

const id = x => x

For example:

id (42) // This will result in 42

- constant =
Type: constant :: a -> b -> a

'constant' is the constant function

const constant = x => _ => x

For examples:

constant (1) (1) // This will result in 1
constant (1) (2) // This will result in 1
constant (1) ('hello') // This will result in 1
constant (1) () // This will result in 1


Good luck!

*/

////////////////////////////////////////////////////////////////////////////////
// 1.
// Implement the 'nil' function which returns true if the list is Nil and false otherwise
//
// Type: nil :: [a] -> boolean
// Signature: const nil = list => ...

test(typeof nil, _ => {
  expect(' 1. nil on empty list', nil (Nil), true)
  expect(' 1. nil on non-empty list', nil (List(1, 2, 3)), false)
})

////////////////////////////////////////////////////////////////////////////////
// 2.
// Implement the 'init' function which returns all the elements of a
// list except the last one. The list must be non-empty
//
// Type: init :: [a] -> [a]
// Signature: const init = list => ...

test(typeof init, _ => {
  expect(' 2. the first element in the init of a list', head (init (List(1, 2, 3))), 1)
  expect(' 2. the second element in the init of a list', head (tail (init (List(1, 2, 3)))), 2)
  expect(' 2. the init length should be 2', tail (tail (init (List(1, 2, 3)))), Nil)
})

////////////////////////////////////////////////////////////////////////////////
// 3.
// Implement the 'last' function which returns the last element in the list
//
// Type: last :: [a] -> a
// Signature: const last = list => ...

test(typeof last, _ => {
  expect(' 3. tail of a list', last (List(1, 2, 3)), 3)
  expect(' 3. tail of a singleton list', last (List(1)), 1)
})

////////////////////////////////////////////////////////////////////////////////
// 4.
// Implement the 'elem' function which return true if the element occurs in the
// list and false otherwise
//
// Type: elem :: a -> [a] -> boolean
// Signature: const elem = e => list => ...

test(typeof elem, _ => {
  expect(' 4. Element should not be found in an empty list', elem (1) (Nil), false)
  expect(' 4. Existing element is first', elem (1) (List(1, 2, 3)), true)
  expect(' 4. Existing element is last', elem (1) (List(3, 2, 1)), true)
  expect(' 4. Existing element in a singleton list', elem (1) (List(1)), true)
  expect(' 4. Non-existing element', elem (4) (List(1, 2, 3)), false)
})

////////////////////////////////////////////////////////////////////////////////
// 5.
// Implement the 'length' function which returns the number of elements in the list
//
// Type: length :: [a] -> number
// Signature: const length = list => ...

test(typeof length, _ => {
  expect(' 5. The length of an empty list should be 0', length (Nil), 0)
  expect(' 5. The length of a singleton list should be 1', length (List(1)), 1)
  expect(' 5. The length of a list with 3 elements should be 3', length (List(1, 2, 3)), 3)
})

////////////////////////////////////////////////////////////////////////////////
// 6.
// Implement the 'take' function which return the prefix of list of length n.
// If n > length(list), return list
//
// Type: take :: number -> [a] -> [a]
// Signature: const take = n => list => ...

test(typeof take, _ => {
  expect(' 6. Taking 0 from Nil', take (0) (Nil), Nil)
  expect(' 6. Taking 3 from Nil', take (3) (Nil), Nil)
  expect(' 6. Taking 0 from a list of 3', take (0) (List(1, 2, 3)), Nil)
  expect(' 6. Taking 1 from a list of 3', take (1) (List(1, 2, 3)), List(1))
  expect(' 6. Taking 2 from a list of 3', take (2) (List(1, 2, 3)), List(1, 2))
  expect(' 6. Taking 3 from a list of 3', take (3) (List(1, 2, 3)), List(1, 2, 3))
  expect(' 6. Taking 4 from a list of 3', take (4) (List(1, 2, 3)), List(1, 2, 3))
})

////////////////////////////////////////////////////////////////////////////////
// 7.
// Implement the 'drop' function which returns the suffix of list after the first n elements.
// If n > length(list), return Nil
//
// Type: drop :: number -> [a] -> [a]
// Signature: const drop = n => list => ...

test(typeof drop, _ => {
  expect(' 7. Dropping 0 from Nil', drop (0) (Nil), Nil)
  expect(' 7. Dropping 3 from Nil', drop (3) (Nil), Nil)
  expect(' 7. Dropping 0 from a list of 3', drop (0) (List(1, 2, 3)), List(1, 2, 3))
  expect(' 7. Dropping 1 from a list of 3', drop (1) (List(1, 2, 3)), List(2, 3))
  expect(' 7. Dropping 2 from a list of 3', drop (2) (List(1, 2, 3)), List(3))
  expect(' 7. Dropping 3 from a list of 3', drop (3) (List(1, 2, 3)), Nil)
  expect(' 7. Dropping 4 from a list of 3', drop (4) (List(1, 2, 3)), Nil)
})

////////////////////////////////////////////////////////////////////////////////
// 8.
// Implement the 'eq' function which returns 'true' if the lists are equal
// and 'false' otherwise
//
// Type: eq :: [a] -> [a] -> boolean
// Signature: const eq = as => bs => ...

test(typeof eq, _ => {
  expect(' 8. Empty list equality', eq (Nil) (Nil), true)
  expect(' 8. Non-empty list equality', eq (List(1, 2, 3)) (List(1, 2, 3)), true)
  expect(' 8. Long and short lists', eq (List(1, 2, 3)) (List(2, 3)), false)
  expect(' 8. Short and long lists', eq (List(1, 2)) (List(1, 2, 3)), false)
  expect(' 8. Same length lists with non-equal element', eq (List(1, 2, 3)) (List(1, 2, 4)), false)
  expect(' 8. Empty and non-empty lists', eq (Nil) (List(1, 2, 4)), false)
  expect(' 8. Non-empty and empty lists', eq (List(1, 2, 3)) (Nil), false)
})

////////////////////////////////////////////////////////////////////////////////
// 9.
// Implement the 'concat' function which concatenates two lists
//
// Type: concat :: [a] -> [a] -> [a]
// Signature: const concat = as => bs => ...

test(typeof concat, _ => {
  expect(' 9. Concating two empty lists should be an empty list', concat (Nil) (Nil), Nil)
  expect(' 9. Concating an empty list and a non-empty list should be the non-empty list', concat (Nil) (List(1, 2, 3)), List(1, 2, 3))
  expect(' 9. Concating a non-empty list and an empty list should be the non-empty list', concat (List(1, 2, 3)) (Nil), List(1, 2, 3))
  expect(' 9. Concating two non-empty lists should be the second list appended to the first', concat (List(1, 2)) (List(3, 4)), List(1, 2, 3, 4))
})

////////////////////////////////////////////////////////////////////////////////
// 10.
// Implement the 'reverse' function which reverses the list
//
// Type: reverse :: [a] -> [a]
// Signature: const reverse = list => ...

test(typeof reverse, _ => {
  expect('10. Reversing an empty list is the empty list', reverse (Nil), Nil)
  expect('10. Reversing a singleton list is the same list', reverse (List(1)), List(1))
  expect('10. Reversing a list', reverse (List(1, 2, 3)), List(3, 2, 1))
})

////////////////////////////////////////////////////////////////////////////////
// 11.
// Implement the 'filter' function which takes a predicate
// (a unary function returning a boolean) and a list and returns the list of
// those elements that satisfy the predicate
//
// Type: filter :: (a -> boolean) -> [a] -> [a]
// Signature: const filter = p => list => ...

test(typeof filter, _ => {
  expect('11. Filtering an empty list ', filter (constant (true)) (Nil), Nil)
  expect('11. Filtering an empty list', filter (constant (false)) (Nil), Nil)
  const odd = x => x % 2 !== 0
  expect('11. Filtering odd numbers', filter (odd) (List(1, 2, 3, 4)), List(1, 3))
})

////////////////////////////////////////////////////////////////////////////////
// 12.
// Implement the 'map' function which returns a list obtained by applying the
// unary function f to each element in the list
//
// 'f's signature: const f = e => ... where e is an element in the list
//
// Type: map :: (a -> b) -> [a] -> [b]
// Signature: const map = f => list => ...

test(typeof map, _ => {
  const square = x => x ** 2
  expect('12. Mapping over an empty list', map (square) (Nil), Nil)
  expect('12. Mapping with identity', map (id) (List(1, 2, 3)), List(1, 2, 3))
  expect('12. Mapping over a singleton list', map (square) (List(2)), List(4))
  expect('12. Mapping over a list', map (square) (List(1, 2, 3)), List(1, 4, 9))
})

////////////////////////////////////////////////////////////////////////////////
// 13.
// Implement the 'foldl' function which takes a binary function f,
// a starting value z and a list.
// 'foldl' reduces the list using the binary function from left to right.
//
// 'f's signature: const f = z => e => ...
// where z is the reduced value and e is the list element
//
// Type: foldl :: (b -> a -> b) -> b -> [a] -> b
// Signature: const foldl = f => z => list => ...

test(typeof foldl, _ => {
  const plus = a => b => a + b
  const minus = a => b => a - b
  expect('13. Left folding an empty list to be the staring value', foldl(plus)(0)(Nil), 0)
  expect('13. Left folding a list with plus', foldl(plus)(0)(List(1, 2, 3)), 6)
  expect('13. Left folding a list with minus', foldl(minus)(0)(List(1, 2, 3)), -6)
})

////////////////////////////////////////////////////////////////////////////////
// 14.
// Implement the 'foldr' function which takes a binary function f,
// a starting value z and a list.
// 'foldr' reduces the list using the binary function from right to left.
//
// 'f's signature: const f = e => z => ...
// where e is the list element and z is the reduced value
//
// Type: foldr :: (a -> b -> b) -> b -> [a] -> b
// Signature: const foldr = f => z => list => ...

test(typeof foldr, _ => {
  const plus = a => b => a + b
  const minus = a => b => a - b
  expect('14. Right folding an empty list to be the staring value', foldr(plus)(0)(Nil), 0)
  expect('14. Right folding a list with plus', foldr(plus)(0)(List(1, 2, 3)), 6)
  expect('14. Right folding a list with minus', foldr(minus)(0)(List(1, 2, 3)), 2)
})

////////////////////////////////////////////////////////////////////////////////
// 15.
// Implement the 'copy' function which duplicates the list.
// Use the 'foldl' function
//
// Type: copy :: [a] -> [a]
// Signature: const copy = list => ...

test(typeof copy, _ => {
  expect('15. Copy an empty list', copy (Nil), Nil)
  expect('15. Copy a singleton list', copy (List(1)), List(1))
  expect('15. Copy a list', copy (List(1, 2, 3)), List(1, 2, 3))
})

////////////////////////////////////////////////////////////////////////////////
// 16.
// Implement the 'copy2' function which duplicates the list.
// Use the 'foldr' function
//
// Type: copy2 :: [a] -> [a]
// Signature: const copy2 = list => ...

test(typeof copy2, _ => {
  expect('16. Copy an empty list', copy2 (Nil), Nil, eq)
  expect('16. Copy a singleton list', copy2 (List(1)), List(1))
  expect('16. Copy a list', copy2 (List(1, 2, 3)), List(1, 2, 3))
})

////////////////////////////////////////////////////////////////////////////////
// 17.
// Implement the 'map2' function. It should be similar to 'map'.
// Use the 'foldr' function
//
// Type: map2 :: (a -> b) -> [a] -> [b]
// Signature: const map2 = f => list => ...

test(typeof map2, _ => {
  const square = x => x ** 2
  expect('17. Mapping over an empty list', map2 (square) (Nil), Nil)
  expect('17. Mapping over a singleton list', map2 (square) (List(2)), List(4))
  expect('17. Mapping over a list', map2 (square) (List(1, 2, 3)), List(1, 4, 9))
})

////////////////////////////////////////////////////////////////////////////////
// 18.
// Implelemt the 'reverse2' function. It should be similar to 'reverse'.
// Use the 'foldl' function
//
// Type: reverse2 :: [a] -> [a]
// Signature: const reverse2 = list => ...

test(typeof reverse2, _ => {
  expect('18. Reversing an empty list is the empty list', reverse2 (Nil), Nil)
  expect('18. Reversing a singleton list is the same list', reverse2 (List(1)), List(1))
  expect('18. Reversing a list', reverse2 (List(1, 2, 3)), List(3, 2, 1))
})

/*

For the following questions, we are introducing another data structure - pair

A pair has two elements, the first and the second. To create a pair:

const myPair = pair (1) (2) // This is the pair (1, 2)

To extract the first element from the pair:

const first = fst (myPair) // This will result in 1

To extract the second element from the pair:

const second = snd (myPair) // This will result in 2

*/

////////////////////////////////////////////////////////////////////////////////
// 19.
// Implement the 'zip' function which takes two lists and returns a list of
// corresponding pairs. If one input list is short,
// excess elements of the longer list are discarded.
//
// Type: zip :: [a] -> [b] -> [(a, b)]
// Signature: const zip = as => bs => ...

test(typeof zip, _ => {
  expect('19. Zipping empty lists', zip (Nil) (Nil), Nil)
  expect('19. Zipping an empty list and a list', zip (Nil) (List(1, 2, 3)), Nil)
  expect('19. Zipping a list and an empty list', zip (List(1, 2, 3)) (Nil), Nil)
  expect('19. Zipping two same-length lists', zip (List(1, 2, 3)) (List(10, 20, 30)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
  expect('19. Zipping two lists, the first is shorter', zip (List(1, 2, 3)) (List(10, 20, 30, 40)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
  expect('19. Zipping two lists, the second is shorter', zip (List(1, 2, 3, 4)) (List(10, 20, 30)), List(pair (1) (10), pair (2) (20), pair (3) (30)))
})

////////////////////////////////////////////////////////////////////////////////
// 20.
// Implement the 'unzip' function which transforms a list of pairs into a
// list of first components and a list of second components.
//
// Type: unzip :: [(a, b)] -> ([a], [b])
// Signature: const unzip = pairs => ...

test(typeof unzip, _ => {
  expect('20. unzipping empty lists', unzip (Nil), pair (Nil) (Nil))
  expect('20. unzippint a list', unzip (List(pair (1) (10), pair (2) (20), pair (3) (30))), pair (List(1, 2, 3)) (List(10, 20, 30)))
})
