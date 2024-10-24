// Name: FindDuplicates
// Task: Write a function that finds and returns all the duplicate elements in an array.
// Constraints: 1 <= array length <= 1000, 0 <= array elements <= 10^6
// Output Format: Return a list of duplicate elements.
// Sample Test Cases: in: [1, 2, 3, 2, 4, 5, 6, 5] out: [2, 5]
// in: [1, 1, 2, 3, 3] out: [1, 3]

// Bonus Challenge
// Task: Modify the function to return duplicates and their frequency in the array.

function findDuplicates(arr){
  //check if the array lenght is between 1 and 1000, else throw error
  //if len ===1, return []
  //let duplicates={}
  //loop thru each ele
    //check if ele exists in duplicates
      //increment count
    //else
      //add ele to duplicates, set count=1
  //get the keys that has freq >1 -- list of duplicates
  //get key/value pairs that hs freq>1 -- freq of dupl
  // return freq of duplicates

  if(!(arr.length>=1&&arr.length<=1000)) throw new Error("Input length out of bounds")
   let duplicates ={};
  for(let i=0;i<arr.length;i++){
    let ele=arr[i];   
    duplicates[ele] ? duplicates[ele]+=1:duplicates[ele]=1;  
  }
  let dupl = Object.keys(duplicates).filter(key=>duplicates[key]>1);
  console.log("duplicate elements",dupl)
  return Object.entries(duplicates).filter(([key,value])=>{
      return value>1;
  } );
}

console.log("Frequency of duplicates",findDuplicates([1, 2, 3, 2, 4, 5, 6, 5,5,1]))