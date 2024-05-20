// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function recursiveReverseAString(str){//abcdef

  if(str.length<1){
    return str;
  }
 return  recursiveReverseAString(str.slice(1)) + str[0];
}

console.log(recursiveReverseAString("abcdef"));