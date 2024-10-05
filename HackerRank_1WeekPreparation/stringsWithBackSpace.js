// Given two strings s and t, return true if they are 
// equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

function stringsWithBackspace(str1, str2) {
  let newStr = "";
  while (str1.includes('#')) {
    let loc = str1.indexOf('#');
    str1 = str1.slice(0, loc - 1) + str1.slice(loc + 1);
  }
  while (str2.includes('#')) {
    let loc = str2.indexOf('#');
    str2 = str2.slice(0, loc - 1) + str2.slice(loc + 1);
  }
  return str1 === str2;
}

console.log(stringsWithBackspace("ab#casds#rdsf", "ad#c"));//false
console.log(stringsWithBackspace("ab#casds#rdsf", "ab#casds#rdsf"));//true