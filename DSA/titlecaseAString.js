
function titleCase(str){
  //  return str.charAt(0).toUpperCase().app;
  //get all words
  const words = str.split(' ');

  const result = [];
  // for(word of words){
  //   result.push(word[0].toUpperCase() + word.slice(1));
  // }
  // return result.join(' ');

 return words.map((word)=>{ return word[0].toUpperCase() + word.slice(1)}).join(' ');
}
console.log(titleCase("sfsfsbf asdfksfkjdsf asfsfkjdsf"));