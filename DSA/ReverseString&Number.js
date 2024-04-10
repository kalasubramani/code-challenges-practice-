

function reverse(str){
  let reversed='';

  for (let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

function reverse1(str){
  const strToArray = str.split('');//splits each char into one array ele
  strToArray.reverse();//use builtin fn
  return strToArray.join(''); //no concat char provided - so it places contents of array into a string
}

function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed)*Math.sign(n);
}

// console.log(reverse("Hello"));
console.log("reverse1 ",reverse1("Hello"));
console.log("reverseInt ",reverseInt(-4565));

//two pointer technique
function twoPointers(str){
  let chars = str.split('');
  let start =0, end = chars.length-1;

  while (start < end){
    //swap start and end chars
    swapchars(chars,start,end);
    start +=1;
    end -=1;
  }

  return chars.join('');
}

function swapchars(chars,start,end){
  //desctructure and swap ele
  [chars[start],chars[end]]=[chars[end],chars[start]];
}

console.log("twoPointers ",twoPointers("malayalam"));