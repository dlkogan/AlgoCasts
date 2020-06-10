// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //initialize output w 1 because root will always have width 1
  let output = [];
  /*
  Create arr for breadth traversal
  shift arr
  pushcurrNodes children into arr
  [1,2,3]
  //push arr.length into output
  output = [1,3]
  arr= [4,5]
  shift n (being last val in outputArr) from arr while pushing children in

  */
  let arr = [root]
  while(arr.length) {
    output.push(arr.length);
    let currNode = arr.shift();
    arr.push(...currNode.children);
    for(let i = 1; i <= output[output.length - 1]; i++) {
      let node = arr.shift()
      if(node.children.length) {
        arr.push(...node.children);
      }

    }
  }
  return output;
}

module.exports = levelWidth;
