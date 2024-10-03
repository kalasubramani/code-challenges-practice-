//time complexity O(nlog(n))
//space complexity O(n) - as each element is stored as seperate array in memory. As n grows, space grows

function mergeSort(arr){
  //split up arr into half
  //left part from 0 to mid
  //right part from mid to end
  //recurse until arr is of length 1
    //if result array is of length 1, return arr

  //call mergeArrays with left and right

    //exit cnd
    if(arr.length<=1 ){
      // console.log(arr);
       return arr;
    } 

      let midpoint = Math.floor(arr.length/2);
      let left = mergeSort(arr.slice(0,midpoint));
      let right = mergeSort(arr.slice(midpoint));   
      return mergeArrays(left,right);
}

function mergeArrays(arr1,arr2){
  //declare results array
  //while arr1 has elements
    //loop arr2
    //if arr1[i] is smaller than arr1[j]
      //push smaller value to results 
      //move to next ele in arr1 - break
    //else
        //push arr2[j] to results
        //move on to next ele in arr2
  //if there are remaing ele in arr, push them in same order into results
  //return results
  
  let results=[], i=0,j=0;
  
  while(i<arr1.length &&j<arr2.length){ 
      if(arr1[i]<arr2[j]){
        results.push(arr1[i]);
        i++;
      }else{
        results.push(arr2[j]);
        j++;
      }  
  }//for
  
  if(i<arr1.length) results=results.concat(arr1.slice(i,arr1.length));  
  if(j<arr2.length ) results=results.concat(arr2.slice(j,arr2.length));
  
  return results;
  }

console.log(mergeSort([12,67,34,121,21,3,18,5,20,1,200]))