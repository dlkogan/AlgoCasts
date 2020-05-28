// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//[1,2,3,4]
//[1,2,3]
//[4]
//[1,2]
//[4,3]


//[1,2,3,4,5,6,7,8,9]
//[1,2,3,4,5,6,7,8]
//[9]
//[1,2,3,4,5,6,7]
//[9,8]
//[1,2,3,4,5,6]
//[9,8,7]
//[1,2,3,4,5]
//[9,8,7,6]
//[1,2,3,4]
//[9,8,7,6,5]
//[1,2,3]
//[9,8,7,6,5,4]

//NEXT ROUND SWITCH DIRECTION

//[9,8,7,6,5]
//[4]
//[9,8,7,6]
//[5,4]
//[9,8,7]
//[6,5,4]

//[1,2,3]
//[9,8,7]
//[6,5,4]

//[1,2,3]
//[8,9,4]
//[7,6,5]


function matrix(n) {
  let matrixSpiral = [];
  for(let i = 0; i < n; i++) {
    matrixSpiral.push([])
  }
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;
  //we need to go right, down, left, up
  while(counter <= n * n) {
    for(let i = startCol; i <= endCol; i++) {
      matrixSpiral[startRow][i] = counter;
      counter++
    }
    startRow++;
    for(let i = startRow; i <= endRow; i++) {
      matrixSpiral[i][endCol] = counter;
      counter++
    }
    endCol--
    for(let i = endCol; i >= startCol; i--) {
      matrixSpiral[endRow][i] = counter;
      counter++;
    }
    endRow--
    for(let i = endRow; i >= startRow; i--) {
      matrixSpiral[i][startCol] = counter;
      counter++;
    }
    startCol++;


  }



  return matrixSpiral;

}

module.exports = matrix;
