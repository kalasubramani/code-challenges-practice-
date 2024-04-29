
// function frequencyCounter(a1,a2){
//   let result = false;
//   if(a1.length !== a2.length){
//     return false;
//   }

//   for (num of a1){ //o(n)
//     const sqValue = num ** 2;
//     const indexOfSq = a2.indexOf(sqValue); //o(n)
//     console.log("sqValue " + sqValue + " indexOfSq " +indexOfSq);
//     if(indexOfSq === -1){
//       return result;
//     }
//     //remove the ele from a2
//     a2.splice(indexOfSq,1);
//     result = true;
//   }
//   return result;
// }

//approach 2
function frequencyCounter(a1,a2){
    let result = false, a1Freq={},a2Freq={};
    if(a1.length !== a2.length){
      return false;
    }

    for(num of a1){
      if(a1Freq[num]){//if num exists, inc count
        a1Freq[num] = a1Freq[num]+1; 
        console.log(" a1Freq curr ",a1Freq[num]);
      }else{
        a1Freq[num]=1;//add num
      }//if     
    }//for

    for(num of a2){
      a2Freq[num]=a2Freq[num]? (a2Freq[num]+1) :1;
    }

    for(let num in a1){
      if(!(num**2 in a2)){
        return false;
      }
    }
    result = true;

 console.log(" a1Freq ",a1Freq);
 console.log(" a2Freq ",a2Freq);
 return result;
}
console.log(frequencyCounter([1,2,3,2],[4,1,9,4]));