
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size. Since he likes to make things perfect, 
// he wants to arrange them from smallest to largest so that each statue will be bigger 
// than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
// Help him figure out the minimum number of additional statues needed.

// Example
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// An array of distinct non-negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
// 0 ≤ statues[i] ≤ 20.


function makeArrayConsecutive(input){
  //if input.length is not within 1 to 10, return "Invalid input"
  //if input[i] is not within 0 to 20,  return "Invalid input"

  //sort the array
  // let counter =0
  //loop thru each ele in array
    //if arr[i+1]-arr[i] > 1
       //add the diff to counter
  //return counter

  if(!(input.length >=1 && input.length<=10)) return "Invalid input";
  
  input=input.sort((a,b)=>a-b);
  console.log("input", input);
  let counter =0;
  for(let i=0;i<input.length-1;i++){
    if(input[i]<0 || input[i]>20) return "Invalid input";
    let diff = input[i+1]-input[i];
    if( diff > 1)
      counter +=diff-1;
  }

  console.log("counter",counter);
  return counter;
}

makeArrayConsecutive( [6, 2, 3, 8]);
makeArrayConsecutive( [6, 2, 3, 8,10,12]);