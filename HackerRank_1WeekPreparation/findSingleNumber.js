

function findSingleNumber(arr) {
  let result = 0;
  for (let num of arr) {
    console.log(num, result)
      result ^= num;//result = result ^ num;
      console.log("res",result)
  }
  return result;
}

// Example usage:
let arr = [2, 3, 5, 4, 5, 3, 4,2];//0
// console.log(findSingleNumber(arr)); 
 arr = [2, 3, 5, 4, 5, 3, 4];// Output: 2
 console.log(findSingleNumber(arr)); 