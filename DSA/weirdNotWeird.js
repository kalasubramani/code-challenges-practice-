
function checkRange(n){  
   if(n>=6 && n<=20)
    return true;
  else //if(n>20) or (n>=2 && n<=5)
    return false;
}

function weirdNotWeird(n){
  if(!Number.isInteger(n) || n>100) console.log("Invalid input!");;
  
  //if n is odd, print weird
  if(n%2 !== 0){
    return true;
  }else{
    //check range for even nums and print accordingly
      checkRange(n);
  }
}



weirdNotWeird(3)?console.log("Weird"):console.log("Not Weird");
weirdNotWeird(24)?console.log("Weird"):console.log("Not Weird");