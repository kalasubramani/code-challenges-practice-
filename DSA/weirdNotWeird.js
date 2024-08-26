
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