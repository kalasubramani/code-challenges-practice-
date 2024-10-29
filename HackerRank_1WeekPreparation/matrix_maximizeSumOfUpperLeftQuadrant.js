

function matrix_maximizeSumOfUpperLeftQuadrant(matrix){
  //find len of the matrix
    //find size of upper left quadrant
    //iterate thru each cell of upper left quadrant
    //loop from i=0 to i<qSize
        //calculate the possible in each of those cells
        //val1 = [i][j]
        //val2 = [i][n-j-1]
        //val3 = [n-i-1][j]
        //val4 = [n-i-1][n-j-1]
       //find the max possible for that cell
       //add max possible value to maxsum
       
 //return maxsum for upper left quadrant
 
 let n = matrix.length;
 let qSize=n/2,maxSum=0;
 
 for(let i=0;i<qSize;i++){
     for(let j =0;j<qSize;j++){
         let val1 = matrix[i][j];
         let val2 = matrix[i][n-j-1];
         let val3 =matrix[n-i-1][j];
         let val4=matrix[n-i-1][n-j-1];
         
         maxSum += Math.max(val1,val2,val3,val4);
     }
 }     
 return maxSum;   
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]   //sum 54
];
// const matrix = [[1,2],        //sum 4
//                 [3,4]]
// const matrix = [[112, 42, 83, 119], [56, 125, 56, 49],
//                 [15, 78, 101, 43], [62, 98, 114, 108]]   ///sum 414

console.log(matrix_maximizeSumOfUpperLeftQuadrant(matrix));