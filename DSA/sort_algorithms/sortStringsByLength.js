

function sortStringsByLength(){
  console.log(["learning","data","structures"].sort(compareByLength));
}

function compareByLength(a,b){
  return a.length-b.length;
}

sortStringsByLength();