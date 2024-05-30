
function pivotHelper(arr, start=0,end=arr.length+1){
  //set pivot as first ele
  let pivot =arr[start],swapIndex=start;

  for(let i=start+1;i<arr.length;i++){
    //if ele is less than pivot, inc swapIdx
    if(pivot >arr[i]){
      swapIndex++; //inc no. of ele that is greater than pivot
      //swap the ele to the swapIndex position
      swap(arr,swapIndex,i);
    }
  }//for

  //swap the start ele to swapIndx position
  swap(arr,start,swapIndex);
// console.log(arr);
 return swapIndex;
}
function swap(arr,swapIndex,i){
  [arr[swapIndex],arr[i]] = [arr[i],arr[swapIndex]];
}

console.log(pivotHelper([1,12,67,34,121,21,3,18,5,20]));