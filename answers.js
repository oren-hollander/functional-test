// 1.
const nil = list => list === Nil

// 2.
const init = list => tail (list) === Nil ? Nil : cons (head (list)) (init (tail (list)))

// 3.
const last = list => {
  const t = tail (list)
  return t === Nil ? head (list) : last (tail (list))
}

// 4.
const elem = e => list =>
  list === Nil
    ? false
    : head (list) === e
      ? true
      : elem (e) (tail (list))

// 5.
const length = list => list === Nil ? 0 : 1 + length (tail (list))

// 6.
const eq = as => bs =>
  as === Nil && bs == Nil
    ? true
    : as === Nil || bs === Nil
      ? false
      : head (as) === head (bs) && eq (tail (as)) (tail (bs))

// 7.
const take = n => list =>
  list === Nil || n === 0
    ? Nil
    : cons (head (list)) (take (n - 1) (tail (list)))

// 8.
const drop = n => list =>
  list === Nil || n === 0
    ? list
    : drop (n - 1) (tail (list))

// 9.
const concat = as => bs => as === Nil ? bs : cons (head (as)) (concat (tail (as)) (bs))

// 10.
const reverse = list => list === Nil ? Nil : concat (reverse (tail (list))) (cons (head (list)) (Nil))

// 11.
const filter = p => list =>
  list === Nil
    ? Nil
    : p (head(list))
      ? cons (head(list)) (filter (p) (tail (list)))
      : filter (p) (tail (list))

//12.
const map = f => list => list === Nil ? Nil : cons (f (head(list))) (map (f) (tail(list)))

// 12.
const foldl = f => z => list => list === Nil ? z : foldl (f) (f (z) (head(list))) (tail(list))

// 13.
const foldr = f => z => list => list === Nil ? z : f (head(list)) (foldr (f) (z) (tail(list)))

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
  (as === Nil || bs === Nil)
    ? Nil
    : cons (pair (head(as)) (head(bs))) (zip (tail(as)) (tail(bs)))

// 20.
const unzip = pairs =>
  pairs === Nil
    ? pair (Nil) (Nil)
    : pair (cons (fst (head (pairs))) (fst (unzip (tail (pairs))))) (cons (snd (head (pairs))) (snd (unzip (tail (pairs)))))
