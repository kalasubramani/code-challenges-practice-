// You're given a string containing a list of digits. 
// You must make as many IDs of the format 8xxxxxxxxxx 
// (an 8 followed by 10 digits) as possible. 
// Return the number of IDs you can make. 
// The IDs do not have to be unique, and you may rearrange the digits, 
// but you may only use each digit once.

//**assunption - if the 10 digits following 8 must be non-repeating
// then the input can only be a number containing all digits 0-9 */
function tagID(input) {
  //generate random numbers of 10 digits
  // write a function that identified nums having non repeating digits
  //prefix those numbers with 8
  //add those numbers to result array
  //return result array
  let numsWithUniqueDigits = [];
  for (let i = 0; i < 100000; i++) { //the no. of results can be altered by modifying the i< value
    //range for random num generator is lowest value that is 10 digits and highest value that is 10 digits
    let rand = generateRandomInteger(1111111111, 9999999999);

    if (hasUniqueDigits(rand))
      numsWithUniqueDigits.push("8"+rand.toString())
  }
  console.log("IDs with Unique Digits",numsWithUniqueDigits.length,numsWithUniqueDigits);
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasUniqueDigits(num) {
  //have a lookup object to store the digits
  //loop thru each digit in the num
  //check if the digit exists in the lookup obj, return false
  //else add the digit to lookup obj
  //return true

  // let lookup ={};
  // for(let i=0;i<num.length;i++){
  //   console.log(num[i])
  //   if(lookup[num[i]]) break;
  //   lookup[num[i]]=0;
  // }
  // console.log("lookup",lookup,num.length===Object.keys(lookup).length);
  // return num.length===Object.keys(lookup).length;

  //approach 2
  //split the string into each char 
  //store the result in a SET
  //now the set will have only unique values
  //if set length and input length are same - all digits are unique - return true
  //else - input contains duplicates - return false
  num = num.toString();
  let input = new Set(num.split(''));
  return input.size === num.length;
}
// console.log(hasUniqueDigits("1223"));
// console.log(hasUniqueDigits("1234567890"));
tagID("1234567890");