

function test(arr){
  //initialize currSum=arr[0] and maxSum=arr[0]
    //iterate thru the array from 1
      //add i to currSum get max(i,currSum+i) as currsum
      //get max(maxsum,currsum) as maxsum

  //return maxsum
  let length = arr.length;
  if(length===0) return arr;
  let curSum=arr[0];maxSum=arr[0];
  for(let i=1;i<length;i++){
    curSum=Math.max(arr[i],curSum+arr[i]);
    maxSum=Math.max(curSum,maxSum);
  }
  return maxSum;
}

console.log(test([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6
