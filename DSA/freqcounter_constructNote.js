// Write a function called constructNote, which accepts two strings, 
//a message and some letters. The function should return true if 
// the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or 
// special characters in both the message and the letters.
// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

// Examples:
// constructNote ('aa', 'abc')// false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function freqcounter_constructNote(msg,letters){
  //if letters is empty, return false
  //if msg is empty, return true
  //setup a regEx to verify if the msg and letters contain only lower case alphabets
  //if msg & letters fail the regEx - throw error

  //iterete thru letters and store the frq of letters in obj-letters
  //iterete thru msg 
    //if there is any char that does NOT exist in letters 
      //return false('aa', 'abc')
    
  //return true

  if( letters.length===0) return false;
  if(msg.length===0) return true;
    const regex = /^[a-z]+$/;
  if(!regex.test(letters) || !regex.test(msg)) throw new Error ("Invalid Input")

   let objLetters={};
  for(const char of letters){
     if(!objLetters[char]) objLetters[char]=1;
     else objLetters[char] = objLetters[char]+1;
  }

  for(let c of msg){
    if(!objLetters[c]) return false;
    objLetters[c] = objLetters[c]-1;
    if(objLetters[c]===0) delete objLetters[c];
  }

  return true;
}

// console.log(freqcounter_constructNote("test","tes@"));//error
// console.log(freqcounter_constructNote("test","tes e"));//error
// console.log(freqcounter_constructNote("test","teS"));//error
// console.log(freqcounter_constructNote("test","te"));//flase
// console.log(freqcounter_constructNote("test","tes"));//true

console.log(freqcounter_constructNote('aa', 'abc'));//f
console.log(freqcounter_constructNote('abc', 'dcba'));//t
console.log(freqcounter_constructNote('aabbcc', 'bcabcaddff'));//t
console.log(freqcounter_constructNote('', 'bcabcaddff'));//t
console.log(freqcounter_constructNote('aabbcc', ''));//f