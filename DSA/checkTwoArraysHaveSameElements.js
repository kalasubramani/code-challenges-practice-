function checkTwoArraysHaveSameElements(){
  // return JSON.stringify(arr1)===JSON.stringify(arr2);
  const equalValues = (arr1.length === arr2.length) && arr1.every((value, index) => value === arr2[index]);  
  return equalValues;
  // return arr1===arr2;
}

const arr1=[3,4,5], arr2=[3,4,5], arr3=arr1;;
const arr4=[4,5,3]

console.log("checkTwoArraysHaveSameElements ", checkTwoArraysHaveSameElements(arr1,arr2))
console.log("checkTwoArraysHaveSameElements same ref ", checkTwoArraysHaveSameElements(arr1,arr3))
console.log("checkTwoArraysHaveSameElements ", checkTwoArraysHaveSameElements(arr1,arr4))
