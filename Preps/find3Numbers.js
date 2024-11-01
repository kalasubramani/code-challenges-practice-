

function find3Numbers(arr){
   // code here
        //if arr size is not within 1 to 10^5, throw new error
        //if arr[i] is not within 1to 10^6, throw error
        //iterate thru array
          //i=first ele
          //if there is any ele < i, replace i
          //if there is any ele >i&& j not yet set, set j=ele
          //if there is any ele>i && ele<j. replace j
          //if there is any ele >j, set k =ele
          //if all three has values, return [i,j,k] else []
          
          if(!(arr.length>=1 && arr.length<=Math.pow(10,5))) throw new Error("length out of bounds")
          
            let i =arr[0],j,k;
            for(let x=1;x<arr.length;x++){
                // console.log()
                if(arr[x]<i && ((!i || (i&&!j)) )) i=arr[x];
                else if(arr[x]>i && (!j||arr[x]<j)) j=arr[x];
                // else if (arr[x]<i && (i&&j&&arr[x+1]>arr[x])){
                //   i=arr[x];
                //   j=arr[x+1]
                //   x++;
                // }
                // else if(arr[x]>i && arr[x]<j) j=arr[x];
                else if(arr[x]>j && j){
                     k=arr[x];
                     break;
                }
                console.log(arr[x],"val",i,j,k)
            }
            console.log("res",i,j,k)
            return (i&&j&&k)? [i,j,k]:[];
}

console.log(find3Numbers([109, 262, 93, 737, 537]))//[ 109, 262, 737 ]
console.log(find3Numbers([830, 309, 726, 559, 713, 585, 693]))//[ 309, 559, 713 ]
console.log(find3Numbers([23805, 24743, 793, 2656, 996, 6077, 4018, 12101]))