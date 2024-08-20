
//priority queue has the min or max value of a heap in constant access time o(1)
//this datastructure can be used to store the intermediate values while calculating
//shortest path from point A to point B
// so that, at any point of time, we can get the min weighed path through minbinarytree structure
class priority_queue{
constructor(){
  this.values=[];
}
enqueue(value,priority){
  this.values.push({value,priority});
  this.sort(); //bubbles up the value to right spot
}
sort(){
  this.values.sort((a,b)=>{return a.priority-b.priority});
}
dequeue(){
  return this.values.shift();
}
}

let q = new priority_queue();
q.enqueue("B",3);
q.enqueue("C",5);
q.enqueue("D",2);
q.enqueue("Q",20);
q.enqueue("P",1.5);
console.log(q.values);
console.log(q.dequeue());