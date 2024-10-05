

function lonelyinteger(a) {
  // Write your code here
  //check if a.length is between 1 to 100, else throw error
  //check if n id odd, else throw error
  //check if a[i] is between 0 to 100, ekse throw error
  
  //have result={}
  //iterate thru each ele of array
      //if ele exists in results, inc count
      //else add ele to results
  
  // if results[ele] >1, delete it
  //return the ele in results that has count=1
  
  if(!(a.length >=1 && a.length<=100)) throw new error ("Invalid input")
  if(a.length%2===0) throw new error ("Invalid input")

  let result={};
  a.forEach((val)=>{
      if(!result[val])
         result[val]=1;
      else
      result[val] = result[val]+1;

      if(result[val]>1)
        delete result[val];
  })

  return Object.keys(result)[0];

}

console.log(lonelyinteger([1,1,2]));//2
console.log(lonelyinteger([4, 9, 95, 93, 57, 4, 57, 93, 9]));//95