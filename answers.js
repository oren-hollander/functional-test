'use strict'

// 1.
const nil = list => list === Nil

// 2.
const init = list => ( t => nil (t) ? Nil : cons (head (list)) (init (t)) ) (tail (list))

// 3.
const last = list => ( t => nil (t) ? head (list) : last (t) ) (tail (list))

// 4.
const elem = e => list =>
  nil (list)
    ? false
    : head (list) === e
      ? true
      : elem (e) (tail (list))

// 5.
const length = list => nil (list) ? 0 : 1 + length (tail (list))

// 6.
const eq = as => bs =>
 ( asEmpty => bsEmpty =>
  asEmpty && bsEmpty
    ? true
    : asEmpty || bsEmpty
      ? false
      : head (as) === head (bs) && eq (tail (as)) (tail (bs))
 ) (nil (as)) (nil (bs))

// 7.
const take = n => list =>
  nil (list) || n === 0
    ? Nil
    : cons (head (list)) (take (n - 1) (tail (list)))

// 8.
const drop = n => list =>
  nil (list) || n === 0
    ? list
    : drop (n - 1) (tail (list))

// 9.
const concat = as => bs =>
  nil (as)
    ? bs
    : cons (head (as)) (concat (tail (as)) (bs))

// 10.
const reverse = list =>
  nil (list)
    ? Nil
    : concat (reverse (tail (list))) (cons (head (list)) (Nil))

// 11.
const filter = p => list =>
  nil (list)
    ? Nil
    : ( h => t =>
      p (h)
        ? cons (h) (filter (p) (t))
        : filter (p) (t)
      ) (head (list)) (tail (list))

//12.
const map = f => list =>
  nil (list)
    ? Nil
    : cons (f (head (list))) (map (f) (tail (list)))

// 12.
const foldl = f => z => list =>
  nil (list)
    ? z
    : foldl (f) (f (z) (head (list))) (tail (list))

// 13.
const foldr = f => z => list =>
  nil (list)
    ? z
    : f (head (list)) (foldr (f) (z) (tail (list)))

// 14.
const copy = list => foldl (flip (cons)) (Nil) (reverse (list))

// 15.
const copy2 = foldr (cons) (Nil)

// 16.
const map2 = f => foldr (compose (cons) (f)) (Nil)

// 17.
const reverse2 = foldl (flip (cons)) (Nil)

// 19.
const zip = as => bs =>
  (nil (as) || nil (bs))
    ? Nil
    : cons (pair (head (as)) (head (bs))) (zip (tail (as)) (tail (bs)))

// 20.
const unzip = pairs =>
  nil (pairs)
    ? pair (Nil) (Nil)
    : ( p => ps =>
        pair (cons (fst (p)) (fst (ps))) (cons (snd (p)) (snd (ps)))
      ) (head (pairs)) (unzip (tail (pairs)))
