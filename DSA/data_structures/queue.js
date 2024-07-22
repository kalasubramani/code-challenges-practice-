class Node{
  constructor(val){
    this.value=val;
    this.next=null;
  }
}
class Queue{
  //can be implemented using array
  constructor(){
    this.first=null;
    this.last=null;
    this.size =0;
  }
  //add new node to a queue with given value at the end
  enqueue(val){
    //create a new node with val 
    //if size =0, set  first and last as new node
    //else 
      //set last.next to new node
      //set new node as last
      //increment size by 1
    let newNode=new Node(val);
    if(this.size===0){
      this.first=newNode;
      this.last=newNode;      
    }else{
      this.last.next = newNode;
      this.last=this.newNode;
    }
    this.size++;
    return this;
  }
  //remove the first node in the queue
  dequeue(){
    //if size=0, return false
    //get the first node as target node
    //set targetnode.next as first
    //decrement size by 1
    // return targetnode
    if(this.size===0) return false;
    if(this.size===1){
      this.last=null;
    }
    let targetNode = this.first;
    this.first= targetNode.next;
    this.size--;
    return targetNode;
  }
}

let q = new Queue();
q.enqueue(100);
q.enqueue(1000);
console.log(q);
q.dequeue();
console.log(q);