
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
    //if root does not exists, make new node as root, return Tree
       
    //while true 
      //if root.value === value, then return undefined
      //check if value > root  
          // if there is no root.right
                //  set root.right = new node
                //return tree
          //else new root = root.right and continue
      // else if root < value
        //if there is no root.left
              //set new node as root.left
              //return tree
        //else new root = root.left and continue

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
     //check if root === value then return root  
    //while true        
       //check if value > root 
           //if there is no right node, return false   
           // if root.right ===value then return true
             //set root = root.right
         //else
           //if there is no left node, return false
           //if root.left === value, then return true
           //set root as root.left
           
    //return false

    if(!this.root)  return undefined;
    if(this.root.value===value) return true;//return this.root;
    
    let rootNode = this.root,hasValue=false;
    console.log("finding..",value)
    // console.log(rootNode.right.value,rootNode.left.value,value) 
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
    }
    return hasValue;
  }
}

let bst = new binarysearchtree();
bst.root = new Node(10);
bst.root.left = new Node(8);
bst.root.right = new Node(15);
bst.insert(9);
console.log(bst);
//  console.log(bst.find(10));
console.log(bst.find(99));
console.log(bst.find(15));
