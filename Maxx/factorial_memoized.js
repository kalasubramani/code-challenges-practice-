// New Challenge Time!
// Name: Factorials
// Task: Calculate the factorial of a given number.
// Constraints: n is between 1 and 12.
// Output Format: An integer representing the factorial of n.
// Sample Test Cases: in: 5 out: 120

// Bonus Challenge
// Calculate the factorial of a given number using recursion with memoization to optimize for large inputs.
// in: 100000 out: (a large number)

function factorial(n){
    //use recursion
    //convert n to bigint to accomodate huge factorial result
    //use bigInt for all calculations
    //set base condition if n==1 return 1
    // return n*factorial(n-1) eg 5! = 5*4!

    n = BigInt(n);

    if(n<=1) return 1n;

    return n * factorial(n-1n);
}
let t1=performance.now();
console.log(factorial(1000));
console.log("---Plain recursion---");
let t2=performance.now();
console.log("Time taken in seconds:",((t2-t1)/1000).toFixed(5));


function factorial_memoized(n, memo=[]){
  //convert n to bigInt
  //initalize memo[] as a param to memoize results
   //if factorial of a num is memoized, return value from memo[]
   //else
    //set base cnd n==1, return 1
    //set result = n * fact(n-1)
    //store result in memo[]
    //return result

    n = BigInt(n);
    if(memo[n]) return memo[n];

    if(n<=1) return 1n;
    let result = n* factorial_memoized(n-1n,memo);
    memo[n] = result;
    return result;
}
let t3=performance.now();
factorial_memoized(1000)
console.log("---Memoized approach---");
let t4=performance.now();
console.log("Time taken in seconds:",((t4-t3)/1000).toFixed(5));

function tab_factorial(n){
  //convert n to BitInt
  //use bigint for all calculations to store growing factorial results
  //if n is 0 or 1 return 1
  //iterate from 2 to n
    //for each i calculate result of last factorial (n-1) * i
    //store result as results[n]
  
  // return last value stored

  n = BigInt(n);

  if(n<=1) return 1n;
  let results = [1n,1n]
  for(let i=2;i<=n;i++)
    results[n] = results.pop()*BigInt(i);
    
  return results[n];
}

let t7=performance.now();
console.log("---Tabularization approach---");
console.log("factorial(100000)")
tab_factorial(100000);
let t8=performance.now();
console.log("Time taken in seconds:",((t8-t7)/1000).toFixed(5));