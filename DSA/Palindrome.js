
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  //split to chars, reverse and join back as string

  if (str === reversed) {
    return true;
  }
  return false;
}
console.time("app1");
console.log("palindrome ", palindrome("kayak"));
console.timeEnd("app1");

function checkPalindrome_approach2(str) {
  //use two pointer method
  //initialize i=0, j= length-1
  //loop until i<=j
  //check if str[i]===str[j]
  //yes -> move to i+1, j-1
  //no-> it is not a palindrome, break

  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
   }
  return true;
}

console.time("app2");
console.log("checkPalindrome_approach2 ", checkPalindrome_approach2("kayak"));
// console.log("checkPalindrome_approach2 ", checkPalindrome_approach2("malayalam"));
console.timeEnd("app2");