

function reverseInParanthesis(inputString) {
  //if input.length ==0 or 1, return inputString
  //check if input.length is between 2 and  50, else throw "Invalid input"
  //check if all chars in input are lowercase, else throw "Invalid input"
  //loop thru each char in inputstring
  //check if first non-alpha char in input is "(", else throw "Invalid input"
  //once "( " is found, call  findInnermostReversal(indexOfOpenPrn,input)
  //fn returns the reversed string in innermost nested paranthesis
  //repeat the loop and check if there are more "("
  
  
  //return reversed string in inner most nested paranthesis
  // findInnermostReversal(indexOfOpenPrn,input)
      // store the index of "("
      // add the following chars to reverse[] until ")" is found
      //check if there is a matching ")"
         //yes - store the index of ")"
         //no mathcing till end - throw "Invalid input"
      //check if there is more "("
          //yes - call the fn recursively with index of new "("
          
     //return input string with reversed string in inner most paranthesis
     
     
     if(inputString.length ===0 || inputString.length ===1) return inputString;
     if(!(inputString.length>=2 && inputString.length<=50)) throw new Error("Invalid input");
     if(!(/[a-z]/.test(inputString)))  throw new Error("Invalid input");
     
     for(let i=0;i<=inputString.length-1;i++){
         if(inputString[i]==="(")
             findInnermostReversal(i,inputString);
     }

}

//return reversed string in inner most nested paranthesis
function findInnermostReversal(index,input){
  //  let openParnths = index,strToReverse,closeParnths;
  //  for(let i=openParnths+1;i<=input.length-1;i++){
  //      strToReverse +=input[i];
  //      if(input[i]===")"){
  //          closeParnths = i;
  //          break;
  //      }
  //      console.log(openParnths, closeParnths,strToReverse);
  //  }
   
}