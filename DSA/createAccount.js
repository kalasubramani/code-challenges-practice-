
// create account if not already exist

const Bank = new Map() ;
// const account = {
//   balance:0
// }

function createAcount(input){
  const results = [];

  //  Bank.set("a2",{balance:450,finInd:0});
  // Bank.set("343499",0);
 
  for(let i=0;i<input.length;i++){      
    switch(input[i].action){
      case "CREATE":
      results.push(newAccountCreation(input[i].accNum));
      break;

    case "DEPOSIT":
      results.push(updateAvaialbleBalance(input[i]));
      break;
    
    case "TRANSFER":
      results.push(transferMoney(input[i]));
      break;
    
    case "TOP_ACTIVITY":
      results.push(returnTopNActiveAccounts(input[i].numAcc));
    }//switch
  }//for
    console.log(results);
  }

function newAccountCreation(accNum){
  //if accNum already exist , return false
  if(Bank.has(accNum)){
    return false;       
  }
  //create a new account,return true
  Bank.set(accNum,{balance:0,finInd:0});
  return true;
}

function updateAvaialbleBalance(account){  
  //if acc doesnot exist return -1
  if(!Bank.has(account.accNum)){
    return -1;
  }  
 
  //add new amount to available bal 
  let accountData = Bank.get(account.accNum);
   accountData.balance += account.amount;
   accountData.finInd += account.amount;
  Bank.set(account.accNum,accountData);
  
   return accountData.balance;
}

function transferMoney(accountData){
  //if any of the ac does not exist return -1
  //if both ac are same return -1
  //if from-ac has insufficient funds return -1
  //on successful update return bal of from-ac

  //check if both ac exists
  const fromAccount = accountData.accNum, toAccount=accountData.to_accNum;
  if(!Bank.has(fromAccount) || !Bank.has(toAccount)){
    return -1;
  }

  //check if both ac are same
  if(fromAccount === toAccount){
    return -1;
  }

  //check for sufficient funds in from-ac
  let fromAccountData = Bank.get(fromAccount);
  if( fromAccountData.balance< accountData.amount){
    return -1;
  }

  //deduct from-ac
  fromAccountData.balance -= accountData.amount;
  fromAccountData.finInd +=accountData.amount;
  Bank.set(fromAccount,fromAccountData);

  //credit to-acc
  let toAccountData= Bank.get(toAccount);
  toAccountData.balance += accountData.amount;
  toAccountData.finInd += accountData.amount;
  Bank.set(toAccount,toAccountData);

  //return bal in from-ac
  return Bank.get(fromAccount).balance;
}

//[account(finInd),account(finInd)]
function returnTopNActiveAccounts(n){  
   let results =[],output=[];

   //sort the results in desc
    results=[...Bank].sort((a,b)=>{
     return b[1].finInd-a[1].finInd});
    
    // if(n>results.length){//if n is greater than the results , print all the results
    //   n=results.length;
    // }
   output= results.slice(0,n).map((a)=>{
      return a[0] + "("+ a[1].finInd +")";
    })
    console.log("output ",output);
    //form output string and add it to array
    // for(let i=0;i<n;i++){
    //   output.push(results[i][0] + "("+ results[i][1].finInd +")")
    // }

    return output;
}

const input=[
  {
    "action" :"CREATE",
     "accNum":"a1"
  },
  {
    "action" :"CREATE",
     "accNum":"a1"
  },
  {
    "action" :"CREATE",
     "accNum":"a2"
  },
  {
    "action" :"DEPOSIT",
     "accNum":"non_existing",
     "amount" : 2700
  },
  {
    "action" :"DEPOSIT",
     "accNum":"a1",
     "amount" : 2700
  },
  {
    "action": "TRANSFER",
    "accNum": "a1",
    "to_accNum": "a2",
    "amount": 2701
  },
  {
    "action": "TRANSFER",
    "accNum": "a1",
    "to_accNum": "a2",
    "amount": 200
  },
  {
    "action": "TRANSFER",
    "accNum": "a1",
    "to_accNum": "a2",
    "amount": 2500
  },
  {
    "action": "DEPOSIT",
    "accNum": "a2",
    "amount": 300
  },
  {
    "action" :"CREATE",
     "accNum":"a3"
  },
  {
    "action": "DEPOSIT",
    "accNum": "a3",
    "amount": 4000
  },
  {
    "action": "TOP_ACTIVITY",
    "numAcc": 3
  },
  {
    "action": "DEPOSIT",
    "accNum": "a2",
    "amount": 1000
  },
  {
    "action": "TOP_ACTIVITY",
    "numAcc": 2
  },
  {
    "action": "TOP_ACTIVITY",
    "numAcc": 5
  }
]

createAcount(input);
