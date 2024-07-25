
class Node{
  constructor(value){
    this.value=value;
    this.right=null;
    this.left=null;
  }
}

class binarysearchtree{
 constructor(){
  this.root=null;
 }
}

let bst= new binarysearchtree();
bst.root = new Node(10);
bst.root.left = new Node(8);
bst.root.right = new Node(15);
bst.root.left = new Node(9);

console.log(bst);
