

function replaceDigits(num){
 
    // code here
    //if n is not within 1 to 10^4, throw error
    //split the string by '' into an array
    //iterate thru array
        //replace all 0 with 5
    //join the string using '' 
    //return the result
    
    // if(!(num>=1 && num<=Math.pow(10,4))) throw new Error("Input out of range");
    num = num.toString();
    let digits=num.split('');
   
    digits.forEach((digit,idx)=>{
        if(digit==="0") digits[idx]=5;
    })
   return digits.join('');

}

console.log(replaceDigits(1001));