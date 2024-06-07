
//find the max no, of digits, k for the numbers in the array
//iterate the array k times
   //for each iteration 
    //create bucket arrays from 0 to k
    // get the i th digit of given number
    // based on i, place the num in corr. buckets
    // at the end of iteration, replace the original with buckets arrays in the same order that was created

function radixSort(arr){ //O(n) -> O(n*k) n - no. of inputs, k - length of the longest input
  let iterations =  maxDigits(arr);
   
  for(let i =0;i<iterations;i++){
    //create k empty buckets
    let digitBuckets = Array.from({length:10},()=>[]);
      arr.forEach(ele => {          
      let digit = getDigit(ele,i); 
      //push ele to corr. array      
      digitBuckets[digit].push(ele);
      // console.log(digitBuckets);
    });
    arr=[].concat(...digitBuckets);
  }
  return arr;
}
console.log(radixSort([345, 45645, 23432, 4565]))

function maxDigits(arr) {
  let maxLength = 0;
  arr.forEach(e => {
    let length = digitCount(e);
    maxLength = Math.max(length, maxLength);
  });
  return maxLength;
}

function digitCount(num) {
  return num.toString().length;
}

function getDigit(num,pos){
  return Math.floor(Math.abs(num)/Math.pow(10,pos))%10;//math.abs handles negative numbers
}