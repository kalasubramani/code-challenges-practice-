
//base class for a node
class Node {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}

class doubly_linked_list {
  //has head, tail and length by default
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add new node to end of doubly linked list
  push(val) {
    //create new node with given value
    //if length =0, 
    //create new node using the val
    //set head and tail to be the new node

    //get the tail
    //set tail.next as new node
    //set new node.previous as current tail
    //set new node as tail
    //update the length by 1
    // return the list
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  //remove a node from end
  pop() {
    //get the tail
    //if length===0, return undefined
    //if length ===1, set head and tail as null, length =0
    //get the tail.previous and set it as new tail
    //set new tail.next = null
    //decerement length by 1
    //set popped node.previous as null
    //return the popped node

    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }

    this.length--;
    return poppedNode;
  }

  //remove the node from the beginning
  shift() {
    //get the head as popped node
    //if length =0, return undefined
    //if length=1, 
    //set head and tail as null
    //set length=0
    //else
    //set poppednode.next as new head
    //set poppednode.next = null
    //set new head.previous = null
    //decrement length by 1
    // return poppednode
    if (this.length === 0) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      poppedNode.next = null;
      this.head.previous = null;
    }
    this.length--;
    return poppedNode;
  }
  //add node to beginning of doubly linked list
  unshift(val) {
    //create new node using the value
    //if length =0, 
    // set head and tail to be new node
    //increment length by 1
    // else
    //set new node.next as head
    //set head.previous as new node
    //set new node as head
    //increment length by 1
    //return updated list

    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  //get the value of the nth node
  get(index) {
    //if index <0 or >= length, return undefined
    // if index =0, return this.head
    // if index = length, return tail
    //find if the index is closer to head, start iterating from head 
    //else start iterating from tail
    //if the n = index, return the node

    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length) return this.tail;
    let midpoint = Math.floor(this.length / 2);
    let n = 0, current = null;
    if (index <= midpoint) {
      current = this.head;
      while (current && n < midpoint) {
        if (n === index) return current;
        n++;
        current = current.next;
      }
    } else {
      current = this.tail;
      n = this.length - 1;
      while (current && n > midpoint) {
        if (n === index) return current;
        n--;
        current = current.previous;
      }
    }
    return current;
  }
}

let list = new doubly_linked_list();
list.push(10);
list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.unshift("first"));
// console.log(list);
console.log(list.get(4));

