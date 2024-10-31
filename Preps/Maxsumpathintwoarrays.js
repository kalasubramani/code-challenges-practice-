
function Maxsumpathintwoarrays(arr1, arr2) {
  // code here
  //check if arr length is between 1 and 10^4, else throw error
  //find the common ele
  //arr1 - find sum of ele till common ele
  //arr1 - find sum of ele from common ele to end
   //arr2 - find sum of ele till common ele
  //arr2 - find sum of ele from common ele to end
  //sum arr1 first + arr2 last
  //sum arr1 last + arr2 first
  // return the max sum
  
  if(!(arr1.length>=1 && arr1.length<=Math.pow(10,4) && arr2.length>=1 && arr2.length<=Math.pow(10,4))) throw new Error("Array length  out of bounds")
  
  let jumpIdx1, jumpIdx2,result;
   arr1.forEach((val,idx)=>{
      // console.log("idx",idx,val)
       if (arr2.indexOf(val)!==-1) {
           jumpIdx1 = idx;
           jumpIdx2 = arr2.indexOf(val);
              // console.log("idx",jumpIdx1,jumpIdx2)
          let maxsum = findMaxsum(arr1,arr2,jumpIdx1,jumpIdx2);
            console.log("result",result,"sofar",maxsum);
          if(!result) result=maxsum;
          result = Math.max(result,maxsum);
       }
   })
return result;
}

function findMaxsum(arr1,arr2,jumpIdx1,jumpIdx2){
  console.log("jumidx",jumpIdx1,jumpIdx2)
  let maxsum1,maxsum2;
  let a1SumTillIdx = arr1.reduce((acc,val,idx)=>{

      if(idx<=jumpIdx1)
           acc +=val;
      return acc;
  },0) 
  console.log("a1SumTillIdx",a1SumTillIdx)
  
  let a2SummAfterIdx=arr2.reduce((acc,val,idx)=>{
      if(idx>jumpIdx2)
        acc +=val;
      return acc;
  },0)
 //   console.log("a2SummAfterIdx",a2SummAfterIdx)
  maxsum1 = a1SumTillIdx+a2SummAfterIdx;
   console.log("a2SummAfterIdx",a2SummAfterIdx,"sum",maxsum1)
   
   let a2SumTillIdx = arr2.reduce((acc,val,idx)=>{
       if(idx<=jumpIdx2)
        acc +=val;
       return acc;
   },0)
   console.log("a2SumTillIdx",a2SumTillIdx)
   
   let a1SumAfterIdx = arr1.reduce((acc,val,idx)=>{
       if(idx>jumpIdx1)
         acc +=val;
      return acc;
   },0)
   maxsum2 = a2SumTillIdx+a1SumAfterIdx;
   console.log("a1SumAfterIdx",a1SumAfterIdx,"sum",maxsum2)
   return Math.max(maxsum1,maxsum2);
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const a2 = [3, 4, 6, 7, 8]
console.log(Maxsumpathintwoarrays(a1,a2));//55