

function almostIncreasingSequence(input) {
  //check if input.length is within 2 to 10 ^5
  //check if input[i] is within -10 ^5 to 10 ^5

  //iterate thru the array
  //find diff = input[i+1] - input[i]
  //if diff >1 , continue
  //else 
  //check if toSlice has a value
  //yes- return false - more than one ele to remove
  //no - store the toSlice to index of i+1
  //return true

   if (!(input.length >= 2 && input.length <= Math.pow(10, 5))) return "Invalid input";

  let toSliceIdx;
  for (let i = 0; i < input.length - 1; i++) {   
    console.log(input[i ] ,input[i+1],input[i + 1] - input[i],toSliceIdx)
    if ((input[i ] > input[i+1])) {        
      if (toSliceIdx) return false;
      else  {
        toSliceIdx = i ;
        input.splice(i,1);
        i--;
      console.log("toSliceIdx",toSliceIdx,input);
    }    
  }
 }
 return true;
}
  console.log(almostIncreasingSequence([1, 3, 2, 1])); //false
  console.log(almostIncreasingSequence([1, 7, 9])); //true
  console.log(almostIncreasingSequence([1, 2, 1, 2]));//false
  console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));//true