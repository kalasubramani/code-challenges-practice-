// Write a recursive function called flatten which accepts an 
// array of arrays and returns a new array with all values flattened.

function recursionFlattenArray(arr){
  //exit cnd
  //get each ele in array
    //if ele an array
       //yes- take the ele array, recurse and concat it to result, assign the output to result
       //no - push the ele into the result

  // exit cnd
  if(arr.length ===0) return;

  let result =[];

  arr.forEach(ele => {
    if(Array.isArray(ele)){
       result = result.concat(recursionFlattenArray(ele));
      // result = result.concat(ele);
    }else{
      result.push(ele);
    }
  });

  return result;

}

console.log(recursionFlattenArray([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]

console.log(recursionFlattenArray([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(recursionFlattenArray([[1],[2],[3]])); // [1,2,3]
console.log(recursionFlattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]