
//get the first longest sub linkedlist where consecutive digits are in non-increasing order
class llNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function findSubLLWithNumsInDescOrder() {
  //create a new Linked list
  let head = new llNode(3);
  head.next = new llNode(5);
  head.next.next = new llNode(5);
  head.next.next.next = new llNode(4)
  head.next.next.next.next = new llNode(2);
  head.next.next.next.next.next = new llNode(3);
  head.next.next.next.next.next.next = new llNode(5);

  // console.log("linked list ", head);

  let result = getChunks(head);

  while(result){
    console.log("node ", result.val);
    result = result.next;
  }
  


}

function getChunks(head) {
  let maxLength = 0, currentLength = 1, currentStart = head, subListStart = head, subListEnd = head; //holds all sub arrays

  while (head && head.next) {
    if (head.val >= head.next.val) {//if next is equal or smaller  
      currentLength++;
      // console.log("head ",head);
    } else {//the next is greater
      if (currentLength > maxLength) {//if there is a subarray that is greater then current length
        maxLength = currentLength; //get the pointers for creating a sublist
        subListStart = currentStart;
        subListEnd = head;
      }
      //reset fpr next iteration
      currentLength = 1;
      currentStart = head.next;
    }//if
    head = head.next;
  }//while

  if (currentLength > maxLength) {//handle last iteration
    maxLength = currentLength; //get the pointers for creating a sublist
    subListStart = currentStart;
    subListEnd = head;
  }

  //set last node.next = null in sublist
  subListEnd.next = null;
  // console.log("sublist ", subListStart);
  return subListStart;
}//fn

findSubLLWithNumsInDescOrder();