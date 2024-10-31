// Function to rotate an array by d elements in counter-clockwise direction.
function rotateArr(arr, d) {
    // code here
    // // Normalize d to avoid unnecessary rotations ie if the arr len is 5 and no. of rotations is 7. It is enough to do just 2 rotations
    // d = d % arr.length;
    // // console.log("l",arr.length)
    // for(let i=0;i<d;i++){
    //     // console.log(i)
     
    //     arr.push(arr.shift())
    // }
    // return arr;
    
    //modified for better time complexity
    const n = arr.length;
d = d % n; // Normalize d

// Helper function to reverse a part of the array
function reverse(start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Step 1: Reverse the first d elements
reverse(0, d - 1);
// console.log(arr)
// Step 2: Reverse the remaining elements
reverse(d, n - 1);
//   console.log(arr)
// Step 3: Reverse the entire array
reverse(0, n - 1);
//   console.log(arr)
return arr;

}

console.log(rotateArr([1, 2, 3, 4, 5],2))
//Expected Output: 3 4 5 1 2