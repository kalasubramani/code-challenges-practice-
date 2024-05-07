
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1,num2){ //3 * o(n) = o(n)
//check if input length >0
//check if inputs are of same length
//for num1, get each digit from num and add it to an abj with digit : freq
//repeat for num2
//compare the objs of num1 and num2 for freq
//return true/false

let result=false,num1Digits={},num2Digits={};

if(!(num1 && num2) || !(num1?.toString().length === num2?.toString().length) ){
  return false;
}

num1Digits=getDigits(num1); //o(n)
num2Digits = getDigits(num2);  //o(n)

//compare frequncy of digits
for(digit in num1Digits){  //o(n)
  if(!(num1Digits[digit] === num2Digits[digit])){
    return result;
  }
}
result= true;

return result;
}

//gets each digit from a given number
function getDigits(num){
  let numLength = num.toString().length, numDigits={};
  while(numLength>1) //o(n)
  {  
    let digit =num%10;
  
    numDigits[digit]= numDigits[digit]? (numDigits[digit]+1) : 1;
    if(numLength===1){    
      break;
    }
    num=Math.floor(num/10);
    result = true;
    numLength =num.toString().length; 
  }
  //add last digit
  numDigits[num]= numDigits[num]? (numDigits[num]+1) : 1;
  console.log(numDigits);
  return numDigits;
}

console.log(sameFrequency());
console.log(sameFrequency(23,1));
console.log(sameFrequency(244,424));
console.log(sameFrequency(244789,424788));