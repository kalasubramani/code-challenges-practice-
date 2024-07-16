

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
    }
    newNode.next = this.head;
    this.head = newNode;

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

    while (counter <= index) {
      if (counter === index) return currentNode;
      counter++;
      currentNode = currentNode.next;
    }
  }

  //update the value of a node at given index
  set(index, value) {
    //make use of get() to get the value of the node
    //update the value of the node to new value
    //return true

    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  //inserts a new node at a given index
  insert(index,val){
    //if index <0 and > length, return false
    //create new node using the value
    //if index is 0, use unshift()
    //if index is equal to length, use push()
    // use get() to get the node at index-1 --> previous node
    // use get() to get the node at index+1 --> next node
    // set previous.next as new node
    //set new node.next as next node
    // increment length
    //return true

    if(index<0 || index > this.length) return false;   
    if(index===0) !!this.unshift(val); //!! makes it to return a boolean value
    if(index===this.length) !!this.push(val);

    let newNode = new Node(val);
    let previous = this.get(index-1);
    let next = previous.next;
    console.log("next ",next);
    previous.next=newNode;
    newNode.next=next;

    this.length++;
    return true;
  }

  //removes a node at a specific index
  remove(index){
    //if index <0 or >length, return false
    //if index ===0, call shift(), return true
    //if index ===length-1 , call pop(), return true
    //use get(index-1) to get previous node
    //use get(index) to get node to be removed   
    //set previous.next to removed.next
    //decrement length
    //return the removed node

    if(index<0 || index>this.length-1) return false;
    if(index===0) return !!this.shift();
    if(index===this.length-1) return !!this.pop();
    let previous = this.get(index-1);
    // let removed =this.get(index);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  //prints all values in the list in order
  print(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
    return this.length;
  }
  //reverse the list
  reverse(){
    // get oldhead in temp
    //set head = this.tail
    //set tail = temp
    //set previous = head
   // while(current!==tail)
    // set current = previous.next
    //set next = current.next
    //set previous.next = current

    var node = this.head;
    this.head=this.tail;
    this.tail = node;

    let previous = null;
    let next=null;

    for(let i=0;i<this.length;i++){
      next = node.next;
      node.next=previous;
      previous=node;
      node=next;
    }
    return this;
  }
}


let list = new singly_linked_list();
list.push("1");
list.push("3");
list.push("5");
list.push("LAST");
// console.log("popped node 1",list.pop());
// console.log("popped node 2",list.pop());
// console.log("popped node 3",list.pop());
// console.log("popped node lasttry",list.pop());
console.log("shifted node ", list.shift());
console.log("unshifted node ", list.unshift("7"));
console.log("lsit",list.print());
console.log("getting node 1 value ", list.get(1));
console.log("setting node 2 value", list.set(2, "two"));
console.log("setting node 10 value", list.set(10, "ten"));
console.log("lsit",list.print());
console.log("insert new node at 1",list.insert(1,"one"));
console.log("lsit",list.print());
console.log("removing last node",list.remove(5));
console.log("removing last node",list.remove(4));
// console.log(list);
console.log("list length:",list.print());
console.log("reversing ",list.reverse());
console.log("lsit",list.print());

