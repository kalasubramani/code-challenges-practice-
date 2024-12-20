//time complexity O(nlog(n)) decompositions

function quickSort(arr, left = 0, right = arr.length) {
  //exit cnd if left index is less than right index ,keep going. else stop
  if (left < right) {
    //call pivot helper on the array
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivotHelper(arr, start = 0, end = arr.length + 1) {
  //set pivot as first ele
  let pivot = arr[start], swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    //if ele is less than pivot, inc swapIdx
    console.log("arr[i]",i,arr[i],pivot)
    if (pivot > arr[i]) {
      swapIndex++; //inc no. of ele that is greater than pivot
      //swap the ele to the swapIndex position     
      swap(arr, swapIndex, i);
      console.log(arr);
    }
  }//for

  //swap the start ele to swapIndx position
  swap(arr, start, swapIndex);
  console.log(arr);
  return swapIndex;
}

function swap(arr,swapIndex,i){
  [arr[swapIndex],arr[i]] = [arr[i],arr[swapIndex]];
}

console.log(quickSort([1, 12, 67, 34, 121, 21, 3, 18, 5, 20]));