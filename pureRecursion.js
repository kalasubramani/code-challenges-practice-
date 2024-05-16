
function pureRecursion(arr){
   let odds=[];

   if(arr.length===0){
    return odds;
   }

   if(arr[0]%2 !==0){
      odds.push(arr[0]);
   }

   odds = odds.concat(pureRecursion(arr.slice(1)));
   return odds;
}

console.log(pureRecursion([1,4,16,22,5,7,8,9,10]));