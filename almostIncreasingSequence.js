

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

  let sliced = false;
  while (true) {
    let slicingIdx = checkSequence(input);

    if(!slicingIdx) return true;

    if (slicingIdx && !sliced) {
      input.splice(slicingIdx, 1);
      console.log("toSliceIdx", slicingIdx, input);
      sliced = true;
    }
    else
    return false;
  }
  
}

function checkSequence(arr) {
  let idxToSlice;
  for (let i = 0; i < arr.length - 1; i++) {
    
    if ((arr[i] > arr[i + 1])) {  //ith ele is off sync
      if (arr[i + 2] > arr[i + 1] && arr[i - 1] < arr[i])      //i-1, i+1 & i+2 are in inc seq 
        idxToSlice = arr[i];//remove ith ele      
        console.log(arr[i], arr[i + 1], arr[i + 1] - arr[i], idxToSlice)
    }
  }
  return idxToSlice;
}
console.log(almostIncreasingSequence([1, 3, 2, 1])); //false
console.log(almostIncreasingSequence([1, 7, 9])); //true
console.log(almostIncreasingSequence([1, 2, 1, 2]));//false
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));//true