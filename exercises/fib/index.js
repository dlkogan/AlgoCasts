// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoizer(callbackfn) {
  //NOTE, cache must be defined outside of the returned function
  //THE CLOSURE ASPECT IS CRITICAL
  const cache = {}
  return function(...args) {
    if(cache[args]) {
      return cache[args]
    }
      //ensures the correct this context, and runs our function
    let result = callbackfn.apply(this,args)
    cache[args] = result;
    return result;
  }
}

function fib(n) {
  //recursive solution
  //track the last two values, shift
  //base case, when n is 1
  if(n < 2) {
    return n
  }
  else {
    return fib(n - 1) + fib(n - 2)
  }
}

fib = memoizer(fib);

module.exports = fib;
