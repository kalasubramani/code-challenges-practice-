// Write a function called collectStrings which accepts an 
// object and returns an array of all the values in the object that have a typeof string

function recursionCollectStrings(obj){

  //get each ele in obj
  //check if ele is typeof obj
    //yes - call recursive with ele as input
    // concat vlaues to result array
  //else if ele is typeof String
    //push the value to result array

    let result=[];
    for(let key in obj){
      if( obj[key] instanceof Object){
       result= result.concat(recursionCollectStrings(obj[key])) ;
      }else if(typeof obj[key] === 'string'){
        result.push(obj[key]);
      }
    }
    return result;
}

const obj1 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}
console.log(recursionCollectStrings(obj1));