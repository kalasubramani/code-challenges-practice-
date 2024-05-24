//given a long string and a sub string to search, 
//find the number of occurences of the substring

function stringSearch(str,value){
  //loop thru long str
  //loop thru lookup str
  //if chars dont match break;
  //else continue
  //if inner loop reaches end of lookup string, increment the occurence count
  let occurences=0;
   for(let i=0;i<str.length;i++){
    for(let j=0;j<value.length;j++){ //  console.log(i,str[i], j,value[j])
      if(str[i+j]!==value[j]){        
       break;
      }
      if(j ===value.length-1) occurences++;
    }
   }
   return occurences;
}

 console.log(stringSearch("hanburger haha happy","ha"));
console.log(stringSearch("hanburger haha happy","he"));