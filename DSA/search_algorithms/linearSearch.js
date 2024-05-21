
// Write a function called linearSearch which accepts an array and a value, 
// and returns the index at which the value exists. If the value does not
//  exist in the array, return -1.

// Don't use indexOf to implement this function!

function linearSearch(arr,value){

  //check if arr has values, else return
  //use foreach and check for the ele
    //if ele is found 
      //return index of ele
  //return -1

  let indexVal = -1;
  arr.forEach((ele,index) => { 
    if(ele === value)  indexVal=index;
  });
 return indexVal;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))