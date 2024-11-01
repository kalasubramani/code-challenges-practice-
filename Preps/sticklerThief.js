

function sticklerThief(arr){
  // code here
        //check if n is within 1 to 10^5, else throw error
        //check if arr ele is within 1 to 10^4, else throw error
        //if len ==1, return arr[0]
        //if len==2, return max(arr[0],arr[1])
        //use dynamic programmin to keep a runnning sum of the loot
        //no two consecutive houses can be looted but it is ok to skip more than one house
        //iterate thru each ele of array
            //find sum of curr house + loot-2 ( there 's a change curr-1 may be skipped)
            //find max of currsum, loot-1
        //return max sum
        let n = arr.length;
        if(!(n>=1 &&n<=Math.pow(10,5))) throw new Error("Length out of bounds");
        if(n===1) return arr[0];
        if(n===2) return Math.max(arr[0],arr[1]);

        let loot =[];
        loot[0]=arr[0];
        loot[1]= Math.max(arr[0],arr[1]);
        for(let i=2;i<arr.length;i++){
          loot[i] = Math.max(loot[i-1],arr[i]+loot[i-2]);
        }

        console.log(loot);
        return loot[n-1];
}

console.log(sticklerThief([6, 7, 1, 30, 8, 2, 4]));