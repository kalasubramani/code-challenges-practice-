function anagram(s1, s2){ // 3* o(n) ==. 2 o9n)
  let result = false, s1Chars={},s2Chars={};
  //verify if strings are of same length
  //loop over s1 and create an obj with chars and their freq o(n)
  //loop over s2, check if s2 has same char o(n)
  //if the char exists, reduce the freq by one o(1)
  //loop over s1obj and see if all freq are zero => means s2 is an anagram of s2 o(n) - not required, can be validated in prev for()

  if(s1.length !== s2.length){
    return result;
  }

  //let str1 = [...s1]; // this is o(n) as it iterates over each ele in array
  for(let i=0;i< s1.length;i++){
    let char = s1[i]; //o(1)
    s1Chars[char]=s1Chars[char]? (s1Chars[char]+1):1;
  }
  console.log(s1Chars);

  // let str2 = [...s2];
  for(let i=0;i< s2.length;i++){
    let char = s2[i];
    // if(char in s1Chars && s1Chars[char] >0){
      if(s1Chars[char]){
      s1Chars[char]--; // reduce freq
    }else{
      return result;
    }
  }
  console.log("s1Chars after lookup",s1Chars);

  // for(char in s1Chars){
  //   if(s1Chars[char]!==0){
  //     return result;
  //   }
  // }
  result=true;
  return result;
}
console.log(anagram("te  xx","x txe"));
console.log(anagram("always","waysal"));