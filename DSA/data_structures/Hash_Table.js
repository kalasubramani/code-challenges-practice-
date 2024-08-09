class Hash_Table {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0, PRIME_NUM = 3;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;//gives alphabetical position of the letter
      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    //accepts key,value
    //hash the key
    //store key,value pair in hastable that has a fixed len =5
    //if there is a collision, we resolve it via seperate chaining - where the new hashed value are stored
    //at the same index in a different datastructure
    //here we use nested arrays to store values via seperate chaining
    let index = this._hash(key);
    if(!this.keyMap[index]){//if there os no ele at index 
      this.keyMap[index]=[];
    }
    this.keyMap[index].push([key,value]);
  }
  get(key) {
    //accepts a key
    //hash the key to get index
    //go to index and return the value
    //if there is a nested list, retrieve the right value
    let index = this._hash(key);
    if(this.keyMap[index]){
       //loop over - seperate chaining
       for(let i=0;i<this.keyMap[index].length;i++){
        if(this.keyMap[index][i][0] === key)//check if each sub array item equals the key
          return this.keyMap[index][i][1]; //return the corres. value
       }
    }
    return undefined;
  }

  //collect the values of all elements in hash table
  values(){
    //make an array to store values
    //loop over keymap
      //check if there are values stored as seperate chaining
        //loop thru each item of seperate chain at i
          //handle duplicate values 
            //if the value exists in array , skip it
            //else push values to array
    //return array

    let values_list = [];
    for(let i=0;i<this.keyMap.length;i++){
      if(this.keyMap[i]){
        //loop thru seperate chaining items
        for(let j=0;j<this.keyMap[i].length;j++){
          if(!values_list.includes(this.keyMap[i][j][1]))
            values_list.push(this.keyMap[i][j][1]); // return the values
        }
      }
    }
    // console.log(values_list);
    return values_list;
  }

    //collect the keys of all elements in hash table
    keys(){
      let keys_list = [];
      for(let i=0;i<this.keyMap.length;i++){
        if(this.keyMap[i]){
          //loop thru seperate chaining items
          for(let j=0;j<this.keyMap[i].length;j++){
            if(!keys_list.includes(this.keyMap[i][j][0]))
              keys_list.push(this.keyMap[i][j][0]); // return the values
          }
        }
      }
      return keys_list;
    }
}
let hashtable = new Hash_Table(17);
hashtable.set("Grey"," #808080");
hashtable.set("Silver","#c0c0c0");
hashtable.set("White","#ffffff");
hashtable.set("Indian Red","#cd5c5c");
hashtable.set("Orange Red","#ff4500");
hashtable.set("Chocolate","#d2691e");
hashtable.set("Sea Shell","#fff5ee");
hashtable.set("Goldenrod","#daa520");
//add in duplicates
hashtable.set("Yellow","#ffff00");
hashtable.set("Violet","#ffff00");
hashtable.set("Magenta","#ffff00");
hashtable.set("Magenta","#ffff00");
hashtable.set("Magenta","#ffff00");
// console.log(hashtable);  
// console.log(hashtable.get("Indian Red"));
// console.log(hashtable.get("maroon"));
console.log(hashtable.values());
hashtable.keys().forEach((key)=>console.log(hashtable.get(key)))
console.log(hashtable.keys());