// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

// Input/Output
// [input] integer year
// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer
// The number of the century the year is in.

function centuryFromYear(year) {
  if(!year && !(year>=1 && year <=2005)) return "Invalid input";

let result;
if (year%100===0){
 result=Math.round(year/100) ;
}
 else {
  result = Math.floor(year/100)+1;
 }

return result;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));