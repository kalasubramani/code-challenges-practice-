

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

function checkIfListisCyclic(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
      if (slow === fast) {
          return true;
      }
      slow = slow.next;
      fast = fast.next.next;
  }

  return false;
}

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
// head.next.next.next.next = null;
head.next.next.next.next = head; // Creating a cycle for testing

console.log(checkIfListisCyclic(head)); // Output: true