'use strict'

// A few helper functions

// 'flip' is a higher order function that given a binary function returns a
// binary function which invokes the given function with the arguments flipped
const flip = f => a => b => f (b) (a)

// Function composition
const compose = f => g => x => f (g (x))

// The identity function
const id = x => x

// The constant function
const constant = x => _ => x
