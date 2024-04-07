
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var count = 1, refArray = [], maxOccurence, maxCount = 0;
 
  for (var index = 0; index < nums.length; index++) {
      count = 1;//reset count
      for (var x = index + 1; x < nums.length; x++) 
      {           
          if (nums[index] === nums[x]) {
              count++;
          }

      }//for
      if (count > maxCount) {//set new value as maxocc
          maxCount = count;
          maxOccurence = nums[index];            
      }
  }//for
  return maxOccurence;

 };

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?