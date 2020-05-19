// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //First convert both strings to lowerCase
  //can we use regex to remove spaces and punc?
  //
  stringA = stringA.toLowerCase().replace(/[^\w\s]|_/g, "");
  stringB = stringB.toLowerCase().replace(/[^\w\s]|_/g, "");
  let stringAObj = {};
  for (let i = 0; i < stringA.length ; i++) {
    if(stringAObj[stringA[i]]) {
      stringAObj[stringA[i]]+= 1;
    } else {
      stringAObj[stringA[i]] = 1;
    }
  }
  for (let j = 0; j < stringB.length; j++) {
    if(!stringAObj[stringB[j]]) return false;
    else if (stringAObj[stringB[j]]) {
      stringAObj[stringB[j]] -= 1;
      if(stringAObj[stringB[j]] < 0) return false;
    }
  }
  let entryList = Object.values(stringAObj).filter(elm => {
    if(elm !== 0) {
      return elm;
    }
  })
  if(entryList.length > 0) return false;
  else return true;

}

module.exports = anagrams;
