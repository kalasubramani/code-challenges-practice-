// Name: PerfectSquare
// Task: Determine if a given number is a perfect square.
// Constraints: n is between 1 and 10^9.
// Output Format: true or false.
// Sample Test Cases: in: 16 out: true
// in: 5 out: false

function perfectSquare(n){
//check n is within the range of 1 to 10^9, else throw error
//find the sq root of n
//check if the result is a whole num
  //yes - return true
  //else return false

  if(!(n>=1 && n<=Math.pow(10,9))) throw new Error ("Invalid input");
  let sqroot = Math.sqrt(n);
  return sqroot%1? false:true;
}

console.log(perfectSquare(5));
console.log(perfectSquare(16));