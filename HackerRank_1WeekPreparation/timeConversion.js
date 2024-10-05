// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// Return '12:01:00'.
// Return '00:01:00'.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns
// string: the time in  hour format
// Input Format
// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints
// All input times are valid
// Sample Input
// 07:05:45PM
// Sample Output
// 19:05:45

function timeConversion(s) {
  // if it is 12AM, make newHrs =00
  //if  hrs != 12 && it is PM, find hrs%12 and add it to 12 hrs
  //if it is 12PM, return the same string removing the suffix

 let hrs = s.substring(0,2), suffix=s.substring(s.length-2),mins = s.substring(2,s.length-2),newHrs=hrs;

 if(hrs==="12" && suffix==="AM")
     newHrs = "00";
 else if(hrs!=="12" && suffix ==="PM")
     newHrs = parseInt(hrs) +12
     
 return `${newHrs}${mins}`;

}

console.log(timeConversion("12:40:22AM")); //00:40:22
console.log(timeConversion("12:45:54PM"));//12:45:54
console.log(timeConversion(""));//12:45:54