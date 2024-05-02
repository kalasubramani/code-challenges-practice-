function multiplePointers(arr){
//finding unique values 
//frst sort the array
//setup two pointers - left and right
//set left =0, right = left+1
//if values are same move on
//if values are diff, move right value to the left+1 pos
//go on until right = arr length

arr.sort();

let left =0, right = left+1;

while(right < arr.length){ //o(n)
  if(arr[left] !== arr[right]){
    //swap ele   
    left++;
    arr[left] = arr[right];
    right++;
  }else{
    right++;
  }  
  }
  
  // more cleaner sol
  // let i=0;
  // for(let j=1;j<arr.length;j++){
  //   if(arr[i]!==arr[j]){
  //     i++;
  //     arr[i]=arr[j];
  //   }
  // }
  console.log(arr);
console.log(arr.splice(0,left+1));
}

console.log(multiplePointers([-2,-3,0,4,5,2,4,3,2,-2,4]));