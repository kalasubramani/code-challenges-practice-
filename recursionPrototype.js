// Write a recursive function called someRecursive which accepts an array and a callback.
//  The function returns true if a single value in the array returns true when passed to 
//  the callback. Otherwise it returns false.

function recursionPrototype(arr,isOdd){
  //exit cnd
  if(arr.length===0) return false;
  
  //handle the first ele
  if( isOdd(arr[0])) return true;
       
   return recursionPrototype(arr.slice(1),isOdd)
    
}

//call back fn
let isOdd = (n)=>{
 return n%2 === 0? true: false;
}

console.log( recursionPrototype([23,567,237],isOdd));
console.log( recursionPrototype([232,567,237],isOdd));