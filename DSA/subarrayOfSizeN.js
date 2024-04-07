
function chunks(arr,n){
  const result = []; //holds all sub arrays
  let idx=0;
while(idx<arr.length){
  result.push(arr.slice(idx,idx+n));
  idx = idx+n;
}
 return result;
}

console.log(chunks([3,5,5,4,2,3,5],2));