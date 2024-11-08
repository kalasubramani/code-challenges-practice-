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

function allAnagrams(str){
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

   let anagramSet = new Set(),rotate=0,length=str.length;

   while(rotate<length){
     getAllAnagrams(str,anagramSet,length);
     //rotate string to right by 1
     let roateright =str.slice(1).concat(str.slice(0,1));
     str=roateright;
     rotate++;
   }
   
 return [...anagramSet];
}

function getAllAnagrams(str,anagramSet,n){
  for(let i=0;i<n;i++){
    //get char at i + letters before i + letter after i
    anagramSet.add(str.slice(i,i+1).concat(str.slice(0,i)).concat(str.slice(i+1)));
  }
}

console.log(allAnagrams('cat'));