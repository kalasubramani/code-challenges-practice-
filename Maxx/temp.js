
function getAllSubstrings(str,substringSet,n) {
  // const substrings = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
          // substrings.push(str.slice(i, j));
          substringSet.add(str.slice(i, j));
      }
  }
  // return substrings;
  return substringSet;
}

// Example usage:
let string = "abcd";
string ="cat"
// driver(string);
// console.log(getAllSubstrings(string)); // Output: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]


function driver(str){
  let substringSet = new Set(),n=str.length,rotation=0;
   
  while(rotation<n){
    console.log(getAllSubstrings(str,substringSet,n));
    let roateright = str.slice(1).concat(str.slice(0,1));
    console.log("roateright",roateright);
    str=roateright;
    rotation++;
  }
  
  console.log(substringSet)
}




//bonus challenge #1
// #1 Include strings that can be made with less letters than the input.
//  Constraint: No one letter words
// Ex. in: cat 
// out: ['cat', 'cta', 'act', 'atc', 'tac', 'tca', 'ca', 'ct', 'ta', 'tc', 'ac', 'at']

function allSubstrings(str){
  //define a set to hold results - elimates duplicates at insertion
  //iterate thru chars in string
   //get char at 1 + letters before i + letter after i
   //push all combinations of substrings to substringSet
   
   //if end of string is reached, rotate the string to right by 1 
   //incr rotation by 1

   //if rotations >= string length
   //break
   //else continue

   //return substringSet

   let substringSet = new Set(),n=str.length,rotation=0;
   
  while(rotation<n){
    getAllSubstrings(str,substringSet,n);
    let roateright = str.slice(1).concat(str.slice(0,1));
    console.log("roateright",roateright);
    str=roateright;
    rotation++;
  }
  // rotation=0;
  // while(rotation<n){
  //   let rotateleft= str.slice(n-1).concat(str.slice(0,n-1));
  //   console.log("rotateleft",rotateleft);
  //   getAllSubstrings(rotateleft,substringSet,n)
  //   str=rotateleft;
  //   rotation++;
  // }
  return substringSet;
}

function getAllSubstrings(str,substringSet,n){
  console.log("ip",str)
  for(let i=0;i<n;i++){//cat ca   at  tc   ta ct ac
    for(let j=i+1;j<n;j++){
      // console.log(str[i], str[j])

      substringSet.add(str[i]+ str[j]);
      // console.log(str.slice(i,j))

      // substringSet.add(str.slice(i,j))
      // anagramSet.add(str.slice(i,i+1).concat(str.slice(0,i)).concat(str.slice(i+1)));
    }   
   }
}
console.log(allSubstrings("cat"));