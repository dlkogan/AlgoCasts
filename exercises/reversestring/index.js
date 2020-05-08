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
  let outputStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    outputStr += str[i];
  }
  console.log(outputStr);
  return outputStr;
}

module.exports = reverse;
