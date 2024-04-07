
function maxChar(str){
  let maxcount =0, maxOcc = '';
//use objects to hold chars and their count
const charMap={};
for (let char of str){
  // if(charMap[char]){//if x not exists, add else inc count
  //   charMap[char] +=1;
  // }else{
  //   charMap[char]=1;
  // }
  charMap[char] = ++charMap[char] || 1;
}

console.log("charMap ",charMap);
// console.log("undefined + 1 ",undefined + 1);


//loop thru obj to find max count
//convert obj to array
// for (const [key,val] of Object.entries(charMap))//entries adds values //destructre to get key and val
// {
//   console.log("key ",key,"val ",val);
//   if(val > maxcount){
//     maxcount=val;
//     maxOcc= key;
//   }
// }//for
for (key in charMap)//entries adds values //destructre to get key and val
{  
  if(charMap[key] > maxcount){
    maxcount=charMap[key];
    maxOcc= key;
  }
}
console.log("maxcount ",maxcount,"maxOcc ",maxOcc);
}

maxChar("asdaaaaaaaaaaaa");