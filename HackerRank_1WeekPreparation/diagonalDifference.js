

function diagonalDifference(arr){
  //check if arr.lenght is 0, throw error
  //check if each array element is in the range of -100 to 100, else throw error
  //setlen = len-1
  //loop thru each ele in arr , set two pointer i=0 and j=0
      //get arr[i][j]  - add to left diagonal
      //get arr[len-i][len-j] - add to right diagonal

  // get abs difference between diagonals right-left
  //return diff

  if(arr.len <=0) throw new error("Invalid input")

  let rightdgnl=0,leftdgnl=0, length=arr.length-1;
  
  for(let i=0,j=0;i<=length&&j<=length;i++,j++){
    rightdgnl += arr[i][j];
    leftdgnl +=arr[i][length-j];   
  }
 return  Math.abs(rightdgnl-leftdgnl);
}

console.log(diagonalDifference([ [11,2,4],[4,5,6],[10,8,-12]] ))
console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9 ]]))