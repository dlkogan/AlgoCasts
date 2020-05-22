// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, totalPrints = 1, numPounds = 1, lastString = "") {
  let baseSize = (n*2 - 1)
  let spacePerSide = Math.floor((baseSize - numPounds)/2)
  if(totalPrints >= n + 1) {
    return;
  }
  if(lastString.length === baseSize) {
    console.log(lastString);
    pyramid(n, totalPrints + 1, numPounds + 2)
  }
  else {
    if(lastString.length < spacePerSide) lastString += " "
    else if(lastString.length + spacePerSide < baseSize) lastString += "#"
    else lastString += " "
    pyramid(n, totalPrints, numPounds, lastString);
  }



}
  //pyramid always starts at 1 pound, with two pounds added each row on either side
  //the size of the base will always by input times 2 minus 1 (this is total row length)
  //so we need to track how many lines we've printed to far (until n)
  //to find when we start printing pounds...
  //base size/currPounds floored is index we start pounds until string is right length

  //create variables for base size

// let baseSize = (n*2) -1;
//   let lastPoundCount = 1;
//   for(let i = 1; i <= n; i++) {
//     let outputStep = "";
//     let numSpacesPerSide = Math.floor((baseSize - lastPoundCount)/2)
//     while(outputStep.length < baseSize) {
//       //if length is less than numSpacesPerSize appendSpace
//       if(outputStep.length < numSpacesPerSide) outputStep += " ";
//       //if length is greater than numSpacesPerSide + lastPoundCount append space
//       else if((outputStep.length + numSpacesPerSide) < baseSize) outputStep += "#";
//       //else append pound
//       else outputStep += " "
//     }
//     lastPoundCount += 2;
//     console.log(outputStep);
//     outputStep = "";
//   }

module.exports = pyramid;
