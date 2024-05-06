
function divideAndConquer(arr,x){
 let position, middle,result=false,length =arr.length-1, left =0,right=length;

 //sort the input
 //check if ele is greater or equal to leftmost ele, else return false
 //check if ele is equal to leftmost ele
 //check if ele is equal to rightmost ele
 //find mid point
 //check if ele is less than midpoint,
    //yes - set left =0 , right = midpoint
    //no - set left = midpoint, right = arr.length-1
 //get middle 

 arr.sort();

 if(x<arr[0] || x>arr[length]){
  return false;
 }

 if(x === arr[0]){  // || x=== arr[length]){
   position= 0;
   result= true;
 }

 if(x=== arr[length]){
  position= length;
  result= true;
}
console.log(" sorted arr ",arr);
while(left<=right){
  middle = Math.floor((left+right)/2);
 
  if(x<arr[middle]){
    
    right=middle-1;
  }else if(x>arr[middle]){
    left = middle+1;
   
  }else if(x===arr[middle]){
    position = middle;
    result=true;
    console.log(`position of ${x} is ${position}`);
    return result;
  }

}

 return result;
}

console.log(divideAndConquer([-2,-3,0,4,5,2,4,3,2,-2,4],3))