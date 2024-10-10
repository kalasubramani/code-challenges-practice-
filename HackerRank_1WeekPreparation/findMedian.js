
function findMedian(arr){
  //if arr len is not odd, return error
  //sort the array
  //find midpoint
    //if arr len/2 is even, midpoint +=1
  //return arr[midpoint]

  if(arr.length %2 ===0) throw new Error("Invalid input")
  arr.sort((a,b)=>parseInt(a)-parseInt(b));
   let midpoint = Math.floor(arr.length/2);
  //  if(midpoint%2===0) midpoint+=1;
   console.log(arr,arr.length,Math.floor(arr.length/2),"mid",midpoint,arr[midpoint])
   return arr[midpoint];
  
}

console.log(findMedian([14, 3, 19, 0, 4, 1,5]));
console.log(findMedian([14, 3, 19, 0, 4, 1,5,7,9,17,11,24,2,34,56,13,78,66,99,23,12]));