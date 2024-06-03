//the function takes a number and position as input.
//returns the digit in the given position

function getDigit(num,pos){
  return Math.floor(Math.abs(num)/Math.pow(10,pos))%10;//math.abs handles negative numbers
}

console.log(getDigit(7324,2));
console.log(getDigit(-5690,2));