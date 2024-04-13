//given an array of integers, split contiguous sub arrays of size M and return the Kth lowest value for each subarray
// you will get an array Ms for which corresponding array of Ks will be provided

function splitAndReturnKthLowest(arr,m,k){
    const result =[];
    
    for(let i=0;i<=arr.length-m;i++){
      const subarray = arr.slice(i,i+m); //get sub array of size m
     
      subarray.sort((a,b)=>{return a-b}); //sort asc      
      result.push(subarray[k-1]); //store Kth lowest ele of subarray in results eg. 2nd lowest ele in the subarray
      // console.log("result..",result);
    }

    return result;
}

console.log(splitAndReturnKthLowest([3,5,8,1,5,2,7,8,9,2,4,5],3,2));

//solution 2

//optimize time complexity by sorting only Kth elements in given subarray
//use queue and stop processing at Kth ele
function findKthLowestValue(subarr,k){
  const queue = [];

  //arr is given sub array - unsorted k=2
  for(let i =0;i<k;i++){// [5,7,1]
    //add elements to Q using values as priority
    queue.push({key : subarr[i],
                pri : subarr[i]});
    queue.sort((a,b)=>{return a.pri-b.pri}); //sort desc [7,5]
  }

  for(let i=k;i<subarr.length;i++){
    if(subarr[i]<queue[queue.length-1].pri){ //gets pri of last ele in Q and compares with each ele //1<5?
        queue.pop();//removes ele with highest priority //remove 7
        //add new ele to Q
        queue.push({key : subarr[i],
                    pri : subarr[i]}); //push 1 to Q. New Q [5,1]
       queue.sort((a,b)=>{return a.pri-b.pri});//sort desc Q[5,1]
      }//if
  }//for

  //Kth value is Kth lowest
  return queue[k-1].pri; //0th ele in queue will always be the Kth lowest as we have shifted the ele with highest pri already
}

function splitAndReturnUsingQueue(arr,m,k){
  const result =[];
  // console.log("input -> ",arr);
  for(let i=0;i<=arr.length-m;i++){
    const subarray = arr.slice(i,i+m); //get sub array of size m
    // console.log("subArray...",subarray);
    const KthValue = findKthLowestValue(subarray,k);
    result.push(KthValue); //store Kth lowest ele of subarray in results eg. 2nd lowest ele in the subarray
    // console.log("result..",result);
  }

  return result;
}

console.log(splitAndReturnUsingQueue([3,5,8,1,5,2,7,8,9,2,4,5],3,2));

//solution 3
//use quick sort alg - pivot
function getKthLowestUsingQuickSort(subarr,lowerIdx,higherIdx,k){
  if(lowerIdx <= higherIdx){
    const pivotIdx=partition(subarr,lowerIdx,higherIdx); //sliding window
    if(pivotIdx===k){
      return subarr[pivotIdx];
    }else if(pivotIdx<k){
      return getKthLowestUsingQuickSort(subarr,pivotIdx+1,higherIdx,k); //move to next ele
    }else{
      return getKthLowestUsingQuickSort(subarr,lowerIdx,pivotIdx-1,k); //move fwd one step
    }//if    
  }//if
  return null;
}

function partition(subarr,lowerIdx,higherIdx){
  const pivotValue = subarr[higherIdx]; //set last ele as pivotval
  let pivotIdx = lowerIdx;

  for (let i=lowerIdx;i<higherIdx;i++){//run for the sliding window b/w low and high idx
      if(subarr[i]<pivotValue){
        // swap
        [subarr[i],subarr[pivotIdx]] = [subarr[pivotIdx],subarr[i]];
        pivotIdx++;
      }//if
  }//for
  
  [subarr[pivotIdx],subarr[higherIdx]] = [subarr[higherIdx],subarr[pivotIdx]];
  return pivotIdx;
}

function splitAndReturnUsingQuickSort(arr,m,k){
  const result =[];
  // console.log("input -> ",arr);
  for(let i=0;i<=arr.length-m;i++){
    const subarray = arr.slice(i,i+m); //get sub array of size m
    // console.log("subArray...",subarray);
    const KthValue = getKthLowestUsingQuickSort(subarray,0,subarray.length-1,k);
    result.push(KthValue); //store Kth lowest ele of subarray in results eg. 2nd lowest ele in the subarray
    // console.log("result..",result);
  }

  return result;
}

console.log(splitAndReturnUsingQuickSort([3,5,8,1,5,2,7,8,9,2,4,5],3,2));