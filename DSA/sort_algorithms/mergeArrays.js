//merge two arrays 
//given arrays are already sorted in a certain order
//arrays can be of any length

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

console.log(mergeArrays([12,21,34,67,121],[3,5,18,20]))