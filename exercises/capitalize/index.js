// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  str = str.split(' ');
  let output = [];
  for(let i = 0; i < str.length; i++) {
    output.push(str[i][0].toUpperCase() + str[i].slice(1));
  }
  return output.join(" ");
}
// str = str.split('');
// for(let i = 0; i < str.length; i++) {
//   if(i === 0 || str[i-1] === " ") {
//     let upperCase = str[i].toUpperCase();
//     str[i] = upperCase;
//   }
// }
// return str.join('');

module.exports = capitalize;
