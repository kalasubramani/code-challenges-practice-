// Given an array of  distinct integers, transform the array into a zig zag sequence
//  by permuting the array elements. A sequence will be called a zig zag sequence if 
//  the first k elements in the sequence are in increasing order and the last k elements 
//  are in decreasing order, where k=(n+1)/2 . You need to find the lexicographically smallest zig zag sequence of the given array.

// Example. a=[2,3,5,1,4]

// Now if we permute the array as [1,4,5,3,2], the result is a zig zag sequence.

// Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

// Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format
// The first line contains  the number of test cases. 
// The first line of each test case contains an integer , 
// denoting the number of array elements. The next line of the test case 
// contains  elements of array .

// Constraints
// 1<=t<=20
// 1<=n<=10000  (n is always odd)
// 1<=a[i]<=10^9
// Output Format
// For each test cases, print the elements of the transformed zig zag sequence in a single line.

function zigzagSequence(arr){

  //get midpoint
  //slice the array from 0 to midpoint
  //sort in asc
  //slice the array from midpoint to end
  //sort in desc
  //concat array
  //return result array

  let length = arr.length;
  if(length%2===0) throw new Error("Input length is not odd")
  if(!(length>=1 && length<=10000)) throw new Error ("Input length out of bounds");
  let midpoint =(length+1)/2;
  // console.log("md",midpoint)
  // let leftpart=arr.slice(0,midpoint);
  // leftpart.sort();
  // let rightpart=arr.slice(midpoint);
  // rightpart.sort().reverse();
  let leftpart=[...arr.slice(0,midpoint-1)];
  leftpart.sort();
  let rightpart=[...arr.slice(midpoint-1)];
  rightpart.sort().reverse();
  // console.log(leftpart,rightpart,leftpart.concat(rightpart))
  return leftpart.concat(rightpart);
}

console.log(zigzagSequence([2,3,5,1,4]));//[ 2, 3, 5, 4, 1 ]
console.log(zigzagSequence([1, 2, 3, 4, 5, 6, 7])) //[ 1, 2, 3, 7, 6, 5, 4]