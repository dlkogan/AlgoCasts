// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //we can reduce the space complexity if we don't store in named variables
  let outputArr = [];
  for (let i = 0; i < array.length; i++) {
    if(!outputArr[outputArr.length - 1] || outputArr[outputArr.length - 1].length >= size) {
      outputArr.push([array[i]])
    } else {
      outputArr[outputArr.length - 1].push(array[i])
    }
  }
  return outputArr;
}

module.exports = chunk;

  //the function takes in an array and returns an array of arrays w/ length of size
  //brute force would be to loop through the array and create subarrays
  // let outputArr = [];
  // let sizeCounter = 1;
  // let subArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   if(sizeCounter <= size) {
  //     subArray.push(array[i])
  //     sizeCounter++;
  //   } else {
  //     outputArr.push(subArray)
  //     sizeCounter = 2;
  //     subArray = [];
  //     subArray.push(array[i])
  //   }
  // }
  // if (subArray.length > 0) {
  //   outputArr.push(subArray);
  // }
  // console.log(outputArr);
  // return outputArr;
