
function hash(key,arrayLen){
 let total =0;
 for(char of key){
   let value = char.charCodeAt(0)-96;
   total = (total+value)%arrayLen;   
 }
 return total;
}

console.log(hash("pink",10));
console.log(hash("blue",11));