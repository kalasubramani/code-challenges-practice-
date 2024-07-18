
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
      while (n < midpoint) {
        if (n === index) return current;
        n++;
        current = current.next;
      }
    } else {
      current = this.tail;
      n = this.length - 1;
      while (n > midpoint) {
        if (n === index) return current;
        n--;
        current = current.previous;
      }
    }
  }
  //update a value for a node at given index
  set(index, val) {
    //if index <0 or >= length return false -- already handled in get()
    //use get(index) to get the target node
    // if target node is returned
    //update the value of the targer node
    //return true
    //else 
    //return false -- node dose not exist
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.value = val;
      return true;
    } else return false;
  }
  // insert a new node with a given value at a given index into a doubly linked list
  insert(index, val) {
    //if index <0 or > length return false     
    //if index =0, use unshift() to insert new node
    //else if index = length, use push() to insert new node
    //else 
      //create a new node using the given val
      //use get(index-1) to get the target node
      //get target.previous and set it to new node.previous
      //set target.previous to new node
      //set new node.next to targer node
      //set node before newNode to point to newNode
      // increment length by 1
      // return true
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    else if (index === this.length) return !!this.push(val);
    else {
      let newNode = new Node(val);
      
      let targetNode = this.get(index);// first new(second) ten
      newNode.previous = targetNode.previous;
      targetNode.previous = newNode;
      newNode.next = targetNode;
      newNode.previous.next = newNode; //newNode.previous - node before newNode
      console.log("new node",newNode)
      this.length++;
      return true;
    }
   
  }
  //remove a node at given index
  remove(index){
    //if index <0 or > length-1 return false     
    //if index =0, use shift() to remove node
    //else if index = length-1, use pop() to remove node
    //else 
    //use get(index) to get target node
    //get nodeBefore = target.previous
    //get nodeAfter = target.next
    //set nodeBefore.next to nodeAfter
    //set nodeAfter.previous to nodeBefore
    //clear connections on target node
    //decrement length by 1
    //return targetNode

    if(index<0 || index>this.length-1) return false;
    if(index===0) return this.shift();
    else if(index===this.length-1) return this.pop();
    else {
      let targetNode = this.get(index);
      let nodeBefore = targetNode.previous;
      let nodeAfter = targetNode.next;
      nodeBefore.next = nodeAfter;
      nodeAfter.previous = nodeBefore;
      targetNode.previous=null;
      targetNode.next = null;

      this.length--;
      return targetNode;
    }

  }
    //test method
    //prints all values in the list in order
    print(){
      let current = this.head;
      while(current){
        console.log(current.value);
        current = current.next;
      }
      return this.length;
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
console.log(list.get(-1));
console.log(list.get(11));
console.log(list.get(2));
console.log(list.set(0, "ten"));
console.log(list.print());
console.log(list.insert(0,"first"));
console.log(list.insert(1,"second"));
console.log(list.print());
// console.log(list.insert(100,"first"));
// console.log(list);
// console.log(list.remove(0));
console.log(list.remove(1));
console.log(list.print());


