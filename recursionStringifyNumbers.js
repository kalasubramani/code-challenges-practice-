
// Write a function called stringifyNumbers which takes in an object and 
// finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers 
// converted to strings, and not modify the original. Keep the original object unchanged.

function recursionStringifyNumbers(input){
  //exit cnd
  //get each ele in obj
    //if ele is obj
      //call recursive
      //pass on ele as input to recursive fn, assign result to obj
      
    //else if ele is number
      // replace the value of the key as a string
    //else
      //cpy values from input as such


  let obj = {};

  for(let key in input){    
     if(input[key] instanceof Object){     
      obj[key] = recursionStringifyNumbers(input[key]);
     }else if(typeof input[key] === 'number'){     
      obj[key] = input[key].toString();
      // console.log(obj[key]);
     }else{
      obj[key]=input[key];
     }

  }
  return obj;
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

console.log(recursionStringifyNumbers(obj1));