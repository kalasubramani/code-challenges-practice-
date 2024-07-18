
class Node{
  constructor(val){
    this.value = val;
    this.next=null;
  }
}
class Stack{
//implemented using arrays, singly/doubly  linked list
  constructor(){
    //implement using  linked list here
    this.first = null;
    this.last=null;
    this.size = 0;
  }
  //add a node to the top of the stack
  push(val){
    //create new node using the val
    //if size =0, 
      //set first and last as new node
      //increment count by 1
    // else
      // set new node.next to this.first 
      //set new node as first
      //increment count by 1

      let newNode = new Node(val);
      if(this.size===0){
        this.first=newNode;
        this.last = newNode;
      }else{
        newNode.next= this.first;
        this.first=newNode;
      }
      this.size++;
      return this;
  }

  pop(){
    //if this.size = 0, return false
    //else if this.size=1, 
      // get this.first as target node
      // set first and last as null, 
      // size=0
      //return target node
    //else 
      //get this.first as target node
      // set target.next as this.first
      //decrement size by 1
      //return target node

      if(this.size===0) return false;
      let targetnode=this.first;
      if(this.size===1){       
        this.first=null;
        this.last=null;               
      }else{
        this.first= targetnode.next;
      }
      this.size--; 
      
      return targetnode;
  }
 
}

let stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);