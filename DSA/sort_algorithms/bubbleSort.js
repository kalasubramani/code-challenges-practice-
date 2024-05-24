
// write a sorting fn that takes an array of integers and sorts it
//time complexity n ^2
 //nearly sorted input => linear time o(n)
function bubbleSort(arr){ 
  //start looping from last ele to first - i
  //start inner loop j from 0 to i-1 
  //if ele at j > j+1, swap both values
  //return sorted array
for(let i = arr.length; i>0;i--){
  for(let j=0;j<arr.length ;j++){
    if(arr[j]>arr[j+1]) [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
   }
}

//approach 2 - for partially sorted arrays
//if thre is no swap in a pass, there will be no more swaps
  //--i.e. the rest of the array is sorted, so break the loop
  console.log("Approach 2 - partially sorted array");
  let input = [8,1,2,3,4,5], noSwap;

  for(let i=input.length;i>=0;i--){ //o(n) => 2n
    noSwap=true; ///set default
    for(let j=0;j<i-1;j++){
      if(input[j]>input[j+1]){
        [input[j],input[j+1]]=[input[j+1],input[j]];
        noSwap=false;
      }
    }
    if(noSwap) break;
  }
  
 console.log("approach 2 ", input);
     
  return arr;
}

console.log(bubbleSort([34,12,67,121,21]))