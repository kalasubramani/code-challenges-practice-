

function MedianOfArrays(arr1,arr2){
         //base cnd
        //check if arr1 or arr2 is empty, find median of arr that has ele
        //if arr1 , arr2 both has one ele, return median of both ele
        
        //merge the sorted arrays
        //call findmedian() on sorted arr
        //return median
        
        //function - find median
            //if arr length==odd, return ele at mid
            //else add two nums at the middle/2, return result
        
        //function - merge sorted arrays
            //use two pointers i for arr1, j for arr2
            //iterate thru arr1
                //if ele at arr1 < ele at arr2
                    //push arr1 ele to sorted
                    //move arr1 pointer by 1
                //else
                    //push arr2 ele to sorted
                    //move arr2 pointer by 1
            
            //return sorted arr
      
      let m = arr1.length,n=arr2.length;
      if(!(m>=0 && m<=Math.pow(10,6)) || !(n>=0 && n<=Math.pow(10,6))) return;
      
      if( m===0 && n===0) return 0;
      if(m===0 && n!==0) return findMedian(arr2);
      else if(m!==0 && n===0) return findMedian(arr1);
      
     let sorted = mergeArrays(arr1,arr2,m,n);
    console.log(sorted);
     let median = findMedian(sorted);
    // console.log(median);
     
     return median;
      
}
function findMedian(arr){
  if(arr.length%2 !==0){//odd
    let  mid = Math.floor(arr.length/2);
    return arr[mid];
  }else{
    let mid = Math.floor(arr.length/2)
    // console.log(mid,arr[mid] , arr[mid-1] )
    return (arr[mid] + arr[mid-1])/2;
  }

  
  // let mid =arr.length/2;
  // console.log("mid",mid)
  // if( mid%2 ===0) return arr[mid];
  // else {
  //   const left = mid;
  //  const right = mid +1;
  //   return (left+right)/2;
  // }
}

function mergeArrays(arr1,arr2,m,n){
  let i=0,j=0,sorted=[];
  while(i<m && j<n){
      if(arr1[i]<=arr2[j]) {
          sorted.push(arr1[i]);
          i++;
      }
      else {
          sorted.push(arr2[j]);
          j++;
      }
  }
  if(i<m) sorted.push(...arr1.slice(i));
  if(j<n) sorted.push(...arr2.slice(j));
  
  return sorted;
}

const arr1= [900];
let arr2=[5, 8,10, 20];
console.log(MedianOfArrays(arr1,arr2))//10
arr2=[5, 8,9,10, 20];
console.log(MedianOfArrays(arr1,arr2))//9.5