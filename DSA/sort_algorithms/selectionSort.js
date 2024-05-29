
function selectionSort(arr){

  //loop thru the array from i=0
  // set 0 as min
  //loop thru the array & compare j and j+1 
  //if there a value that is less then min, replace index in min
  //at end of loop,if i is not min index then swap arr[i] and arr[min]

  //** downside - o(n) => n^2 , adv - writes only once to the memory in a one iteration*/

  for(let i=0;i<arr.length;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]) min =j;
    }
    if(i!=min) [arr[i],arr[min]]=[arr[min],arr[i]];
  }
  return arr;
}

console.log(selectionSort([34,12,67,121,21]));