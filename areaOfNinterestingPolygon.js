
// //code signal - shapearea
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. 
// An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
// and appending 1-interesting polygons to its rim, side by side. 
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// Example
// For n = 2, the output should be
// solution(n) = 5;
// For n = 3, the output should be
// solution(n) = 13.
// Guaranteed constraints:
// 1 ≤ n < 104.



//use recursion
// set exit cnd 
  //if n==1 , return area =1
// call recursive(n-1) + (4 *(n-1))  -- 4 no. of sides


function areaOfNinterestingPolygon(n){
  if(n==1) return 1; 
  
  return areaOfNinterestingPolygon(n-1) + (4*(n-1))
 
}
console.log(areaOfNinterestingPolygon(1));//1
console.log(areaOfNinterestingPolygon(2));//5
console.log(areaOfNinterestingPolygon(3));//13
console.log(areaOfNinterestingPolygon(4));//25
console.log(areaOfNinterestingPolygon(5));//41