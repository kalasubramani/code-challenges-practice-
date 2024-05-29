//accumulates ele in sorted order from left
//at any given point, there is a left portion that is sorted

function insertionSort(arr){

// loop thru starting at index j=1
  //compare if j-1>j
      //yes swap
for(let j=1;j<arr.length;j++){  
  for(let k=0;k<arr.length;k++){   
    if(arr[k]>arr[k+1])
      [arr[k],arr[k+1]] = [arr[k+1],arr[k]];
  }  
  console.log(arr);
}

return arr;
}

console.log(insertionSort([34,12,67,121,21]))