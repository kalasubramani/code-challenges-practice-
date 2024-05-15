//helper method recursion

function collectOddValues(arr){
  let odds=[];

  function filterOdds(arr){
    //exit cnd
    if(arr.length === 0){
      return;
    }

    if(arr[0]%2!==0){
      odds.push(arr[0]);
    }

    //remove first ele
    arr.shift();
    console.log(arr);
    //call recursive
    filterOdds(arr);
  }

  filterOdds(arr);
  return odds;
}

console.log(collectOddValues([1,4,16,22,5,7,8,9,10]));