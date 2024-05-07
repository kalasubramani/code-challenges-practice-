// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(arr){

  //two pointers method
  //set i =0, j = arr.length-1
  //compare values at i and j
  //if values matches -> return false
  //else move j one step j--
  //return true if there are no duplicates

  let left =0, right = arr.length-1;
  while(left<right){ //o(n)
    if(arr[left]===arr[right]){
      return true;
    }
    right--;
  }
return false;


  // return new Set(arr).size !== arr.length;

}

console.log(areThereDuplicates([-2,-3,0,4,5,2,4,3,2,-2,4]));
console.log(areThereDuplicates([-2,-3,0,4,5,2]));