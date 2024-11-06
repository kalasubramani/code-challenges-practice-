// Given two strings s1 and s2. Return true if 
// the string s2 can be obtained by rotating (in any direction) 
// string s1 by exactly 2 places, otherwise, false.

// Examples:
// Input: s1 = "amazon", s2 = "azonam"
// Output: true
// Explanation: "amazon" can be rotated anti-clockwise by two places, which will make it as "azonam".
// Input: s1 = "geeksforgeeks", s2 = "geeksgeeksfor"
// Output: false
// Explanation: If we rotate "geeksforgeeks" by two place in any direction, we won't get "geeksgeeksfor".
// Input: s1 = "ab", s2 = "ab"
// Output: false
// Challenge: Try doing it in O(1) space complexity

// Constraints:
// 1 ≤ s1.length, s2.length ≤ 105


function  isRotated(s1, s2) {
        // code here
        //check if s1 & s2 lenghts are >0 & <=10^5, else return
        //rotate s1 to left by 2
        //if result ===s2, return true
        //rotate s2 to right by 2
        //if result ===s2, return true
        
        //else return false
        
  
  //reverse s1 to right by 2 places
  
  if(!(s1.length>0 && s1.length<=Math.pow(10,5)) || !(s2.length>0 && s2.length<=Math.pow(10,5)) ) return;
  let start =0, end=1,n= s1.length;

 let rotateleft = s1.slice(n-2).concat(s1.slice(0,n-2));
 if (s2===rotateleft) return true;
 let roateright =s1.slice(2,n).concat(s1.slice(0,2));
 if (s2===roateright) return true;

 
// console.log(rotateleft,roateright,s2===rotateleft,s2===roateright,(s2===rotateleft || s2===roateright));

  return false;
  
}


console.log(isRotated("gvxc","cgxv"));//false
console.log(isRotated("amazon","azonam")); //true