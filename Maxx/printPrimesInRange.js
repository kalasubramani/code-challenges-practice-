
// Name: PrimeNumbers
// Task: Write a function that returns a list of all prime numbers up to a given number n.
// Constraints: 2 <= n <= 1000
// Output Format: Return a list of prime numbers.
// Sample Test Cases: in: 10 out: [2, 3, 5, 7]
// in: 20 out: [2, 3, 5, 7, 11, 13, 17, 19]
// Bonus Challenge
// Task: Modify the function to return the sum of all prime numbers up to n.

function printPrimesInRange(range){
  //if range is not between 2 to 1000 throw error
  //all primes are positive and whole numbers
//even nums are not prime
//2 is prime
//push 2 to primes

//loop thru all odds from 3 to range
  //for each num call checkPrime(n)
  // if prime,push n to primes

//return sum of primes using reduce()

//checkPrime(n)
//to find if a num is prime check if it is divisible by any num from 2 to sqroot of that num -- efficient as n gets bigger
// if n is divisible by any number other than itself
    //return false
//return true

console.log("Range:",range)

if(!(range>=2 && range<=1000)) throw new Error ('Out of Range')

if(range%1!==0) throw new Error('Range is not a whole number')

let primes=[2];//start with 2 as it is the only even prime
if (range===2){
  console.log(primes);
  return 2;
} 

for(let i=3;i<=range;i=i+2){//check all odds in the range
  if(checkPrime(i)) primes.push(i);
}
console.log(primes)
let sumOfPrimes = primes.reduce((acc,val)=>{return acc+val},0);

return sumOfPrimes;
}

function checkPrime(n){
  for(let i=2;i<=Math.sqrt(n);i++){//check till sqrt(n) 
      if(n%i===0) return false;
  }
return true;
}
// console.log(printPrimesInRange(1));
console.log(printPrimesInRange(2));
console.log(printPrimesInRange(3));
console.log(printPrimesInRange(10));
console.log(printPrimesInRange(20));