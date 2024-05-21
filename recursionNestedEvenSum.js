// Write a recursive function called nestedEvenSum. 
// Return the sum of all even numbers in an object which may contain nested objects.

function   recursionNestedEvenSum(input,evenSum=0){

  //exit cnd
  //read each value in obj
     //check if ele is an obj
        //yes 
            // call recursive for the ele, 
            //collect sum and add it to cumulative sum
        //no
          //check if it is num and it is even
            //true - add cumulative result
      
  //  if (input.keys) return;

  //  let evenSum=0;
  for(let key in input){
    
    if( input[key] instanceof Object){
        evenSum +=  recursionNestedEvenSum(input[key]);
    // }else if(!isNaN(input[key] ) && input[key] %2===0){
    }else if(typeof input[key] === 'number' && input[key] %2===0){
      //read value of the ele and add it to sum
      console.log(input[key])
      evenSum += input[key];
    }
  }

  return evenSum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

console.log(recursionNestedEvenSum(obj1));