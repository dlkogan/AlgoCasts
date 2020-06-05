// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  //we have our list
  //we want a fast and slow pointer both starting at the beginning
  //we will set slow to start and fast to n from the start
  //then advance by 1 each
  //we know that fast is always n away from slow
  //so when fast reaches the n, slow is where it needs to be

  /*
  1
  1 - 2 - 3 - 4
          s

  */
  let slow = list.head;
  let fast = list.head;
  for(let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while(fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
