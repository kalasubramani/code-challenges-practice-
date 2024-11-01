

function max_sum(a, n) {
  // your code here
  //iterate the arr for n times
//   let sum,maxsum;
//   for(let i=0;i<n;i++){
//       // console.log(a, a[i],a[1],a[2],a[3])
//       sum = a.reduce((acc,val,idx)=>{
//         acc += val*idx;
//         return acc;
//       },0)
//       // sum = (a[i]*i) +(a[i+1]* i+1) + (a[2]*i+2) + (a[3]*i+3);
//       a.unshift(a.pop())
//       // console.log(sum)
//       maxsum= !maxsum ?sum: Math.max(maxsum,sum);    
//   }
// return maxsum;

//optimized
if(n===0) return 0;
let sum=0, arrsum=0;

//sum of array
for(let i=0;i<n;i++){
    sum += a[i]*i; //product total
    arrsum +=a[i]; //array total
}

let maxsum = sum;

//calc total for each array rotation
for(let i=1;i<n;i++){
  console.log("sm",sum,arrsum,sum+arrsum);
    sum = sum+arrsum - n*a[n-i];
    maxsum = Math.max(sum,maxsum);
    console.log(a[n-i],n*a[n-i], sum)
}
return maxsum;
}

console.log(max_sum([8, 3, 1, 2],4))//29
console.log(max_sum([1,2,3],3))//8