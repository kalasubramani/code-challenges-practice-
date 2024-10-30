// Given an integer x, find the square root of x.
//  If x is not a perfect square, then return floor(√x).

function squareRoot(n){
  //sq rt of a num is less than num/2
  //use binary search - to reduce the time complexity
  //if n is 0 or 1 return n
  
  //loop from 2 to n/2
    //find midpoint - n/2
    //if i*i ==n
     //return i as sq rt

     //if sq < n
      //set start as mid+1
      //set sqrt as mid
    //else
      //set end = mid -1
  
  // return sqrt
console.log("n:",n);
  if(n===0 || n===1) return n;
  let start=1,end=n/2, sqrt;
  while(start<=end){
    let mid = Math.floor((start+end)/2);
   
    let sq=mid*mid;
    if(sq===n)
      return mid;

    if(sq<n){
      start=mid+1;
      sqrt=mid;
    }else end=mid-1;
  }
return sqrt;
}

console.log(squareRoot(4));
console.log(squareRoot(81));
console.log(squareRoot(90));