

function fibonacci(n){
  //end cnd
  if(n<=2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}


// memoization - the process of storing results of costly function calls and use 
// the stored results later if the same input occurs without the need to recalculate it
//time efficient, resource efficient
function memoFib(n, memo=[]){
  //check if fib(n) is memoized
  if(memo[n] !== undefined) return memo[n];

 //base cnd
 if(n<=2) return 1;
 let result= memoFib(n-1,memo) + memoFib(n-2,memo);
 memo[n]=result;
 return result;
}

//fibonacci - the bottom up approach
//fib values are calculated from 0 and goes up until n is reached
//in this case the results are stored in a form called tabulation
function tabulationFib(n){
  //base case
  if(n<=2) return 1;

  var fibResults=[0,1,1];//initialize it with default values till n=2
  for(let i=3;i<=n;i++)
    fibResults[i]= fibResults[i-1] + fibResults[i-2];

  return fibResults[n];//return nth value stored
}

console.log("Calculating Fibonacci value for fib(45) ...")


let t1=performance.now();
console.log("Recursive approach Fib(45)",fibonacci(45));
let t2=performance.now();
console.log("Time taken in seconds:",((t2-t1)/1000).toFixed(5));

let t3=performance.now();
console.log("Memoized approach Fib(45)",memoFib(45));
let t4=performance.now();
console.log("Time taken in seconds:",((t4-t3)/1000).toFixed(5))

let t5=performance.now();
console.log("Tabulized approach Fib(45)",tabulationFib(45));
let t6=performance.now();
console.log("Time taken in seconds:",((t6-t5)/1000).toFixed(5));