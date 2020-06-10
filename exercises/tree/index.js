// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = []
  }
  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }
  remove(data) {
    this.children = this.children.filter(element => {
      element.data !== data;
    })

  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(callbackFunc) {
    let queue = [this.root];
    while(queue.length) {
      let curr = queue.pop();
      callbackFunc(curr);
      for(let i = 0; i < curr.children.length; i++) {
        queue.unshift(curr.children[i])
      }

    }
  }
  traverseDF(callbackFunc) {
    let arr = [this.root];
    while(arr.length) {
      let curr = arr.shift();
      callbackFunc(curr);
      arr.unshift(...curr.children);
    }
  }
}

module.exports = { Tree, Node };
