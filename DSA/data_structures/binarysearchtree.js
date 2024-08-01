
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

  //do a breadth first search of the tree and print out the nodes visited
  BreadthFirstSearch(){
    //use a Queue to hold the list of next nodes to be traversed
    //use an array to hold the order of the nodes to be printed
    //get the root node and add to Q
    //loop as long as Q has nodes
        //add dequeue from Q and add to printlist
        //does node.left exists, then add it to Q
        //does node.right exists, then add it to Q
        
    //return printlist
    
    let q =[], printList=[],node=this.root;

    q.push(node);
    while(q.length){
         node = q.shift();
        printList.push(node.value);
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
    }
    return printList;
  }

   //traverse the tree vertically and print the order in which nodes are visited
  //Preorder - visit left node, root and then the right node
  DepthFirstSearch_PreOrder(){
    //if there is no root, return undefined
    //create a variable printList to store the order of nodes that are visited
    //store root as current
    //pass current to a recursive fn - traverse()
    //return printlist

    //traverse(node) - traverses the given node in preorder search
        //add node to printlist
        //if node.left exist, traverse(node.left)
        //if node.right exist, traverse(node.right)

    if(!this.root) return undefined;

    let printList=[], current = this.root;

    function traverse(current){
      if(current) printList.push(current.value);
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);   
  }
    traverse(current);
    return printList;
    
  }
 
  //traverse the tree vertically and print the order in which nodes are visited
  //Postorder - visit left node, right node and then root
  DepthFirstSearch_PostOrder(){
    //if there is no root, return undefined
    //create a variable printList to store the order of nodes that are visited
    //store root as current
    //pass current to a recursive fn - traverse()
    //return printlist

    //traverse(node) - traverses the given node in postorder search       
        //if node.left exist, traverse(node.left)
        //if node.right exist, traverse(node.right)
         //add node to printlist

    if(!this.root) return undefined;

    let printList=[], current = this.root;

    function traverse(current){      
      if(current.left) traverse(current.left);
      if(current.right) traverse(current.right);   
      if(current) printList.push(current.value);
  }
    traverse(current);
    return printList;
    
  }

  //traverse the tree vertically and print the order in which nodes are visited
  //Inorder - visit left node, root and then right node
  DepthFirstSearch_InOrder(){
    //if there is no root, return undefined
    //create a variable printList to store the order of nodes that are visited
    //store root as current
    //pass current to a recursive fn - traverse()
    //return printlist

    //traverse(node) - traverses the given node in postorder search       
        //if node.left exist, traverse(node.left)
        //add node to printlist
        //if node.right exist, traverse(node.right)
         

    if(!this.root) return undefined;

    let printList=[], current = this.root;

    function traverse(current){      
      if(current.left) traverse(current.left);
      if(current) printList.push(current.value);
      if(current.right) traverse(current.right);       
  }
    traverse(current);
    return printList;
    
  }
}

let bst = new binarysearchtree();
bst.insert(10);
bst.insert(15);
bst.insert(6);
bst.insert(8);
bst.insert(20);
bst.insert(3);


console.log(bst);
//  console.log(bst.find(10));
console.log(bst.find(99));
console.log(bst.find(15));
console.log("BreadthFirstSearch: ",bst.BreadthFirstSearch());
console.log("DepthFirstSearch_PreOrder: ",bst.DepthFirstSearch_PreOrder());
console.log("DepthFirstSearch_PostOrder: ",bst.DepthFirstSearch_PostOrder());
console.log("DepthFirstSearch_InOrder: ",bst.DepthFirstSearch_InOrder());
