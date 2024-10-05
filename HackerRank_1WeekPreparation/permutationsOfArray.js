
function permutationsOfArray(input){ 

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    console.log("ch",ch)
    usedChars.push(ch);
    console.log("usedch",usedChars)
    if (input.length == 0) {      
      permArr.push(usedChars.slice());
      console.log("permArr",permArr,i)
    }
    permute(input);
    input.splice(i, 0, ch);
    console.log("spliced ip",input)
    usedChars.pop();
  }

  return permArr
};
permute(input)
}

function findPermutations(input){
  //get each ele in ele array
  //result =[[input]]
  //iterate for input.length
      // temp= shift i and i+1
      
    //if temp arrray is NOT in results
      //add to it
    
      // return result

      let result = [input],i=0,temp=[],firstpart=[],secondpart=[];
      console.log(result);

      while(i<5){
        temp.push(input[i])
        firstpart = input.splice()
         console.log(input);
         i++;
      }
      

}

// console.log(permutationsOfArray([5, 3, 7, 1]))
console.log(findPermutations([5, 3, 7, 1]));