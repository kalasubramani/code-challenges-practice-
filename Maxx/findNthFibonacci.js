// Name: FibonacciSequence
// Task: Write a function that returns the nth Fibonacci number.
// Constraints: 0 <= n <= 30
// Output Format: Return the nth Fibonacci number.
// Sample Test Cases: in: 5 out: 5
// in: 10 out: 55

// Bonus Challenge
// Task: Implement the function using memoization to optimize performance.

function findNthFibonacci(n,memo=[]){

  //check if value of fib(n) exists in memo, yes return the value
  //if n is 0 or 1 return 1
   // call the fn recursively for n-1 and n-2
   //store fib(n) in memo
   //return the sum

   if(memo[n]!==undefined) return memo[n];
   //base cnd
   if(n<=2) return 1;
   let result= findNthFibonacci(n-1,memo) + findNthFibonacci(n-2,memo);
   memo[n]=result;

   return result;
}

console.log(findNthFibonacci(5));
console.log(findNthFibonacci(10));