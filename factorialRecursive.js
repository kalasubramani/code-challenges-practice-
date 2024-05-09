
// define base condition 
// call recursivley with different inputs
//add return

function factorialRecursive(n){

  if(n===1){
    return 1;
  }
  return n*factorialRecursive(n-1);

}
console.log(factorialRecursive(5));