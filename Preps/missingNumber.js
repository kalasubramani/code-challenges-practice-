// You are given an array arr of size n - 1 that contains distinct integers 
// in the range from 1 to n (inclusive). This array represents a permutation 
// of the integers from 1 to n with one element missing. Your task is to 
// identify and return the missing element.

// Examples:
// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.
// Input: arr[] = [1]
// Output: 2
// Explanation: Only 1 is present so the missing element is 2.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ arr.size() + 1

function missingNumber(arr){
               //check if arr size is between 1tp 10^6, else return
        //check if ar rele is between 1 to arr size+1, else return
        
        //find length = arr.size +1 (as 1 num is missing)
        //find sum from 1 to n using n * (n+1)/2
        //find the sum of arr ele
        //nsum - arrSum gives missing num
        
        let length = arr.length;
        if(!(length>=1 && length <=Math.pow(10,6))) return;
        
        length = length+1;
        const nsum = length *(length+1)/2;
        const arrsum= arr.reduce((acc,val)=>{
                return acc +=val;
        })
        // console.log(arrsum);
        return nsum-arrsum;
}

console.log(missingNumber([8, 2, 4, 5, 3, 7, 1]));//6
console.log(missingNumber([1]));//2