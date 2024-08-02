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
    let newIdx = this.values.length - 1;
    while (newIdx > 0) {
      let parentIdx = Math.floor((newIdx - 1) / 2);
      if (this.values[parentIdx] < this.values[newIdx]) {
        [this.values[parentIdx], this.values[newIdx]] = [this.values[newIdx], this.values[parentIdx]];
        newIdx = parentIdx;
      } else break;
    }
  }

  //extract the root of a heap, replace it with new root and return the old root
  extractMax() {
    //edge case - if there are no nodes, return undefined
    //if there is only one node, return root
    //if there are two nodes, return root and make the child as new root

    //get the last child node of the heap and swap it with the root(index 0)
    //return old root - pop the last node 
    //sink down or percolate down the new root vlaue to get the right root value to the top   
    //get the left child and right child of new root
    //find the greater among the children, if that node is greater than the root and swap it with new root
    //loop until both child nodes are smaller than root,
    // if both are smaller than root, return/break

    if (this.values.length === 0) return undefined;

    let lastIdx = this.values.length - 1; 
    [this.values[lastIdx], this.values[0]] = [this.values[0], this.values[lastIdx]];
  
    let poppedNode = this.values.pop();
    this.sinkDown();
    console.log("current heap", this.values);
    return poppedNode;
  }
  sinkDown() {
    let currentIdx = 0, heapLength = this.values.length;
    while (currentIdx < heapLength) {
 
      if (this.values.length === 2) {
         //if there is only left node, no right node exists
          //compare root and left child
        let leftIdx=currentIdx+1;
       if(this.values[leftIdx] > this.values[currentIdx]) 
          [this.values[leftIdx], this.values[currentIdx]]= [this.values[currentIdx], this.values[leftIdx]]
          
       break;
      }

      let leftIdx = (2 * currentIdx) + 1;
      let rightIdx = (2 * currentIdx) + 2;
     
      if (leftIdx > heapLength || rightIdx>heapLength) break;
     
      let maxIdx = this.values[leftIdx] > this.values[rightIdx] ? leftIdx : rightIdx;
      [this.values[currentIdx], this.values[maxIdx]] = [this.values[maxIdx], this.values[currentIdx]];

      currentIdx = maxIdx;
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
console.log(heap.values.length);

console.log("extracted Node", heap.extractMax());
console.log("extracted Node", heap.extractMax());
console.log("extracted Node", heap.extractMax());
console.log("extracted Node", heap.extractMax());
console.log("extracted Node", heap.extractMax());
console.log("extracted Node", heap.extractMax());
console.log(heap);
console.log(heap.values.length);
console.log("extracted Node", heap.extractMax());
console.log(heap);
console.log(heap.values.length);
