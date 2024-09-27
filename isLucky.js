


function isLucky(num){
  //check if num is within 10 to 10^6, else throw "Invalid input"
  //check if num.length is even, else throw "Invalid input"
  //find mid point
  //write a fn findsum that finds the sum a given index
  //call findsum for start to midpoint
  //call finssum for midpoint to end
  //check if lhs===rhs return true else false

  //check id arr[i] falls within the accepted range

  if(!(num>=10 && num<=Math.pow(10,6))) return "Invalid input";
  num = num.toString();
  if(!(num.length % 2) ===0) return "Invalid input";
  let midpoint = num.length/2;
  let leftSum = findSum(0,midpoint-1,num.toString());
  let rightSum = findSum(midpoint,num.length-1,num.toString());
  return leftSum===rightSum? true:false;

}

//finds the sum of array elements from start idx to end idx
function findSum(startIdx,endIdx,arr){
  let idx=startIdx,sum=0;
  while(idx<=endIdx){  
      sum +=parseInt(arr[idx]);
      idx++;
  }
  return sum;
}

console.log(isLucky(1224));
console.log(isLucky(1221));