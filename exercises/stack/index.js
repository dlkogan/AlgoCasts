// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data[this.data.length] = item;
  }
  pop() {
    let removed = this.data[this.data.length - 1];
    this.data.splice(this.data.length - 1, 1)
    return removed;
  }
  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Stack;
