function findUniqueValues(arr){

  //create a set
  //add each ele to set
  //get the size of set - unique values

  let uniqueList = new Set([...arr]);
  console.log("using Set to store values " , uniqueList);

  //approach 2
  //sort input
  //have two pointers - left , right = left +1
  //if left !== right, increment counter, set left = right, right = right +1
  //if left and right are same, right=right+1

  let left =0, right =left+1, counter =0;
  arr.sort();
  while(left<right && right<arr.length){
    console.log("left : ",arr[left],"right: ",arr[right],"counter ",counter);
    if(arr[left] !== arr[right]){
      counter++;
      left = right;
      right = right+1;
    }else {
      right = right+1;
    }
  }//while

  console.log("Unique Values ",counter);
  return counter;
}

console.log(findUniqueValues([-2,-3,0,4,5,2,4,3,2,-2,4]));