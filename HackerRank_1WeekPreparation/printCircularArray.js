




// function to print circular list 
// starting from given index ind. 
function printCircularArray(a, n, ind) { 
  // print from ind-th index to 
  // (n+i)th index. 
  for (var i = 0; i < n; i++) { 
    console.log((ind + i) % n);
    console.log(a[(ind + i) % n] + " "); 
  } 
} 
  
// Driver code 
var a = ['A', 'B', 'C', 'D', 'E', 'F']; 
var n = 6; 
printCircularArray(a, n, 3);  //D E F A B C 