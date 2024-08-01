// heap is a tree with some special constraints
//binary heap - has two children for each node
//types of binary heap - maxBinaryHeap and minBinaryHeap
//maxBinaryHeap - root node has value greater than its child nodes
//minBinaryHeap - root node has value less than its child nodes
class maxBinaryHeap {
  //the values of the heap are flattened into an array
  //a node's parent and a node's child can be found using a formula to bring out the "structure" of a heap
  // to reach a node n's parent, Floor((n-1)/2)
  //to reach a node n's child, 2n+1 for left child and 2n+2 for right child
  constructor() {
    this.values = [];
  }

  //insert a value into maxBinaryHeap and bubbleup the value to the right node in the heap
  insert(value) {
    //add new value to the end of the array
    //bubble up the value to right spot
    //repeat until the root node
    //find the parent of the new node
    //check if parent < new node
    //if yes, swap and return new heap
    //else stop and break

    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.values[parentIdx] < this.values[index]) {
        [this.values[parentIdx], this.values[index]] = [this.values[index], this.values[parentIdx]];
        index = parentIdx;
      } else break;
    }
  }
}

let heap = new maxBinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(45);
heap.insert(4);
heap.insert(25);
console.log(heap);
