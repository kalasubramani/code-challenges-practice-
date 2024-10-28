

// Name: ((Bal(a)nce))
// Task: Determine if a given string of parentheses is balanced.
// Constraints: Input string length is between 1 and 10^4.
// Output Format: true or false
// Sample Test Cases: in: "((Bal(a)nce))" out: true
// in: "((())" out: false

// Determine if a given string of parentheses is balanced, 
// considering multiple types of brackets 
// (e.g., (), [], {}), and ensuring O(n) complexity.


function balanced(str) {
  //if str is emopty, throw error
  //if str.length is 1, return false
  //if str.length is not within 1 to 10^4, throw error
  //iterate thru each char
  //ignore all chars except paranthesis
  //if char is a valid open paranthesis, push its matching closing paranthesis into stack
  //if char is a valid closing paranthesis,
      // pop the first item from stack
      //check if current ===poped
      //true - move to next char
      //false - return false
  let length = str.length;
  if (length === 0) throw new Error("Invalid input");
  if (length === 1) return false;
  if (!(length > 1 && length <= Math.pow(10, 4))) throw new Error("Input length out of bounds");
  let stack = [];
  let paranthesis = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  
    for(let char of str){ 
        if (paranthesis[char])   
          stack.push(paranthesis[char]);
        
        else if(Object.values(paranthesis).includes(char)&& char!==stack.pop())
            return false;          
        }
  
  return (stack.length===0)?true:false;
}

console.log(balanced("((Bal(a)nce))"));//true
console.log(balanced("((())"));//false
console.log(balanced("()")); //true
console.log(balanced("(]"));//false
console.log(balanced("(])()["));//false