//calculate sum of n numbers using recursion

//define base cse
//provide different inputs for each recursive call
//add return
function sumRecursive(n){
 if(n===1){
    return 1;
 }
 return n+ sumRecursive(n-1);
}

console.log(sumRecursive(2));
console.log(sumRecursive(10));