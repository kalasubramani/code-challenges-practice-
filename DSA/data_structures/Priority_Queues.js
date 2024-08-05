//Priority_Queues implemented using minBinaryHeap
//lowest number means highest priority

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class Priority_Queues {
  constructor() {
    this.values = [];
  }

  //add a new node to the priority queue
  enqueue(value, priority) {
    //create a new node using the value and priority
    //add new node as the last element of the queue
    //bubble the new node to the right spot based on the priority 
    //compare both child nodes and find the smallest one
    //swap root with the smallest node
    //repeat the steps until both child nodes are bigger than root node

    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();

  }
  bubbleUp() {
    // console.log("bubbleUp...")
    let newIdx = this.values.length - 1;
    while (newIdx > 0) {
      let parentIdx = Math.floor((newIdx - 1) / 2);
      let parent = this.values[parentIdx], newNode = this.values[newIdx];
      if (parent.priority > newNode.priority) {
        // console.log("parent.priority > newNode.priority--> ",parent,parent.priority ,newNode, newNode.priority);
        // [parent, newNode] = [newNode, parent];
        //[this.values[parentIdx], this.values[newIdx]] = [this.values[newIdx], this.values[parentIdx]]; 
        this.values[parentIdx] = newNode;
        this.values[newIdx] = parent;
        console.log(this);
        newIdx = parentIdx;
      } else break;
    }
  }
  //remove root node from the queue as it is the next node with highest priority to be processed
  dequeue() {
    //remove root and store it
    //move the last ele of the queue as new root
    //start to sink down/percolate the new root to it right spot
    //compare the child nodes and find the smallest one among them
    //swap new root with smallest node
    //repeat the steps until both child nodes are bigger than root node
    //return root

    if (this.values.length === 0) return undefined;

    let lastIdx = this.values.length - 1;
    [this.values[lastIdx], this.values[0]] = [this.values[0], this.values[lastIdx]];
    // console.log("swapped ...", this.values);

    let poppedNode = this.values.pop();
    // console.log("popped ...", this.values);

    this.sinkDown();
    // console.log("current heap", this.values);
    return poppedNode;
  }
  sinkDown() {
    let currentIdx = 0, heapLength = this.values.length;
    while (currentIdx < heapLength) {
      let leftIdx = (2 * currentIdx) + 1;
      let rightIdx = (2 * currentIdx) + 2;

      if (leftIdx >= heapLength) break;
      if (rightIdx >= heapLength) {
        //if there is only left node, no right node exists
        //     //compare root and left child
        let leftIdx = currentIdx + 1, leftNode = this.values[leftIdx], currentNode = this.values[currentIdx];
        if (leftNode.priority < currentNode.priority)
          [this.values[leftIdx], this.values[currentIdx]] = [this.values[currentIdx], this.values[leftIdx]]

        break;
      }

      let leftnode = this.values[leftIdx], rightNode = this.values[rightIdx];
      
      let maxIdx = leftnode.priority < rightNode?.priority ? leftIdx : rightIdx;
      [this.values[currentIdx], this.values[maxIdx]] = [this.values[maxIdx], this.values[currentIdx]];

      currentIdx = maxIdx;
    }
  }
}

let ER_queue = new Priority_Queues();
ER_queue.enqueue("head injury", 0);
ER_queue.enqueue("eye infection", 1);
ER_queue.enqueue("accident wound", 1);
ER_queue.enqueue("numbness in fingers", 2);
ER_queue.enqueue("flu symptoms", 3);
ER_queue.enqueue("breathing trouble", 0);
ER_queue.enqueue("loss of consciousness", 0);
console.log(ER_queue);
console.log(ER_queue.values.length);

console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log("extracted Node", ER_queue.dequeue());
console.log(ER_queue);
console.log(ER_queue.values.length);