
// Write a recursive function called fib which accepts a number and 
// prints n numbers in the Fibonacci sequence. Recall that 
// the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,13, ... 
// which starts with 1 and 1, and where every number thereafter 
// is equal to the sum of the previous two numbers.

function printFiboSeries(n){

  let fibo=[1,1];

  for(let i=1;i<n;i++){
   let sum= fibo[i]+fibo[i-1];
   fibo.push(sum);
  }
console.log(...fibo)
}

printFiboSeries(8);