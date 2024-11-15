// Implement Atoi
// Difficulty: MediumAccuracy: 32.58%Submissions: 216K+Points: 4
// Given a string s, the objective is to convert it into integer format 
// without utilizing any built-in functions. Refer the below steps to 
// know about atoi() function.

// Cases for atoi() conversion:

// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character 
// is encountered or end of the string is reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the 
// integer is smaller than -231, then return -231.

// Examples:
// Input: s = "-123"
// Output: -123
// Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer
// Input: s = "  -"
// Output: 0
// Explanation: No digits are present, therefore the returned answer is 0.
// Input: s = " 1231231231311133"
// Output: 2147483647
// Explanation: The converted number will be greater than 231 – 1, therefore print 231 – 1 = 2147483647.
// Input: s = "-999999999999"
// Output: -2147483648
// Explanation: The converted number is smaller than -231, therefore print -231 = -2147483648.
// Input: s = "  -0012gfg4"
// Output: -12
// Explanation: Nothing is read after -12 as a non-digit character ‘g’ was encountered.
// Constraints:
// 1 ≤ |s| ≤ 15

function myAtoi(s) {
  // code here
  //calculate limits 2^31 -1 , -2^31
  //if sign is present, store it
  //if eos is reached no sign, set sign = +
 
  //loop till eos
      //read each char
      //if char is digit, add to num array
      //if reached part of s and found char is not digit , break
    
  // skip leading white spaces - trim the num
  //if digits length ===0, return 0
  //else   
      //if sign+num >uppperlimit, return uppperlimit
      //else if sign+num < lowerlimit return lowerlimit

  //return sign+num
  
  
  let sign="", digits=['0','1','2','3','4','5','6','7','8','9'],length=s.length,i=0,num=[],upperlimit=Math.pow(2,31)-1,lowerlimit=Math.pow(-2,31);;
  // if(length<0 || length>15) return;

  while(i<length){
    if(s.charAt(i) && (s.charAt(i)==="-"|| s.charAt(i)==="+")){
      sign=s.charAt(i);
      i++;
      break;
    }  
    i++;  
  }
  if(!sign ||sign === " ") {
    sign="+";
    //reset i to start pos
    i=0;
  }  
   
  while(i<length){
       let char = s.charAt(i);
       if(digits.includes(char)) {       
        num.push(char);        
       }else if(num.length>0) break;
       i++;
  }

  num=checkLeadingZeros(num);

  if(num.length>0){    
    num = num.join('');
    // console.log("num",sign+num);
    if(sign+num>upperlimit) return upperlimit;
    else if(sign+num<lowerlimit) return lowerlimit;
  }else return 0;

  return sign+num;
}

function checkLeadingZeros(num){
  let length = num.length,i=0,trimmed=[];
  while(i<length){
    if(num[i]!=='0')
        trimmed.push(num[i]);
    i++;
  }
  // console.log(trimmed);
  return trimmed;
}
console.log(myAtoi("-123"));//-123
console.log(myAtoi("-123a"));//-123
console.log(myAtoi("  -"));//0
console.log(myAtoi(" 1231231231311133"));//2147483647
console.log(myAtoi("-999999999999"));// -2147483648
console.log(myAtoi("  -0012gfg4"));//-12