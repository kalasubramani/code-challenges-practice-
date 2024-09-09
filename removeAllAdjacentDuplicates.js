// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.
// We repeatedly make k duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
// Example 1:
// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.

// Example 2:
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

// Example 3:
// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

// Constraints:
// 1 <= s.length <= 105
// 2 <= k <= 104
// s only contains lowercase English letters.

function removeAllAdjacentDuplicates(input, K) {
  //use multiple pointers methods - 3 pointers
  //check if input length is between 1 and 105, else return "invalid input"
  //check if K is between 2 and 104, else return "invalid input"
  //check if s has only lowercase letter, else return "invalid input"
  //initialize a loop with i=0,j=i+1,k=i+2
  //check if ith, jth and kth chars are same
  //yes - get left = chars before i, right = chars after k
  // delete i,j,k
  // reset input = left+right
  //reset i,j,k to initial values
  //return input 

  if (!(input.length >= 1 && input.length <= 105)) return "Invalid input - input length";
  if (!(K >= 2 && K <= 104)) return "Invalid input-K";
  if ((/[A-Z]/.test(input))) return "Invalid input-AZ";
  let originalLength=input.length;

  while (true) {
    for (let i = 0; input.length >=K && i + (K - 1) < input.length; i++) {
      let Kchars = input.substring(i, i + K);
      if (areAllCharsSame(Kchars)) {
        let leftPart = input.substring(0, i), rightPart = input.substring(i + K);
        input = leftPart.concat(rightPart);
        break;
      }
    }
  //exit for input is less than K chars or if input does not have duplicates
   if(input.length<=K || input.length=== originalLength )
     break;
  }

  return input;
}

function areAllCharsSame(str) {
  //checks if all chars in the string are same
  let i = 0;
  while (i < str.length - 1) {
    if (str[i] === str[i + 1])
      i++;
    else
      return false;
  }
  return true;
}
// console.log(checkForDuplicates("ssshsss"));
// console.log(removeAllAdjacentDuplicates("",2));
// console.log(removeAllAdjacentDuplicates("s",1));
// console.log(removeAllAdjacentDuplicates("sD",2));
console.log(removeAllAdjacentDuplicates("abcd", 2));//abcd
console.log(removeAllAdjacentDuplicates("deeedbbcccbdaa", 3));//aa
console.log(removeAllAdjacentDuplicates("pbbcggttciiippooaais", 2));//ps