
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarysearchtree {
  constructor() {
    this.root = null;
  }
  //insert a new node to a bst
  insert(value) {
    //create new node with provided value
    //check if root exists
    // else - make new node as root, return Tree
    //check if value > root   
    //while value > root       
    //let new root = root.right
    // if there is no root.right
    //  set root.right = new node
    // else if root < value
    //set root.left = new node
    //else
    // while value < root
    // let new root = root.left
    //if there is no root.left
    //set new node as root.left
    //else if value > root
    //set root.right = new node

    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let rootNode = this.root;
    while (true) {
      //handle duplicates
      if(value === rootNode.value) return undefined;

      if (value > rootNode.value) {
        if (!rootNode.right){
          rootNode.right = newNode;
          return this;
        }
        rootNode = rootNode.right;
      } else {
        if (!rootNode.left){
          rootNode.left = newNode;
          return this;
        }
        rootNode = rootNode.left;
      }
    }
  }

  //find if a value exists in given tree
  find(value){
    //if there is no root, return false
    
    //while true   
      //check if root == value then return root
       //check if value > root                   
           //let new root = root.right
           // if root.right ==value
                //  return root.right
             //set root = root.right
         //else
           //set root as root.left
           //else if value > root
    //set root.right = new node

    if(!this.root)  return undefined;
    if(this.root.value=value) return true;//return this.root;

    let rootNode = this.root,hasValue=false;
    while(rootNode && !hasValue){
      if(value > rootNode.value){        
        if(!rootNode.right) return hasValue;
        else if(rootNode.right.value===value) return !hasValue;// rootNode.right;
        rootNode=rootNode.right;        
      }else{
        if(!rootNode.left) return hasValue;
        else if(rootNode.left.value===value) return !hasValue;//rootNode.left;
        rootNode=rootNode.left;
      }
      return found;
    }
    

  }
}

let bst = new binarysearchtree();
bst.root = new Node(10);
bst.root.left = new Node(8);
bst.root.right = new Node(15);
bst.insert(9);
// console.log(bst);
console.log(bst.find(8));
console.log(bst.find(99));
