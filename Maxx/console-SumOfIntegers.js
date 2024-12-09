

//a console app to accept a list of int and print sum of ints

const { Console } = require('console');
const interface = require('readline');

function findSum(str){
    //boundary conditions
  //check if arr is empty, return error msg
  //if arr length =1, return the ele
  //parse input string to array 
  // then parse the array ele as int as store it in same array
  //have a variable to hold sum=0
  //iterate thru the arr
    //sum += arr [i]

  // return sum

  if(str.length===0) return "Input length is 0";
  if(str.length===1) return `Sum: ${str}`;

  const numbers = str.split(' ').map(Number);
  console.log("numbers",numbers);
  const sum= numbers.reduce((acc,currVal)=>{
                     acc +=currVal;
                     return acc;
                  },0)
  console.log("Sum: ",sum);
}

const inputStream = interface.createInterface({
                                          input:process.stdin,
                                          output:process.stdout
                                        });
inputStream.question("Enter the numbers to add [seperated by space]: ",(input)=>{
                                              const message = findSum(input);
                                              message?.length && console.log(message);
                                              inputStream.close();
                                          });

