

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// let firstNode = new Node("1");
// firstNode.next= new Node("2");
// firstNode.next.next = new Node("5");
// firstNode.next.next.next = new Node("7");

class singly_linked_list {
  //has a head, tail and length
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //add a node to end of list
    //create a new node
    //if length =0, set head and tail to new node
    //increment length by 1
    //else
    //set value and set tail.next to new node
    //set new node as tail

    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  //remove node from end of the list
  pop() {
    // get next node of the linked list and store it in temp
    // go on until the tail is reached
    // once the tail is reached, set the temp node to this.tail 
    // reduce length by one
    // return old tail
    var temp = this.head;
    var prev = this.head;
    console.log("head", temp);

    //if there are no nodes
    if (this.length === 0) return undefined;
    //if there's only one node
    if (this.length === 1) {
      let lastNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return lastNode;
    }
    //traverse each node and store data in prev
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    console.log("prev", prev);
    console.log("last", temp);

    //set prev to tail
    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;
    return temp;
  }

  //removes node from the beginning of the list
  shift() {
    //if length =0, return undefined
    //if length=1, return head and set head and tail as null, length =0
    //take head and store it in temp
    //get head.next and set it as new head
    //reduce length by 1
    //return temp
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp;
    }
    this.head = temp.next;
    this.length--;
    return temp;
  }

  //insert a node to the beginning of the list
  unshift(val) {
    //create a new node using the val
    //if length=0, set new node as head and tail,
    //increment length by 1 
    //if length=1, set new node as head and existing node as tail, 
    //increment length by 1
    //take the current head, store in temp
    //set new node as head
    //set new node.next to temp
    //increment the length by 1
    // return the list

    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  //the function takes an index and returns the value of the index
  get(index) {
    //if length of the list is 0, return undefined.
    //if index is less than zero or more than length of list return undefined
    //intitialize a counter 
    //move through each node in list
    //increment counter
    //if the counter==index, then return the value at the index
    if (this.length === 0) return undefined;
    if (index < 0 || index > this.length - 1) return undefined;
    let counter = 0, currentNode = this.head;
    // if(index===0 && this.length===1) return this.head.val;
    while (counter <= index) {
      if (counter === index) return currentNode.value;
      counter++;
      currentNode = currentNode.next;
    }
  }

  //update the value of a node at given index
  set(index,value){
    //if list.length ==0. then return null
    //if index <0 or index >=list.length, return undefined
    
  }
}


let list = new singly_linked_list();
list.push("1");
list.push("3");
list.push("5");
// console.log("popped node 1",list.pop());
// console.log("popped node 2",list.pop());
// console.log("popped node 3",list.pop());
// console.log("popped node lasttry",list.pop());
console.log("shifted node ", list.shift());
console.log("unshifted node ", list.unshift("7"));
console.log("getting node 1 value ",list.get(1));
console.log(list);
