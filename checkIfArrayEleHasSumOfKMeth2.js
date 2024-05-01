function checkIfArrayEleHasSumOfKMeth2(arr,k){
  let result = false;

  //use two pointers
  //sort the array
  //add left + right =k ? return
  //if left+right > k ? move right back by one step
  //if right + left <k ? move left fwd by one step
  let left =0, right,counter=0,filteredArr=[];
  arr.sort();
  console.log("arr len ",arr.length);

  //for huge array size, reduce input size
  arr.forEach((ele)=>{ele<=k && filteredArr.push(ele) })
  right = filteredArr.length-1;
  console.log("sorted arr ",filteredArr);
  
  while(left<right){
    counter++;
  let sum = filteredArr[left]+filteredArr[right];
 
    if(sum===k){
      console.log(`matched ${filteredArr[left]} ${filteredArr[right]}`);
      right--;
    }else if(sum > k){
      right--;
    }else{
      left++;
    }    
  }
  console.log("counter ",counter);
  return result;
}
// console.log(checkIfArrayEleHasSumOfKMeth2([-2,-3,0,4,5,2,4],3));
console.log(checkIfArrayEleHasSumOfKMeth2([-2,-3,0,4,5,2,4,23,34,5,4,8,5,3,6,7,1],3));