
function myAtoi(s) {
  // code here
  //if sign is present, store it
  //else set sign = +
  
  //skip leading white spaces
  //loop till eos
      //read each char
      //if char is not digit, break
      //else add to digits
      
  //if digits length ===0, return 0
  //calculate limit = 2^31 -1
  //if digits>limit, return limit
  //else digits<-2^31 return -2^31
  
  const sign = s.slice(0,1), digits=[0,1,2,3,4,5,6,7,8,9],length=s.length;
  if(sign === " ") sign="+";
    console.log(sign);
  
 let i=1;
  while(i<length){
       let char = s.charAt(i);
       console.log(char);
       if(digits.includes(char))
        console.log('digit');

       i++;
  }
  return s;
}

myAtoi("-123");