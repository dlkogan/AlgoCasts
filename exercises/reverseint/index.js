// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const asString = n.toString();
  let output = '';
  const isNegative = n < 0;
  for (let i = asString.length - 1; i >= 0; i--) {

    output += asString[i];

  }
  if(isNegative) return 0 - parseInt(output);
  else return parseInt(output);

}

module.exports = reverseInt;
