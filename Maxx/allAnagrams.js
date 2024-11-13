// Name: ALL-ANAGRAMAS
// Task: Take a string of letters as input and 
// return an array containing all possible anagrams 
// of that word. The order of the output does not matter.
// Constraints: N/A
// Output Format: Print the list of anagrams
// Sample Test Cases: in: cat out: ['cat', 'cta', 'tac', 'tca', 'atc', 'act']

// bonus challenge
// #1 Include strings that can be made with less letters than the input.
//  Constraint: No one letter words
// Ex. in: cat 
// out: ['cat', 'cta', 'act', 'atc', 'tac', 'tca', 'ca', 'ct', 'ta', 'tc', 'ac', 'at']
//ca at ta ac tc
function allAnagrams(str) {
  //define a set to hold results - elimates duplicates at insertion
  //iterate thru chars in string
  //get char at 1 + letters before i + letter after i
  //push all combinations of anagrams to anagramSet

  //if end of string is reached, rotate the string to right by 1 
  //incr rotation by 1

  //if rotations >= string length
  //break
  //else continue

  //return anagramSet

  let anagramSet = new Set(), rotate = 0, length = str.length;

  while (rotate < length) {
    getAllAnagrams(str, anagramSet, length);
    //rotate string to right by 1
    let roateright = str.slice(1).concat(str.slice(0, 1));
    str = roateright;
    rotate++;
  }

  return [...anagramSet];
}

function getAllAnagrams(str, anagramSet, n) {
  for (let i = 0; i < n; i++) {
    //get char at i + letters before i + letter after i
    anagramSet.add(str.slice(i, i + 1).concat(str.slice(0, i)).concat(str.slice(i + 1)));
  }
}

// bonus challenge
// #1 Include strings that can be made with less letters than the input.
//  Constraint: No one letter words
// Ex. in: cat 
// out: ['cat', 'cta', 'act', 'atc', 'tac', 'tca', 'ca', 'ct', 'ta', 'tc', 'ac', 'at']

function allSubstring(str) {
  //if str len is 0, return
  //if str len is 1, return 
  
  //function - findAllSubstrings(str)
     //params - str, setObj, length 
    //returns all substrings for a given string
    //input string is sliced to get substrings
    //if substr length >1, add to the set
    //return set

 
  //rotate input string n-1 times 
    //pass rotated string to  findAllSubstrings()
    //get all substrings in a set to eliminate duplicates
    //pass reversed str too findAllSubstrings()
    //new substrings are added to the set
     
  //return set

  const n = str.length;
  if (n === 0) return;
  if (n === 1) return;

  let substrings = new Set(), rotate = 0, temp;
 
  while (rotate < n) {
     getAllSubstrings(str, substrings, n);
 
    let rev = str.split('').reverse().join('');
     getAllSubstrings(rev, substrings, n);
   
    //rotate string to right by 1
    let roateright = str.slice(1).concat(str.slice(0, 1));
    str = roateright;
    rotate++;
  }


  return [...substrings];
}

function getAllSubstrings(str, substrings, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      let substr = str.slice(i, j);
      if(substr.length>1) substrings.add(substr)
    }
  }
  return substrings;
}
console.log("all anagrams",allAnagrams('cat'));
// console.log(allAnagrams('abcde'));
// console.log(allSubstring("abcd"));
console.log("all substrings",allSubstring("cat"));
