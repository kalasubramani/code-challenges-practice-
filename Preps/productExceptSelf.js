

function  productExceptSelf(arr) {
  // code here
 //check if arr length is within 1 to 10^3, else return
        //check if arr ele is within 0 to 10^2, else return
        
        //if len ===1, return arr[0]
        //find product of all ele in array
            //if ele ==0, set firstzero = true
            //if ele ==0 && firstzero = true set manyzeros=true
            //else accumulte product
            
        //iterate thru array
             //if manyzeros == true, fill result[] with zeros and return it
             //if ele ===0, add product to results
             //if firstzero ==true, add 0 to results --prd of all other ele with be zero
            //else result[i] = product / arr[i]
            
        //return result

        
  let length = arr.length,firstZero=false,manyZeros=false;
  console.log(arr,arr.length,(length >=1 && length <= Math.pow(10,3)));
 
  if(!(length >=1 && length <= Math.pow(10,3))) return;
  
  if (length===1) return arr[0];
  let product = arr.reduce((acc,val)=>{
    if(val!==0)
         acc *=val
    else {
      if(!firstZero) firstZero=true;
      else manyZeros=true;
    }
    return acc;
},1)
  console.log(product)
  let result=new Array(length);
  for(let i=0;i<length;i++){
    if(manyZeros){
      return result.fill(0);
    }
    if(arr[i]===0) result[i]=product;
    else if(firstZero) result[i]=0;
    else result[i] = product/arr[i];
    console.log("result",result)
  }
   
    
  return result;
}

// console.log(productExceptSelf([3, 9, 7, 7, 3, 1, 8, 6, 5, 7, 5]));
// console.log(productExceptSelf([1,0]));//0,1
console.log(productExceptSelf([0, 8, 6, 2, 4, 7, 9, 3, 9, 2, 8, 3, 0, 1, 7, 8, 9, 1, 5, 4, 9, 2, 5, 7, 4, 9, 9, 4]));//0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0