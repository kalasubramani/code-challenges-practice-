// Given an array arr of size N and an element k. The task is to 
// find the count of elements in the array that appear more than n/k times.

// Example 1:
// Input:
// N = 8
// arr = [3,1,2,2,1,2,3,3]
// k = 4
// Output: 
// 2
// Explanation: 
// In the given array, 3 and 2 are the only elements that appears more than n/k times.
// Example 2:

// Input:
// N = 4
// arr = [2,3,3,2]
// k = 3
// Output: 
// 2
// Explanation: In the given array, 3 and 2 are the only elements that appears more than n/k times. So the count of elements are 2.
// Constraints:
// 1 <= N <= 105
// 0 <= a[i] <= 109
// 1 <= k <= N
 
//Function to find all elements in array that appear more than n/k times.
function countOccurence(arr, n, k)
{
    //your code here
  
    //check if n is between 1 and 10^5, else return
    //check if arr ele are between 0 to 10^9, else return
    //check if K is between 1 to n, else return
    
      //find freqCnt = n/k
    
    //iterate thru arr
        //if ele is not in freq 
            //yes - add ele:freq
            //no - inc freq of ele
        //if freq>freqCnt, add to results
    
    //return results.length
    
    if(!(n>=1 && n<=Math.pow(10,5))) return;
    if(!(k>=1 && k<=n)) return;
    
    const freqCnt = Math.floor(n/k);
    console.log("freqCnt",freqCnt)
    let freq={},results=[];
    
    for(let i=0;i<n;i++){
        let ele = arr[i];
        if(!(ele>=0 && ele<=Math.pow(10,9))) return;
        
        if(!freq[ele]) freq[ele]=1;
        else freq[ele] +=1;
        
        if(freq[ele]>freqCnt && !results.includes(ele))
           results.push(ele);
    }
    
    console.log(results,freq);
    return results.length;
    
}

console.log(countOccurence([7, 8, 9, 9, 9, 6, 0, 9, 2, 2, 9, 1, 0, 5, 8],15,15))//4