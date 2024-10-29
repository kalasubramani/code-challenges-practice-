given an array if ints , create a 2d arr where the first ele is a distinct value 
from the arr and the sec ele is that val's freq within the array. Sort the 
resulting arr desc by freq. If multiple values have the same freq, they should be sortted async
ex arr= 3 3 1 2 1
op [[1,2],[3,2],[2,1]]
constraints
1<=n<=10^5
1<=arr[i]<=10^5

function groupSort(arr) {
  // Write your code here
  //if arr.length is not between 1 to 10^5, throw error
  //if arr[ele] is not within 1 to 10^5, throw error
  
  //freq[[]]
  //iterate thru each ele in array
      //if freq[] has the ele
          //increment count of the ele
      //else
          //push [ele][1] - set freq as 1
      
  //sort the freq by second column
  //return freq
  
  if(!(arr.length >=1 && arr.length<=Math.pow(10,5))) throw new Error("Input range out of bounds");
  
  let freq={};
  for(let ele of arr){
      console.log(ele)
      if(freq[ele]){
         freq[ele] +=1;
          
      }else
          freq[ele]=1;
  }
  let result=Object.entries(freq);
  result.sort((a,b)=>b[1]-a[1])
  return result;

}
function hasValue(arr,value){
  return arr.some(subarray=>subarray.includes(value))
}