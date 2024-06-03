
//find the max no, of digits, k for the numbers in the array
//iterate the array k times
   //for each iteration 
    //create bucket arrays from 0 to k
    // get the i th digit of given number
    // based on i, place the num in corr. buckets
    // at the end of iteration, replace the original with buckets arrays in the same order that was created

function radixSort(arr){
  let iterations =  digitCount(arr);
  console.log( digitCount(arr));

}
console.log(radixSort([345, 456454, 234324324, 4565454]))

function digitCount(num){
  return num.toString().length;
}