
//print numbers using recursion
//define base case
//call recursivley with diff inputs
//add return

function countdownRecursive(n){
  if(n>0){
    console.log(n);
    n--;
    countdownRecursive(n);
  }
  return "";
}

console.log(countdownRecursive(6));