// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(val, next = null) {
    this.data = val,
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = node;
    } else {
      const oldHead = this.head;
      node.next = oldHead;
      this.head = node;
    }
  }
  size() {
    let size = 0;
    if(!this.head) return 0;
    let currNode = this.head;
    while(currNode) {
      size++;
      currNode = currNode.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if(!this.head) return;
    const newHead = this.head.next;
    this.head = newHead;
  }
  removeLast() {
    if(!this.head) return;
    if(this.size() === 1) {
      this.head = null;
      return;
    }
    let currNode = this.head;
    let lastNode = currNode;
    while(currNode.next) {
      lastNode = currNode;
      currNode = currNode.next;
    }
    lastNode.next = null;
  }
  insertLast(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      return;
    }
    let currNode = this.head
    while(currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }
  getAt(val) {
    let currLocation = 0;
    let currNode = this.head;
    if(!currNode) return null;
    while(val !== currLocation && currNode) {
      currLocation++
      currNode = currNode.next;
    }
    if(currLocation === val) {
      return currNode
    } else {
      return null;
    }
  }
  removeAt(ind) {
    let currInd = 0;
    let currNode = this.head;
    let lastNode = currNode;
    if(!currNode) return;
    while(ind !== currInd && currNode) {
      currInd++;
      lastNode = currNode;
      currNode = currNode.next;
    }
    if(ind === currInd) {
      //if 0, currNode is node 1
      //last node is node 1
      lastNode.next = currNode.next;
    } else {
      return;
    }
  }
}

module.exports = { Node, LinkedList };
