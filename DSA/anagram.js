//strA is anagram of strB if it uses the same char in the same qty. spaces and punctution marks are ignored
// function anagram(strA, strB){
// //1. get charmap of strA
// //2. get charmap of strb
// //compare charmaps

//   const charMapA = charMap(strA);
//   const charMapB = charMap(strB);

//   //compare
//   //get lenght
//   if( Object.keys(charMapA).length !==  Object.keys(charMapB).length){
//     return false;
//   }

//   for(let key in charMapA){
//     if(charMapA[key] !== charMapB[key]){
//       return false;
//     }
//   } 
//   return true;
// }

// function charMap(str){
//   const charMap = {};
//   str = str.toLowerCase().replace(/[\W]/g,'') ;// \W matches special chars [] => char set
//   for( let char of str){
//     charMap[char] = ++charMap[char] || 1;
//   }
//   return charMap;
// }


///optimized sol
function anagram(strA,strB){
  //sort chars 
 return cleanupString(strA) === cleanupString(strB);
}
function cleanupString(str){
  return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('');   
}

console.log(anagram("kala kds!","kala ks!!"));
console.log(anagram("malayalam!","malayalam!!"));