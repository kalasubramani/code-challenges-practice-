function checkIfArrayEleHasSumOfK(arr,k){
  let result=false, sorted=[], input={};
//sort the array
//check if last ele of sorted array is <= k, else return false
//take each ele in array, find k-ele and store it in an obj o(n)
//{-2:10,-3:11,0:8,4:4,5:3,2:6,4:4}
//for every ele in array, check + value = k ? return true else false o(n)

sorted=arr.sort(); //o(n)
console.log(sorted);
for(value of sorted){
  let diff = k-value;
  if(!input[diff]){//add Key: ele, value : diff
    input[value] = diff;
  }
}
// console.log("input ",input);


for(value of sorted){  
  let lookup=input[value];//get lookup value i.e. diff
 if(input[lookup]){
  console.log(`matched ${value} ${lookup}`); 
  result = true;
 }
}

return result;
}
console.log(checkIfArrayEleHasSumOfK([-2,-3,0,4,5,2,4],8))
// console.log(-2-8);