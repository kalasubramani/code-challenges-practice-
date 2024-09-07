//pangrams are sentences constructed by using every letter of the alphabet atleast once
//given a sentence, output a line containing pangram if s is a pangram, 
//otherwise output not pangram
function checkForPangram(input) {
  //construct an object alphabets{} containing all alphabets as keys and set all values to 0.
  //loop thru the input string to get each char
  //make the char to lowercase to make it case insensitive
  //if the letter is present in alphabets{}
  //increment alphabets[letter] by 1
  //once done- get all the values in the object
  //check if any of the obj has value as 0
  //if there is atleast one key with value 0, then it is not a pangram
  // else print the input string

  if (!input.length || input.length > 1000) return "invalid input"
  let alphabets = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
  }
//increment the value of a key if the key is present in the string
  //   for(let i=0;i<input.length;i++){
  //     let letter = input[i].toLowerCase();
  //     if(alphabets[letter]>=0) alphabets[letter]++;
  //   }

  //  let objValues = Object.values(alphabets); 
  //  let containsZero=objValues.filter(val=>val===0);
  //  return containsZero.length ? "not pangram" : input;

  //approach 2
  //to reduce the no. of iterations to half and reduce the time complexity to half - use double pointer approach
  for (let i = 0, j = input.length - 1; i <= j; i++, j--) {
    let letter = input[i].toLowerCase();
    let letter2 = input[j].toLowerCase();
    if (Object.keys(alphabets).includes(letter)) delete alphabets[letter];
    if (Object.keys(alphabets).includes(letter2)) delete alphabets[letter2];
  }
  return Object.keys(alphabets).length ? "not pangram.." : input;

  //approach 3
  input=input.toLowerCase();
  let regex = /^[a-z]+$/;
  let set = new Set();
  
  for (let i = 0, j = input.length - 1; i <= j; i++, j--) {
    let letter = input[i];
    if (regex.test(letter)) set.add(letter);

    let letter2 = input[j].toLowerCase();
    if (regex.test(letter2)) set.add(letter2);
  }
  console.log(set);
  console.log("approach 3- " ,set.size===26?input:"not pangram")
}
// let output = checkForPangram("!!@#$#@$#@");
// console.log(output);
output = checkForPangram("The quick brown fox jumps over the lazy dog");
console.log(output);
// output = checkForPangram("The q");
// console.log(output);
// output = checkForPangram("");
// console.log(output);
// output = checkForPangram("a1c");
// console.log(output);