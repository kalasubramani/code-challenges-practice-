

function countEleLessThanOrEqual(arr1,arr2,m,n){
         //code here
        //check if m and n are between 1 to 10^5, else return
        //check if arr ele are between 0 to 10^5, else return
        
        //freq ={ele:count of ele<= ele}
        //sort both arrays
        //select the smaller array
        //iterate each ele of smaller array
            //iterate each ele of other array
                //if ele <= smallarr[ele]
                    //if ele not in freq - add to freq [ele]=1
                    //else inc count of ele in freq
                    
        //iterate thru freq{} in the original order of 
           //add corr. freq to results[]
        
        // return results
        
        if(!( (m >=1 && m <=Math.pow(10,5)) && (n>=1&&n<=Math.pow(10,5)))) return;
        
        let freq ={};
        // arr1.sort((a,b)=>a-b);
        // console.log(arr2.slice(20),arr2.length);
        arr2.sort((a,b)=>a-b);
        console.log(arr2);
        let result=[];
        
        for(let i=0;i<m;i++){
            let count =getCount(arr2,n,arr1[i])
            // console.log(arr1[i],"count",count)
            result.push(count);
        }
        
        return result;
    }
    
  function getCount(arr,n,value){
          let count =0;
        for(let i=0;i<n;i++){
            if(arr[i]<=value)
             count++;
        }
        return count;
    }


  // function approach2(){
      //approach 2 - to achieve better time complexity
  
  // if(!( (m >=1 && m <=Math.pow(10,5)) && (n>=1&&n<=Math.pow(10,5)))) return;
  
  // let freq ={};
  // // arr1.sort((a,b)=>a-b);
  // arr2.sort((a,b)=>a-b);
  // console.log(arr2);
  // let result=[],startIdx=0;
  
  // for(let i=0;i<m;i++){
  //     let res = getCount(arr2,startIdx,arr1[i])
  //     console.log("res",res)
  //     if(result.length===0) result.push(res[0]);
  //     else {
  //         console.log("prec count",result[result.length-1],res[0],"ele",arr1[i])
  //         let currCount = result[result.length-1]+res[0];
  //         result.push(currCount);
  //          console.log("result",result,arr1[i]);
  //     }
  //     if(res[0]!==0) startIdx=res[1]+1;
  // }
  
  // return result;
//}

// function getCount(arr,startIdx,value){
//     let count =0,idx;
//     console.log("start",startIdx,value)
//   for(let i=startIdx;i<arr.length;i++){
//       if(arr[i]<=value){
//        count++;
//        idx=i;
//        console.log("idx",idx,value)
//       }
//       //  arr.pop();
//   }
//   return [count,idx];
// }
  

let arr1=[
  4098, 7968, 4523,  277,
  6956, 4560, 2062, 5705,
  5743,  879, 5626, 9961,
   491, 2995,  741, 4827,
  5436
]
let arr2=[ 9989, 3403, 3902,
  153,  292, 1181,
 6220, 7515, 8517,
 8694,5447, 10525,
 3570,  337, 1869,  8711,
 3265, 3897, 5834,  9894,
 6301,      1409,
 8920,      undefined,
 undefined, undefined,
 undefined, undefined,
 undefined, undefined,
 undefined, undefined,
 undefined, undefined]

console.log(countEleLessThanOrEqual(arr1,arr2,arr1.length,arr2.length)); //17 22 17 7 21 17 12 18 18 9 18 27 9 12 9 17 17