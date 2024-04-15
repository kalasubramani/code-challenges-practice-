//given an array of integers, split contiguous sub arrays of size M and return the Kth lowest value for each subarray
// you will get an array Ms for which corresponding array of Ks will be provided

// The time complexity of this approach is- O(N+klogN) as we are building a 
// min-heap of n elements which takes O(N) time and extracting minimum elements 
// for k times, where extracting(popping) a minimum from the heap takes O(logN) 
// time.
// 1. Brute Force
// The naïve approach to solving the problem would be to:
// sort the array in increasing order and then,
// pick the kth element of the array
// However, sorting the array would take O(n log(n)) worst-case time complexity here, 
// where n is the size of the array.
// Time/Space Complexity
// Time Complexity: O(n log(n)), where n is the number of elements in nums.
// Space Complexity: O(1), no additional data structure used

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
// 2. Heap Approach
// By using the brute force sorting technique, we are unnecessarily sorting the entire array of n elements. Since we are interested only in the kth element in sorted order, we could possibly restrict the sorting/re-arrangement to k elements, which would limit the sorted array to a length of k. The heap data structure helps us to achieve this optimization.

// Heap Approach Steps

// Create a max heap of size k.
// Insert each element into the heap - with each insert, we “heapify”, which means we re-sort the elements to satisfy the heap property.
// If the size of the heap exceeds k, pop the top element of the heap.
// After traversing all the elements of the array, return the top element of the heap.

//optimize time complexity by sorting only Kth elements in given subarray
//use queue and stop processing at Kth ele
// Replacing the top element of the heap of size k takes logk time. So in the worst case, it would be done n times and effectively, 
// the time taken would be O(nlogk).
// Time/Space Complexity
// Time Complexity: O(n log(k)), where n is the number of elements in nums and k is the heap size.
// Space Complexity: O(k), for the heap.
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
//use quick select alg - pivot
// Quickselect Approach
// Quickselect algorithm is an algorithm quite similar to quicksort algorithm where you repeatedly partition a given 
// array based on a pivot element, repeating the process until you have a subarray of length of one. 
// Elements less than the pivot are moved to the left, and elements greater than the pivot are moved to 
// the right. After each partition step, the pivot element is at the correct position in the ordered list. 
// Since we are interested in the kth element, we would have derived that when the pivot element index in the 
// array becomes k-1. If the pivot index is greater than target index k-1, continue partitioning on the left side; 
// if the pivot index is smaller than target index k-1, then partition on the right side. In a particular iteration, if 
// the pivot element index becomes k-1, we can return the pivot element itself.
// The average case time complexity of quickselect algorithm is O(n). However, 
// in the worst case, the time complexity is O(n²) — this could be the case when you have lot of repeated elements.
function getKthLowestUsingQuickSelect(subarr,lowerIdx,higherIdx,k){
  if(lowerIdx <= higherIdx){
    const pivotIdx=partition(subarr,lowerIdx,higherIdx); //sliding window
    if(pivotIdx===k){
      return subarr[pivotIdx];
    }else if(k<pivotIdx){
      return getKthLowestUsingQuickSelect(subarr,pivotIdx-1,higherIdx,k); //move to next ele
    }else{
      return getKthLowestUsingQuickSelect(subarr,lowerIdx,pivotIdx+1,k); //move fwd one step
    }//if    
  }//if
  return null;
}

function partition(subarr,lowerIdx,higherIdx){
  // const pivotValue = subarr[higherIdx]; //set last ele as pivotval
  // let pivotIdx = lowerIdx;
  let pivotIdx = Math.floor(Math.random() * (higherIdx - lowerIdx + 1) + lowerIdx);
  const pivotValue = subarr[pivotIdx];

  [subarr[pivotIdx],subarr[higherIdx]] = [subarr[higherIdx],subarr[pivotIdx]];
  let i = lowerIdx;
  for (let j=lowerIdx;j<higherIdx;j++){//run for the sliding window b/w low and high idx
      if(subarr[j]<pivotValue){
        // swap
        [subarr[i],subarr[j]] = [subarr[j],subarr[i]];
        i++;
      }//if
  }//for
  
  [subarr[higherIdx], subarr[i]] = [subarr[i], subarr[higherIdx]];
 
  return i;
}

function splitAndReturnUsingQuickSelect(arr,m,k){
  const result =[];
  console.log("input -> ",arr);
  for(let i=0;i<=arr.length-m;i++){
    const subarray = arr.slice(i,i+m); //get sub array of size m
    // console.log("subArray...",subarray);
    const KthValue = getKthLowestUsingQuickSelect(subarray,0,subarray.length-1,k);
    result.push(KthValue); //store Kth lowest ele of subarray in results eg. 2nd lowest ele in the subarray
    // console.log("result..",result);
  }
  
  return result;
  // return getKthLowestUsingQuickSelect(arr,0,(arr.length)-1,k);
}

console.log("quick select", splitAndReturnUsingQuickSelect([3,5,8,1,5,2,7,8,9,2,4,5],3,2));