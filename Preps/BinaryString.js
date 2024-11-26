// Given a binary string S. The task is to count the number 
// of substrings that start and end with 1. For example, 
// if the input string is “00100101”, then there are three 
// substrings “1001”, “100101” and “101”.

// Example 1:
// Input:
// N = 4
// S = 1111
// Output: 6
// Explanation: There are 6 substrings from
// the given string. They are 11, 11, 11,
// 111, 111, 1111.
// Example 2:

// Input:
// N = 5
// S = 01101
// Output: 3
// Explanation: There 3 substrings from the
// given string. They are 11, 101, 1101.
// Your Task:
// The task is to complete the function binarySubstring() 
// which takes the length of binary string n and a binary string a 
// as input parameter and counts the number of substrings starting 
// and ending with 1 and returns the count.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ |S| ≤ 104

function BinaryString(n,str){
  //check if n is between 1 and 10^4 else return error
  //if n==1, return str
  //iterate through the str  //01101
    //find first occurence of 1, push i to positions[]
    //if start has value && 1 is encountered
        //push i to positions[]
        //get chars from start to each i pos
        //add substring to results
        
    //return length of results    

    if(!(n >=1 && n <=Math.pow(10,5))) return ("Input length out of bounds");
    if(n===1) return str[0]===1?1:0;

    let positions=[],start,count=0;
    for(let i=0;i<n;i++){    
      if(str[i]==='1' && !start){
        positions.push(i);              
      }      
    }
    console.log(positions)
    if(positions.length>1){
      for(let i=0;i<positions.length;i++){ 
        for(let j=i+1;j<positions.length;j++){ 
           console.log(str.slice(positions[i],positions[j]+1));
        count++;
        }
      }
    }
    return count;
}

console.log(BinaryString(5,"01101"));//3
console.log(BinaryString(4,"1111"));//6