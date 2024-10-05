

// function fractionToDecimal(num, den)
// {
//   console.log(num,den, num/den);
//     // If the numerator is zero, answer is 0
//     if (num == 0)
//         return "0";
 
//     // If any one (out of numerator and denominator)
//     // is -ve, sign of resultant answer -ve.
//     var sign = (num < 0) ^ (den < 0) ? -1 : 1;
 
//     num = Math.abs(num);
//     den = Math.abs(den);
 
//     // Calculate the absolute part 
//     // (before decimal point).
//     var initial = parseInt(num / den);
//     console.log("initial",initial,num/den)
 
//     // Output string to store the answer
//     var res = [];
 
//     // Append sign
//     if (sign == -1)
//         res.push("-");
 
//     // Append the initial part
//     res.push(initial.toString());
 
//     // If completely divisible, return answer.
//     if (num % den == 0)
//         return res;
 
//     res.push(".");
 
//     // Initialize Remainder
//     var rem = num % den; 
//     console.log("rem",rem)
//     var mp = new Map();
 
//     // Position at which fraction starts repeating
//     // if it exists
//     var index;
//     var repeating = false;
//     while (rem > 0 && !repeating) {
 
//         // If this remainder is already seen,
//         // then there exists a repeating fraction.
//         if (mp.has(rem)) {
 
//             // Index to insert parentheses
//             index = mp.get(rem);
//             repeating = true;
//             break;
//         }
//         else
//             mp.set(rem, res.length);

//         console.log("mp",mp, "res",res,res.length)
//         rem = rem * 10;
 
//         // Calculate quotient, append 
//         // it to result and
//         // calculate next remainder
//         var temp = parseInt(rem / den);
//         console.log("tep",temp)
//         res.push(temp.toString());
//         console.log("res",res)
//         rem = rem % den;
//     }
 
//     // If repeating fraction exists, 
//     // insert parentheses.
//     if (repeating) {
//         res.push(")");
//         res.splice(index,0, "(");
//     }
 
//     // Return result.
//     return res.join('');
// }

function fractionToDecimal1(num,den){
  //check if both num and den != 0, else return "0"
  //stores result in result
  //if num or den is < 0, then set sign = "-"
  //add sign to result
  //get rem= num/den
  //check if the remainder is zero,
      //yes - return result
      //else 
          //slice the part before "." and add it to result
          //decimal = slice the part after "."
          //call the function to check if there is any repeating pattern
            //yes - get the repeating pattern
                // add "(" + repeating pattern + ")"
            //no 
              //add the decimal part to result    
  //  return result

  //check if there is a repeating pattern
   //get first digit - add to pattern
   //loop thru the string      
    //check if the pattern matches with the next set of digits
      //no - add digit to pattern
      //yes - 
          //set repeating = true
          // see if pattern repeats after i+pattern.length
  
  //if repeating = true return pattern else return ""

  let result ="",decimal,pattern="";
  // if(num<0 || den<0) result +="-";

  let rem = num/den;
  let temp = rem.toString().split(".");
  result += temp[0];
  
  console.log(num,den,temp)
  if(temp[1]){
    decimal= temp[1];
    pattern = checkForPattern(decimal);

    if(pattern.length) result +=".("+pattern+")";
    else result += "."+temp[1];
    return result;
  } else return result;
   

  
  console.log(result,pattern.length);
 
  
}

function checkForPattern(decimal){
 
  let pattern = decimal[0],i=1,repeating=0;
  while(repeating <3 && i<decimal.length){   
    if(!pattern.includes(decimal[i])){
        pattern +=decimal[i];
    }
    else{      
       let temp = decimal.slice(i,pattern.length+1);
     
       if(temp === pattern){
        repeating++;
        i = i+pattern.length;
       }else i++;
       
    }
    repeating++;
  }

  return (repeating>1)? pattern:"";
 }

let num = 50, den = 22;
console.log( fractionToDecimal1(num, den) + "<br>");
num = -1, den = 2;
console.log( fractionToDecimal1(num, den));
num = 4, den = 2;
console.log( fractionToDecimal1(num, den));