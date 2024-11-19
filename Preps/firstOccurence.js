// Find the first occurrence of the string txtin the string pat.
//  The function returns an integer denoting the first occurrence 
//  of the string txt in pat (0-based indexing).

// Note: You are not allowed to use the inbuilt function.
//  If there is no occurrence then return -1.

// Examples :
// Input: txt = "GeeksForGeeks", pat = "Fr"
// Output: -1
// Explanation: Fr is not present in the string GeeksForGeeks as substring.
// Input: txt = "GeeksForGeeks", pat = "For"
// Output: 5
// Explanation: For is present as substring in GeeksForGeeks from index 5 (0 based indexing).
// Input: txt = "GeeksForGeeks", pat = "gr"
// Output: -1
// Explanation: gr is not present in the string GeeksForGeeks as substring.
// Constraints:
// 1 <= txt.size(),pat.size() <= 1000

function firstOccurence(txt,pat){
  //check if the length of txt, pat are in the range of 1 to 1000, else return 
  //loop thru each char in txt
    //check if txt[char] = pat[0]
      //yes - slice txt from i to pat.length
            // - check if the substring is equal to pat
            //yes - return i
  //return -1

  const txtLen =txt.length, patLen=pat.length;
  if(!(txtLen>=1 && txtLen<=1000) || !(patLen>=1 && patLen<=1000)) return;

  for(let i=0;i<txtLen;i++){
      if(txt[i]===pat[0]) {
        // console.log(txt[i],i,"est");
        let substr = txt.slice(i,i+patLen);
        // console.log(substr, substr===pat);
        if(substr===pat) return i;
      }
         
  }
  return -1;
}

let  txt = "GeeksForGeeks", pat = "Fr";
console.log(firstOccurence(txt,pat));//-1
txt = "GeeksForGeeks", pat = "For";
console.log(firstOccurence(txt,pat));//5
txt = "GeeksForGeeks", pat = "gr"
console.log(firstOccurence(txt,pat));//-1