
//Check whether the two Binary Search Trees are Identical or Not
// Given the root nodes of the two binary search trees. The task 
// is to print “Both BSTs are identical” if the two Binary Search 
// Trees are identical else print “Both BSTs are identical”. 
// Two trees are identical if they are identical structurally 
// and nodes have the same values.

function checkBTreeIdentical(root1,root2){
  //define node class
  //decide on traversal method - inorder
  //write a fn to check if trees are identical structurally and with same values
    //if both roots are empty, return 1
    //if either one of the tree is empty, return 0
    //else
      //if root1 data === root2 data 
        //check if root1.left and root2.left are identical
        //check if root1.righr and root2.right are identical
        //if all the above are identical return 1
        //else return 0

      if(root1===null && root2===null) return true;
      else if (root1===null && root2!==null) return false;
      else if (root1!==null && root2===null) return false;
      else{
        //check if data in both trees are identical
        if(root1.data===root2.data &&
          checkBTreeIdentical(root1.left,root2.left)===true &&
          checkBTreeIdentical(root1.right,root2.right)===true)
          return true;
        else 
          return false;
      }
}
class Node{
  constructor(data){
    this.data = data;
    this.right=null;
    this.left=null;
  }
}
// function inOrder(root){
//   if(!root) return;
 
//   inOrder(root.left);
//   console.log("root",root.data+" ");
//   inOrder(root.right);
// }


//driver code
let root1=new Node(5);
root1.left=new Node(3);
root1.right=new Node(8);
root1.left.left = new Node(2);
root1.left.right = new Node(4);

let root2= new Node(5);
root2.left=new Node(3);
root2.right=new Node(8);
root2.left.left = new Node(2);
root2.left.right = new Node(4);
// root2.left.left.left = new Node(12);//false

//inorder traversal
checkBTreeIdentical(root1,root2)?
  console.log("binary trees are identical"):
  console.log("binary trees are not identical")