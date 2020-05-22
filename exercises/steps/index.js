// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, totalPrints = 1, outputStr = "") {
  //we always want to print out characters equal to n
  //each step we print out one more # then escape
  //Solve Recursively
  //when totalPrints equals n, stop
  if(totalPrints === n + 1) {
    return;
  }
  if(outputStr.length === n) {
    console.log(outputStr);
    return steps(n, totalPrints + 1)
  }
  else {
    //we add totalPrints num of space
    if(outputStr.length < totalPrints) outputStr += "#";
    else {
      outputStr+= " ";
    }
    steps(n, totalPrints, outputStr)
  }


}
// let counter = 1;
//   while(counter <= n) {
//     let outputStr = '';
//     for(let i = 1; i <= n; i++) {
//       if(i <= counter) outputStr += '#';
//       else outputStr += " ";
//     }

//     console.log(outputStr);
//     counter++;
//   }

module.exports = steps;
