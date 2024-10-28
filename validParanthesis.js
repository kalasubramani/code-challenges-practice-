// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function validParanthesis(input) {
  const stack = [];
  const paranthesis = { ')': '(',
                       '}': '{', 
                       ']': '[' };

  for (const char of input) {
    console.log("char",char,paranthesis[char])
    //adds on all open paranthesis in stack
    if (!paranthesis[char]) {
      console.log("if")
      stack.push(char);
    }
    else if (stack.pop() !== paranthesis[char]) {
      //checks if a open paranthesis in stack got a matching close paranthesis from input
      console.log("else")
      return false;
    }
    console.log(stack,char);
  }
  return stack.length === 0;
}

console.log(validParanthesis("()")); //true
console.log(validParanthesis("(]"));//false
console.log(validParanthesis("(])()["));//false