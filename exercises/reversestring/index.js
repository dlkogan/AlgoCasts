// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //the bruteforce method would be to start at the end of the string and loop through
  //appending each item to an output String
  //The bigO would be Linear; the length of the string. The Space complexity would be Constant
  // let outputStr = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   outputStr += str[i];
  // }
  // console.log(outputStr);
  // return outputStr;

  //A more optimized approach would be to reverse this in place. This would be constant time b/c
  //we can look up each item at its exact index; it is also constant space b/c we don't need to create any new stuff
  //this won't work b/c strings are immutable
  str = str.split('');
  let head = 0;
  let tail = str.length - 1;
  while (head <= tail) {
    let oldHead = str[head];
    let oldTail = str[tail];
    str[head] = oldTail;
    str[tail] = oldHead;
    head++;
    tail--;
  }
  return str.join('');

}

module.exports = reverse;
