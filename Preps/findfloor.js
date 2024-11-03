
function findFloor(arr, k) {
  // your code here
  //check if arr size is between 1 to 10^6, else return
  //check if arr ele is between 1 to 10^6, else return
  //check if K is between 0 to last ele of arr, else return
  
  //use binary search
  //start =0, end = arr length
  // while start<end
      //find mid = (start+end)/2
      //if mid <= k 
          //check if next ele >k, return idx
      // if mid >k
          //move end to mid-1
      //if mid <k
          //move start to mid+1
          
  // return -1
  

  
  let res={},max=-1;
 let temp= arr.filter((val,idx)=>{
     if(val<=k){
          res[val] = idx;
          if(!max) max = val;
          else if(val>max) max=val;
     }
 })
  console.log(temp,res,max,res[max])
 
 return res[max]??-1;
}

console.log(findFloor([10143, 29122, 30010],23112))