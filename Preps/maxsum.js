

function max_sum(a, n) {
  // your code here
  //iterate the arr for n times
  let sum,maxsum;
  for(let i=0;i<n;i++){
      // console.log(a, a[i],a[1],a[2],a[3])
      sum = a.reduce((acc,val,idx)=>{
        acc += val*idx;
        return acc;
      },0)
      // sum = (a[i]*i) +(a[i+1]* i+1) + (a[2]*i+2) + (a[3]*i+3);
      a.unshift(a.pop())
      // console.log(sum)
      maxsum= !maxsum ?sum: Math.max(maxsum,sum);    
  }
return maxsum;
}

console.log(max_sum([8, 3, 1, 2],4))
// console.log(max_sum([1,2,3],3))