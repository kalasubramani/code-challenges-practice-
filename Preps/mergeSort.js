

function mergeSort(arr,l,h) {
  // code here
   //exit cnd
    if(arr.length <=1) return arr;

   let mid  = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid),0,mid);
  let right = mergeSort(arr.slice(mid,arr.length),mid,arr.length);
  // console.log(left,right);
  return mergeArrays(left,right);
}

function mergeArrays(arr1,arr2){
  //find arr1 len and arr2 len
  //use two pointers i,j
  //loop until i ,j < len
      //if ele of arr1 <ele of arr2
          //push ele of arr1 to sorted
      //else
          //push ele of arr2 to sorted
  
  //if there are ele remaining in arr1
      //insert those ele into sorted
  
  //if there are ele remaining in arr2
      //insert those ele into sorted
      
//return sorted arr

// console.log("mergeArrays",arr1,arr2)
let m = arr1.length, n=arr2.length,i=0,j=0,sorted=[];

while(i<m && j<n){
   if(arr1[i]<arr2[j]) {
       sorted.push(arr1[i]);
       i++;
   }else{
       sorted.push(arr2[j]);
       j++;
   }
}
if(i<m) sorted.push(...arr1.slice(i));
   if(j<n) sorted.push(...arr2.slice(j));
   
  //  console.log("mergeArrays - sorted",sorted)
   return sorted;

}

const arr= [4, 1, 3, 9, 7];
console.log(mergeSort(arr,0,arr.length-1))
