// Given an array of strings, return another array containing all of its longest strings.

// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// Input/Output
// [execution time limit] 4 seconds (js)
// [memory limit] 1 GB
// [input] array.string inputArray
// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(inputArray) {
  //check if inputarr.length is between 1 to 10, else throw "invalid input"
  //check if inputarr[i].length is between 1 to 10. else throw "invalid input"
  //initalize maxlen=0, result ={}
  //loop thru each ele in the array
      //find length of curr ele
      //if curr len > max len
              // replace max len
              //add len:[ele] into result
              //if result[len] existsi n result, push new ele into the array
  //return result[maxlen]
  
  if(!(inputArray.length >=1 && inputArray.length<=10)) return "Invalid input";
  
  let maxLength=0,result={};
  for(let i=0;i<=inputArray.length-1;i++){
      if(!(inputArray[i].length>=1 && inputArray[i].length<=10)) return "Invalid Input";
      if(inputArray[i].length >= maxLength){        
          maxLength=inputArray[i].length;
          result[maxLength]? result[maxLength].push(inputArray[i]): result[maxLength]= [inputArray[i]];      
      }
  }
    return result[maxLength];
  }
  
  console.log(allLongestStrings( ["aba", "aa", "ad", "vcd", "aba"])); // ["aba", "vcd", "aba"]
  console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"])); //["eeee", "abcd"]