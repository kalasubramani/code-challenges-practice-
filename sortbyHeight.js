

function sortbyHeight(a) {
  //check if a.length is between 1 and 1000, else return "Invalid input"
  //check if a[i] is between -1 and 1000, else return "Invalid input"
  
  //loop thru each element of a
      //get the indexes of all trees and store them in treeIdx
      //get all the heights and stores them in height
      //sort heights in asc
      
  //populate results
  //loop for trees.length + heights.length
    //for each loop check if trees, has that index
      //if tree index exists, insert tree in that index
      //else get the next ele from height and insert it in that index
      //delete inserted ele from height and tree
  //return result
  
  if(!(a.length>=1 && a.length<=1000)) return "Invalid input";
  
  let treeIdx=[],heights=[];
  for(let i=0;i<=a.length-1;i++){
      if(a[i]===-1) treeIdx.push(i);
      else heights.push(parseInt(a[i]));
  }
  heights.sort((a,b)=>a-b);
       
   let iterations = treeIdx.length + heights.length,result=[];
   for(let i=0;i<=iterations-1;i++){
       if(treeIdx.length && treeIdx[0]===i){
        result.push(-1);
        treeIdx.shift();   
       }
       else{
            result.push(heights.shift())
       }
   }
return result;
}


console.log(sortbyHeight([-1, 150, 190, 170, -1, -1, 160, 180])); //[ -1, 150, 160, 170, -1,  -1, 180, 190]
console.log(sortbyHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])); //[ 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  2]
console.log(sortbyHeight([4, 2, 9, 11, 2, 16]));//[ 2, 2, 4, 9, 11, 16 ]
