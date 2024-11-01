function checkIfArrayEleHasSumOfK(arr,k){
}

//use hashing
//have an obj pair{}
//loop thru each array ele
    // find diff= k-arr[i]
    //if obj pair has diff, add ar[i] and diff to pair{}
    //else pair{arr[i]} =true
const SumKth = (arr, k) => {
  const pair = [];        
  // const sumPair = {};
  const sumPair = new Set();
  for(let i = 0; i < arr.length; i++) {
    const diff = k - arr[i];
    // if(sumPair[diff]){
    //   pair.push([arr[i],diff]);
    // }else{
    //   sumPair[arr[i]] = true;
    // }
    sumPair.has(diff)? pair.push(arr[i],diff) :  sumPair.add(arr[i]);
  }
  return pair;
}

console.log(SumKth([-2,-3,0,4,5,2,4],8));//[4,4]
console.log(SumKth([-2,-3,0,4,5,2,4,3],5));//[5,0] [3,2]
console.log(SumKth([-2,-3,0,4,5,2,4,3],55));//[]