
//implement binary search given a sorted array and a value
//return -1 if value is not found

function binarySearch(arr,value){ // O log(n) - even when the input size is doubled, it just takes one more iteration to find the value => log n
//find mid point
//assign left pointer to 0 and right pointer to end
//check if mid point === value
    // return index
  // else if mid point < value 
    //set left to the mid point+1   
  //else if mid point > value
   //right = mid -1
   //find new mid point
  //ele not found , return -1

   //handle arr is empty
   if(arr.length===0) return;
   //handle arr has one ele
   if (arr.length===1 ){
      if(arr[0]===value )  return 0
      else return -1; 
    } 

  
   let leftpointer = 0;
   let rightpointer = arr.length-1;
   let midpoint = Math.floor((leftpointer+rightpointer)/2);   
  
   while(leftpointer<=rightpointer){
    //  console.log( leftpointer,midpoint,rightpointer);
     if(arr[midpoint]===value){
      return midpoint;
     } else if(midpoint<value){
      leftpointer = midpoint+1;        
     }else{
       rightpointer=midpoint-1;     
     }
     midpoint = Math.floor((leftpointer+rightpointer)/2);   
   }
  return  -1;
}

console.log(binarySearch([23,25,46,49,50,65,72,82,94],72));