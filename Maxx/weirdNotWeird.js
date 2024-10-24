// Name: WeirdNotWeird
// Task: "Given an integer, n, perform the following conditional actions:
// - If n is odd, print Weird
// - If n is even and in the inclusive range of 2 to 5, print Not Weird
// - If n is even and in the inclusive range of 6 to 20, print Weird
// - If n is even and greater than 20, print Not Weird"
// Constraints: 1 <= n <= 100
// Output Format: Print Weird if the number is weird; otherwise, print Not Weird
// Sample Test Cases: 
// in: 3 out: Weird
// in: 24 out: Not Weird

// Bonus Challenge
// Task: Modify the original function to handle multiple integers in one go. You will receive a list of integers, and for each integer in the list, you must determine whether it is “Weird” or “Not Weird” based on the original rules. Print the result for each integer on a new line.
// Additional Requirements:
//  • If an integer is outside the given constraints (1 <= n <= 100), print “Invalid” for that integer.
//  • Implement this without using loops.
// Input Format:
//  • A list of integers, numbers.
// Output Format:
//  • For each integer in the list, print “Weird,” “Not Weird,” or “Invalid” on a new line.






function isEvenWithinRange(n) {
  if (n >= 6 && n <= 20) return true;
  return false;//n>20 or (n>=2 && n<=5)   
}

function isOdd(n){
  return (n % 2 !== 0) ;
}

function weirdNotWeird(input) {
  //base cnd
  if (!input.length) return;

  //call the function recursively for each ele in the array
  let current = input.pop();
  weirdNotWeird(input);

  //if n is odd, print weird else check range for even nums
  let isWeird = false;
  if (!Number.isInteger(current) || current===0 || current > 100) {
    console.log("Invalid");
  } else {   
    isWeird = isOdd(current)|| isEvenWithinRange(current);
    isWeird ? console.log("Weird") : console.log("Not Weird")
  }
}


let input = [123, 12312, 3, 2, 5, 7, 21, 24,0,4]
weirdNotWeird(input);