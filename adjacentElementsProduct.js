// Given an array of integers, find the pair of adjacent elements that has the 
// largest product and return that product.

// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
// 7 and 3 produce the largest product.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer
// The largest product of adjacent elements.

function adjacentElementsProduct(inputArray){
 //if input.length is not 2<= length <=10, return "invalid input"
    //if the elements of array are not within -1000 to 1000, return "invalid input"
    
    //use two pointers i=0, j=i+1, maxProd
    //loop until j<= input.length -1
        //if(i*j > maxprod) maxprod = i*j,
    //return maxProduct
    
    if(!(inputArray.length  >=2 && inputArray.length<=10))
      return "Invalid input";
     
     let i=0,j=i+1,maxProd=-Infinity;
     for(let i=0,j=i+1;j<=inputArray.length-1;i++,j++){        
         if(inputArray[i]*inputArray[j] > maxProd)  maxProd=inputArray[i]*inputArray[j];        
     }    
     return maxProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));//21
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));//-12
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));//0