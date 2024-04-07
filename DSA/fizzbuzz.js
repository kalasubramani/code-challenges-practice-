
//fizzbuzz for n numbers
function fizzbuzz(n){
  for (let i=1;i<=n;i++){
   //check multiple of 3
   if(i%3 === 0 && i%5 ===0){
    console.log("fizzbuzz");
   }else if(i%3 ===0){
    console.log("fizz");
   }else if(i%5 === 0){
    console.log("buzz");
   }else{
    console.log(i);
   }
  }
}

fizzbuzz(20);