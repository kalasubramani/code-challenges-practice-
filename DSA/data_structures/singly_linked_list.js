

class Node{
  constructor(val){
    this.value=val;
    this.next=null;
  }
}

// let firstNode = new Node("1");
// firstNode.next= new Node("2");
// firstNode.next.next = new Node("5");
// firstNode.next.next.next = new Node("7");

class singly_linked_list{
  //has a head, tail and length
  constructor(){
      this.head=null;
      this.tail=null;
      this.length=0;
  }
  push(val){
    //add a node to end of list
    //create a new node
    //if length =0, set head and tail to new node
    //increment length by 1
    //else
      //set value and set tail.next to new node
      //set new node as tail
    
    let node = new Node(val);
    if(this.length===0){
      this.head=node;
      this.tail = node;
    }else{
      this.tail.next = node;
      this.tail=node;
    }
   this.length +=1;   
   return this;
  }
}

let list= new singly_linked_list();
list.push("1");
list.push("3");
console.log(list);
