

function largestAndSecondLargest(sizeOfArray, arr)
{
    // code here
    //check if size is between 1 to 10^5,else throw error
    //check if ele is in range 1 to 10^6, else throw error
    //if arr size is 1, return results[ele,-1]
    //sort the arr in desc
    //add first ele to results
    //check if second ele is same as first
            //no - add to results & return
            //yes - loop thru next eles in array until a non-repeating ele is found
                //ele found - add to results and return
                //not found - add -1 to results and return

//   if(!(sizeOfArray>=1 && sizeOfArray<=Math.pow(10,5))) throw new Error("size out of bounds");
let results=[];
if(sizeOfArray ===1) return [arr[0],-1];

arr.sort((a,b)=>b-a);

results.push(arr[0]);
if(arr[0]!==arr[1]) results.push(arr[1]);
else{
    let i=2;
    while(i<sizeOfArray){
        if(results[0]!==arr[i]){
             results.push(arr[i]);
             return results;
        }
       i++;
    }   
    results.push(-1);  
}

return results;
}

console.log(largestAndSecondLargest(17,[30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5]))
console.log(largestAndSecondLargest(17,[30, 11,,49,49, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5]))
console.log(largestAndSecondLargest(4,[30, 30,30,30]))
console.log(largestAndSecondLargest(2,[3, 30]))
console.log(largestAndSecondLargest(1,[30]))