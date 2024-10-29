
function regEx(str){
  
//   const firstChar = str.match(/^./)[0];
//   console.log(firstChar); // Output: "H"
 
// let lastChar = str.match(/.$/)[0];
// console.log(lastChar); // Outputs: "o"

const regex = /^(.).*\1$/;
console.log(regex.test(str));

}
let str = "Hello, world!";
  str="radar";
regEx("a");
regEx("b")
regEx("ab")
regEx("ba")
regEx("aba")
// aaabbbbbbbaa
// abbbbabaaabba
// aaaaabbbbabbaa
// baaabaaaab
// bbaabbaaaaaabab
// baaaabbbaabbabaab
// bbaabbabaaababaab
// bbbbbb
// babaaaabbbababab
// aaabbbbbbaabbaa
// aabbbabba
// abaabaaaaaa
// babbababaaaaaaaabaabaabaabbaab
// aabbbaaaaaabbbbbaba
// ababbbaaabbbbb
// aabaabbaabbbbb
// aaaaabaabbaaabaaaabbaaaab
// aaaababbaaaabbab
// abbaabbaaaabbbbbbbbabbbb
// aabaaaabbbbb
// True
// True
// True
// True
// True
// True
// True
// True
// True
// True
// True
// True
// True
// True
// False
// False
// False
// False
// False
// False