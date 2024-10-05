


function SquareTheArray(arr){
  let temp = arr.map((ele)=>{ return parseInt(ele)*parseInt(ele)})
  console.log(temp) ;
}

SquareTheArray([1,2,3])

function triplesThatSumToZero(arr){
  let i=0,j=0,result=[];
  while(i+2< arr.length){
    if(arr[i]+arr[i+1]+arr[i+2]===0)  result.push([arr[i],arr[i+1],arr[i+2]]) 
      i++;
  }
  console.log(result)
}

console.log(triplesThatSumToZero([1,-1,0,2,-2,3,-3,0]))