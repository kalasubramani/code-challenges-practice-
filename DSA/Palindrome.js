
function palindrome(str){
  const reversed = str.split('').reverse().join(''); //split to chars, reverse and join back as string

  if(str===reversed){
    return true;
  }
  return false;
}

console.log("palindrome ",palindrome("kayak"));

